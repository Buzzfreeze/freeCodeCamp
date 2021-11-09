---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

บางครั้งการเก็บข้อมูล, ตัวนับ (increment counter) หรือ รีเซ็ตค่าตัวแปรภายใน loop ก็เป็นสิ่งจำเป็นต้องทำ ปัญหาที่เกิดขึ้นได้คือ บางกรณีตัวแปรควรถูกประกาศซ้ำ (reinitiallized) แต่เราไม่ได้ประกาศซ้ำ แต่อย่างไรก็ตาม นี่เป็นเรื่องที่อันตราย หากคุณรีเซ็ตค่าตัวแปรที่ใช้เป็นเงื่อนไขในการสิ้นสุด loop โดยไม่ตั้งใจ ก็ทำให้เกิดการวน loop ไม่รู้จบได้

การพิมพ์ค่าตัวแปรในการวน loop แต่ละรอบ โดยใช้ `console.log()`สามารถแสดงให้เห็นถึงค่าตัวแปรที่ถูกรีเซ็ตหรือลืมไม่ได้รีเซ็ตได้

# --instructions--

ฟังก์ชันต่อไปนี้ควรสร้าง array 2 มิติที่มี `m` rows และ `n` columns และบรรจุเลข 0 ทั้งหมด แต่อย่างไรก็ตาม ตอนนี้ฟังก์ชันนี้แสดงผลไม่ถูกต้อง เพราะตัวแปร `row` ไม่ได้ถูก reinitialized (กำหนดค่ากลับให้เป็น empty array) ภายใน outer loop จงปรับแก้โค้ด เพื่อให้คืนค่าเป็น 3x2 array ที่มี 0 ซึ่งจะมีผลลัพธ์ดังนี้ `[[0, 0], [0, 0], [0, 0]]`

# --hints--

โค้ของคุณควรกำหนดตัวแปร `matrix` ให้เป็น array ที่มี 3 rows และ 2 columns และเก็บค่า 0 ทั้งหมด

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

ตัวแปร `matrix` ควรมี 3 rows

```js
assert(matrix.length == 3);
```

ตัวแปร `matrix` ควรมี 2 columns ในแต่ละ row

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

`zeroArray(4,3)` ควรคืนค่าเป็น array ที่มี 4 rows 3 columns และเก็บค่า 0 ทั้งหมด

```js
assert(JSON.stringify(zeroArray(4,3)) == '[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]');
```

# --seed--

## --seed-contents--

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```

# --solutions--

```js
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
   // Adds the m-th row into newArray

   for (let j = 0; j < n; j++) {
     // Pushes n zeroes into the current row to create the columns
     row.push(0);
   }
   // Pushes the current row, which now has n zeroes in it, to the array
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```
