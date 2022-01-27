---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

method `sort` จะเรียงลำดับของ element ใน array ตามเงื่อนไขใน callback function

ตัวอย่าง:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
```

ตัวอย่างนี้จะคืนค่าเป็น `[1, 2, 3, 4, 5]`

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

ตัวอย่างนี้จะคืนค่าเป็น `['z', 's', 'l', 'h', 'b']`

การใช้ `sort` โดยไม่ระบุ argument จะเรียงตามค่า Unicode ของตัวอักษรนั้น ซึ่งอาจจะทำให้ค่าที่ได้ผิดได้ เราจึงแนะนำให้ใช้ callback function เพื่อระบุเงื่อนไขในการเรียง element ใน array  
เมื่อ callback function (มักเรียกว่า `compareFunction`) ถูกส่งเข้าไปใน method sort ก็จะทำให้ element ใน array ถูกเรียงตามผลลัพธ์ของ `compareFunction`
เช่น: 

1. ถ้า `compareFunction(a,b)` คืนค่ามาน้อยกว่า 0 แปลว่า `a` จะมาก่อน `b` 
2. ถ้า `compareFunction(a,b)` คืนค่ามามากกว่า 0 แปลว่า `b` จะมาก่อน `a` 
3. ถ้า `compareFunction(a,b)` คืนค่ามาเป็น 0 แปลว่า `a` และ `b` จะอยู่ในตำแหน่งเดิม

# --instructions--

จงใช้ method `sort` ในฟังก์ชัน `alphabeticalOrder` เพื่อเรียง element ของ `arr` ตามลำดับตัวอักษร โดยฟังก์ชันต้องคืนค่าเป็น array ที่เรียงลำดับแล้ว

# --hints--

ต้องใช้ method `sort` ในโค้ด

```js
assert(code.match(/\.sort/g));
```

การเรียกใช้ฟังก์ชัน `alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` ต้องได้ค่าเป็น `["a", "a", "c", "d", "g", "z"]`

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

การเรียกใช้ฟังก์ชัน `alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` ต้องได้ค่าเป็น `["a", "h", "m", "m", "n", "x"]`

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

การเรียกใช้ฟังก์ชัน `alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` ต้องได้ค่าเป็น `["a", "a", "a", "a", "t", "x"]`

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  return arr
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort();
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```
