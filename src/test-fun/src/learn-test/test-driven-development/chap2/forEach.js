exports.forEach = function (items, callback) {
  for (const item of items) {
    callback(item);
  }
};
