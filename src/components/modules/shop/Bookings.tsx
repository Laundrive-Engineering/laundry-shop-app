import DataTable from "@/components/elements/Table";
import {BookingData} from "@/components/modules/interface";
import {Td} from "@chakra-ui/react";
import React from "react";
import * as Crypto from "crypto";

const Bookings: React.FC = () => {

    const tableHeaders: string[] = [
        'Booking ID',
        'Customer',
        'Assigned Branch',
        'Date and time',
        'Status',
        "",
    ];
    const tableData: BookingData[] = [
        {
            id: 12345,
            bookingNum: Crypto.createHash('sha256').digest('hex').substring(0, 7),
            customerName: "Harrison Ford",
            assignedBranch: "U-Wash Escario",
            bookingDate: "01/01/2023 00:00:00",
            status: "Completed"
        },
    ];

    return (
        <div>
            <DataTable headers={tableHeaders}
                       values={tableData}
                       onSetupDataRow={(bookingData) => {
                           let fields: JSX.Element[] = [];
                           Object.entries(bookingData as BookingData).map(([key, value], index) => {
                               if (key !== 'id') {
                                   fields.push(<Td key={index}>{value}</Td>)
                               }
                           })
                           return fields
                       }}/>
        </div>
    );
};

export default Bookings;