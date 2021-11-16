import Checkbox from '../common/Checkbox';
import SearchBox from '../common/SearchBox';
import { ArrowDownIcon, ArrowSortIcon, AngleLeftIcon, AngleRightIcon } from '../assets/icons';
import { Link } from 'react-router-dom';

import data from '../data/inventory.json';

const getStatus = status => {
  const inventoryStatus = {
    color: '',
    info: ''
  };
  if (status === 'success') {
    inventoryStatus.color = 'bg-primary-500';
    inventoryStatus.info = 'Active';
  } else if (status === 'warning') {
    inventoryStatus.color = 'bg-warning-500';
    inventoryStatus.info = 'In Progress';
  } else if (status === 'error') {
    inventoryStatus.color = 'bg-error-500';
    inventoryStatus.info = 'Out of Stock';
  }
  return inventoryStatus;
};

const Inventory = () => {
  return (
    <div className="bg-white rounded">
      <div className="p-6">
        <SearchBox />
      </div>
      <div className="py-0">
        <table className="table-auto w-full align-middle">
          <thead className="bg-warning-100">
            <tr className="py-4 text-left text-sm ">
              <th className="py-4 pl-6 pr-8 w-4">
                <Checkbox />
              </th>
              <th className="font-medium w-36">
                Date Updated <ArrowDownIcon className="inline-block ml-2" />
              </th>
              <th className="font-medium w-32">
                Title <ArrowSortIcon className="inline-block ml-2" />
              </th>
              <th className="font-medium w-1/3">Details</th>
              <th className="font-medium w-36">Status</th>
              <th className="font-medium text-right w-36">Quantity</th>
              <th className="font-medium text-right w-32">Unit Price</th>
              <th className="font-medium text-right w-40 pr-6">
                Amount <ArrowSortIcon className="inline-block ml-2" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ title, updatedOn, details, status, stock, total, unitPrice }) => (
              <tr className="text-left">
                <th className="py-6 pl-6 pr-8 w-4">
                  <Checkbox />
                </th>
                <td>{updatedOn}</td>
                <td>{title}</td>
                <td>{details ? details : '-'}</td>
                <td>
                  {getStatus(status).info}
                  <span
                    className={`inline-block ml-2 w-2 h-2 rounded-full ${getStatus(status).color}`}
                  ></span>
                </td>
                <td className="text-right">
                  <span className="font-bold">{stock}</span>/{total}
                </td>
                <td className="text-right">${unitPrice}</td>
                <td className="text-right pr-6">${stock * unitPrice}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6">
        <div className="flex justify-between text-neutral-600">
          <select class="pl-4 pr-16 py-2  border-neutral-400 text-sm shadow rounded focus:ring-success-500 focus:shadow-none focus:border-success-500 hover:bg-neutral-100">
            <option value="10">10 Items per page</option>
          </select>
          <div className="flex gap-4 items-center">
            <select class="pl-4 pr-16 py-2 border-neutral-400 text-sm shadow rounded focus:ring-success-500 focus:shadow-none focus:border-success-500 hover:bg-neutral-100">
              <option value="10">Page 1 of 5</option>
            </select>
            <Link
              className="p-1.5 border border-neutral-400 shadow rounded hover:bg-neutral-100"
              to="#"
            >
              <AngleLeftIcon />
            </Link>
            <Link
              className="p-1.5 border border-neutral-400 shadow rounded hover:bg-neutral-100"
              to="#"
            >
              <AngleRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
