---
id: 587d7faa367417b2b2512bd3
title: Style D3 Labels
challengeType: 6
forumTopicId: 301492
dashedName: style-d3-labels
---

# --description--

D3 methods สามารถเพิ่ม styles ให้กับ bar labels `fill` attribute ถูกใช้เพื่อกำหนดสีของ text สำหรับ `text` node และ `style()` method ใช้กำหนดค่า CSS rules ให้กับ styles อื่นๆเช่น `font-family` หรือ `font-size`

# --instructions--

กำหนด `font-size` สำหรับ `text` elements เป็น `25px` และสีของ text ให้ใช้ red

# --hints--

ทุก labels ควรมี `fill` color ที่เป็น red

```js
assert($('text').css('fill') == 'rgb(255, 0, 0)');
```

ทุก labels ควรมี `font-size` เป็น `25` pixels.

```js
assert($('text').css('font-size') == '25px');
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .style("font-size", 25)
       .attr("fill", "red")
  </script>
</body>
```
