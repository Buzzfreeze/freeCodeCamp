---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

<dfn>cipher</dfn> หรือเทคนิคการเข้ารหัสที่ง่ายและแพร่หลายที่สุด ก็คือ <dfn>Caesar cipher</dfn> หรือที่เรียกกันว่า <dfn>shift cipher</dfn>  
สาเหตุที่เรียกว่า shift cipher นั้นก็เพราะว่าการเข้ารหัสรูปแบบนี้จะใช้การขยับ (shift) ตัวอักษรไปตามจำนวนที่กำหนด

แต่เทคนิคที่ทันสมัยและใช้กันทั่วไปก็คือ [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher ซึ่งจะใช้การแทนที่ตัวอักษรด้วยตัวอักษรที่อยู่ถัดไป 13 ตัว เช่น `A` จะแทนด้วย `N` แล้ว `B` จะแทนด้วย `O` ไปเรื่อยๆ

ให้เขียนฟังก์ชันเพื่อถอดรหัส [ROT13](https://en.wikipedia.org/wiki/ROT13) โดยรับค่า string ที่เข้ารหัส และคืนค่าเป็น string ที่ถอดรหัสแล้ว

ตัวอักษรทุกตัวจะเป็นตัวพิมพ์ใหญ่ และไม่ต้องแปลงอักขระที่ไม่ใช่ตัวอักษร (เช่น ช่องว่าง, เครื่องหมายวรรคตอน) แต่ต้องคืนค่าอักขระที่ไม่ใช่ตัวอักษรออกมาด้วย

# --hints--

`rot13("SERR PBQR PNZC")` ต้องถอดรหัสได้เป็น string `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` ต้องถอดรหัสได้เป็น string `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` ต้องถอดรหัสได้เป็น string `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` ต้องถอดรหัสได้เป็น string `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

```js
assert(
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ===
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
```

# --seed--

## --seed-contents--

```js
function rot13(str) {

  return str;
}

rot13("SERR PBQR PNZC");
```

# --solutions--

```js
var lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}
```
