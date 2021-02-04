"use strict";
export const getPagination = (page, size) => {
  const limit = size ? +size : 4;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
