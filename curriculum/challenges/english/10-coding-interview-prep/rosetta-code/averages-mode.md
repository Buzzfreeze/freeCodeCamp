---
id: 594d8d0ab97724821379b1e6
title: Averages/Mode
challengeType: 5
forumTopicId: 302226
dashedName: averagesmode
---

# --description--

เขียนโปรแกรมหา [mode](<https://en.wikipedia.org/wiki/Mode (statistics)> "wp: Mode (statistics)") ค่าของ collection.

กรณีที่collectionว่างเปล่าอาจถูกละเว้น ต้องใช้ความระมัดระวังในการจัดการกรณีที่โหมดไม่ซ้ำกัน

หากไม่เหมาะสมหรือเป็นไปไม่ได้ที่จะสนับสนุนcollectionทั่วไป ให้ใช้เวกเตอร์ (array) ถ้าเป็นไปได้ หากไม่เหมาะสมหรือเป็นไปไม่ได้ที่จะสนับสนุนประเภทค่าที่ไม่ระบุ ให้ใช้จำนวนเต็ม

# --hints--

`mode` ควรเป็น function.

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])` ควรเท่ากับ `[6]`

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])` ควรเท่ากับ `[1, 4]`.

```js
assert.deepEqual(mode(arr2).sort(), [1, 4]);
```

# --seed--

## --after-user-code--

```js
const arr1 = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
const arr2 = [1, 2, 4, 4, 1];
```

## --seed-contents--

```js
function mode(arr) {

  return true;
}
```

# --solutions--

```js
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}
```
