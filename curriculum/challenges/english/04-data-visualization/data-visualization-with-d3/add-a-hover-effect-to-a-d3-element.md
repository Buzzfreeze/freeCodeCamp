---
id: 587d7faa367417b2b2512bd4
title: Add a Hover Effect to a D3 Element
challengeType: 6
forumTopicId: 301469
dashedName: add-a-hover-effect-to-a-d3-element
---

# --description--

เราสามารถเพิ่มเอฟเฟกต์เช่น ให้แท่งกราฟเปลี่ยนสีเมื่อผู้ใช้เอาเมาส์ไปชี้ (hovers) ได้
เท่าที่เราได้ทำกันมา การใส่ style ลงใน `rect` เราได้ใช้แค่ method ของ D3 กับ SVG แต่จริงๆแล้วเราก็ใช้ CSS ได้ด้วย

ให้ระบุ class ของ CSS ให้กับ SVG element โดยใช้ method `attr()` เราได้เขียน pseudo-class ที่เป็น `:hover` ให้แล้ว ซึ่ง pseudo-class นี้จะเป็นตัวที่ควบคุมลักษณะของ element ของคุณเมื่อเอาเมาส์ไปชี้

# --instructions--

ให้ใช้ method `attr()` เพื่อให้ `rect` ทุกตัวมี class เป็น `bar` ซึ่งจะเปลี่ยนสี `fill` ของแท่งกราฟไปเป็น `brown` เมื่อนำเมาส์ไปชี้ที่แท่งกราฟ

# --hints--

 `rect` ต้องมี class เป็น `bar`

```js
assert($('rect').attr('class').trim().split(/\s+/g).includes('bar'));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("fill", "navy")
       // เขียนโค้ดใต้บรรทัดนี้



       // เขียนโค้ดเหนือบรรทัดนี้

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

  </script>
</body>
```

# --solutions--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("fill", "navy")
       // เขียนโค้ดใต้บรรทัดนี้
       .attr('class', 'bar')
       // เขียนโค้ดเหนือบรรทัดนี้

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);
  </script>
</body>
```
