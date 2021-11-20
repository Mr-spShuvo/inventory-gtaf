import { Checkbox } from '../common';
import { getInventoryStatus } from '../utils';

import { ArrowDownIcon, ArrowSortIcon } from '../assets/icons';

export const InventoryDataTable = ({ data }) => {
  return (
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
        {data.map(({ id, title, updatedOn, details, status, stock, total, unitPrice }) => (
          <tr className="text-left" key={id}>
            <th className="py-6 pl-6 pr-8 w-4 hidden md:table-cell">
              <Checkbox />
            </th>
            <td className="py-6 hidden md:table-cell">{updatedOn}</td>
            <td className="py-6 pl-6 md:pl-0">{title}</td>
            <td className="py-6 hidden xl:table-cell ">{details ? details : '-'}</td>
            <td className="py-6 text-center sm:text-left">
              <span className="hidden sm:inline-block">{getInventoryStatus(status).info}</span>
              <span
                className={`inline-block ml-2 w-2 h-2 rounded-full ${
                  getInventoryStatus(status).color
                }`}
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
  );
};
