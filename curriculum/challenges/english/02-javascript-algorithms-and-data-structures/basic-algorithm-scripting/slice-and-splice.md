---
id: 579e2a2c335b9d72dd32e05c
title: Slice and Splice
challengeType: 5
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

โจทย์มี array 2 ชุด และเลข index มาให้ ให้คุณทำการ copy array แรกมาใส่ใน array ที่สอง โดยให้แทรกที่ index `n` ของ array ที่สอง
และต้องการให้ฟังก์ชันคืนค่าเป็น array โดยที่ input array มีค่าคงเดิม ไม่มีการเปลี่ยนแปลงหลังจากรันฟังก์ชัน

# --hints--

`frankenSplice([1, 2, 3], [4, 5], 1)` ควรคืนค่าเป็น `[4, 1, 2, 3, 5]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

`frankenSplice([1, 2], ["a", "b"], 1)` ควรคืนค่าเป็น `["a", 1, 2, "b"]`.

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

`frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` ควรคืนค่าเป็น `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`.

```js
assert.deepEqual(
  frankenSplice(
    ['claw', 'tentacle'],
    ['head', 'shoulders', 'knees', 'toes'],
    2
  ),
  ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes']
);
```

ตัวอย่างต่อไปนี้ ทุก elements จาก array แรก ถูก copy ไปใส่ใน array ที่สองตามลำดับเดิม `frankenSplice([1, 2, 3, 4], [], 0)` ควรคืนค่าเป็น `[1, 2, 3, 4]`.

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

array แรกควรมีค่าคงเดิมหลังจากรันฟังก์ชัน

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

array ที่สองควรมีค่าคงเดิมหลังจากรันฟังก์ชัน

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr2, ['a', 'b']);
```

# --seed--

## --after-user-code--

```js
let testArr1 = [1, 2];
let testArr2 = ["a", "b"];
```

## --seed-contents--

```js
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

# --solutions--

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);
```
