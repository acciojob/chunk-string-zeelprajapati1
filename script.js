function stringChop(str, size) {
  // Return an empty array if the input string is null or empty
  if (!str) return [];

  // Create an array to store chunks
  let chunks = [];

  // Loop through the string in steps of 'size' and push substrings into chunks
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substring(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(JSON.stringify(stringChop(str, size)));
