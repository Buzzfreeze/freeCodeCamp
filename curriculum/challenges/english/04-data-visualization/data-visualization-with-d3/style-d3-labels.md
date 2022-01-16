---
id: 587d7faa367417b2b2512bd3
title: Style D3 Labels
challengeType: 6
forumTopicId: 301492
dashedName: style-d3-labels
---

# --description--

เราใช้ method ของ D3 เพื่อเพิ้ม style ให้กับให้กับ label ได้ 
โดยจะใช้ attribute `fill` เพื่อกำหนดสีของข้อความในสำหรับ `text` และใช้ method `style()` เพื่อกำหนด CSS อื่นๆ เช่น `font-family` หรือ `font-size`

# --instructions--

ให้ `text` มี `font-size` เป็น `25px` และและมีข้อความเป็นสี `red`

# --hints--

label ต้องมี `fill` เป็น `red`

```js
assert($('text').css('fill') == 'rgb(255, 0, 0)');
```

label ต้องมี `font-size` เป็น `25` พิกเซล

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
