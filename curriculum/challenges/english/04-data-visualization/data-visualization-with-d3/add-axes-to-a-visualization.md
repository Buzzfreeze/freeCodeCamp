---
id: 587d7fad367417b2b2512bdf
title: Add Axes  a Visualization
challengeType: 6
forumTopicId: 301472
dashedName: add-axes--a-visualization
---

# --description--

เราจะทำให้ scatter plot ของเราดีขึ้นอีกโดยการเพิ่มแกน x และแกน y เข้าไป

มี method `axisLeft()` และ `axisBottom()` ของ D3 ที่ใช้เพื่อแสดงผลแกน y และแกน x ตามลำดับ 
ตัวอย่างของการสร้างแกน x จาก `xScale` ในแบบทดสอบที่แล้ว

```js
const xAxis = d3.axisBottom(xScale);
```

ขั้นตอนต่อไปคือเราต้องวาดแกน ใน SVG canvas 
ในการวาดแกน เราจะใช้ `g` element (g หมายถึง group) ของ SVG component ได้
ในการวาดเส้นแกนจะไม่เหมือน `rect`, `circle`, และ `text` เพราะว่าเส้นแกนเป็นแค่เส้นตรง เราจึงใช้ `g` element ได้ 
และขั้นสุดท้ายคือการใช้ attribute `transform` กับแกนเพื่อเป็นการวางตำแหน่งของแกนบน SVG canvas 
ถ้าเราไม่ใช้ `transform` เส้นเกนที่เราวาดจะไปอยู่ชิดขอบของ SVG canvas พอดี ทำให้เรามองไม่เห็นเส้นแกนนั้น 
SVG รองรับการ `transform` ได้หลายแบบ แต่ในกรณี้นี้เราจะทำการย้ายตำแหน่งแกน จึงต้องใช้  `translate` (ขยับ)
เมื่อเราใช้ `transfrom` กับ `g` element แล้ว จะทำการย้ายกลุ่มของ element ทั้งกลุ่มไปตามค่าที่เราระบุ 
ลองดูตัวอย่าง:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

โค้ดด้านบนจะวางแกน x ไว้ที่ส่วนล่างของ SVG canvas จากนั้นจะส่ง argument ไปยัง method `call()` โดยที่แกน y ก็จะทำแบบเดียวกัน แต่จะเปลี่ยน argument ของ `translate` เป็น `(x, 0)` แทน
ใน method `attr()` ด้านบน จะเห็นว่า `translate` เป็น string เราจึงใช้วิธีการรวม string เพื่อสร้าง argument ได้
(และจะเห็นว่า `translate` รับ argument สองตัว โดย argument ตัวแรกเป็นระยะขยับในแนวแกน x (ไปทางขวา) และ argument ตัวที่สองเป็นระยะขยับในแนวแกน y (ลงด้านล่าง))

# --instructions--

scatter plot มีแกน x อยู่แล้ว ให้สร้างแกน y ในตัวแปร `yAxis` โดยใช้ method `axisLeft()` 
จากนั้นให้วาดแกนลงในกราฟโดยใช้ `g` element 
อย่าลืมว่าต้องใช้ attribute `transform` เพื่อ `translate` (ขยับ) ไปทางขวาตามค่าของ padding และขยับลง `0` หน่วย
และอย่าลืมใช้ฟังก์ชัน `call()` กับแกนที่สร้าง

# --hints--

ต้องใช้ method `axisLeft()` และส่ง `yScale` ไปเป็น argument

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

`g` element ของแกน y ต้องมี attribute `transform` เพื่อ `translate` แกนตามค่านี้ `(60, 0)`

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

ต้องใช้ฟังก์ชัน `call(yAxis)` ด้วย

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
    // เขียนโค้ดใต้บรรทัดนี้
    const yAxis = undefined;
    // เขียนโค้ดเหนือบรรทัดนี้

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
