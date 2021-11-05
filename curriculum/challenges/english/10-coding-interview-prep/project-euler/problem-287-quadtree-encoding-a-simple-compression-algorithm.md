---
id: 5900f48b1000cf542c50ff9e
title: 'Problem 287: Quadtree encoding (a simple compression algorithm)'
challengeType: 5
forumTopicId: 301938
dashedName: problem-287-quadtree-encoding-a-simple-compression-algorithm
---

# --description--

การเข้ารหัสแบบ quadtree ช่วยให้เราสามารถอธิบายภาพขาวดำ $2^N×2^N$ เป็นลำดับของbit (0 และ 1) ลำดับเหล่านั้นจะต้องอ่านจากซ้ายไปขวาดังนี้:

- bitแรกเกี่ยวข้องกับภูมิภาค $2^N×2^N$ ที่สมบูรณ์
- "0" หมายถึงการแบ่ง:
  - พื้นที่ $2^n×2^n$ ปัจจุบัน แบ่งออกเป็น 4 ภูมิภาคย่อยของมิติ $2^{n - 1}×2^{n - 1}$,
  - bitถัดไปประกอบด้วยคำอธิบายของภูมิภาคย่อยซ้ายบน ขวาบน ซ้ายล่าง และขวาล่าง - ตามลำดับ
- "10" แสดงว่าภูมิภาคปัจจุบันมีเพียงพิกเซลสีดำเท่านั้น
- "11" แสดงว่าพื้นที่ปัจจุบันมีเพียงพิกเซลสีขาวเท่านั้น

พิจารณาภาพ 4 × 4 ต่อไปนี้ (เครื่องหมายสีแสดงถึงตำแหน่งที่สามารถเกิดการแตกได้):

<img class="img-responsive center-block" alt="4x4 image with colored marks denoting place where split can occur" src="https://cdn.freecodecamp.org/curriculum/project-euler/quadtree-encoding-a-simple-compression-algorithm.gif" style="background-color: white; padding: 10px;">

รูปภาพนี้สามารถอธิบายได้หลายลำดับ เช่น "<strong><span style="color: red">0</span></strong><strong><span style="color: blue">0< /span></strong>10101010<strong><span style="color: green">0</span></strong>1011111011<strong><span style="color: orange">0</span>< /strong>10101010" ยาว 30 หรือ "<strong><span style="color: red">0</span></strong>10<strong><span style="color: green">0< /span></strong>101111101110" ความยาว 16 ซึ่งเป็นลำดับขั้นต่ำสำหรับภาพนี้

สำหรับจำนวนเต็มบวก $N$ ให้กำหนด $D_N$ เป็นรูปภาพ $2^N×2^N$ ด้วยรูปแบบการระบายสีต่อไปนี้:

- พิกเซลที่มีพิกัด $x = 0$, $y = 0$ สอดคล้องกับพิกเซลล่างซ้าย
- ถ้า ${(x - 2^{N - 1})}^2 + {(y - 2^{N - 1})}^2 ≤ 2^{2N - 2}$ แล้ว พิกเซลจะเป็นสีดำ
- มิฉะนั้นพิกเซลจะเป็นสีขาว

ความยาวของลำดับขั้นต่ำที่อธิบาย $D_{24}$ คือเท่าใด

# --hints--

`quadtreeEncoding()` ควร return `313135496`.

```js
assert.strictEqual(quadtreeEncoding(), 313135496);
```

# --seed--

## --seed-contents--

```js
function quadtreeEncoding() {

  return true;
}

quadtreeEncoding();
```

# --solutions--

```js
// solution required
```
