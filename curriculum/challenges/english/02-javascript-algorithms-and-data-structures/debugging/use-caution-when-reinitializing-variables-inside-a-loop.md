---
id: 587d7b86367417b2b2512b3c
title: Use Caution When Reinitializing Variables Inside a Loop
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

บางครั้งเราต้องเก็บข้อมูล เพิ่มค่าตัวนับ (ตัวนับหรือ counter คือตัวแปรที่ปกติเราประกาศกันด้วยชื่อ `i` ใน `for` loop) หรือกำหนดค่าให้ตัวแปรอีกครั้งใน loop 
เราอาจเจอปัญหาคือ บางกรณีตัวแปรควรถูกกำหนดค่าใหม่อีกครั้ง แต่เราไม่ได้กำหนดค่าใหม่ หรือบางครั้งตัวแปรต้องมีค่าเดิมแต่เราไปกำหนดค่าใหม่ทับ
เรื่องนี้ค่อนข้างอันตราย เพราะถ้าคุณไปรีเซ็ตค่าตัวแปรที่ใช้เป็นเงื่อนไขในการจบ loop อาจทำให้โค้ดติดอยู่ใน loop ตลอดไปได้

การพิมพ์ค่าตัวแปรในการวน loop แต่ละรอบออกมา โดยใช้ `console.log()` จะทำให้เราเห็นได้ว่า บัคที่เกิดขึ้นเกี่ยวข้องกับการที่เราเปลี่ยนหรือลืมเปลี่ยนค่าของตัวแปรนี้หรือเปล่า

# --instructions--

ฟังก์ชันที่เราเตรียมให้นี้ต้องทำหน้าที่สร้าง array 2 มิติที่มีแถวจำนวน `m` แถว และคอลัมน์จำนวน `n` คอลัมน์ โดยมีค่าใน array เป็น 0 ทั้งหมด 
แต่ตอนนี้ฟังก์ชันนี้ยังทำงานได้ไม่ถูกเพราะตัวแปร `row` ไม่ได้ถูกกำหนดค่าใหม่ (กำหนดค่ากลับให้เป็น empty array) ใน loop ชั้นนอก
จงแก้โค้ดเพื่อให้ฟังก์ชันนี้คืนค่าเป็น array ขนาด 3x2 (`row`x`column`) ที่มีตัวเลขใน array เป็น 0 ซึ่งค่าที่ถูกจะต้องเป็น `[[0, 0], [0, 0], [0, 0]]`

# --hints--

ถ้าโค้ดถูกตัวแปร `matrix` ต้องเป็น array ที่มี 3 แถว และ 2 คอลัมน์ และโดยมีค่าใน array เป็น 0 ทั้งหมด

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

ตัวแปร `matrix` ควรมี 3 แถว

```js
assert(matrix.length == 3);
```

ตัวแปร `matrix` ควรมี 2 คอลัมน์ ในแต่ละแถว

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

การเรียกใช้ฟังก์ชัน `zeroArray(4,3)` ต้องคืนค่าเป็น array ที่มี 4 แถว 3 คอลัมน์ โดยมีค่าใน array เป็น 0 ทั้งหมด

```js
assert(JSON.stringify(zeroArray(4,3)) == '[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]');
```

# --seed--

## --seed-contents--

```js
function zeroArray(m, n) {
  // สร้าง array 2 มิติที่มีแถวจำนวน m แถว และคอลัมน์จำนวน n คอลัมน์ โดยมีค่าใน array เป็น 0 ทั้งหมด 
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // เพิ่มแถวที่ m ลงในตัวแปร newArray

    for (let j = 0; j < n; j++) {
      // เพิ่ม 0 จำนวน n ตัวเข้าไปในแถวเพื่อสร้างเป็นคอลัมน์
      row.push(0);
    }
    // เพิ่มแถวลงใน array โดยตอนนี้แถวนี้จะมี 0 ทั้งหมด n ตัว
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
  // สร้าง array 2 มิติที่มีแถวจำนวน m แถว และคอลัมน์จำนวน n คอลัมน์ โดยมีค่าใน array เป็น 0 ทั้งหมด 
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
    // เพิ่มแถวที่ m ลงในตัวแปร newArray

   for (let j = 0; j < n; j++) {
      // เพิ่ม 0 จำนวน n ตัวเข้าไปในแถวเพื่อสร้างเป็นคอลัมน์
     row.push(0);
   }
    // เพิ่มแถวลงใน array โดยตอนนี้แถวนี้จะมี 0 ทั้งหมด n ตัว
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```
