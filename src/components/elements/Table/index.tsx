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
import { FaEdit, FaTrash } from 'react-icons/fa';

import { ShopData } from '@/components/modules/interface';

type Props = {
  headers: string[];
  data: ShopData[];
  // eslint-disable-next-line no-unused-vars
  handleEdit?: (data: ShopData) => void;
  // eslint-disable-next-line no-unused-vars
  handleDelete?: (data: ShopData) => void;
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
                    <FaEdit />
                  </button>
                )}
                |
                {handleDelete && (
                  <button onClick={() => handleDelete(row)}>
                    <FaTrash />
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

export default CustomTable;
