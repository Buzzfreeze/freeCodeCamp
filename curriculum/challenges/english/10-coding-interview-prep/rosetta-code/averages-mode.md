---
id: 594d8d0ab97724821379b1e6
title: Averages/Mode
challengeType: 5
forumTopicId: 302226
dashedName: averagesmode
---

# --description--

ให้เขียนโปรแกรมเพื่อหา [mode](<https://en.wikipedia.org/wiki/Mode (statistics)> "wp: Mode (statistics)") ของชุดข้อมูล

ไม่ต้องสนใจกรณีที่ชุดข้อมูลไม่มีข้อมูล แต่ต้องใช้ความระมัดระวังในการจัดการกรณีที่โหมดไม่ซ้ำกัน

# --hints--

`mode` ต้องเป็นฟังก์ชัน

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])` ต้องมีค่าเป็น `[6]`

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])` ต้องมีค่าเป็น `[1, 4]`

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
