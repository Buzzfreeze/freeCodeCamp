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



วิธีการเรียงลำดับของอาร์เรย์ที่ยังเรียงไม่เสร็จสิ้น  ให้เริ่มจากตัวที่ยังไม่ได้เรียง

นำค่าที่ไม่ได้เรียงลำดับ ไปไว้ยังส่วนท้าย และวนซ้ำผ่านอาร์เรย์ จนกว่าจะได้รับการจัดเรียงอย่างสมบูรณ์

ทำได้โดยเปรียบเทียบรายการที่อยู่ติดกันและสลับกันหากรายการไม่เป็นระเบียบ เมธอดจะวนซ้ำผ่านอาร์เรย์จนกว่าจะไม่มีการสลับเกิดขึ้น ณ จุดที่เรียงลำดับอาร์เรย์

โดยจะทำการเปรียบเทียบรายการที่อยู่ติดกันและสลับกัน หากรายการยังไม่จัดเรียง โดยจะวนซ้ำผ่านอาร์เรย์ไปเรื่อยๆ จนกว่าจะไม่มีการสลับกันเกิดขึ้น

ณ จุดที่ไม่มีการสลับตำแหน่งนั้น คือจุดที่อาร์เรย์นี้จัดเรียงเสร็จสิ้นแล้ว



วิธีการนี้ ต้องใช้การวนซ้ำหลายครั้งในอาร์เรย์ ซึ่งโดยทั่วไปจะใช้เวลานาน

ถึงแม้ว่าวิธีการนี้ จะดูง่าย แต่มันมักจะใช้ไม่ได้ในสถานการณ์ส่วนใหญ่


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
