import { useState } from 'react';
import { DropDownIcon, BellIcon } from '../assets/icons';
import UserAvatar from '../assets/user.png';
import SearchBox from './SearchBox';

const Header = () => {
  const [searchText, setSearchText] = useState();

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <div className="bg-white flex py-4 border-b border-neutral-300 w-screen fixed top-0">
      <button className="flex items-center w-52 gap-2.5 ml-8">
        <h1 className="font-semibold text-sm tracking-tight">Starbucks</h1>
        <DropDownIcon />
      </button>

      <div className="flex justify-between flex-auto mx-6">
        <SearchBox value={searchText} onChange={handleChange} />
        <div className="flex items-center gap-4">
          <button>
            <BellIcon />
          </button>
          <button className="flex items-center gap-4">
            <img className="h-8 w-8" src={UserAvatar} alt="user avatar" />
            <p className="font-semibold text-sm tracking-tight">Jonh Doe</p>
            <DropDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
