"use strict";

function rle(source) {
  let str = '',
      count = 1;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === source[i + 1]) {
      count++;
      continue;
    }

    str += count !== 1 ? source[i] + count : source[i];
    count = 1;
  }
  return str;
}

let convertedString = rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD');
let expectedString = 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4';

console.assert(
  convertedString === expectedString,
  `${convertedString} is not equal to expected ${expectedString}`
);
