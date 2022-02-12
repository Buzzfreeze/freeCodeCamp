---
id: 596a8888ab7c01048de257d5
title: Deepcopy
challengeType: 5
forumTopicId: 302247
dashedName: deepcopy
---

# --description--

เขียนฟังก์ชันที่คืนค่าเป็น deep copy ของ object ที่กำหนด 

deep copy ต้องไม่ใช่ object เดียวกันกับที่ส่งเข้าไป

เราจะไม่ test:

<ul>
  <li>object ที่มี property เป็น function</li>
  <li>Date object หรือ property ที่เป็น Date object</li>
  <li>RegEx หรือ property ที่เป็น RegEx object</li>
  <li>Prototype</li>
</ul>

# --hints--

`deepcopy` ต้องเป็นฟังก์ชัน

```js
assert(typeof deepcopy === 'function');
```

`deepcopy({test: "test"})` ต้องคืนค่าเป็น object

```js
assert(typeof deepcopy(obj1) === 'object');
```

`deepcopy` ต้องคืนค่าเป็นคนละ object กับที่ส่งเข้าไป

```js
assert(deepcopy(obj2) != obj2);
```

เมื่อส่ง array ของ object เข้าไปใน `deepcopy` ต้องคืนค่าเป็น deep copy ของ object นั้น

```js
assert.deepEqual(deepcopy(obj2), obj2);
```

เมื่อส่ง object ที่ซ้อนกันเข้าไปใน `deepcopy` ต้องคืนค่าเป็น deep copy ของ object นั้น

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
