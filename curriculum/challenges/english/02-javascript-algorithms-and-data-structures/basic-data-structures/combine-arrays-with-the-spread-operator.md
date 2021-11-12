---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

ข้อดีอีกประการหนึ่งของ <dfn>spread</dfn> operator คือความสามารถในการรวม array หรือแทรก elements ทั้งหมดของ array หนึ่งไปยังอีก array นึงที่ index ใดก็ได้ ซึ่งหากเราใช้ syntax ดั้งเดิม เราสามารถเชื่อม array เข้าด้วยกันได้ก็จริง แต่เป็นการนำ array นึงมาต่อกับอีก array นึงเท่านั้น (concatenate) นอกจากนี้ Spread syntax ยังทำให้ operation ต่อไปนี้ทำได้ง่ายมาก

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` ควรมีค่า `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`.

จะเห็นได้ว่า การใช้ syntax spread ทำให้เราทำ operation ที่ซับซ้อนได้ง่ายกว่าการใช้วิธีการแบบเดิม

# --instructions--

เราได้ประกาศฟังก์ชัน `spreadOut` ที่คืนค่าเป็นตัวแปร `sentence` จงแก้ไขฟังก์ชันโดยใช้<dfn>spread</dfn> operator เพื่อคืนค่าเป็น array `['learning', 'to', 'code', 'is', 'fun']`

# --hints--

`spreadOut` ควรคืนค่า `["learning", "to", "code", "is", "fun"]`

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

`spreadOut` ควรใช้ spread syntax

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());
```

# --solutions--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
```
