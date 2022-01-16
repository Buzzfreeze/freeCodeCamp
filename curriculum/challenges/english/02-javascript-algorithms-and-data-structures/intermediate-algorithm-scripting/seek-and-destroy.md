---
id: a39963a4c10bc8b4d4f06d7e
title: Seek and Destroy
challengeType: 5
forumTopicId: 16046
dashedName: seek-and-destroy
---

# --description--

ให้เขียนฟังก์ชัน `destroyer` ที่รับ argument แรกเป็น array แล้วตามด้วย argument อื่นๆ 
ฟังก์ชันนี้จะทำงานโดยทำการลบ element ทั้งหมดที่มีค่าเหมือนกับ argument อื่นๆ ออกจาก array ที่เป็น argument แรก 

**หมายเหตุ:** คุณต้องใช้ object `arguments`

# --hints--

`destroyer([1, 2, 3, 1, 2, 3], 2, 3)` ต้องคืนค่าเป็น `[1, 1]`

```js
assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
```

`destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)` ต้องคืนค่าเป็น `[1, 5, 1]`

```js
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
```

`destroyer([3, 5, 1, 2, 2], 2, 3, 5)` ต้องคืนค่าเป็น `[1]`

```js
assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
```

`destroyer([2, 3, 2, 3], 2, 3)` ต้องคืนค่าเป็น `[]`

```js
assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
```

`destroyer(["tree", "hamburger", 53], "tree", 53)` ต้องคืนค่าเป็น `["hamburger"]`

```js
assert.deepEqual(destroyer(['tree', 'hamburger', 53], 'tree', 53), [
  'hamburger'
]);
```

`destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")` ต้องคืนค่าเป็น `[12,92,65]`

```js
assert.deepEqual(
  destroyer(
    [
      'possum',
      'trollo',
      12,
      'safari',
      'hotdog',
      92,
      65,
      'grandma',
      'bugati',
      'trojan',
      'yacht'
    ],
    'yacht',
    'possum',
    'trollo',
    'safari',
    'hotdog',
    'grandma',
    'bugati',
    'trojan'
  ),
  [12, 92, 65]
);
```

# --seed--

## --seed-contents--

```js
function destroyer(arr) {
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

# --solutions--

```js
function destroyer(arr) {
  var hash = Object.create(null);
  [].slice.call(arguments, 1).forEach(function(e) {
    hash[e] = true;
  });
  return arr.filter(function(e) { return !(e in hash);});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
