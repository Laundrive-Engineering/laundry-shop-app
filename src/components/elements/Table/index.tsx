import React from 'react';
import {
  HStack,
  IconButton,
  Table,
  TableContainer,
  ButtonGroup,
  Flex,
  Tbody,
  Td,
  Th,
  Thead,
  Spinner,
  Select,
  Tr,
} from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BaseTableData } from '@/components/modules/interface';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

import CustomButton from '../Button';
import CustomText from '../Text';

type DataTableProps = {
  headers: string[],
  values: BaseTableData[],
  onEditRowHandler?: (rowData: BaseTableData) => void,
  onDeleteRowHandler?: (rowData: BaseTableData) => void,
  // onFieldHandler?: (value: string, index: number) => JSX.Element,
  isLoading: boolean,
  itemsPerPage: number,
  currentPage: number,
  total: number,
  // eslint-disable-next-line no-unused-vars
  handleCurrentPage: (currentPage: number) => void,
  // eslint-disable-next-line no-unused-vars
  handleItemsPerPage: (perPage: number) => void,
};

const DataTable: React.FC<DataTableProps> = ({
  headers,
  values,
  onEditRowHandler,
  onDeleteRowHandler,
  // onFieldHandler,
  isLoading,
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
        <Table
          variant="simple"
          colorScheme="blue"
          size={'lg'}
          layout={'string'}
        >
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
                  // return key !== 'id' ? (
                  //   <Td key={index}>
                  //     {onFieldHandler ? (
                  //       onFieldHandler(value, index)
                  //     ) : (
                  //       <span>{value}</span>
                  //     )}
                  //   </Td>
                  // ) : null;
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
                <Td display="flex" justifyContent="space-between">
                  {(onEditRowHandler || onDeleteRowHandler) && (
                    <HStack>
                      {onEditRowHandler && (
                        <IconButton aria-label="Edit row" icon={<EditIcon />} />
                      )}
                      {onDeleteRowHandler && (
                        <IconButton
                          aria-label="Delete row"
                          icon={<DeleteIcon />}
                        />
                      )}
                    </HStack>
                  )}
                </Td>
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
            backgroundColor="#addae9"
          />
          <CustomButton
            isDisabled={currentPage === totalPages}
            onClick={() => handleCurrentPage(currentPage + 1)}
            rightIcon={<FaArrowRight />}
            backgroundColor="#addae9"
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

export default DataTable;
