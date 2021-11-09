---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 5
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

แบบทดสอบนี้ให้นำ falsy values (ค่าเสมือนเป็นค่า false) ออกจาก array

Falsy values ใน JavaScript ได้แก่ `false`, `null`, `0`, `""`, `undefined` และ `NaN`

คำแนะนำ: พยายามแปลงแต่ละค่าให้เป็น Boolean


# --hints--

`bouncer([7, "ate", "", false, 9])` ควรได้ผลลัพธ์คือ `[7, "ate", 9]`.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` ควรได้ผลลัพธ์คือ `["a", "b", "c"]`.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` ควรได้ผลลัพธ์คือ `[]`.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` ควรได้ผลลัพธ์คือ `[1, 2]`.

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
