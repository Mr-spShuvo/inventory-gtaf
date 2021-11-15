import Checkbox from '../common/Checkbox';
import SearchBox from '../common/SearchBox';
import { ArrowDownIcon, ArrowSortIcon, AngleLeftIcon, AngleRightIcon } from '../assets/icons';
import { Link } from 'react-router-dom';

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
            <tr className="text-left">
              <th className="py-6 pl-6 pr-8 w-4">
                <Checkbox />
              </th>
              <td>11 Nov 2021</td>
              <td>Hammer</td>
              <td>This is a hammer to do work with</td>
              <td>
                Alright
                <span className="inline-block ml-2 w-2 h-2 rounded-full bg-primary-500"></span>
              </td>
              <td className="text-right">
                <span className="font-bold">200</span>/300
              </td>
              <td className="text-right">$10</td>
              <td className="text-right pr-6">$2000.00</td>
            </tr>
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
