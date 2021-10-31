---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

ใดหัวข้อนี้ เราจะใช้วิธีการเรียงลำดับโดยใช้การแทรก

โดยวิธีการคือ  (ในกรณีตัวอย่างนี้ เรียงจากน้อยไปมาก) จะเริ่มจากค่าในอาร์เรยตัวที่ 2 เปรียบเทียบกับตัวก่อนหน้า

ถ้ามากกว่า จะแทรกอยู่หลังตำแหน่งนั้น แต่ถ้าหากน้อยกว่า มันจะไปแทรกที่ตำแหน่งก่อนหน้า

วนซ้ำไปที่ ค่าในอาร์เรย์ตัวที่ สาม สี่ ห้า และสลับตำแหน่งเพื่อแทรกตัวเอง ไปเรื่อยๆจนกว่าจะเสร็จทุกรายการในลิส

โดยทั่วไป วิธีการนี้จะใช้เวลานาน


(กล่าวง่ายๆ คือ นำข้อมูลที่จะทำการจัดเรียงนั้นๆ ไปจัดเรียงทีละตัว โดยการแทรกตัวที่จะเรียงไว้ในตำแหน่งที่เหมาะสมของข้อมูล

เปรียบเทียบค่ากับตำแหน่งก่อนหน้า แล้วสลับตำแหน่งให้อยู่ในตำแหน่งที่เหมาะสม)


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
