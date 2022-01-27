---
id: 587d7b7b367417b2b2512b17
title: Combine Arrays with the Spread Operator
challengeType: 1
forumTopicId: 301156
dashedName: combine-arrays-with-the-spread-operator
---

# --description--

ประโยชน์อีกอย่างของ <dfn>spread</dfn> operator คือเราจะใช้ในการรวม array หรือแทรก element ทั้งหมดของ array หนึ่งไปใน array อีกตัวที่ index ไหนก็ได้ 

ซึ่งถ้าเราใช้ syntax แบบเก่า ถึงเราจะเชื่อม array เข้าด้วยกันได้ก็จริง แต่เราจะทำได้แค่การต่อ array เท่านั้น (concatenate) 
Spread syntax จะทำให้การทำงานแบบตัวอย่างนี้ทำได้ง่ายมาก:

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```

`thatArray` จะมีค่าเป็น `['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']`

จะเห็นว่าการใช้ spread syntax ทำให้เราทำงานที่ซับซ้อนได้ง่ายกว่าการใช้วิธีเก่า

# --instructions--

เราได้ประกาศฟังก์ชัน `spreadOut` ที่คืนค่าเป็นตัวแปร `sentence` ให้แล้ว 

ให้แก้ไขฟังก์ชันโดยใช้ <dfn>spread</dfn> operator เพื่อให้คืนค่าเป็น array `['learning', 'to', 'code', 'is', 'fun']`

# --hints--

`spreadOut` ต้องคืนค่าเป็น `["learning", "to", "code", "is", "fun"]`

```js
assert.deepEqual(spreadOut(), ['learning', 'to', 'code', 'is', 'fun']);
```

ต้องใช้ spread syntax ใน `spreadOut`

```js
assert.notStrictEqual(spreadOut.toString().search(/[...]/), -1);
```

# --seed--

## --seed-contents--

```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // แก้บรรทัดนี้
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
