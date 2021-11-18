export const getInventoryStatus = status => {
  const inventoryStatus = {
    color: '',
    info: ''
  };
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
