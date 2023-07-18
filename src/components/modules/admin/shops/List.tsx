import CustomTable from '@/components/elements/Table';
import { ShopData } from '../../interface';

import AddShop from './partials/Add';

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
  ];

  return (
    <div>
      <AddShop />
      <CustomTable
        headers={tableHeaders}
        data={tableData}
        handleEdit={(data) => {
          console.log('data', data);
        }}
        handleDelete={(data) => {
          console.log('data', data);
        }}
      />
    </div>
  );
};

export default List;
