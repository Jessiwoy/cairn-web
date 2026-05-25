import type { Product, ProductCategory, ProductSort } from "@/types/product";

export type ProductFilterState = {
  category?: ProductCategory;
  maxPrice?: number;
  query?: string;
  sort: ProductSort;
  stock?: "available";
};

export function filterProducts(products: Product[], filters: ProductFilterState) {
  const normalizedQuery = filters.query?.trim().toLowerCase();

  return products
    .filter((product) => {
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      if (filters.stock === "available" && product.stockStatus === "out_of_stock") {
        return false;
      }

      if (filters.maxPrice && product.price > filters.maxPrice) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchable = [
        product.title,
        product.name,
        product.brand,
        product.subcategory,
        product.category,
        ...product.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    })
    .sort((first, second) => sortProducts(first, second, filters.sort));
}

function sortProducts(first: Product, second: Product, sort: ProductSort) {
  if (sort === "price-asc") {
    return first.price - second.price;
  }

  if (sort === "price-desc") {
    return second.price - first.price;
  }

  if (sort === "rating") {
    return second.rating - first.rating;
  }

  return Number(second.featured) - Number(first.featured);
}
