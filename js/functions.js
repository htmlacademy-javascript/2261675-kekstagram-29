const stringLength = function (string, maxlength) {
  if (string.length <= maxlength) {
    return true;
  } else {
    return false;
  }
};

stringLength("проверяемая строка", 10);

function palidrome(str) {
  str = str.toLowerCase().replceAll("");
  return str === str.split("").reverse().join("");
}

palidrome();
