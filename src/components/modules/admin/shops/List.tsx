import {Td, Tr} from '@chakra-ui/react';
import DataTable from '@/components/elements/Table';
import {ShopData} from '../../interface';

import AddShop from './partials/Add';
import React from "react";

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
            <AddShop/>
            <DataTable
                headers={tableHeaders}
                values={tableData}
                onSetupDataRow={(shopData) => {
                    let fields: JSX.Element[] = [];
                    Object.entries(shopData as ShopData).map(([key, value], index) => {
                        if (key !== 'id') {
                            fields.push(<Td key={index}>{value}</Td>)
                        }
                    })
                    return fields
                }}
            />
        </div>
    );
};

export default List;