export interface BaseData {
    id: number;
}

export interface ShopData extends BaseData {
    shopName: string;
    phone: string;
    email: string;
    owner: string;
    password: string;
}

export interface BookingData extends BaseData {
    bookingNum: string;
    customerName: string;
    assignedBranch: string;
    bookingDate: string;
    status: string;
}