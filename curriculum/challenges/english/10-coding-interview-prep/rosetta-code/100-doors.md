---
id: 594810f028c0303b75339acb
title: 100 doors
challengeType: 5
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

มีประตูติดกัน 100 บานที่ปิดทั้งหมดตั้งแต่แรก คุณผ่าน 100 ประตู ในครั้งแรกที่ผ่าน ให้ไปที่ประตูทุกบานแล้ว 'สลับ' ประตู (หากประตูปิดอยู่ ให้เปิด ถ้าเปิดอยู่ ให้ปิด) ครั้งที่สอง เยี่ยมชมทุกประตูที่ 2 (เช่น ประตู #2, #4, #6, ...) และสลับ ครั้งที่สาม เยี่ยมชมประตูที่ 3 ทุก ๆ ประตู (เช่น ประตู #3, #6, #9, ...) ฯลฯ จนกว่าคุณจะเยี่ยมชมประตูที่ 100 เท่านั้น

# --instructions--

ใช้งานฟังก์ชันเพื่อกำหนดสถานะของประตูหลังจากผ่านครั้งสุดท้าย ส่งกลับผลลัพธ์สุดท้ายในarray โดยจะมีเฉพาะหมายเลขประตูที่รวมอยู่ในarrayหากเปิดอยู่

# --hints--

`getFinalOpenedDoors` ควรเป็น function.

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` ควร return array.

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` ควรให้ผลลัพธ์ที่ถูกต้อง

```js
assert.deepEqual(getFinalOpenedDoors(100), solution);
```

# --seed--

## --after-user-code--

```js
const solution = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
```

## --seed-contents--

```js
function getFinalOpenedDoors(numDoors) {

}
```

# --solutions--

```js
function getFinalOpenedDoors(numDoors) {
  // this is the final pattern (always squares).
  // thus, the most efficient solution simply returns an array of squares up to numDoors).
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i++;
  }
  return finalState;
}
```
