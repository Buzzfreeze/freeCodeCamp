---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
challengeType: 5
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

ให้สร้างฟังก์ชันที่บวกค่า argument 2 ตัวเข้าด้วยกัน ถ้ามีการส่งค่าเพียง argument เดียว เข้าในฟังก์ชัน ก็ให้คืนค่าเป็นอีกฟังก์ชันที่มี argument 1 ตัว และคืนค่าเป็นผลบวก

ตัวอย่างเช่น `addTogether(2, 3)` ควรคืนค่าเป็น `5` และ `addTogether(2)` ควรคืนค่าเป็นฟังก์ชัน

เมื่อมีการเรียกฟังก์ชันที่คืนค่ามา (returned function) พร้อมกับส่งค่า argument เข้าในฟังก์ชันนี้ ก็จะได้ผลลัพธ์เป็นผลบวก

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` ได้ผลลัพธ์เป็น `5`

หาก argument ใด argument หนึ่ง ไม่ใช่ตัวเลข ให้คืนค่าเป็น undefined

# --hints--

`addTogether(2, 3)` ควรคืนค่าเป็น 5

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23, 30)` ควรคืนค่าเป็น 53

```js
assert.deepEqual(addTogether(23, 30), 53);
```

`addTogether(5)(7)` ควรคืนค่าเป็น 12

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` ควรคืนค่าเป็น `undefined`

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(2, "3")` ควรคืนค่าเป็น `undefined`

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])` ควรคืนค่าเป็น `undefined`

```js
assert.isUndefined(addTogether(2)([3]));
```

# --seed--

## --seed-contents--

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

# --solutions--

```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```
