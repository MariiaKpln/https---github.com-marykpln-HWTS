import "./style.css";

function displayNumberOccurrences(numbers: number[]): void {
  //Create a frequency map
  const frequencyMap: { [key: number]: number } = {};

  for (const num of numbers) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  //Convert map to array of tuples: [number, count]
  const entries: [number, number][] = Object.entries(frequencyMap).map(
    ([key, value]) => [parseInt(key), value]
  );

  entries.sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : a[0] - b[0]));

  //Display result
  for (const [num, count] of entries) {
    console.log(`${num} => ${count}`);
  }
}

function isAnagram(word: string, anagram: string) {
  let res: boolean;
  if (word.length !== anagram.length) {
    res = false;
  }
  const map1 = frequencyMap(word);
  const map2 = frequencyMap(anagram);

  for (const char in map1) {
    if (map1[char] !== map2[char]) res = false;
  }

  res = true;
  return res;
}

const frequencyMap = (str: string): { [char: string]: number } => {
  const map: { [char: string]: number } = {};
  for (const char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
};

console.log(isAnagram("lalala", "aaalll"));

displayNumberOccurrences([20, 3, 3, 20, 20, 1, 1]);
