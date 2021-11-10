---
id: 56533eb9ac21ba0edf2244e1
title: Nesting For Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

ถ้าคุณมี array หลายมิติ (multi-dimensional array) คุณสามารถใช้ logic เดียวกันกับก่อนหน้านี้ เพื่อ loop เข้าไปใน array และ sub-array ต่อไปนี้เป็นตัวอย่าง:

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


โค้ดด้านบนแสดงแต่ละ element ใน array ย่อยของ `arr` ซึ่งภายใน inner loop เรามีการเช็ค `.length` ของ `arr[i]` เนื่องจาก `arr[i]` ก็เป็น array


# --instructions--


จงแก้ไข function `multiplyAll` เพื่อให้คืนค่าเป็นผลคูณของตัวเลขภายใน array ย่อยของ `arr`

# --hints--

`multiplyAll([[1],[2],[3]])` ควรคืนค่า `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1,2],[3,4],[5,6,7]])` ควรคืนค่า `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])` ควรคืนค่า `54`

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
  // Only change code below this line

  // Only change code above this line
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
