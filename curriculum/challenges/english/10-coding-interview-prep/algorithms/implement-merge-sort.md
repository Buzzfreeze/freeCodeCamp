---
id: 587d825c367417b2b2512c8f
title: Implement Merge Sort
challengeType: 1
forumTopicId: 301614
dashedName: implement-merge-sort
---

# --description--

ในแบบทดสอบนี้เราจะจัดเรียงข้อมูลโดยใช้ Merge Sort  
การเรียงลำดับแบบ Merge Sort มีวิธีการคือ แบ่งข้อมูลออกเป็น 2 ส่วน และแต่ละส่วนก็จะแบ่งย่อยออกเป็นอีก 2 ส่วนไปเรื่อยๆ จนไม่สามารถแบ่งได้อีก
แล้วจึงเรียงข้อมูลใหม่ในส่วนย่อย แล้วนำข้อมูลในส่วนย่อยมารวมกัน พร้อมทั้งเรียงข้อมูลไปด้วย จนข้อมูลทุกตัวรวมกันเป็นข้อมูลชุดเดียว

โดยวิธีการจะสรุปได้แบบนี้:

**1)** แบ่งอาร์เรย์ ออกเป็นครึ่งๆ ไปเรื่อยๆ (โดยใช้ Recursion) จนกว่าจะได้อาร์เรย์ย่อยที่มีค่าในนั้นเพียงตัวเดียว

**2)** รวมแต่ละอาร์เรย์ย่อยที่เรียงลำดับแล้ว เข้าด้วยกันเพื่อสร้างอาร์เรย์สุดท้ายที่เรียงแล้ว

วิธีการ Merge sort นี้เป็นวิธีที่มีประสิทธิภาพมากในการจัดเรียงข้อมูล โดยใช้เวลาแค่ O(n log(n)) และยังง่ายต่อการนำไปใช้ จึงทำให้วิธีการนี้เป็นที่นิยมในการใช้จัดเรียงข้อมูล

วิธีการนี้จะเป็นการจัดเรียงข้อมูลแบบสุดท้ายที่เราจะสอนในบทเรียนนี้ แต่ในหัวข้อ tree data structure เราจะมาดูการเรียงข้อมูลแบบ heap sort ซึ่งเป็นอีกวิธีที่มีประสิทธิภาพอีกวิธีหนึ่ง ซึ่งต้องใช้ binary heap ในการนำไปใช้งาน

**คำแนะนำ:** เขียนฟังก์ชัน `mergeSort` ที่รับอาร์เรย์ของจำนวนเต็ม และคืนค่าเป็นอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

วิธีการที่แนะนำคือ เขียนฟังก์ชัน (`merge`) ให้มีหน้าที่รวมอาร์เรย์ที่จัดเรียงแล้ว 2 ชุดเข้าด้วยกัน และอีกฟังก์ชันนึง (`mergeSort`) ทำการ recursion เพื่อสร้างอาร์เรย์ชั้นในสุดที่มีค่าภายในแค่ค่าเดียวเพื่อส่งเข้าไปให้ฟังก์ชัน `merge` ทำงาน


# --hints--

`mergeSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof mergeSort == 'function');
```

`mergeSort` ต้องคืนค่าเป็นอาร์เรย์ (โดยเรียงจากน้อยไปมาก)

```js
assert(
  isSorted(
    mergeSort([
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

`mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ต้องคืนค่าเป็น array ที่มีตัวเลขเติมแต่เปลี่ยนแค่ตำแหน่ง

```js
assert.sameMembers(
  mergeSort([
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

`mergeSort` ต้องไม่ใช้ฟังก์ชัน built-in `.sort()`

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
  mergeSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function mergeSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }

  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }

    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
```
