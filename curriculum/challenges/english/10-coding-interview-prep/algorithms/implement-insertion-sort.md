---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

ในแบบทดสอบนี้เราจะจัดเรียงข้อมูลโดยใช้ Insertion Sort  
โดยวิธีนี้จะเริ่มจากการเรียงจากต้นอาร์เรย์ โดยการดึงค่าแรกของอาร์เรย์ตั้งต้นมาก่อน และเมื่อดึงค่าถัดไปจะทำการตรวจสอบว่าค่านี้ควรอยู่หน้าหรือหลังค่าก่อนหน้า และทำย้อนไปเรื่อยๆ เมื่อเจอตำแหน่งที่ถูกต้องแล้วก็จะแทรกค่านี้ลงไป และขยับไปดูค่าต่อไปต่อ และก็จะทำการวนซ้ำไปเรื่อยๆจนอ่านค่าครบทุกตัว
ปกติแล้ววิธีการนี้จะมีทั้งเวลาเฉลี่ยและเวลาใน worst case เป็น O(n<sup>2</sup>) 

**คำแนะนำ:** เขียนฟังก์ชัน `insertionSort` ที่รับอาร์เรย์ของจำนวนเต็ม และคืนค่าเป็นอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

# --hints--

`insertionSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` ต้องคืนค่าเป็นอาร์เรย์ (โดยเรียงจากน้อยไปมาก)

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

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ต้องคืนค่าเป็น array ที่มีตัวเลขเติมแต่เปลี่ยนแค่ตำแหน่ง

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

`insertionSort` ต้องไม่ใช้ฟังก์ชัน built-in `.sort()`

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
