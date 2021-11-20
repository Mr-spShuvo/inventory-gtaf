import _ from 'lodash';

/**
 * Retrieves current data that'll be shown on table
 * @param {array} items are all data that should be filtered
 * @param {number} currentPage is the current page number user navigating
 * @param {number} perPage is the number of items will be shown
 * @returns {array} array of filtered data
 */

export const getPaginateData = (items, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(items).slice(startIndex).take(perPage).value();
};
