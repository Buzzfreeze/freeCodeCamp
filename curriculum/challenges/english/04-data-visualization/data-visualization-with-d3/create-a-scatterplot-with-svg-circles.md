---
id: 587d7fab367417b2b2512bd7
title: Create a Scatterplot with SVG Circles
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

scatter plot เป็นอีกประเภทของ visualization มันใช้เพื่อจับคู่ค่าในแต่ละ data points ที่มีค่าสองจำนวน ค่าเหล่านี้เป็นไปตามแกน `x` และ `y` ค่าเหล่านี้ใช้สำหรับระบุตำแหน่งของวงกลมใน visualization.

SVG มี `circle` tag เพื่อสร้าง circle shape มันทำงานแบบ `rect` elements ที่ใช้สำหรับเพื่อสร้าง bar chart

# --instructions--

ใช้ `data()`, `enter()`, และ `append()` methods เพื่อซ่อนค่าของ `dataset` ให้กับ `circle` elements ที่ค่าเพิ่มให้กับ SVG canvas

**Note:** ตอนนี้จะไม่เห็นวงกลมเพราะว่าเรายังไม่สามารถ set ค่าให้กับ attributes 

# --hints--

ควรมี 10 `circle` elements.

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
       // Add your code below this line



       // Add your code above this line

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
