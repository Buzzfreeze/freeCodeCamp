---
id: 587d7fa9367417b2b2512bd1
title: Change the Color of an SVG Element
challengeType: 6
forumTopicId: 301480
dashedName: change-the-color-of-an-svg-element
---

# --description--

ตอนนี้กราฟแท่งของเราไม่กลับหัวแล้ว แต่ว่ากราฟของเรายังเป็นสีดำอยู่เลย เราสามารถเปลี่ยนสีของกราฟที่เป็น SVG ได้ด้วย

เรากำหนดสีของ `rect` ใน SVG ได้โดยการใช้ attribute `fill` ซึ่งรองรับสีในรูปแบบ hex code (เช่น `#CC0000`), color name (เช่น `red`), และ rgb value (เช่น `rgb(204, 0, 0)`) รวมไปถึงรูปแบบสีที่ซับซ้อนเช่น gradient (การไล่สี) และ transparency (การปรับความโปร่งของสี)

# --instructions--

ใช้ method `attr()` เพื่อกำหนดให้ `fill` ของกราฟทุกแท่งเป็นสี `navy`

# --hints--

กราฟทุกแท่งต้องมี `fill` เป็น `navy`

```js
assert($('rect').css('fill') == 'rgb(0, 0, 128)');
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
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
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
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

  </script>
</body>
```
