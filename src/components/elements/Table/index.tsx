import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import {FaEdit, FaTrash} from 'react-icons/fa';

import {BaseData, ShopData} from '@/components/modules/interface';
import Any = jasmine.Any;
import {JSXElement} from "@babel/types";

type Props = {
    headers: string[];
    data: ShopData[];
    // eslint-disable-next-line no-unused-vars
    handleEdit?: (data: ShopData) => void;
    // eslint-disable-next-line no-unused-vars
    handleDelete?: (data: ShopData) => void;
};

type DataTableProps = {
    headers: string[];
    values: BaseData[];
    onSetupDataRow: (value: BaseData) => JSX.Element[];
    onEditRow?: (rowData: BaseData) => JSX.Element;
    onDeleteRow?: (rowData: BaseData) => JSX.Element;
}

const DataTable: React.FC<DataTableProps> = ({
                                                 headers,
                                                 values,
                                                 onSetupDataRow,
                                                 onEditRow,
                                                 onDeleteRow
                                             }) => {
    return (
        <TableContainer bg="white" borderRadius={5} padding={5} overflowX="auto">
            <Table variant="simple" colorScheme="white">
                <Thead>
                    <Tr>
                        {headers.map((header, index) => <Th key={index}>{header}</Th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {values.map((rowData) => (
                        <Tr key={rowData.id}>
                            {onSetupDataRow(rowData)}
                            <Td display="flex" justifyContent="space-between">
                                <div>
                                    &nbsp;
                                    {onEditRow && (
                                        <button onClick={() => onEditRow(rowData)}>
                                            <FaEdit/>
                                        </button>
                                    )}
                                    {onEditRow && onDeleteRow && (<p>|</p>)}
                                    {onDeleteRow && (
                                        <button onClick={() => onDeleteRow(rowData)}>
                                            <FaTrash/>
                                        </button>
                                    )}
                                </div>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

const CustomTable: React.FC<Props> = ({
                                          headers,
                                          data,
                                          handleEdit,
                                          handleDelete,
                                      }) => {
    return (
        <TableContainer bg="white" borderRadius={5} padding={5} overflowX="auto">
            <Table variant="simple" colorScheme="white">
                <Thead>
                    <Tr>
                        {headers.map((header, index) => (
                            <Th key={index}>{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row) => (
                        <Tr key={row.id}>
                            {Object.entries(row).map(([key, value], index) => {
                                if (key !== 'id') {
                                    return <Td key={index}>{value}</Td>;
                                }
                                return null;
                            })}

                            <Td display="flex" justifyContent="space-between">
                                {handleEdit && (
                                    <button onClick={() => handleEdit(row)}>
                                        <FaEdit/>
                                    </button>
                                )}
                                |
                                {handleDelete && (
                                    <button onClick={() => handleDelete(row)}>
                                        <FaTrash/>
                                    </button>
                                )}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
