---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

ด้านล่างนี้คือตัวอย่างการใช้งานโครงสร้างข้อมูลอาร์เรย์ที่ง่ายที่สุด สิ่งนี้เรียกว่า <dfn>อาร์เรย์หนึ่งมิติ</dfn> ซึ่งหมายความว่ามีเพียงหนึ่งระดับหรือว่าไม่มีอาร์เรย์อื่นซ้อนอยู่ภายใน สังเกตว่ามี <dfn>booleans</dfn>, <dfn>strings</dfn> และ <dfn>numbers</dfn>:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

 `console.log` จะแสดง `7`

ทุก array มีความยาว (length) เป็น property ซึ่งแสดงดังโค้ดด้านบน โดย property นี้สามารถเข้าถึงง่ายด้วย syntax `Array.length` การทำงานกับ array แบบซับซ้อนสามารถดูได้ที่ด้านล่าง ซึ่งจะเรียกว่า <dfn>multi-dimensional array</dfn> หรือ array ที่เก็บ array อื่นๆ สังเกตว่า array นี้มี JavaScript <dfn>objects</dfn> ซึ่งเราจะลงรายละเอียดในหัวข้อต่อไป แต่ตอนนี้ สิ่งที่คุณต้องทราบคือ array มีความสามารถในการเก็บ object ที่ซับซ้อนได้



```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

เราได้ประกาศตัวแปรชื่อ `yourArray` จงสร้าง statement โดยให้นำ array ที่มีอย่างน้อย 5 elements ไปกำหนดค่าให้กับตัวแปร `yourArray` ซึ่ง array ของคุณควรมี <dfn>string</dfn>, <dfn>number</dfn>, และ <dfn>boolean</dfn> อย่างน้อยอย่างละหนึ่ง


# --hints--

`yourArray` ควรเป็น array 

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` ควรมีอย่างน้อย 5 elements

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` ควรมี `boolean` อย่างน้อย 1 ตัว

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` ควรมี `number` อย่างน้อย 1 ตัว

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` ควรมี`string` อย่างน้อย 1 ตัว

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```
