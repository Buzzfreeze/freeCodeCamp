---
id: 56533eb9ac21ba0edf2244e1
title: Nesting For Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

ถ้าเรามี array หลายมิติ (multi-dimensional array) เราสามารถใช้ logic ที่เรียนในบทเรียนที่แล้ว เพื่อ loop เข้าไปใน array และ array ที่อยู่ข้างในได้ด้วย  
ลองดูตัวอย่างด้านล่าง:

```js
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```


โค้ดด้านบนจะแสดงผลเป็น element ทุกตัวใน array ย่อยของ `arr` ซึ่งภายใน loop ชั้นในเรามีการเช็ค `.length` ของ `arr[i]` เพราะว่า `arr[i]` ก็มีค่าเป็น array เหมือนกัน


# --instructions--


จงแก้ไขฟังก์ชัน `multiplyAll` เพื่อให้คืนค่าเป็นผลคูณของตัวเลขภายใน array ย่อยของตัวแปร `arr`

# --hints--

การเรียกใช้ฟังก์ชัน `multiplyAll([[1],[2],[3]])` ต้องคืนค่าออกมาเป็น `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

การเรียกใช้ฟังก์ชัน `multiplyAll([[1,2],[3,4],[5,6,7]])` ต้องคืนค่าออกมาเป็น `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

การเรียกใช้ฟังก์ชัน `multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])` ต้องคืนค่าออกมาเป็น `54`

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  var product = 1;
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```
