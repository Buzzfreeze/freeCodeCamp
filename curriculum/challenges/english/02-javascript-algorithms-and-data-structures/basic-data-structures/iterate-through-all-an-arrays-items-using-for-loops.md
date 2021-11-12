---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

บางครั้งเมื่อทำงานกับ array มันจะมีประโยชน์มากในการวนซ้ำแต่ละรายการ เพื่อค้นหา element อย่างน้อยหนึ่ง element ที่เราต้องการ หรือเพื่อจัดการ array โดยพิจารณาว่ารายการข้อมูลใดตรงตามเงื่อนไข ซึ่ง JavaScript มี build in method หลาย method ที่วนซ้ำบน array ด้วยวิธีที่แตกต่างกันเล็กน้อย เพื่อให้ได้ผลลัพธ์ที่แตกต่างกัน (เช่น `every()`, `forEach()`, `map()` เป็นต้น) อย่างไรก็ตาม เทคนิคที่ยืดหยุ่น และทำให้เราสามารถควบคุมได้ดีที่สุด ก็คือ `for` loop ธรรมดาๆ

ลองพิจารณาดังนี้

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

จากตัวอย่างด้านบนเป็นการใช้ `for` loop ภายใน function โดยวนอ่านและเข้าถึงแต่ละ element ของ array เพื่อตรวจสอบว่า item ใดที่มากกว่า `10` จากนั้นคืนค่าเป็น array ใหม่ `[12, 14, 80]` ที่มี item เหล่านั้น

# --instructions--

เราได้ประกาศฟังก์ชัน `filteredArray` ซึ่งรับ arguments 2 ตัว คือ `arr` ที่เป็น nested array และ `elem` แล้วคืนค่าเป็น array ใหม่ โดย `elem` แสดงถึง element ที่อาจมีหรือไม่มีอยู่ใน array ย่อยภายใน `arr` จงแก้ไขฟังก์ชันโดยใช้ `for` loop เพื่อคืนค่าเป็น array เวอร์ชันที่กรองให้เหลือเพียง array ย่อยที่ไม่มี `elem` อยู่ภายใน
# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` ควรคืนค่า `[[10, 8, 3], [14, 6, 23]]`

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

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` ควรคืนค่า `[["flutes", 4]]`

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

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` ควรคืนค่า `[["amy", "beth", "sam"]]`

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

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` ควรคืนค่า `[]`

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

function `filteredArray` ควรใช้ `for` loop

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
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
