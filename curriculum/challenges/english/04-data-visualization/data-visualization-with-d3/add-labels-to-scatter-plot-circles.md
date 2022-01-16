---
id: 587d7fab367417b2b2512bd9
title: Add Labels to Scatter Plot Circles
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

เราเพิ่ม label สำหรับจุดข้อมูลแต่ละจุดใน scatter plot ได้ด้วย

เราต้องแสดงค่าของ (`x`) และ (`y`) ของข้อมูลแต่ละตัวใน `dataset` โดยคั่นค่าของ `x` และ `y` ด้วยคอมม่า เช่น `1,2`

คุณต้องระบุ `x` และ `y` ของ `text` เพื่อบอกตำแหน่งใน SVG canvas โดยที่ค่า `y` สามารถใช้ค่าเดียวกันกับ `cy` ของ `circle` ได้ และให้ค่า `x` มากกว่า `cx` ของ `circle` เล็กน้อย 
การกำหนดตำแหน่งแบบนี้จะทำให้เราอ่านค่าของ label ด้วยตาได้ โดยที่ label จะแสดงไว้ที่ขวามือของตำแหน่งนั้นๆ

# --instructions--

ให้สร้าง label ของข้อมูลแต่ละจุดบน scatter plot โดยใช้ element `text` โดย ข้อความของ label จะต้องเป็น `x` คอมม่า `y` เช่น ในจุดแรกต้องแสดงเป็น `34, 78` 
โดยให้กำหนดให้ `x` มากกว่า `cx` ของ `circle` อยู่ `5` หน่วย และให้ `y` มีค่าเท่ากับ `cy` ของ `circle`

# --hints--

ต้องมี `text` 10 ตัว

```js
assert($('text').length == 10);
```

label ตัวที่ 1 ต้องมีข้อความเป็น `34, 78`, ค่า `x` เป็น `39`, และค่า `y` เป็น `422`

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

label ตัวที่ 2 ต้องมีข้อความเป็น `109, 280`, ค่า `x` เป็น `114`,และค่า `y` เป็น `220`

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

label ตัวที่ 3 ต้องมีข้อความเป็น of `310, 120`, ค่า `x` เป็น `315`, และค่า `y` เป็น `380`

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

label ตัวที่ 4 ต้องมีข้อความเป็น `79, 411`, ค่า `x` เป็น `84`, และค่า `y` เป็น `89`

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

label ตัวที่ 5 ต้องมีข้อความเป็น`420, 220`, ค่า `x` เป็น `425`, และค่า `y` เป็น `280`

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

ุlabel ตัวที่ 6 ต้องมีข้อความเป็น `233, 145`, ค่า `x` เป็น `238`, ค่า `y` เป็น `355`

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

ึึlabel ตัวที่ 7 ต้องมีข้อความเป็น `333, 96`, ค่า `x` เป็น `338`,และค่า `y` เป็น `404`

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

label ตัวที่ 8 ต้องมีข้อความเป็น `222, 333`, ค่า `x` เป็น `227`,และค่า `y` เป็น `167`

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

label ตัวที่ 9 ต้องมีข้อความเป็น `78, 320`, ค่า `x` เป็น `83`, และค่า `y` เป็น `180`

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

 label ตัวที่ 1 ต้องมีข้อความเป็น `21, 123`, ค่า `x` เป็น `26`, และค่า `y` เป็น `377`

```js
assert(
  $('text').eq(9).text() == '21, 123' &&
    $('text').eq(9).attr('x') == '26' &&
    $('text').eq(9).attr('y') == '377'
);
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
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))
       
  </script>
</body>
```
