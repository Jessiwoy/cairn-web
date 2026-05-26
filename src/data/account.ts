import type { AccountAddress, AccountOrder, AccountUser } from "@/types/account";

export const accountUser: AccountUser = {
  createdAt: "2025-09-18",
  email: "marina.alves@example.com",
  id: "user-marina-alves",
  name: "Marina Alves",
  phone: "(41) 98842-1930",
};

export const accountAddresses: AccountAddress[] = [
  {
    city: "Curitiba",
    id: "addr-home",
    label: "Entrega principal",
    line1: "Rua Visconde de Nacar, 1240",
    line2: "Apto 802",
    state: "PR",
    zipCode: "80410-201",
  },
];

export const accountOrders: AccountOrder[] = [
  {
    createdAt: "2026-05-24",
    deliveryEstimate: "Previsao para 29/05/2026",
    id: "CAIRN-734118",
    items: [
      {
        image: "copper",
        name: "Bota Ridge",
        price: 1190,
        productId: "prod-ridge-approach-boot",
        quantity: 1,
        slug: "ridge-approach-boot",
        variantLabel: "Cobre / 42",
      },
    ],
    status: "shipped",
    total: 1190,
  },
  {
    createdAt: "2026-05-12",
    deliveryEstimate: "Entregue em 17/05/2026",
    id: "CAIRN-582914",
    items: [
      {
        image: "forest",
        name: "Mochila Carga Alpina 55",
        price: 1640,
        productId: "prod-alpine-load-55",
        quantity: 1,
        slug: "alpine-load-55",
        variantLabel: "Verde floresta / M/L",
      },
      {
        image: "stone",
        name: "Garrafa Termica",
        price: 240,
        productId: "prod-thermal-bottle",
        quantity: 1,
        slug: "thermal-bottle",
        variantLabel: "Areia",
      },
    ],
    status: "delivered",
    total: 1880,
  },
  {
    createdAt: "2026-04-03",
    deliveryEstimate: "Entregue em 09/04/2026",
    id: "CAIRN-419206",
    items: [
      {
        image: "black",
        name: "Jaqueta Stormline",
        price: 1280,
        productId: "prod-stormline-shell",
        quantity: 1,
        slug: "stormline-shell",
        variantLabel: "Preto / M",
      },
    ],
    status: "delivered",
    total: 1280,
  },
];
