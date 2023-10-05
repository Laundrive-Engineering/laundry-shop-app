import CustomTable from '@/components/elements/Table';
import { ShopData } from '../../interface';

import AddShop from './partials/Add';
import React, { useEffect, useState } from 'react';
import useFetchApiData from '@/hooks/useFetchData';

const List: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const apiUrl = `https://app.ecwid.com/api/v3/83444553/orders?offset=${
  //   (currentPage - 1) * itemsPerPage
  // }&limit=${itemsPerPage}`;

  // const { data, loading, error } = useFetchApiData(apiUrl);

  // // Access the properties
  // const { items, total } = data;

  // useEffect(() => {
  //   console.log('items-------', items);
  // }, [items]);
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
      <CustomTable
        headers={tableHeaders}
        values={tableData}
        onEditRowHandler={(data) => {}}
        onDeleteRowHandler={(data) => {}}
        isLoading={false}
        total={10}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handleCurrentPage={(currentPage) => {
          setCurrentPage(currentPage);
        }}
        handleItemsPerPage={(perPage) => {
          setItemsPerPage(perPage);
        }}
      />
    </div>
  );
};

export default List;
