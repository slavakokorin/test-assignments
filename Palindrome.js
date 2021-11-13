const palindrome = (str) => {
  const buildReverseStr = str.split('').reverse().join('');
  if (buildReverseStr === str) {
    return true;
  }
  return false;
};