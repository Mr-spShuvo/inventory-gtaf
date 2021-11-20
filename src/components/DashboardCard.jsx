import { getDashboardCardColors } from '../utils';

import { FileIcon } from '../assets/icons';

export const DashboardCard = ({ title, heading, subHeading, index }) => {
  const { text, background } = getDashboardCardColors(index);
  return (
    <div
      className={`flex w-full gap-2 xl:gap-4 px-6 py-10 bg-white rounded 2xl:rounded-md shadow-card ${
        index === 0 ? 'flex-auto lg:flex-1' : 'flex-auto: sm:flex-1'
      }`}
    >
      <div
        className={`${text} ${background} w-12 h-12 rounded-full inline-flex items-center justify-center`}
      >
        <FileIcon />
      </div>
      <div>
        <h2 className="text-neutral-600 text-sm tracking-wide ">{title}</h2>
        <p className="text-neutral-900 font-bold text-xl">
          {heading}
          {subHeading && (
            <span className="ml-1 text-xs  font-medium inline-block px-3 py-1 bg-neutral-200 text-neutral-600 rounded-full ">
              {subHeading}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
