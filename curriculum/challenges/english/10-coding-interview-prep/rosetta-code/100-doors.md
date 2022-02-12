---
id: 594810f028c0303b75339acb
title: 100 doors
challengeType: 5
forumTopicId: 302217
dashedName: 100-doors
---

# --description--

มีประตูติดกัน 100 บานที่ปิดอยู่ทั้งหมด และคุณจะมีโอกาสเดินผ่านประตูนี้ 100 รอบ 
(หากประตูปิดอยู่ ให้เปิด ถ้าเปิดอยู่ ให้ปิด) 

ในการเดินผ่านรอบแรก คุณต้องเปิดประตูทุกบานประตู 

ในการเดินผ่านรอบที่สอง ให้ทำการปิดหรือเปิดทุกๆ 2 ประตู (เช่น ประตูที่ 2, ประตูที่ 4, ประตูที่ 6 ฯลฯ) โดยถ้าประตูปิดอยู่ให้เปิด และถ้าประตูเปิดอยู่ให้ปิด 

ในการเดินผ่านรอบที่สาม ให้ทำการปิดหรือเปิดทุกๆ 3 ประตู (เช่น ประตูที่ 3, ประตูที่ 6, ประตูที่ 9 ฯลฯ) 

ให้ทำวนไปเรื่อยๆ จนกว่าคุณจะได้ปิดหรือเปิดแค่ประตูสุดท้ายประตูเดียว

# --instructions--

ให้เขียนฟังก์ชันเพื่อนับว่า หลังจากเดินผ่านประตูรอบที่ 100 แล้ว จะมีประตูไหนเปิดอยู่บ้าง โดยให้ฟังก์ชันนี้คืนค่าเป็น array ที่เก็บค่าหมายเลขของประตูที่เปิดอยู่

# --hints--

`getFinalOpenedDoors` ต้องเป็น function

```js
assert(typeof getFinalOpenedDoors === 'function');
```

`getFinalOpenedDoors` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(getFinalOpenedDoors(100)));
```

`getFinalOpenedDoors` ต้องคืนค่าได้ถูกต้อง

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
