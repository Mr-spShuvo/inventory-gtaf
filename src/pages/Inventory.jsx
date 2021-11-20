import { useState, useEffect } from 'react';

import { Pagination, SearchBox } from '../common';
import { InventoryDataTable } from '../components';
import { getPaginateData } from '../utils';

const Inventory = () => {
  const [searchText, setSearchText] = useState('');
  const [inventoryData, setInventoryData] = useState([]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ perPage: 10, currentPage: 1 });

  const handleSearchTextChange = e => setSearchText(e.target.value);

  useEffect(() => {
    setInventoryData(() => require('../data/inventory.json'));
  }, []);

  useEffect(() => {
    const data = getPaginateData(inventoryData, pagination.currentPage, pagination.perPage);
    setData(data);
  }, [inventoryData, pagination.currentPage, pagination.perPage]);

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

  const handlePerPageChange = e =>
    setPagination(pagination => ({
      ...pagination,
      perPage: e.target.value,
      currentPage: 1
    }));

  const handlePageJump = e =>
    setPagination(pagination => ({
      ...pagination,
      currentPage: e.target.value
    }));

  return (
    <div className="bg-white rounded 2xl:rounded-md shadow-card">
      <div className="p-6">
        <SearchBox value={searchText} onChange={handleSearchTextChange} />
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
