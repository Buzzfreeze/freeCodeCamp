---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--
ในแบบทดสอบนี้เราจะจัดเรียงข้อมูลโดยใช้ Selection Sort  
การเรียงลำดับวิธีนี้ทำได้โดยนำค่าต่ำสุดในอาร์เรย์มาสลับกับค่าแรกในอาร์เรย์
จากนั้นให้เริ่มต้นที่ตำแหน่งที่สอง โดยนำค่าที่น้อยที่สุดในอาร์เรย์ที่เหลืออยู่ มาสลับกับค่าที่สอง
วนซ้ำไปที่ ตำแหน่งที่ สาม สี่ ห้า ไปเรื่อยๆจนกว่าจะทำครบทุกข้อมูลในอาร์เรย์
ปกติแล้ววิธีการนี้จะมีเวลาในทุก case เป็น O(n<sup>2</sup>)

**คำแนะนำ:** เขียนฟังก์ชัน `selectionSort` ที่รับอาร์เรย์ของจำนวนเต็ม และคืนค่าเป็นอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

# --hints--

`selectionSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` ต้องคืนค่าเป็นอาร์เรย์ (โดยเรียงจากน้อยไปมาก)

```js
assert(
  isSorted(
    selectionSort([
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92
    ])
  )
);
```

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ต้องคืนค่าเป็น array ที่มีตัวเลขเติมแต่เปลี่ยนแค่ตำแหน่ง

```js
assert.sameMembers(
  selectionSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`selectionSort` ต้องไม่ใช้ฟังก์ชัน built-in `.sort()`

```js
assert(isBuiltInSortUsed());
```

# --seed--

## --after-user-code--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}

function isBuiltInSortUsed(){
  let sortUsed = false;
  Array.prototype.sort = () => sortUsed = true;
  selectionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function selectionSort(array) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return array;
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let value = array[minimumIndex];
    array[minimumIndex] = array[i];
    array[i] = value;
  }
    return array;
}
```
