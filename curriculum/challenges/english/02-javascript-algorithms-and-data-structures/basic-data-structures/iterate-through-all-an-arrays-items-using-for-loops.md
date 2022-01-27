---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

ในการใช้ array เราสามารถใช้การลูป เพื่อค้นหา element ที่เราต้องการใน array หรือเพื่อแก้ไข element ใน array ตามเงื่อนไขได้ 
ซึ่ง JavaScript มี build-in method ตัวที่จะทำการลูป array ด้วยวิธีต่างๆ เพื่อให้ได้ผลลัพธ์ที่แตกต่างกัน (เช่น `every()`, `forEach()`, `map()` ฯลฯ) 
แต่วิธีที่ทำให้เราได้อิสระในการควบคุมมากที่สุดคือการใช้ `for` loop ธรรมดาๆนี่แหละ

ลองดูตัวอย่าง:

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

จากตัวอย่างด้านบนเป็นการใช้ `for` loop ภายในฟังก์ชันโดยวนอ่านและเข้าถึงแต่ละ element ของ array เพื่อตรวจสอบว่า element ไหนมีค่ามากว่า `10` จากนั้นก็คืนค่าเป็น array ใหม่ที่มี element เหล่านั้น `[12, 14, 80]`

# --instructions--

เราได้ประกาศฟังก์ชัน `filteredArray` ให้แล้ว ซึ่งรับ argument 2 ตัว คือ `arr` ที่เป็น nested array และ `elem` แล้วคืนค่าเป็น array ใหม่ 
โดย `elem` เป็น element ที่อาจมีหรือไม่มีอยู่ใน array ที่ซ้อนอยู่ใน `arr` 

จงแก้ไขฟังก์ชันโดยใช้ `for` loop เพื่อคืนค่าเป็น array เวอร์ชันที่กรองให้เหลือแค่ array ชั้นใน ที่ไม่มี `elem` อยู่ภายใน
# --hints--

การเรียกใช้ฟังก์ชัน `filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` ต้องได้ค่าเป็น `[[10, 8, 3], [14, 6, 23]]`

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

การเรียกใช้ฟังก์ชัน `filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` ต้องได้ค่าเป็น `[["flutes", 4]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

การเรียกใช้ฟังก์ชัน `filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` ต้องได้ค่าเป็น `[["amy", "beth", "sam"]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

การเรียกใช้ฟังก์ชัน `filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` ต้องได้ค่าเป็น `[]`

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

ต้องใช `for` loop ในฟังก์ชัน `filteredArray` 

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
