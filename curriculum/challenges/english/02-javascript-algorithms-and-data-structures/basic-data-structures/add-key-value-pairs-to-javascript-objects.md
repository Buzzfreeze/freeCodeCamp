---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

โดยพื้นฐานที่สุดแล้ว object เป็นเพียงชุดของคู่ <dfn>key-value</dfn> กล่าวอีกนัยหนึ่งว่า object คือชิ้นส่วนของข้อมูล (<dfn>values</dfn>) ที่จับคู่กับ identifiers ที่ไม่ซ้ำกันซึ่งเรียกว่า <dfn>properties</dfn> (<dfn>keys</dfn>) ลองดูตัวอย่าง:

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

โค้ดด้านบนกำหนด object ตัวละครวิดีโอเกม Tekken ชื่อ `tekkenCharacter` มี 3 properties โดยแต่ละ property จะจับคู่กับค่าที่กำหนด หากคุณต้องการเพิ่ม property เช่น "origin" สามารถทำได้โดยกำหนด `origin` ให้กับ object

```js
tekkenCharacter.origin = 'South Korea';
```

จากโค้ดด้านบนใช้ dot notation (สัญลักษณ์จุด) หากคุณสังเกต object `tekkenCharacter` ตอนนี้จะมี `origin` property โดย Hwoarang ก็มีผมสีส้มที่โดดเด่น คุณสามารถเพิ่ม property นี้ด้วยเครื่องหมายวงเล็บดังนี้

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

ถ้าหาก property ของคุณมี space หรือหากคุณต้องการใช้ตัวแปรเพื่อตั้งชื่อ property คุณจำเป็นต้องใช้เครื่องหมายวงเล็บ Bracket notation 
ในกรณีข้างต้น property จะอยู่ในเครื่องหมายคำพูดเพื่อแสดงว่าเป็น string และสามารถเพิ่มได้ตามโค้ดด้านบน แต่หากไม่มีเครื่องหมายคำพูด จะถูกประเมินเป็นตัวแปรและชื่อของ property จะเป็นค่าใดก็ตามของตัวแปรนั้น นี่คือตัวอย่าง

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

หลังจากเพิ่มตามตัวอย่างทั้งหมดแล้ว object จะมีลักษณะดังนี้

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

จงสร้าง object `foods` ที่มีสามรายการ ให้ใช้ syntax แบบใดก็ได้ แล้วเพิ่มสามรายการเข้าไป ได้แก่ `bananas` มีค่า `13`, `grapes` มีค่า `35` และ `strawberries` มีค่า `27`


# --hints--

`foods` ควรเป็น object

```js
assert(typeof foods === 'object');
```

object `foods` ควรมี key `bananas` ที่มีค่า `13`

```js
assert(foods.bananas === 13);
```

object `foods` ควรมี key `grapes` ที่มีค่า `35`

```js
assert(foods.grapes === 35);
```

object `foods` ควรมี key `strawberries` ที่มีค่า `27`

```js
assert(foods.strawberries === 27);
```

คู่ key-value pairs ควร set โดยใช้จุด หรือเครื่องหมายวงเล็บ

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

// Only change code below this line

// Only change code above this line

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
