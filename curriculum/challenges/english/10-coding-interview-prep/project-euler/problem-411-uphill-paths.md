---
id: 5900f5081000cf542c510019
title: 'Problem 411: Uphill paths'
challengeType: 5
forumTopicId: 302080
dashedName: problem-411-uphill-paths
---

# --description--

ให้ $n$ เป็นจำนวนเต็มบวก สมมติว่ามีสถานีอยู่ที่พิกัด $(x, y) = (2^i\bmod n, 3^i\bmod n)$ สำหรับ $0 ≤ i ≤ 2n$ เราจะพิจารณาสถานีที่มีพิกัดเดียวกันเป็นสถานีเดียวกัน

เราต้องการสร้างเส้นทางจาก (0, 0) ถึง ($n$, $n$) เพื่อให้พิกัด $x$ และ $y$ ไม่ลดลง

ให้ $S(n)$ เป็นจำนวนสถานีสูงสุดที่เส้นทางสามารถผ่านได้

เช่น ถ้า $n = 22$ มี 11 สถานีที่แตกต่างกัน และเส้นทางที่ถูกต้องสามารถผ่านได้ไม่เกิน 5 สถานี ดังนั้น $S(22) = 5$ กรณีนี้แสดงไว้ด้านล่าง พร้อมตัวอย่างเส้นทางที่เหมาะสมที่สุด:

<img class="img-responsive center-block" alt="valid path passing through 5 stations, for n = 22, with 11 distinct stations" src="https://cdn.freecodecamp.org/curriculum/project-euler/uphill-paths.png" style="background-color: white; padding: 10px;">

โดยที่ $S(123) = 14$ และ $S(10\\,000) = 48$

ให้หา $\sum S(k^5)$ เมื่อ $1 ≤ k ≤ 30$

# --hints--

`uphillPaths()` ต้องคืนค่าเป็น `9936352`

```js
assert.strictEqual(uphillPaths(), 9936352);
```

# --seed--

## --seed-contents--

```js
function uphillPaths() {

  return true;
}

uphillPaths();
```

# --solutions--

```js
// solution required
```
