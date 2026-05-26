import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product, ProductVariant } from "@/types/product";

export type CartItem = {
  image: string;
  name: string;
  price: number;
  productId: string;
  quantity: number;
  slug: string;
  stock: number;
  subcategory: string;
  variant?: {
    color?: string;
    id: string;
    size?: string;
    sku: string;
  };
};

type AddCartItemInput = {
  product: Product;
  quantity: number;
  variant?: ProductVariant;
};

type CartState = {
  addItem: (input: AddCartItemInput) => void;
  clearCart: () => void;
  itemCount: number;
  items: CartItem[];
  removeItem: (itemKey: string) => void;
  subtotal: number;
  updateQuantity: (itemKey: string, quantity: number) => void;
};

function getItemKey(productId: string, variantId?: string) {
  return `${productId}:${variantId ?? "default"}`;
}

function normalizeQuantity(quantity: number, stock: number) {
  return Math.max(1, Math.min(quantity, Math.max(1, stock)));
}

function calculateItemCount(items: CartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

function calculateSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function withDerivedState(items: CartItem[]) {
  return {
    itemCount: calculateItemCount(items),
    items,
    subtotal: calculateSubtotal(items),
  };
}

export function getCartItemKey(item: Pick<CartItem, "productId" | "variant">) {
  return getItemKey(item.productId, item.variant?.id);
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      addItem: ({ product, quantity, variant }) =>
        set((state) => {
          const itemKey = getItemKey(product.id, variant?.id);
          const stock = variant?.stock ?? (product.stockStatus === "low_stock" ? 4 : 10);
          const existingItem = state.items.find((item) => getCartItemKey(item) === itemKey);

          if (existingItem) {
            const items = state.items.map((item) =>
              getCartItemKey(item) === itemKey
                ? {
                    ...item,
                    quantity: normalizeQuantity(item.quantity + quantity, item.stock),
                  }
                : item,
            );

            return withDerivedState(items);
          }

          const nextItem: CartItem = {
            image: product.images[0],
            name: product.name,
            price: product.price,
            productId: product.id,
            quantity: normalizeQuantity(quantity, stock),
            slug: product.slug,
            stock,
            subcategory: product.subcategory,
            variant: variant
              ? {
                  color: variant.color,
                  id: variant.id,
                  size: variant.size,
                  sku: variant.sku,
                }
              : undefined,
          };

          return withDerivedState([...state.items, nextItem]);
        }),
      clearCart: () => set(withDerivedState([])),
      itemCount: 0,
      items: [],
      removeItem: (itemKey) =>
        set((state) =>
          withDerivedState(state.items.filter((item) => getCartItemKey(item) !== itemKey)),
        ),
      subtotal: 0,
      updateQuantity: (itemKey, quantity) =>
        set((state) => {
          const items = state.items.map((item) =>
            getCartItemKey(item) === itemKey
              ? { ...item, quantity: normalizeQuantity(quantity, item.stock) }
              : item,
          );

          return withDerivedState(items);
        }),
    }),
    {
      name: "cairn-cart",
      partialize: (state) => ({ items: state.items }),
      merge: (persistedState, currentState) => {
        const persistedItems =
          typeof persistedState === "object" &&
          persistedState !== null &&
          "items" in persistedState &&
          Array.isArray(persistedState.items)
            ? persistedState.items
            : [];

        return {
          ...currentState,
          ...withDerivedState(persistedItems),
        };
      },
    },
  ),
);
