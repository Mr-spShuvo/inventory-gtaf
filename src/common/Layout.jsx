import Sidebar from '../components/Sidebar';

const Layout = ({ title = '', children }) => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen mt-16 sm:mt-20">
      <div className="lg:w-72 pt-8 px-2 border-r border-neutral-300 relative">
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
