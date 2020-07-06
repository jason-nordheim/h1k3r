export const stringContains = (string, characterAry) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < characterAry.length; j++) {
      if (string[i] === characterAry[j]) return true;
    }
  }
  return false
}