import React from 'react';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { BaseTableData } from '@/components/modules/interface';

type DataTableProps = {
  headers: string[],
  values: BaseTableData[],
  onEditRow?: (rowData: BaseTableData) => JSX.Element,
  onDeleteRow?: (rowData: BaseTableData) => JSX.Element,
};

const DataTable: React.FC<DataTableProps> = ({
  headers,
  values,
  onEditRow,
  onDeleteRow,
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
          {values.map((rowData) => (
            <Tr key={rowData.id}>
              {Object.entries(rowData).map(([key, value], index) => {
                return key !== 'id' ? <Td key={index}>{value}</Td> : null;
              })}
              <Td display="flex" justifyContent="space-between">
                <div>
                  {onEditRow && (
                    <button onClick={() => onEditRow(rowData)}>
                      <FaEdit />
                    </button>
                  )}
                  {onEditRow && onDeleteRow && <p>|</p>}
                  {onDeleteRow && (
                    <button onClick={() => onDeleteRow(rowData)}>
                      <FaTrash />
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

export default DataTable;
