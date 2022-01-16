---
id: 587d7fa8367417b2b2512bcc
title: Display Shapes with SVG
challengeType: 6
forumTopicId: 301485
dashedName: display-shapes-with-svg
---

# --description--

ในแบบทดสอบที่แล้วเราได้สร้าง `svg` ตาม height และ width ที่ระบุแล้ว
โดยเราเห็น `svg` ตัวนั้นได้เพราะในแท็ก `style` ได้มี `background-color` ระบุไว้แล้ว

ขั้นตอนต่อไปคือการใส่รูปทรง (shape) ให้กับ `svg` 
ซึ่ง SVG รองรับรูปทรงหลายแบบ เช่น สี่เหลี่ยมผืนผ้า และวงกลม
เช่น รูปทรงสี่เหลี่ยนผืนผ้า (rectangle:`<rect>`) ซึ่งเราจะเอาไปสร้างแท่งในกราฟแท่งได้

เมื่อเราวางรูปทรงใน `svg` เราจะระบุตำแห่นง `x` และ `y` ของรูปทรงที่เราจะวางได้ 
โดยจุดเริ่มต้น (ที่ x เป็น 0 และ y เป็น 0) จะอยู่ที่มุมซ้ายบน โดยถ้าเพิ่ม `x` รูปทรงจะขยับไปทางขวา และถ้าเพิ่ม `y` รูปทรงจะขยับลง

จากแบบทดสอบที่แล้ว เรามี `svg` ที่กว้าง 500 และสูง 100 ถ้าเราจะวางรูปทรงให้อยู่กลาง `svg` นี้ เราต้องกำหนด `x` เป็น 250 และ `y` เป็น 50

SVG `rect` มี attribute ทั้งหมด 4 ตัว คือตำแหน่ง `x` กับ `y` ที่ใช้ระบุตำแหน่งของรูปทรงนี้ใน `svg` area และ `height` กับ `width` ที่ใช้ระบุขนาดของรูปทรง

# --instructions--

ให้เพิ่ม `rect` ใน `svg` โดยใช้ `append()` โดยกำหนดให้ `width` เป็น `25` และ `height` เป็น `100` และมีตำแหน่ง `x` และ `y` เป็น `0`

# --hints--

ใน document ต้องมี `rect` หนึ่งตัว

```js
assert($('rect').length == 1);
```

`rect` ต้องมี attribute `width` เป็น `25`

```js
assert($('rect').attr('width') == '25');
```

`rect` ต้องมี attribute `height` เป็น `100`

```js
assert($('rect').attr('height') == '100');
```

`rect` ต้องมี attribute `x` เป็น `0`

```js
assert($('rect').attr('x') == '0');
```

`rect` ต้องมี attribute `y` เป็น `0`

```js
assert($('rect').attr('y') == '0');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  // เขียนโค้ดใต้บรรทัดนี้



                  // เขียนโค้ดเหนือบรรทัดนี้
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0);
  </script>
</body>
```
