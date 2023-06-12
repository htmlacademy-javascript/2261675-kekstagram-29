const stringLength = function (string, maxlength) {
  if (string.length <= maxlength) {
    return true;
  } else {
    return false;
  }
};

stringLength('проверяемая строка', 10);
