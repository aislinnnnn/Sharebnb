export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilters = (filter, value) => ({
  type:UPDATE_FILTER,
  filter,
  value
});
