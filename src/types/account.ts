export type AccountAddress = {
  city: string;
  id: string;
  label: string;
  line1: string;
  line2?: string;
  state: string;
  zipCode: string;
};

export type AccountUser = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  phone: string;
};

export type OrderStatus = "processing" | "shipped" | "delivered";

export type AccountOrderItem = {
  image: string;
  name: string;
  price: number;
  productId: string;
  quantity: number;
  slug: string;
  variantLabel?: string;
};

export type AccountOrder = {
  createdAt: string;
  deliveryEstimate: string;
  id: string;
  items: AccountOrderItem[];
  status: OrderStatus;
  total: number;
};
