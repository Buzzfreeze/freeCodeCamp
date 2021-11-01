---
id: 587d7fad367417b2b2512bdf
title: Add Axes  a Visualization
challengeType: 6
forumTopicId: 301472
dashedName: add-axes--a-visualization
---

# --description--

พัฒนาทักษะด้าน scatter plot โดยการเพิ่ม  x-axis และ y-axis

D3 มีสอง methods, `axisLeft()` และ `axisBottom()` สำหรับการ render แกน y-axis และ x-axis ตามลำดับ 
ตัวอย่างของการสร้าง x-axis จาก `xScale` ในโจทย์ก่อนหน้า

```js
const xAxis = d3.axisBottom(xScale);
```

ขั้นตอนต่อไปสำหรับ render แกน ใน SVG canvas สามารถใช้ SVG component ได้โดย `g` element ที่หมายถึง group ไม่เหมือน  `rect`, `circle`, และ `text`, ที่แกนจะเป็นเหมือนเส้นตรงเมื่อทำการ render เพราะว่าเป็น simple shape ในขั้นตอนสุดท้ายคือ apply `transform` attribute ให้แต่ละ position บนแกนใน SVG canvas เส้นตรงทีุู่ก render จะอยู่ชิดขอบของ SVG canvas และจะไม่ปรากฏให้เห็น SVG support ถึง types ที่แตกต่างของแต่ละ `transforms` แต่สำหรับ position บนแกนจำเป็นต้องใช้ `translate` เมื่อมันถูก apply ให้กับ `g` element มันจะย้าย group ทั้งหมดลงตามค่าที่กำหนด ตามตัวอย่างข้างล่าง

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

code ด้านบนสามารถอธิบายได้ว่า วางแกน x ไว้ที่ bottom ของ SVG canvas จากนั้น pass argument `call()` method โดยที่แกน y ก็ทำแบบเดียวกัน ยกเว้น `translate` argument ที่อยู่อยู่ในรูปของ `(x, 0)` เนื่องจาก `translate` เป็น string ใน `attr()` method ด้านบน คุณสามารถใช้วิธี concatenation เพื่อรวมค่าสำหรับ arguments

# --instructions--

scatter plot มี x-axisอยู่แล้ว ให้สร้าง y-axis พร้อมกับ variable named `yAxis` โดยใช้ `axisLeft()` method จากนั้นให้ render แกนโดยใช้ `g` element ตรวจสอบเพื่อให้มั่นใจว่า `transform` attribute  ได้ทำการ translate แกนโดยตามจำนวน padding ได้อย่างถูกต้องและไม่มี `0` units down 
อย่าลืม  `call()` axis

# --hints--

ควรจะใช้ `axisLeft()` method และ `yScale` เพื่อ passed argument.

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

y-axis `g` element ควรมี `transform` attribute เพื่อ translate แกนจาก `(60, 0)`.

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

ควรเรียกใช้ `yAxis`

```js
assert(code.match(/\.call\(\s*yAxis\s*\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    
    const yAxis = d3.axisLeft(yScale);
    

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>
```
