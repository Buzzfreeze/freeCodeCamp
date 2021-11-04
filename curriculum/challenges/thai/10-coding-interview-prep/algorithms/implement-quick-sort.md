---
id: 587d825a367417b2b2512c89
title: Implement Quick Sort
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

การเรียงลำดับแบบ Quick Sort โดยวิธีการนี้ จะเลือกข้อมูลจากกลุ่มข้อมูลขึ้นมาค่าหนึ่ง เป็นค่าหลัก(pivot) แล้วหาตำแหน่งที่ถูกต้องของค่าหลักนี้

เมื่อได้ตำแหน่งทีถูกต้องแล้วจะใช้ค่านี้เป็นตัวแบ่งข้อมูลที่เหลือเป็น สองส่วน(2-partition)  คือ น้อยกว่า และ มากกว่า ค่าหลักนั้น

จากนั้นนำแต่ละส่วนย่อยไปแบ่งย่อยต่ออีกทีในลักษณะเดียวกัน แบ่งจนกระทั่งแต่ละส่วนไม่สามารถแบ่งย่อยได้อีก ก็จะได้การจัดเรียงข้อมูลที่ต้องการ


วิธีการ Quick sort นี้เป็นวิธีที่มีประสิทธิภาพในการจัดเรียงข้อมูล และยังง่ายต่อการนำไปใช้ จึงทำให้วิธีการนี้เป็นที่นิยมในการใช้จัดเรียงข้อมูล


**คำแนะนำ:** เขียนฟังก์ชัน `quickSort` ที่รับอาร์เรย์ เป็นจำนวนเต็ม และส่งกลับอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

ไม่ว่าจะเลือกค่าหลักเป็นอะไร ก็สามารถทำข้อนี้ได้ เพื่อความง่าย จะใช้ค่าหลักเป็นตัวแรก หรือ ตัวสุดท้ายก็ได้

# --hints--

`quickSort` ควรเป็น function.

```js
assert(typeof quickSort == 'function');
```

`quickSort` ควรได้เป็น array ( โดยเรียงจาก น้อยไปมาก )

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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ควรเป็น array ที่ไม่เปลี่ยนแปลง ยกเว้นสั่งมัน

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

`quickSort` ต้องไม่ใช้ built-in function`.sort()`

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
