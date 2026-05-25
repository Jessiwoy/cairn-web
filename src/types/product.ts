export type ProductCategory =
  | "hiking"
  | "camping"
  | "trekking"
  | "bushcraft"
  | "apparel"
  | "footwear"
  | "packs"
  | "gear"
  | "accessories";

export type StockStatus = "in_stock" | "low_stock" | "out_of_stock";

export type ProductVariant = {
  color?: string;
  id: string;
  size?: string;
  sku: string;
  stock: number;
};

export type Product = {
  brand: string;
  category: ProductCategory;
  categoryId: string;
  collection?: string;
  compareAtPrice?: number;
  description: string;
  featured: boolean;
  hasVariants: boolean;
  id: string;
  images: string[];
  materials: string[];
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  slug: string;
  stockStatus: StockStatus;
  subcategory: string;
  tags: string[];
  technicalDetails: string[];
  title: string;
  variants: ProductVariant[];
};

export type Category = {
  description: string;
  id: string;
  name: string;
  slug: ProductCategory;
};

export type ProductSort = "featured" | "price-asc" | "price-desc" | "rating";
