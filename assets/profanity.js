function noProfanity(stringToFilter) {
  stringToFilter = stringToFilter.replace(/[nN]+[iIl\*\!]+[gGq\&\*\$]+|[aAeE3rR\*\$]+/,'');
  return stringToFilter;
}