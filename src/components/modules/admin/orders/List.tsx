import CustomTable from '@/components/elements/Table';
import { TableData } from '../../interface';

import { useEffect, useState } from 'react';
import useFetchApiData from '@/hooks/useFetchData';

const List: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const apiUrl = `https://app.ecwid.com/api/v3/83444553/orders?offset=${
    (currentPage - 1) * itemsPerPage
  }&limit=${itemsPerPage}`;

  const { data, loading, error } = useFetchApiData(apiUrl);

  // Access the properties
  const { items, total } = data;
  const [serializeData, setSerializeData] = useState<TableData[]>([]);

  useEffect(() => {
    console.log('items-------', items);
    const newData: TableData[] = items.map((item) => {
      const from = `${item.shippingPerson.street}, ${item.shippingPerson.city}, ${item.shippingPerson.stateOrProvinceName}`;
      const unixTimestamp = item.updateTimestamp;
      const date = new Date(unixTimestamp * 1000);

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;

      const quantity = item.items.map((itm: any) => {
        return itm.quantity;
      });

      const price = item.items.map((itm: any) => {
        return `₱${itm.quantity * itm.price}`;
      });

      return {
        id: item.id,
        shop: item.items[0].name,
        orderNumber: item.orderNumber,
        pickupFrom: from,
        deliverTo: item.items[0].name,
        service: 'TBD',
        qty: quantity,
        price: price,
        total: `₱${item.total}`,
        status: item.paymentStatus,
        date: item.updateDate.substring(0, 19),
        time: `${formattedHours}:${minutes
          .toString()
          .padStart(2, '0')} ${amOrPm}`,
      };
    });
    setSerializeData(newData);
  }, [items]);

  const tableHeaders: string[] = [
    'ID',
    'Shop Name',
    'Order Number',
    'Pick-up From',
    'Deliver To',
    'Service',
    'Qty',
    'Price',
    'Order Total',
    'Status',
    'Date',
    'Time',
  ];

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ width: '100%' }}>
      <CustomTable
        headers={tableHeaders}
        data={serializeData}
        isLoading={loading}
        total={total}
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
