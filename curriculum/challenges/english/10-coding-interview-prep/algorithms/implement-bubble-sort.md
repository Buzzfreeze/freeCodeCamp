---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
forumTopicId: 301612
dashedName: implement-bubble-sort
---

# --description--

คุณจะได้ทำการ sort (เรียง) หลายๆแบบ และแบบทดสอบนี้เป็นแบบทดสอบแรกที่คุณจะได้ลองทำการ sort  
คุณจะได้เรียนการ sort หลายๆแบบ และจะได้เรียนข้อดีข้อเสียของการ sort แต่ละแบบ 
แม้ว่าในปัจจุบันภาษาสมัยใหม่ส่วนใหญจะมีฟังก์ชันแบบ built-in มาช่วยใน sort แล้ว แต่ความเข้าใจในพื้นฐาน และเรียนรู้วิธีนำไปใช้ ก็ยังเป็นเรื่องสำคัญ

ในแบบทดสอบนี้คุณจะได้เรียนเรื่อง Bubble Sort  
การ sort วิธีนี้จะอ่านค่าในอาร์เรย์จากหน้าไปหลังทีละสองค่า โดยเมื่ออ่านค่าสองค่านั้นแล้ว จะทำการเปรียบเทียบ และสลับตำแหน่งของข้อมูลสองค่านั้นตามลำดับ
จากนั้นจะทำการวนซ้ำไปเรื่อยๆ จนกว่าค่าทั้งหมดจะถูกเรียงอย่างถูกต้อง  
โดยในการตรวจสอบว่าอาร์เรย์ได้เรียงอย่างถูกต้องแล้ว จะดูจากการที่ในการวนซ้ำรอบนั้นๆ ไม่มีการเรียงใหม่เกิดขึ้น

วิธีการนี้ต้องใช้การวนซ้ำหลายครั้งในอาร์เรย์ ซึ่งโดยทั่วไปจะใช้เวลานาน
ปกติแล้ววิธีการนี้จะมีทั้งเวลาเฉลี่ยและเวลาใน worst case เป็น O(n<sup>2</sup>)
ถึงแม้ว่าวิธีการนี้จะดูง่าย แต่ก็มักจะใช้ไม่ได้ในสถานการณ์ส่วนใหญ่

**คำแนะนำ:** เขียนฟังก์ชัน "bubbleSort" ที่รับอาร์เรย์ของตัวเลขจำนวนเต็ม และคืนค่าเป็นอาร์เรย์ของจำนวนเต็มเหล่านี้ โดยเรียงลำดับจากน้อยไปมาก

# --hints--

`bubbleSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof bubbleSort == 'function');
```

`bubbleSort` ต้องคืนค่าเป็นอาร์เรย์ (โดยเรียงจากน้อยไปมาก)

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

`bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` ต้องคืนค่าเป็น array ที่มีตัวเลขเดิมแต่เปลี่ยนแค่ตำแหน่ง

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

`bubbleSort` ต้องไม่ใช้ฟังก์ชัน built-in `.sort()`

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return array;
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
