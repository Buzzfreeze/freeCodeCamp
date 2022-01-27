---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

โค้ดด้านล่างนี้เป็นตัวอย่างการใช้งานโครงสร้างข้อมูลแบบ array ที่พื้นฐานที่สุด เราเรียก array แบบนี้ว่า <dfn>array หนึ่งมิติ</dfn> แปลว่า array นี้จะมีแค่ชั้นเดียวและก็จะไม่มี array ที่อยู๋ใน array อีกทีหนึ่ง เราจะเห็นว่าใน array นั้นมีทั้งข้อมูลประเภท <dfn>boolean</dfn>, <dfn>string</dfn> และ <dfn>number</dfn>:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

 `console.log` จะแสดงผลเป็น `7`

ทุกๆ array จะมี property ที่เป็นค่าความยาวของ array เราจะเข้าถึง property นี้ได้ด้วยการใช้ syntax `Array.length` 

ในตัวอย่างด้านล่างจะเป็นการใช้ array ในรูปแบบที่ซับซ้อนขึ้น ซึ่งเราเรียกว่า <dfn>array หลายมิติ</dfn> หมายถึง array ที่เก็บ array อื่นไว้ข้างใน จะเห็นว่าใน array นี้มี <dfn>object</dfn> ของ JavaScript อยู่ข่างในด้วย ซึ่งเราจะลงรายละเอียดเรื่องนี้ในหัวข้อต่อไป แต่ตอนนี้เรารู้แค่ว่า array สามารถเก็บ object แบบซับซ้อนได้ก็พอ



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

เราได้ประกาศตัวแปรชื่อ `yourArray` ให้แล้ว 

ให้คุณกำหนดค่าให้กับตัวแปร `yourArray` โดยใช้ array ที่มีอย่างน้อย 5 element  ซึ่งใน array ของคุณต้องมีชนิดข้อมูลทั้ง <dfn>string</dfn>, <dfn>number</dfn>, และ <dfn>boolean</dfn> อย่างน้อยชนิดละ 1 ตัวใน array


# --hints--

`yourArray` ต้องมีชนิดของข้อมูลเป็น array 

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` ต้องมี element ข้างในอย่างน้อย 5 element

```js
assert.isAtLeast(yourArray.length, 5);
```

ใน `yourArray` ต้องมี `boolean` อย่างน้อย 1 ตัว

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

ใน `yourArray` ต้องมี `number` อย่างน้อย 1 ตัว

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

ใน `yourArray` ต้องมี`string` อย่างน้อย 1 ตัว

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // แก้บรรทัดนี้
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```
