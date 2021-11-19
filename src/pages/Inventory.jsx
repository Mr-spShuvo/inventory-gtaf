import { useState, useEffect } from 'react';
import _ from 'lodash';

import { getInventoryStatus as getStatus, getPaginateData } from '../utils';
import { ArrowDownIcon, ArrowSortIcon, AngleLeftIcon, AngleRightIcon } from '../assets/icons';

import Checkbox from '../common/Checkbox';
import SearchBox from '../components/SearchBox';

const Inventory = () => {
  const [inventories] = useState(() => require('../data/inventory.json'));
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    perPage: 5,
    currentPage: 1
  });

  useEffect(() => {
    const data = getPaginateData(inventories, pagination.currentPage, pagination.perPage);
    setData(data);
  }, [inventories, pagination.currentPage, pagination.perPage]);

  const handlePerPage = e => {
    setPagination(pagination => ({ ...pagination, perPage: e.target.value }));
  };

  const handlePageJump = e => {
    setPagination(pagination => ({
      ...pagination,
      currentPage: e.target.value
    }));
  };

  const handlePageChange = type => {
    if (pagination.currentPage <= 1 && type === 'prev') return;
    else if (inventories.length / pagination.perPage <= pagination.currentPage && type === 'next')
      return;
    console.log(inventories.length / pagination.perPage);
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
      <div className="py-0">
        <table className="table-auto w-full align-middle">
          <thead className="bg-warning-100">
            <tr className="py-4 text-left text-sm ">
              <th className="py-4 pl-6 pr-8 w-4 hidden md:table-cell">
                <Checkbox />
              </th>
              <th className="py-4 font-medium w-44 xl:w-48 2xl:w-36 hidden md:table-cell">
                Date Updated <ArrowDownIcon className="inline-block ml-1" />
              </th>
              <th className="py-4 font-medium w-32 pl-6 md:pl-0">
                Title <ArrowSortIcon className="inline-block ml-1" />
              </th>
              <th className="py-4 font-medium w-1/4 2xl:1/3 hidden xl:table-cell">Details</th>
              <th className="py-4 font-medium w-32 md:w-44 xl:36">
                <span className="hidden sm:table-cell">Status</span>
              </th>
              <th className="py-4 font-medium text-right w-32">
                <span className="hidden lg:inline-block">Quantity</span>
              </th>
              <th className="py-4 font-medium text-right w-32 hidden xl:table-cell ">Unit Price</th>
              <th className="py-4 font-medium text-right w-36 pr-6">
                Amount <ArrowSortIcon className="inline-block ml-1" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ title, updatedOn, details, status, stock, total, unitPrice }) => (
              <tr className="text-left">
                <th className="py-6 pl-6 pr-8 w-4 hidden md:table-cell">
                  <Checkbox />
                </th>
                <td className="py-6 hidden md:table-cell">{updatedOn}</td>
                <td className="py-6 pl-6 md:pl-0">{title}</td>
                <td className="py-6 hidden xl:table-cell ">{details ? details : '-'}</td>
                <td className="py-6 text-center sm:text-left">
                  <span className="hidden sm:inline-block">{getStatus(status).info}</span>
                  <span
                    className={`inline-block ml-2 w-2 h-2 rounded-full ${getStatus(status).color}`}
                  ></span>
                </td>
                <td className="py-6 text-right">
                  <span className="font-bold">{stock}</span>/{total}
                </td>
                <td className="py-6 text-right hidden xl:table-cell">${unitPrice}</td>
                <td className="py-6 text-right pr-6">${stock * unitPrice}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6">
        <div className="flex justify-between text-neutral-600 ">
          <select
            class="pl-4 pr-16 py-2  border-neutral-400 text-sm shadow rounded focus:ring-success-500 focus:shadow-none focus:border-success-500 hover:bg-neutral-100 hidden md:block"
            value={pagination.perPage}
            onChange={handlePerPage}
          >
            <option value="5">5 Items per page</option>
            <option value="10">10 Items per page</option>
            <option value="20">20 Items per page</option>
            <option value="40">40 Items per page</option>
          </select>
          <div className="flex gap-4 items-center">
            <select
              class="pl-4 pr-16 py-2 border-neutral-400 text-sm shadow rounded focus:ring-success-500 focus:shadow-none focus:border-success-500 hover:bg-neutral-100"
              value={pagination.currentPage}
              onChange={handlePageJump}
            >
              {_.range(1, inventories.length / pagination.perPage + 1).map(data => (
                <option value={data}>
                  Page {data} of {Math.ceil(inventories.length / pagination.perPage)}
                </option>
              ))}
            </select>
            <button
              className="p-1.5 border border-neutral-400 shadow rounded hover:bg-neutral-100"
              onClick={() => handlePageChange('prev')}
            >
              <AngleLeftIcon />
            </button>
            <button
              className="p-1.5 border border-neutral-400 shadow rounded hover:bg-neutral-100"
              onClick={() => handlePageChange('next')}
            >
              <AngleRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
