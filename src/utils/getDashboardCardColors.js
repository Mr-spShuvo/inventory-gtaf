/**
 * Retrieves an object of colors based on index
 * @param {string} index array index of data
 * @returns {{main: string, background: string}} text and background color class for tailwindcss
 */
export const getDashboardCardColors = index => {
  const colors = { text: '', background: '' };
  if (index === 0) {
    colors.text = 'text-primary-500';
    colors.background = 'bg-primary-100';
  } else if (index === 1) {
    colors.text = 'text-error-500';
    colors.background = 'bg-error-100';
  } else if (index === 2) {
    colors.text = 'text-warning-500';
    colors.background = 'bg-warning-100';
  }
  return colors;
};
