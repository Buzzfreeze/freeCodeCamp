---
id: 587d825a367417b2b2512c89
title: Implement Quick Sort
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

ในแบบทดสอบนี้เราจะจัดเรียงข้อมูลโดยใช้ Quick Sort  
โดยวิธีการนี้จะเลือกข้อมูลจากอาร์เรย์ขึ้นมาค่าหนึ่ง เป็นค่าหลัก (pivot) แล้วจะใช้ค่านี้เป็นตัวแบ่งข้อมูลที่เหลือเป็นสองอาร์เรย์ย่อย คือส่วนที่น้อยกว่าค่าหลัก และส่วนที่มากกว่าค่าหลัก  
จากนั้นนำแต่ละอาร์เรย์ย่อยไปแบ่งย่อยต่ออีกทีในลักษณะเดียวกัน จนกระทั่งแต่ละส่วนไม่สามารถแบ่งย่อยได้อีก ก็จะได้การจัดเรียงข้อมูลที่ต้องการ

วิธีการ Quick sort นี้เป็นวิธีที่มีประสิทธิภาพในการจัดเรียงข้อมูล โดยจะใช้เวลาแค่ O(n log(n)) และยังง่ายต่อการนำไปใช้ จึงทำให้วิธีการนี้เป็นที่นิยมในการใช้จัดเรียงข้อมูล

**คำแนะนำ:** เขียนฟังก์ชัน `quickSort` ที่รับอาร์เรย์ของจำนวนเต็ม และคืนค่าเป็นอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

ไม่ว่าจะเลือกค่าหลักเป็นอะไรก็สามารถดำเนินการได้ เพื่อความง่าย จะใช้ค่าหลักเป็นตัวแรก หรือตัวสุดท้ายก็ได้

# --hints--

`quickSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof quickSort == 'function');
```

`quickSort` ต้องคืนค่าเป็นอาร์เรย์ (โดยเรียงจากน้อยไปมาก)

```js
assert(
  isSorted(
    quickSort([
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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ต้องคืนค่าเป็น array ที่มีตัวเลขเติมแต่เปลี่ยนแค่ตำแหน่ง

```js
assert.sameMembers(
  quickSort([
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

`quickSort` ต้องไม่ใช้ฟังก์ชัน built-in `.sort()`

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
  quickSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function quickSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];

    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }

    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}
```
