import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "@/types/product";

export type WishlistItem = {
  image: string;
  name: string;
  price: number;
  productId: string;
  slug: string;
  subcategory: string;
};

type WishlistState = {
  itemCount: number;
  items: WishlistItem[];
  isFavorite: (productId: string) => boolean;
  removeItem: (productId: string) => void;
  toggleItem: (product: Product) => void;
};

function calculateItemCount(items: WishlistItem[]) {
  return items.length;
}

function withDerivedState(items: WishlistItem[]) {
  return {
    itemCount: calculateItemCount(items),
    items,
  };
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      isFavorite: (productId) => get().items.some((item) => item.productId === productId),
      itemCount: 0,
      items: [],
      removeItem: (productId) =>
        set((state) =>
          withDerivedState(state.items.filter((item) => item.productId !== productId)),
        ),
      toggleItem: (product) =>
        set((state) => {
          const isFavorite = state.items.some((item) => item.productId === product.id);

          if (isFavorite) {
            return withDerivedState(
              state.items.filter((item) => item.productId !== product.id),
            );
          }

          return withDerivedState([
            ...state.items,
            {
              image: product.images[0],
              name: product.name,
              price: product.price,
              productId: product.id,
              slug: product.slug,
              subcategory: product.subcategory,
            },
          ]);
        }),
    }),
    {
      name: "cairn-wishlist",
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
