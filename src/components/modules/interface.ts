export interface ShopData {
  id: number;
  shopName: string;
  phone: string;
  email: string;
  owner: string;
  password: string;
}

export interface TableData {
  id: number;
  shop: string;
  orderNumber: number;
  pickupFrom: string;
  deliverTo: string;
  service: string;
  qty: [number];
  price: [string];
  total: string;
  status: string;
  date: string;
  time: string;
}
