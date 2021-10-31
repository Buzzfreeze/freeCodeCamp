---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

ในหัวข้อนี้ เราจะจัดเรียงข้อมูลโดยใช้การเลือก

การเรียงลำดับวิธีนี้ ทำได้โดย นำค่าต่ำสุดของรายการ มาสลับกับค่าแรกในรายการ

จากนั้น ให้เริ่มต้นที่ตำแหน่งที่สอง นำค่าที่น้อยที่สุดในรายการที่เหลืออยู่ มาสลับกับค่าที่สอง

วนซ้ำไปที่ ตำแหน่งที่ สอง สาม สี่ ไปเรื่อยๆจนกว่าจะเสร็จทุกรายการในลิส


ในการเรียงลำดับวิธีนี้ จะใช้เวลานานที่สุดกว่าวิธีอื่นๆ


**คำแนะนำ:** เขียนฟังก์ชัน `selectionSort`  ที่รับอาร์เรย์ เป็นจำนวนเต็ม และส่งกลับอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

# --hints--

`selectionSort` ควรเป็น function.

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` ควรได้เป็น array ( โดยเรียงจาก น้อยไปมาก ).

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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ควรเป็น array ที่ไม่เปลี่ยนแปลง ยกเว้นสั่งมัน.

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

`selectionSort`  ต้องไม่ใช้ built-in function`.sort()`.

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
  // Only change code below this line
  return array;
  // Only change code above this line
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
