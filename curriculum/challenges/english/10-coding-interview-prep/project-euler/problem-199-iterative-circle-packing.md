---
id: 5900f4341000cf542c50ff46
title: 'Problem 199: Iterative Circle Packing'
challengeType: 5
forumTopicId: 301837
dashedName: problem-199-iterative-circle-packing
---

# --description--

วงกลมสามวงที่มีรัศมีเท่ากันจะถูกวางไว้ในวงกลมที่ใหญ่กว่า โดยที่วงกลมแต่ละคู่จะสัมผัสกัน และวงกลมด้านในจะไม่ทับซ้อนกัน และมี "ช่องว่าง" ที่เปิดอยู่สี่ช่องซึ่งจะต้องใส่วงกลมเข้าไปในรูปแบบเดิม  
ลองดูรูป:

<img class="img-responsive center-block" alt="a diagram of non-overlapping concentric circles" src="https://cdn-media-1.freecodecamp.org/project-euler/199-circles-in-circles.gif" style="background-color: white; padding: 10px;">

ในการวนซ้ำแต่ละครั้ง วงกลมที่มีขนาดใหญ่สุดจะถูกวางไว้ในแต่ละช่องว่าง ซึ่งจะสร้างช่องว่างมากขึ้นสำหรับการวนซ้ำครั้งต่อไป หลังจากทำซ้ำ 3 ครั้ง (ในภาพ) มีช่องว่าง 108 ช่อง และเศษส่วนของพื้นที่ที่ไม่ครอบคลุมด้วยวงกลมคือ 0.06790342 (ปัดเศษเป็นทศนิยมแปดตำแหน่ง)

ให้หาพื้นที่ที่วงกลมไม่ครอบคลุมหลังจากการวนซ้ำ `n` ให้ตอบเป็นทศนิยม 8 ตำแหน่ง

# --hints--

`iterativeCirclePacking(10)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof iterativeCirclePacking(10) === 'number');
```

`iterativeCirclePacking(10)` ต้องคืนค่าเป็น `0.00396087`

```js
assert.strictEqual(iterativeCirclePacking(10), 0.00396087);
```

`iterativeCirclePacking(3)` ต้องคืนค่าเป็น `0.06790342`

```js
assert.strictEqual(iterativeCirclePacking(3), 0.06790342);
```

# --seed--

## --seed-contents--

```js
function iterativeCirclePacking(n) {

  return true;
}

iterativeCirclePacking(10);
```

# --solutions--

```js
function iterativeCirclePacking(n) {
  let k1 = 1;
  let k0 = k1 * (3 - 2 * Math.sqrt(3));
  let a0 = 1 / (k0 * k0);
  let a1 = 3 / (k1 * k1);
  a1 += 3 * getArea(k0, k1, k1, n);
  a1 += getArea(k1, k1, k1, n);
  let final = ((a0 - a1) / a0).toFixed(8);

  return parseFloat(final);
  function getArea(k1, k2, k3, depth) {
      if (depth == 0) return 0.0;
      let k4 = k1 + k2 + k3 + 2 * Math.sqrt(k1 * k2 + k2 * k3 + k3 * k1);
      let a = 1 / (k4 * k4);
      a += getArea(k1, k2, k4, depth - 1);
      a += getArea(k2, k3, k4, depth - 1);
      a += getArea(k3, k1, k4, depth - 1);
      return a;
  }
}
```
