---
id: 587d7faa367417b2b2512bd2
title: Add Labels to D3 Elements
challengeType: 6
forumTopicId: 301476
dashedName: add-labels-to-d3-elements
---

# --description--

D3 สามารถเพิ่ม label ให้กับ graph element เช่น bar ได้โดยใช้ SVG `text` element

เหมือนเช่นกับ`rect` element และ `text` element ที่จำเป็นต้องมี `x` และ`y` attributes เพื่อแสดงค่าบน SVG canvas
แต่ยังคงยังจำเป็นที่จะต้องเข้าถึงข้อมูลเพื่อแสดงค่าเหล่านั้น


# --instructions--

code ใน editor ยังถูก binds data ไว้สำหรับแต่ละ `text` element  เราสามารถเพิ่มให้มันได้ เริ่มจากการเพิ่ม `text` nodes ให้กับ `svg` จากนั้นเพิ่ม attributes สำหรับ `x` และ `y` coordinates พวกมันยังสามารถคำนวนได้เหมือนกับ `rect`  ยกเว้นค่า `y` สำหรับ `text` ควรให้ label อยู่สูงกว่า bar ไป 3 units สุดท้ายใช้ D3 `text()` method เพื่อ set label ให้เท่ากับค่าของ data points

**Note:** สำหรับ label ที่อยู่สูงกว่า bar ใหเคิดดังนี้ เช่นค่า `y` ของ `text`  ควรมากกว่า 3 หรือ `y` ของ bar ควรน้อยกว่า 3

# --hints--

อันดับที่ 1 `text` element ควรมี label ของ `12` และค่า `y` เป็น `61`

```js
assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
```

อันดับที่ 2 `text` element ควรมี label ของ `31` และค่า `y` เป็น `4`.

```js
assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
```

อันดับที่ 3 `text` element ควรมี label ของ `22` แยะค่า `y` เป็น `31`.

```js
assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
```

อันดับที่ 4 `text` element ควรมี label ของ `17` และค่า `y` เป็น `46`.

```js
assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
```

อันดับที่ 5 `text` element ควรมี label ของ `25` และค่า `y` เป็น `22`.

```js
assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
```

อันดับที่ 6 `text` element ควรมี label ของ `18` และค่า `y` เป็น `43`.

```js
assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
```

อันดับที่ 7 `text` element ควรมี label ของ `29` และค่า `y` เป็น `10`.

```js
assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
```

อันดับที่ 8 `text` element ควรมี label ของ `14` และค่า `y` เป็น `55`.

```js
assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
```

อันดับที่ 9 `text` element ควรมี label ของ `9` และค่า `y` เป็น `70`.

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
       // Add your code below this line




       // Add your code above this line
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
