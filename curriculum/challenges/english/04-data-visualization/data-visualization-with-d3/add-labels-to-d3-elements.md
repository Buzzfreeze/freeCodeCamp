---
id: 587d7faa367417b2b2512bd2
title: Add Labels to D3 Elements
challengeType: 6
forumTopicId: 301476
dashedName: add-labels-to-d3-elements
---

# --description--

เราใช้ D3 เพื่อเพิ่ม label (คำอธิบายกราฟ) ให้กับกราฟของเราได้ โดยใช้ element `text` ของ SVG

`text` ก็เหมือนกับ `rect` ตรงที่จำเป็นต้องระบุ `x` และ `y` เพื่อแสดงค่าบน canvas ของ SVG และ `text` จำเป็นต้องเข้าถึงข้อมูลด้วย เพื่อที่จะได้แสดง label ได้


# --instructions--

ใน code editor เราได้ผูกข้อมูลไว้กับ `text` แต่ละตัวให้แล้ว 
ให้เริ่มจากการเพิ่ม `text` เข้าไปใน `svg` จากนั้นให้ระบุ attribute `x` และ `y` ให้กับ `text` 
โดยให้วิธีการคำนวนตำแหน่ง `x` และ `y` เหมือนกับ `rect` แต่ต้องให้ `y` ของ `text` อยู่สูงกว่ากราฟแท่งไป 3 หน่วย 
และสุดท้ายใช้ method `text()` ของ D3 เพื่อแสดง label เป็นค่าของข้อมูล

**Note:** ให้ลองคิดว่าการคำนวนตำแหน่ง `y` ให้ label ที่อยู่สูงกว่ากราฟแท่ง ต้องให้ `y` ของ `text` มากกว่าหรือน้อยกว่า `y` ของของกราฟแท่ง

# --hints--

`text` ตัวที่ 1 ต้องแสดงค่า `12` และมี `y` เป็น `61`

```js
assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
```

`text` ตัวที่ 2 ต้องแสดงค่า `31` และมี `y` เป็น `4`

```js
assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
```

`text` ตัวที่ 3 ต้องแสดงค่า `22` และมี `y` เป็น `31`

```js
assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
```

`text` ตัวที่ 4 ต้องแสดงค่า `17` และมี `y` เป็น `46`

```js
assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
```

`text` ตัวที่ 5 ต้องแสดงค่า `25` และมี `y` เป็น `22`

```js
assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
```

`text` ตัวที่ 6 ต้องแสดงค่า `18` และมี `y` เป็น `43`

```js
assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
```

`text` ตัวที่ 7 ต้องแสดงค่า `29` และมี `y` เป็น `10`

```js
assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
```

`text` ตัวที่ 8 ต้องแสดงค่า `14` และมี `y` เป็น `55`

```js
assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
```

`text` ตัวที่ 9 ต้องแสดงค่า `9` และมี `y` เป็น `70`

```js
assert($('text').eq(8).text() == '9' && $('text').eq(8).attr('y') == '70');
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
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // เขียนโค้ดใต้บรรทัดนี้




       // เขียนโค้ดเหนือบรรทัดนี้
  </script>
<body>
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

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d) => d)
  </script>
<body>
```
