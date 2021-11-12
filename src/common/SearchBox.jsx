import { FindIcon } from '../assets/icons';

const SearchBox = ({ value = '', onChange = () => {}, placeholder = 'Search' }) => {
  return (
    <from className="flex items-center px-4 py-3 w-96 max-w-sm gap-2.5 bg-neutral-200 rounded-lg">
      <label htmlFor="headerSearch">
        <FindIcon width={20} height={20} />
      </label>
      <input
        className="bg-transparent outline-none"
        type="text"
        id="headerSearch"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </from>
  );
};

export default SearchBox;
