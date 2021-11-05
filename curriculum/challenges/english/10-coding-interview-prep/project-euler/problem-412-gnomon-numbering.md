---
id: 5900f5081000cf542c51001a
title: 'Problem 412: Gnomon numbering'
challengeType: 5
forumTopicId: 302081
dashedName: problem-412-gnomon-numbering
---

# --description--

สำหรับจำนวนเต็ม $m$, $n$ ($0 ≤ n &lt; m$) ให้ $L(m, n)$ เป็นกริด $m×m$ โดยเอากริด $n×n$ ด้านบนขวาออก

ตัวอย่างเช่น $L(5, 3)$ มีลักษณะดังนี้

<img class="img-responsive center-block" alt="5x5 grid, with removed 3x3 grid from the top-right" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-1.png" style="background-color: white; padding: 10px;">

เราต้องการกำหนดหมายเลขแต่ละเซลล์ของ $L(m, n)$ ด้วยจำนวนเต็ม 1, 2, 3, ... เพื่อให้ตัวเลขในทุกเซลล์มีขนาดเล็กกว่าตัวเลขด้านล่างและด้านซ้ายของเซลล์

ตัวอย่างเช่น ต่อไปนี้คือตัวเลขที่ถูกต้องสองค่าของ $L(5, 3)$

<img class="img-responsive center-block" alt="two valid numberings of L(5, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-2.png" style="background-color: white; padding: 10px;">

ห้ $LC(m, n)$ เป็นจำนวนที่ถูกต้องของ $L(m, n)$ สามารถตรวจสอบได้ว่า $LC(3, 0) = 42$, $LC(5, 3) = 250\\,250$, $LC(6, 3) = 406\\,029\\,023\\ ,400$ และ $LC(10, 5)\bmod 76\\,543\\,217 = 61\\,251\\,715$

หา $LC(10\\,000, 5\\,000)\bmod 76\\,543\\,217$

# --hints--

`gnomonNumbering()` ควร return `38788800`.

```js
assert.strictEqual(gnomonNumbering(), 38788800);
```

# --seed--

## --seed-contents--

```js
function gnomonNumbering() {

  return true;
}

gnomonNumbering();
```

# --solutions--

```js
// solution required
```
