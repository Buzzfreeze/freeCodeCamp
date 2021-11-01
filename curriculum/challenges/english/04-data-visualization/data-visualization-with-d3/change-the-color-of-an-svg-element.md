---
id: 587d7fa9367417b2b2512bd1
title: Change the Color of an SVG Element
challengeType: 6
forumTopicId: 301480
dashedName: change-the-color-of-an-svg-element
---

# --description--

 bars ควรจะอยู่มนตำแหน่งที่ถูกต้อง แต่บางครั้งสีของมันเป็นสีดำ SVG จะช่วยให้สามารถเปลี่ยนสีของ bars ได้

ใน SVG  `rect` shape สามารถกำหนดให้มันได้ด้วย `fill` attribute ซึ่ง support hex codes, color names, และ rgb values รวมไปถึง option ที่ซับซ้อนเช่น gradients และ transparency

# --instructions--

ใช้ `attr()` method ใช้สำหรับกำหนด `fill` ของทุก bars ให้เป็นสี navy

# --hints--

bars ควรมีทุก `fill` color เป็นสี navy

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
       // Add your code below this line



       // Add your code above this line
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
