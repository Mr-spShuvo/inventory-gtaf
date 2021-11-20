/**
 * Retrieves based info and color for signal based on the inventory status
 * @param {string} status 'success', 'warning', 'error' value of inventory status
 * @returns {{color: string, info: string}} Status info and background color class for tailwindcss
 */

export const getInventoryStatus = status => {
  const inventoryStatus = { color: '', info: '' };
  if (status === 'success') {
    inventoryStatus.color = 'bg-primary-500';
    inventoryStatus.info = 'Active';
  } else if (status === 'warning') {
    inventoryStatus.color = 'bg-warning-500';
    inventoryStatus.info = 'In Progress';
  } else if (status === 'error') {
    inventoryStatus.color = 'bg-error-500';
    inventoryStatus.info = 'Out of Stock';
  }
  return inventoryStatus;
};
