function noProfanity(stringToFilter) {
  stringToFilter2 = stringToFilter.replace(/[nN]+[iIl\*\!]+[gGq\&\*\$]+|[aAeE3rR\*\$]+/,'');
  return stringToFilter2;
}