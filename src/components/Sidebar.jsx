import { NavLink } from 'react-router-dom';
import { HouseIcon, GearIcon, MemoIcon, FileIcon } from '../assets/icons';

const menu = [
  { title: 'Dashboard', icon: <HouseIcon />, path: '/dashboard' },
  { title: 'Inventory', icon: <FileIcon />, path: '/inventory' },
  { title: 'Documents', icon: <MemoIcon />, path: '/documents' },
  { title: 'Settings', icon: <GearIcon />, path: '/settings' }
];

const Sidebar = () => {
  return (
    <ul className="flex justify-between sm:flex-col sm:justify-start gap-7 bg-white sm:bg-transparent fixed sm:relative bottom-0 left-0 sm:bottom drop-shadow-2xl border-t border-neutral-200">
      {menu.map(item => (
        <li key={item.path} className="text-neutral-700 font-medium">
          <NavLink
            to={item.path}
            activeClassName="text-primary-500 bg-white shadow-sm border-neutral-300"
            className="inline-flex lg:w-full gap-2.5 p-4 transition-all hover:text-primary-500 hover:bg-white hover:shadow-sm hover:border-neutral-300 border-b-2 border-transparent rounded-md"
          >
            {item.icon}
            <span className="hidden lg:inline-block">{item.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
