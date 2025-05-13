function stringChop(str, size) {
  // If str is null or size is invalid
  if (str === null || size <= 0) return [];

  // Convert chunk size to number (since prompt returns string)
  size = Number(size);

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
