---
id: a5de63ebea8dbee56860f4f2
title: Diff Two Arrays
challengeType: 5
forumTopicId: 16008
dashedName: diff-two-arrays
---

# --description--

ให้เปรียบเทียบ array 2 ตัวและคืนค่าเป็น array ตัวใหม่ที่ประกอบด้วย element ที่มีใน array ตัวหนึ่ง แต่ไม่มีใน array อีกตัวหนึ่ง (element ที่ต่างกันของสอง array)

**หมายเหตุ:** ไม่ต้องเรียง element ใน array ที่คืนออกมาก็ได้

# --hints--

`diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])` ต้องคืนค่าเป็น array

```js
assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === 'object');
```

`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` ต้องคืนค่าเป็น `["pink wool"]`

```js
assert.sameMembers(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['pink wool']
);
```

`["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` ต้องคืนค่าเป็น array ที่มี element เดียว

```js
assert(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 1
);
```

`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` ต้องคืนค่าเป็น `["diorite", "pink wool"]`

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ),
  ['diorite', 'pink wool']
);
```

`["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` ต้องคืนค่าเป็น array ที่มี 2 element

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 2
);
```

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` ต้องคืนค่าเป็น `[]`

```js
assert.sameMembers(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ),
  []
);
```

`["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` ต้องคืนค่าเป็น empty array.

```js
assert(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  ).length === 0
);
```

ถ้า input เป็น `[1, 2, 3, 5], [1, 2, 3, 4, 5]` ต้องคืนค่าเป็น `[4]`

```js
assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
```

ถ้า input เป็น `[1, 2, 3, 5], [1, 2, 3, 4, 5]` ต้องคืนค่าเป็น array ที่มี element เดียว

```js
assert(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]).length === 1);
```

ถ้า input เป็น `[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` ต้องคืนค่าเป็น `["piglet", 4]`

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]), [
  'piglet',
  4
]);
```

ถ้า input เป็น `[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` ต้องคืนค่าเป็น array ที่มี 2 element

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]).length === 2);
```

ถ้า input เป็น `[], ["snuffleupagus", "cookie monster", "elmo"]` ต้องคืนค่าเป็น `["snuffleupagus", "cookie monster", "elmo"]`

```js
assert.sameMembers(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']), [
  'snuffleupagus',
  'cookie monster',
  'elmo'
]);
```

ถ้า input เป็น `[], ["snuffleupagus", "cookie monster", "elmo"]` ต้องคืนค่าเป็น array ที่มี 3 element

```js
assert(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']).length === 3);
```

ถ้า input เป็น `[1, "calf", 3, "piglet"], [7, "filly"]` ต้องคืนค่าเป็น `[1, "calf", 3, "piglet", 7, "filly"]`

```js
assert.sameMembers(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']), [
  1,
  'calf',
  3,
  'piglet',
  7,
  'filly'
]);
```

ถ้า input เป็น `[1, "calf", 3, "piglet"], [7, "filly"]` ต้องคืนค่าเป็น array ที่มี 6 element

```js
assert(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']).length === 6);
```

# --seed--

## --seed-contents--

```js
function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

# --solutions--

```js
function diffArray(arr1, arr2) {
  var newArr = [];
  var h1 = Object.create(null);
  arr1.forEach(function(e) {
    h1[e] = e;
  });

  var h2 = Object.create(null);
  arr2.forEach(function(e) {
    h2[e] = e;
  });

  Object.keys(h1).forEach(function(e) {
     if (!(e in h2)) newArr.push(h1[e]);
  });
  Object.keys(h2).forEach(function(e) {
     if (!(e in h1)) newArr.push(h2[e]);
  });
  return newArr;
}
```
