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
    <ul className="flex flex-col gap-7 ">
      {menu.map(item => (
        <li className="text-neutral-700 font-medium" key={item.path}>
          <NavLink
            activeClassName="text-primary-500 bg-white shadow-sm border-neutral-300"
            className="flex gap-2.5 p-4 transition-all hover:text-primary-500 hover:bg-white hover:shadow-sm hover:border-neutral-300 border-b-2 border-transparent rounded-md"
            to={item.path}
          >
            {item.icon}
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
