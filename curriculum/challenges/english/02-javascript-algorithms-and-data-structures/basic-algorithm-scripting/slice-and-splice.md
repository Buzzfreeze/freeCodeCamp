---
id: 579e2a2c335b9d72dd32e05c
title: Slice and Splice
challengeType: 5
forumTopicId: 301148
dashedName: slice-and-splice
---

# --description--

ให้เขียนฟังก์ชันที่รับ array 2 ตัว (`arr1`, `arr2`) และเลข 1 ตัว (`n`) 
ให้ฟังก์ชันทำงานโดยทำการคัดลอก array `arr1` มาแทรกใน array `arr2` ที่ตำแหน่ง index `n` ของ array `arr2` (ให้แทรกที่ index `n` ไม่ใช่แทนที่ element ที่ index `n`) และให้คืนค่าเป็น array ใหม่โดยที่ array ที่เป็น argument ต้องไม่ถูกเปลี่ยนแปลงหลังจากฟังก์ชันทำงานเสร็จ

# --hints--

การเรียกใช้ฟังก์ชัน `frankenSplice([1, 2, 3], [4, 5], 1)` ต้องได้ค่าเป็น `[4, 1, 2, 3, 5]`

```js
assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
```

การเรียกใช้ฟังก์ชัน `frankenSplice([1, 2], ["a", "b"], 1)` ต้องได้ค่าเป็น `["a", 1, 2, "b"]`

```js
assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b']);
```

การเรียกใช้ฟังก์ชัน `frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)` ต้องได้ค่าเป็น `["head", "shoulders", "claw", "tentacle", "knees", "toes"]`

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

element ที่คัดลอกจาก array แรกไปใส่ใน array ที่สองต้องเรียงในตำแหน่งเดิม 
การเรียกใช้ฟังก์ชัน `frankenSplice([1, 2, 3, 4], [], 0)` ต้องได้ค่าเป็น `[1, 2, 3, 4]`

```js
assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4]);
```

array แรกต้องมีค่าเท่าเดิมหลังฟังก์ชันทำงานเสร็จ

```js
frankenSplice(testArr1, testArr2, 1);
assert.deepEqual(testArr1, [1, 2]);
```

array ที่สองต้องมีค่าเท่าเดิมหลังฟังก์ชันทำงานเสร็จ

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
