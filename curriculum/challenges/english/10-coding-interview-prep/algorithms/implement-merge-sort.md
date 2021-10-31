---
id: 587d825c367417b2b2512c8f
title: Implement Merge Sort
challengeType: 1
forumTopicId: 301614
dashedName: implement-merge-sort
---

# --description--

การเรียงลำดับแบบ merge sort มีวิธีการคือ แบ่งข้อมูลออกเป็น 2 ส่วน และแต่ละส่วนก็จะแบ่งย่อยออกเป็นอีก 2 ส่วนไปเรื่อยๆ จนไม่สามารถแบ่งได้อีก
แล้วจึงเรียงข้อมูลใหม่ในส่วนย่อย แล้วนำข้อมูลในส่วนย่อยมารวมกัน พร้อมทั้งเรียงข้อมูลไปด้วย จนข้อมูลทุกตัวรวมกันเป็นข้อมูลชุดเดียว


**1)** แบ่งอาร์เรย์ ออกเป็นครึ่งๆ จนกว่าจะได้อาร์เรย์ย่อยที่มีค่าในนั้นเพียงตัวเดียว

**2)** รวมแต่ละอาร์เรย์ย่อยที่เรียงลำดับแล้ว เข้าด้วยกันเพื่อสร้างอาร์เรย์สุดท้ายที่เรียงแล้ว


วิธีการ Merge sort นี้เป็นวิธีที่มีประสิทธิภาพมาก ในการจัดเรียงข้อมูล และยังง่ายต่อการนำไปใช้ จึงทำให้วิธีการนี้เป็นที่นิยมในการใช้จัดเรียงข้อมูล



วิธีการนี้จะเป็นการจัดเรียงข้อมูลแบบสุดท้ายที่ จะกล่าวถึงในนี้

แต่ในหัวข้อ data structures เราจะมาดูการเรียงข้อมูลแบบ heap sort ซึ่งเป็นอีกวิธีที่มีประสิทธิภาพอีกวิธีหนึ่ง ซึ่งต้องใช้ binary heap ในการนำไปใช้งาน



 **คำแนะนำ:** เขียนฟังก์ชัน `mergeSort` ที่รับอาร์เรย์ เป็นจำนวนเต็ม และส่งกลับอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

วิธีการที่แนะนำคือ เขียน function ให้มีีหน้าที่รวมอาร์เรย์ที่จัดเรียงแล้ว 2 ชุด เข้าด้วยกัน และอีก function นึงทำหน้าที่เรียกอาร์เรย์ที่มีเพียงค่าเดียว มารวม


# --hints--

`mergeSort` ควรเป็น function.

```js
assert(typeof mergeSort == 'function');
```

`mergeSort` ควรได้เป็น array ( โดยเรียงจาก น้อยไปมาก )

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

`mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ควรเป็น array ที่ไม่เปลี่ยนแปลง ยกเว้นสั่งมัน

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

`mergeSort` ต้องไม่ใช้ built-in function `.sort()`

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
