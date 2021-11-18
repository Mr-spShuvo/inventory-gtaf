import Sidebar from './Sidebar';

const Layout = ({ title = '', children }) => {
  return (
    <div className="flex min-h-screen mt-20">
      <div className="w-72 px-2 border-r border-neutral-300 relative">
        <div className="p-4 sticky left-0 top-20">
          <Sidebar />
        </div>
      </div>

      <div className="w-full">
        <div class="border-b border-neutral-300 p-6">
          <h1 class="font-bold text-xl">{title}</h1>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
