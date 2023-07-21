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

export interface BookingData extends BaseTableData {
  bookingNum: string;
  customerName: string;
  assignedBranch: string;
  bookingDate: string;
  status: string;
}
