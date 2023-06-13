const stringLength = function (string, maxlength) {
  if (string.length <= maxlength) {
    return true;
  } else {
    return false;
  }
};

stringLength('проверяемая строка', 10);

function checkPalidrome(str) {
  str = str.toLowerCase().replaceAll(' ','');
  return str === str.split('').reverse().join('');
}

checkPalidrome('kekc');
