import PropTypes from 'prop-types';

export const Checkbox = ({ label = '', value, onChange }) => {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type="checkbox"
        className="rounded text-primary-500 focus:ring-success-500 focus:shadow-none focus:border-none"
      />
      <label>{label}</label>
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func
};
