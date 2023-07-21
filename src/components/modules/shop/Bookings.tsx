import DataTable from '@/components/elements/Table';
import { BookingData } from '@/components/modules/interface';
import React from 'react';
import * as Crypto from 'crypto';

const Bookings: React.FC = () => {
  const tableHeaders: string[] = [
    'Booking ID',
    'Customer',
    'Assigned Branch',
    'Date and time',
    'Status',
    '',
  ];
  const tableData: BookingData[] = [
    {
      id: 12345,
      bookingNum: Crypto.createHash('sha256').digest('hex').substring(0, 7),
      customerName: 'Harrison Ford',
      assignedBranch: 'U-Wash Escario',
      bookingDate: '01/01/2023 00:00:00',
      status: 'Completed',
    },
  ];

  return (
    <div>
      <DataTable headers={tableHeaders} values={tableData} />
    </div>
  );
};

export default Bookings;
