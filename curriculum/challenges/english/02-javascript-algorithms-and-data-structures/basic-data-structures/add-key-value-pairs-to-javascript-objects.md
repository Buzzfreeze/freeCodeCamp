---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

จริงๆแล้ว object เป็นแค่ <dfn>key-value pair</dfn> เท่านั้น ถ้าจะให้อธิบายคือ object คือข้อมูล (<dfn>value</dfn>) ที่มีชื่อที่ไม่ซ้ำกันซึ่งเราเรียกว่า <dfn>property</dfn> (<dfn>key</dfn>) ลองดูตัวอย่าง:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

โค้ดด้านเป็น object ของตัวละครในเกม Tekken ชื่อ `tekkenCharacter` ซึ่งมีมี 3 property โดยแต่ละ property จะคู่กับค่าที่กำหนดให้ ถ้าเราต้องการเพิ่ม property เช่น `origin` จะทำได้โดยกำหนด `origin` ให้กับ object:

```js
tekkenCharacter.origin = 'South Korea';
```

โค้ดด้านบนจะใช้ dot notation ตอนนี้ถ้าเราไปดูข้อมูลของ object `tekkenCharacter` จะมี property `origin` ชื่อ origin แล้ว คราวนี้เรารู้ว่า Hwoarang นั้นก็มีผมสีส้มด้วย เราสามารถเพิ่ม property นี้ด้วย Bracket notation (`[]`) ได้แบบนี้:

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

ถ้าชื่อ property ของเรามีเว้นวรรค หรือถ้าเราต้องการใช้ตัวแปรเพื่อตั้งชื่อ property เราจำเป็นต้องใช้ Bracket notation 
ในตัวอย่างด้านบน property จะอยู่ในเครื่องหมายคำพูดเพื่อแสดงว่าเป็น string และจะเพิ่ม property ตามที่เห็นเลบ แต่ถ้าไม่มีเครื่องหมายคำพูด ชื่อของ property จะถูกตั้งตามค่าของตัวแปรนั้น ตามตัวอย่างนี้:

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

ถ้าเราทำตามตัวอย่างทั้งหมดแล้ว object จะมีหน้าตาแบบนี้:

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

เราสร้าง object ชื่อ `foods` ที่มี property สามตัวให้แล้ว 
ให้เพิ่ม property เข้าไปอีกสามตัว คือ `bananas` ซึ่งมีค่าเป็น `13`, `grapes` ซึ่งมีค่าเป็น `35` และ `strawberries` ซึ่งมีค่าเป็น `27` โดยใช้ syntax แบบใดก็ได้


# --hints--

`foods` ต้องเป็นข้อมูลประเภท object

```js
assert(typeof foods === 'object');
```

object `foods` ต้องมี key `bananas` ที่มีค่าเป็น `13`

```js
assert(foods.bananas === 13);
```

object `foods` ต้องมี key `grapes` ที่มีค่าเป็น `35`

```js
assert(foods.grapes === 35);
```

object `foods` ต้องมี key `strawberries` ที่มีค่าเป็น `27`

```js
assert(foods.strawberries === 27);
```

ต้องตั้งค่า key-value pair โดยใช้จุดหรือ bracket Notation

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```
