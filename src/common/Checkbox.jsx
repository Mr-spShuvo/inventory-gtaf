export const Checkbox = ({ label = '' }) => {
  return (
    <>
      <input
        type="checkbox"
        className="rounded text-primary-500 focus:ring-success-500 focus:shadow-none focus:border-none"
      />
      <label>{label}</label>
    </>
  );
};
