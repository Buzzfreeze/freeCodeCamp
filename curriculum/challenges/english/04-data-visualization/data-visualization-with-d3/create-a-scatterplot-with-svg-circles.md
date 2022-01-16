---
id: 587d7fab367417b2b2512bd7
title: Create a Scatterplot with SVG Circles
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

scatter plot (กราฟจุดแบบกระจาย) เป็นกราฟอีกรูปแบบที่ใช้แสดงข้อมูลที่แต่ละข้อมูลมีค่าสองค่า โดยจะให้ค่าทั้งสองนี้แสดงในแกน `x` และแกน `y` และค่าสองตัวนี้จะใช้เพื่อระบุตำแหน่งของจุดในกราฟ

SVG มีแท็ก `circle` เพื่อสร้างรูปทรงวงกลม ซึ่งวิธีใช้จะเหมือน `rect` element ที่เราเรียนมาแล้วในการวาดกราฟแท่ง

# --instructions--

ให้ใช้ method `data()`, `enter()`, และ `append()` เพื่อผูกข้อมูลใน `dataset` เข้ากับ `circle` element

**Note:** ตอนนี้จะไม่เห็นวงกลมเพราะว่าเรายังไม่ได้ตั้งค่า attribute ของ `circle`

# --hints--

ต้องมี `circle` ทั้งหมด 10 ตัว

```js
assert($('circle').length == 10);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       // เขียนโค้ดใต้บรรทัดนี้



       // เขียนโค้ดเหนือบรรทัดนี้

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")

  </script>
</body>
```
