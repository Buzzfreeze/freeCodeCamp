---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
forumTopicId: 301612
dashedName: implement-bubble-sort
---

# --description--

ในหัวข้อนี้เราจะให้อาร์เรย์ ที่ยังไม่ได้มีการจัดเรียง แล้วจะให้จัดเรียงอาร์เรย์นี้

มีหลายวิธีการในการทำ พยายามเรียนรู้วิธีการต่างๆ แม้ว่าในปัจจุบันภาษาสมัยใหม่ส่วนใหญจะมี built-in มาช่วยในการจัดเรียง

แต่ก็ยังเป็นเรื่องสำคัญที่ควรจะต้องเข้าใจวิธีการพื้นฐานทั่วไปและเรียนรู้วิธีนำไปใช้


การจัดเรียงข้อมูลแบบ Bubble Sort เป็นการเปรียบเทียบข้อมูลที่อยู่ใกล้เคียงกันและสลับตำแหน่งกัน ถ้าไม่ตรงตามข้อกำหนดที่กำหนดไว้ เช่นกำหนดให้จัดเรียงข้อมูลจากน้อยไปหาจาก เป็นต้น

โดยการจัดเรียงข้อมูลแบบ Bubble Sort เริ่มจากเปรียบเทียบข้อมูลใน ตำแหน่งแรก(ตำแหน่งที่ 0) กับข้อมูลในตำแหน่งถัดไป(ตำแหน่งที่ 1) ในอาร์เรย์ ถ้าไม่ตรงตามข้อกำหนดที่กำหนดไว้ให้สลับข้อมูลกัน

แล้วเปรียบเทียบข้อมูลคู่ต่อไป คือ ข้อมูลตำแหน่งที่ 1 กับตำแหน่งที่ 2 ว่าข้อมูลทั้งสองเป็นไปตามข้อกำหนดหรือไม่ ถ้าไม่ตรงก็ให้สลับข้อมูลกัน ทำแบบนี้จนกระทั่งถึงข้อมูลตำแหน่งสุดท้ายในอาร์เรย์


วิธีการนี้ ต้องใช้การวนซ้ำหลายครั้งในอาร์เรย์ ซึ่งโดยทั่วไปจะใช้เวลานาน

ถึงแม้ว่าวิธีการนี้ จะดูง่าย แต่มักจะใช้ไม่ได้ในสถานการณ์ส่วนใหญ่


**คำแนะนำ:** เขียนฟังก์ชัน "bubbleSort" ที่รับอาร์เรย์ เป็นจำนวนเต็ม และส่งกลับอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

# --hints--

`bubbleSort` ควรเป็น function.

```js
assert(typeof bubbleSort == 'function');
```

`bubbleSort` ควรได้เป็น array ( โดยเรียงจาก น้อยไปมาก ).

```js
assert(
  isSorted(
    bubbleSort([
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

`bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ควรเป็น array ที่ไม่เปลี่ยนแปลง ยกเว้นสั่งมัน

```js
assert.sameMembers(
  bubbleSort([
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

`bubbleSort` ต้องไม่ใช้ built-in function `.sort()`

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
  bubbleSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function bubbleSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j-1];
        array[j-1] =  array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}
```
