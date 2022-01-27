---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 5
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

แบบทดสอบนี้ให้สร้างฟังก์ชันที่จะลบ falsy value (ค่าที่ถือว่าเป็น false) ทั้งหมดออกจาก array

ใน JavaScript จะถือว่า `false`, `null`, `0`, `""`, `undefined` และ `NaN` เป็น falsy value

คำแนะนำ: พยายามแปลง element แต่ละตัวให้เป็น Boolean


# --hints--

การเรียกใช้ฟังก์ชัน `bouncer([7, "ate", "", false, 9])` ต้องได้ค่าเป็น `[7, "ate", 9]`

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

การเรียกใช้ฟังก์ชัน `bouncer(["a", "b", "c"])` ต้องได้ค่าเป็น `["a", "b", "c"]`

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

การเรียกใช้ฟังก์ชัน `bouncer([false, null, 0, NaN, undefined, ""])` ต้องได้ค่าเป็น `[]`

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

การเรียกใช้ฟังก์ชัน `bouncer([null, NaN, 1, 2, undefined])` ต้องได้ค่าเป็น `[1, 2]`

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);
```
