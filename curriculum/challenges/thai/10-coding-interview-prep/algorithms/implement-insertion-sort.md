---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

การจัดเรียงข้อมูลแบบ Insertion Sort จะแยกส่วนข้อมูลออกเป็น 2 ส่วน คือ ข้อมูลส่วนที่จัดเรียงแล้ว และข้อมูลส่วนที่ยังไม่ได้จัดเรียง

เริ่มจากนำข้อมูลในอาร์เรย์ตำแหน่งที่ 0 คือ 55 กำหนดให้เป็นส่วนที่จัดเรียง และข้อมูลในตำแหน่งที่ 1 เป็นข้อมูลแรกในส่วนที่ยังไม่ได้จัดเรียงข้อมูล คือ 20

มาอยู่ในกลุ่มจัดเรียงข้อมูล แล้วจัดเรียงใหม่เฉพาะในกลุ่มจัดเรียงข้อมูล ต่อไปนำข้อมูลแรกในกลุ่มที่ไม่ได้จัดเรียง คือ 50 เพิ่มเข้าไปในส่วนกลุ่มจัดเรียง แล้วจัดเรียงใหม่ในกลุ่มจัดเรียงข้อมูล

ทำอย่างนี้จนถึงข้อมูลสุดท้ายของกลุ่มข้อมูลที่ยังไม่ได้จัดเรียงข้อมูล

ตัวอย่างจากด้านบน   แสดงข้อมูลในอาร์เรย์

55, 20, 50, 65, 43    คัดลอก 20
55, 55, 50, 65, 43    เลื่อน 55 มาตำแหน่งถัดไป
20, 55, 50, 65, 43    เพิ่ม 20, คัดลอก 50

20, 55, 55, 65, 43    เลื่อน 55
20, 50, 55, 65, 43    เพิ่ม 50,คัดลอก 65
20, 50, 55, 65, 43    คัดลอก 43

20, 50, 50, 55, 65    เลื่อน 65, 55, 50
20, 43, 50, 55, 65    เพิ่ม 43
20, 43, 50, 55, 65    ผลการจัดเรียง


โดยทั่วไป วิธีการนี้จะใช้เวลานาน

**คำแนะนำ:** เขียนฟังก์ชัน `insertionSort`  ที่รับอาร์เรย์ เป็นจำนวนเต็ม และส่งกลับอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

# --hints--

`insertionSort` ควรเป็น function.

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` ควรได้เป็น array ( โดยเรียงจาก น้อยไปมาก ).

```js
assert(
  isSorted(
    insertionSort([
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

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ควรเป็น array ที่ไม่เปลี่ยนแปลง ยกเว้นสั่งมัน.

```js
assert.sameMembers(
  insertionSort([
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

`insertionSort([5, 4, 33, 2, 8])` ควรได้ผลลัพธ์เป็น `[2, 4, 5, 8, 33]`.

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` ต้องไม่ใช้ built-in function `.sort()`

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
  insertionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function insertionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function insertionSort (array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let current = array[currentIndex];
    let j = currentIndex - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```
