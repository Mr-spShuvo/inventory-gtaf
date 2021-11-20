import { NavLink } from 'react-router-dom';
import { HouseIcon, GearIcon, MemoIcon, FileIcon } from '../assets/icons';

const menu = [
  { title: 'Dashboard', icon: <HouseIcon />, path: '/dashboard' },
  { title: 'Inventory', icon: <FileIcon />, path: '/inventory' },
  { title: 'Documents', icon: <MemoIcon />, path: '/documents' },
  { title: 'Settings', icon: <GearIcon />, path: '/settings' }
];

export const Sidebar = () => {
  return (
    <ul className="flex w-full px-6 sm:px-0 justify-between sm:flex-col sm:justify-start gap-5 bg-white sm:bg-transparent fixed sm:relative bottom-0 left-0 sm:bottom sm:border-t sm:border-neutral-200 shadow-nav sm:shadow-none">
      {menu.map(item => (
        <li key={item.path} className="text-neutral-700 font-medium">
          <NavLink
            to={item.path}
            activeClassName="text-primary-500 bg-white sm:shadow-nav-item border-neutral-300"
            className="flex lg:w-full gap-2.5 p-4 transition-all hover:text-primary-500 hover:bg-white sm:hover:shadow-nav-item hover:border-neutral-300 border-b-2 border-transparent rounded-md"
          >
            {item.icon}
            <span className="hidden lg:inline-block">{item.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
