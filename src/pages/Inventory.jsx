import { useState, useEffect } from 'react';

import { Pagination, SearchBox } from '../common';
import { InventoryDataTable } from '../components';

import { getPaginateData } from '../utils';

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    perPage: 5,
    currentPage: 1
  });

  useEffect(() => {
    setInventoryData(() => require('../data/inventory.json'));
  }, []);

  useEffect(() => {
    const data = getPaginateData(inventoryData, pagination.currentPage, pagination.perPage);
    setData(data);
  }, [inventoryData, pagination.currentPage, pagination.perPage]);

  const handlePerPageChange = e =>
    setPagination(pagination => ({ ...pagination, perPage: e.target.value }));

  const handlePageJump = e => {
    setPagination(pagination => ({
      ...pagination,
      currentPage: e.target.value
    }));
  };

  const handlePageChange = type => {
    if (pagination.currentPage <= 1 && type === 'prev') return;
    else if (inventoryData.length / pagination.perPage <= pagination.currentPage && type === 'next')
      return;
    console.log(inventoryData.length / pagination.perPage);
    setPagination(pagination => ({
      ...pagination,
      currentPage: type === 'prev' ? pagination.currentPage - 1 : pagination.currentPage + 1
    }));
  };

  return (
    <div className="bg-white rounded">
      <div className="p-6">
        <SearchBox />
      </div>
      <InventoryDataTable data={data} />
      <Pagination
        data={inventoryData}
        pagination={pagination}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
        onPageJump={handlePageJump}
      />
    </div>
  );
};

export default Inventory;
