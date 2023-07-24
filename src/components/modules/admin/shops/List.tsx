import DataTable from '@/components/elements/Table';
import { ShopData } from '../../interface';

import AddShop from './partials/Add';
import React from 'react';

const List: React.FC = () => {
  const tableHeaders: string[] = [
    'Shop Name',
    'Phone',
    'Email',
    'Owner',
    'Password',
    'Action',
  ];
  const tableData: ShopData[] = [
    {
      id: 1,
      shopName: 'Washy Laundry',
      phone: '+639177154388',
      email: 'johndoe@example.com',
      owner: 'John Doe',
      password: 'password12345',
    },
    {
      id: 2,
      shopName: 'U-Wash Laundry',
      phone: '+639177154388',
      email: 'johndoe@example.com',
      owner: 'Johnny Appleseed',
      password: 'password09887',
    },
  ];

  return (
    <div>
      <AddShop />
      <DataTable
        headers={tableHeaders}
        values={tableData}
        onEditRowHandler={(data) => {}}
        onDeleteRowHandler={(data) => {}}
      />
    </div>
  );
};

export default List;
