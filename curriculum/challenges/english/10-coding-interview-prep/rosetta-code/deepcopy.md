---
id: 596a8888ab7c01048de257d5
title: Deepcopy
challengeType: 5
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

เขียนฟังก์ชันที่ returns deep copy ของ object ที่กำหนด deep copy ต้องไม่ใช่ object เดียวกันกับที่ได้รับ

งานนี้จะไม่ทดสอบเพื่อ:

<ul>
  <li>Objects with properties that are functions</li>
  <li>Date objects or object with properties that are Date objects</li>
  <li>RegEx or object with properties that are RegEx objects</li>
  <li>Prototype copying</li>
</ul>

# --hints--

`deepcopy` ควรเป็น function.

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` ควร return object.

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` ไม่ควร return object เดียวกันกับที่ให้ไว้

```js
assert(deepcopy(obj2) != obj2);
```

เมื่อส่งผ่าน object ที่มี array `deepcopy` ควร return deep copy ของ object.

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

เมื่อส่งผ่าน object ที่มี object อื่นๆ `deepcopy`  ควร return deep copy ของ object.

```js
assert.deepEqual(deepcopy(obj3), obj3);
```

# --seed--

## --after-user-code--

```js
const obj1 = { test: 'test' };
const obj2 = {
  t: 'test',
  a: ['an', 'array']
};
const obj3 = {
  t: 'try',
  o: obj2
};
```

## --seed-contents--

```js
function deepcopy(obj) {

  return true;
}
```

# --solutions--

```js
function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```
