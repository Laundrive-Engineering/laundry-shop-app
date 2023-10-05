export interface BaseTableData {
  id: number;
}

export interface ShopData extends BaseTableData {
  shopName: string;
  phone: string;
  email: string;
  owner: string;
  password: string;
}

export interface TableData extends BaseTableData {
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
