function stringChop(str, size) {
  // Handle null or undefined input
  if (!str) return [];
  
  // Convert size to a number (since prompt returns a string)
  size = parseInt(size);
  
  // Handle invalid size (NaN, 0, or negative)
  if (isNaN(size) || size <= 0) return [str];
  
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));