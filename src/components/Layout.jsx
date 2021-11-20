import PropTypes from 'prop-types';

import { Sidebar } from './Sidebar';

export const Layout = ({ title = '', children }) => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen pt-16 sm:pt-20">
      <div className="lg:w-72 px-2 border-r border-neutral-300 relative">
        <div className="p-4 sticky left-0 top-24">
          <Sidebar />
        </div>
      </div>

      <div className="w-full">
        <div className="border-b border-neutral-300 p-6">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
