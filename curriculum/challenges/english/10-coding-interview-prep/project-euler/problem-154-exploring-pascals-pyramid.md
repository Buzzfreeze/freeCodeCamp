---
id: 5900f4071000cf542c50ff19
title: 'Problem 154: Exploring Pascal''s pyramid'
challengeType: 5
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

triangular pyramid ถูกสร้างขึ้นโดยใช้ลูกบอลทรงกลม โดยวางซ้อนอยู่บนลูกบอลสามลูกด้านล่าง

<img class="img-responsive center-block" alt="triangular pyramid constructed using spherical balls with four levels" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;">

จากนั้น เราคำนวณจำนวนเส้นทางที่นำจากจุดยอดไปยังแต่ละตำแหน่งได้ดังนี้  
เส้นทางเริ่มต้นที่จุดยอดและเลื่อนลงไปยังทรงกลมทั้งสามอันที่อยู่ด้านล่างตำแหน่งปัจจุบันโดยตรง ดังนั้นจำนวนเส้นทางที่จะไปถึงตำแหน่งใดตำแหน่งหนึ่งคือผลรวมของตัวเลขที่อยู่เหนือตำแหน่งนั้น (จะมีตัวเลขอยู่ด้านบนได้สูงสุดสามตัว)

ผลลัพธ์คือปิรามิดของ Pascal และตัวเลขในแต่ละระดับ n คือสัมประสิทธิ์ของการขยายตัวแบบสามตัวแปร ${(x + y + z)}^n$

ค่าสัมประสิทธิ์การขยายตัวของ ${(x + y + z)}^{200000}$ เป็นจำนวนกี่เท่าของ ${10}^{12}$

# --hints--

`pascalsPyramid()` ต้องคืนค่าเป็น `479742450`

```js
assert.strictEqual(pascalsPyramid(), 479742450);
```

# --seed--

## --seed-contents--

```js
function pascalsPyramid() {

  return true;
}

pascalsPyramid();
```

# --solutions--

```js
// solution required
```
