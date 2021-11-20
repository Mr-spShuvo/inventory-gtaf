import _ from 'lodash';

import { AngleLeftIcon, AngleRightIcon } from '../assets/icons';

export const Pagination = ({ pagination, onPageChange, onPerPageChange, onPageJump, data }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between text-neutral-600 ">
        <select
          class="pl-4 pr-16 py-2  border-neutral-400 text-sm shadow rounded focus:ring-success-500 focus:shadow-none focus:border-success-500 hover:bg-neutral-100 hidden md:block"
          value={pagination.perPage}
          onChange={onPerPageChange}
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
            onChange={onPageJump}
          >
            {_.range(1, data.length / pagination.perPage + 1).map(item => (
              <option value={item}>
                Page {item} of {Math.ceil(data.length / pagination.perPage)}
              </option>
            ))}
          </select>
          <button
            className="p-1.5 border border-neutral-400 shadow rounded hover:bg-neutral-100"
            onClick={() => onPageChange('prev')}
          >
            <AngleLeftIcon />
          </button>
          <button
            className="p-1.5 border border-neutral-400 shadow rounded hover:bg-neutral-100"
            onClick={() => onPageChange('next')}
          >
            <AngleRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
