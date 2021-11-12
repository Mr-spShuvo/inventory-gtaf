const Layout = ({ title = '', children }) => {
  return (
    <div className="flex h-screen min-h-full pt-20">
      <div className="flex w-60 pl-8 pr-12 border-r border-neutral-300">
        <div className="py-6">Sidebar</div>
      </div>

      <div className="">
        <div class="border-b border-neutral-300 p-6">
          <h1 class="font-bold text-xl">{title}</h1>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
