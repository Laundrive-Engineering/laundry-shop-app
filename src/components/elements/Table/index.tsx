import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  ButtonGroup,
  Select,
  Spinner,
} from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight, FaEdit, FaTrash } from 'react-icons/fa';

import { ShopData, TableData } from '@/components/modules/interface';
import CustomButton from '../Button';
import CustomText from '../Text';
type Props = {
  headers: string[],
  data: ShopData[] | TableData[],
  isLoading: boolean,
  // eslint-disable-next-line no-unused-vars
  handleEdit?: (data: ShopData | TableData) => void,
  // eslint-disable-next-line no-unused-vars
  handleDelete?: (data: ShopData | TableData) => void,
  itemsPerPage: number,
  currentPage: number,
  total: number,
  // eslint-disable-next-line no-unused-vars
  handleCurrentPage: (currentPage: number) => void,
  // eslint-disable-next-line no-unused-vars
  handleItemsPerPage: (perPage: number) => void,
};

const CustomTable: React.FC<Props> = ({
  headers,
  data,
  isLoading,
  handleEdit,
  handleDelete,
  itemsPerPage,
  currentPage,
  total,
  handleCurrentPage,
  handleItemsPerPage,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Calculate total pages
  const totalPages = Math.ceil(total / itemsPerPage);
  return (
    <TableContainer bg="white" borderRadius={5} padding={5}>
      {isLoading ? (
        <Spinner />
      ) : (
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
                  if (key === 'qty' || key === 'price') {
                    const qtyArray = Array.isArray(value) ? value : [value];
                    return (
                      <Td key={index}>
                        {qtyArray.map((q, qIndex) => (
                          <p key={qIndex} style={{ marginTop: 5 }}>
                            {q}
                          </p>
                        ))}
                      </Td>
                    );
                  } else {
                    return <Td key={index}>{value}</Td>;
                  }
                })}

                {(handleEdit || handleDelete) && (
                  <Td display="flex" justifyContent="space-between">
                    {handleEdit && (
                      <button onClick={() => handleEdit(row)}>
                        <FaEdit />
                      </button>
                    )}

                    {handleDelete && (
                      <>
                        |
                        <button onClick={() => handleDelete(row)}>
                          <FaTrash />
                        </button>
                      </>
                    )}
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <Flex
        marginTop={4}
        align="center"
        justify="space-between"
        float="right"
        width="28%"
      >
        <ButtonGroup>
          <CustomButton
            isDisabled={currentPage === 1}
            onClick={() => handleCurrentPage(currentPage - 1)}
            // eslint-disable-next-line react/jsx-no-undef
            leftIcon={<FaArrowLeft />}
          />
          <CustomButton
            isDisabled={currentPage === totalPages}
            onClick={() => handleCurrentPage(currentPage + 1)}
            rightIcon={<FaArrowRight />}
          />
        </ButtonGroup>

        <CustomText ml={3}>
          {startIndex + 1}-{Math.min(endIndex, total)} of {total}
        </CustomText>

        <Select
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPage(Number(e.target.value))}
          style={{
            background: '#fff',
            borderRadius: '5px',
            marginLeft: 10,
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </Select>
      </Flex>
    </TableContainer>
  );
};

export default CustomTable;
