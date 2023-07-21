import React from 'react';
import {
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';

import { FaEdit, FaTrash } from 'react-icons/fa';

import { BaseTableData } from '@/components/modules/interface';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

type DataTableProps = {
  headers: string[],
  values: BaseTableData[],
  onEditRowHandler?: (rowData: BaseTableData) => void,
  onDeleteRowHandler?: (rowData: BaseTableData) => void,
};

const DataTable: React.FC<DataTableProps> = ({
  headers,
  values,
  onEditRowHandler,
  onDeleteRowHandler,
}) => {
  return (
    <TableContainer bg="white" borderRadius={5} padding={5} overflowX="auto">
      <Table variant="simple" colorScheme="blue" size={"lg"} layout={"string"}>
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
                {(onEditRowHandler || onDeleteRowHandler) && (<HStack>
                  {onEditRowHandler && (
                    <IconButton aria-label='Edit row' icon={<EditIcon />} />
                  )}
                  {onDeleteRowHandler && (
                    <IconButton aria-label='Delete row' icon={<DeleteIcon />} />
                  )}
                </HStack>)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
