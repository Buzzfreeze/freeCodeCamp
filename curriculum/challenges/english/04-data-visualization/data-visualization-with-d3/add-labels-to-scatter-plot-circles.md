---
id: 587d7fab367417b2b2512bd9
title: Add Labels to Scatter Plot Circles
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

สามารถเพิ่ม text เพื่อสร้าง labels  สำหรับแต่ละจุดใน scatter plot

เป้าหมายคือเพื่อแสดง comma-separated values สำหรับค่าของ (`x`) และค่าของ (`y`) ของแต่ละ item ใน `dataset`

`text` nodes จำเป็นต้องมี `x` และ `y` attributes เพื่อระบุตำแหน่งบน SVG canvas โดยที่ค่า `y` (ใช้หาความสูง) สามารถใช้ค่าเดียวกันกับ `circle` ใน `cy` attribute สำหรับค่า `x` สามารถมากกว่าค่า `cx` ของ `circle` ได้เล็กน้อย 
label จึงจะสามารถมองเห็นได้ โดยที่ label จะแสดงไว้ที่ขวามือของตำแหน่งนั้นๆ

# --instructions--

สร้าง label ของแต่ละจุดบน scatter plot โดยใช้ `text` elements โดย text ของ label ควรจะมีค่าสองค่าที่คั่นกลางด้วย comma ยกตัวอย่างเช่นจุดแรกเป็น `34, 78` ให้กำหนดค่าของ `x` attribute มากกว่า `5` units ของ `cx` attribute ของ `circle` และ กำหนดค่าของ `y` attribute ให้เหมือนกับค่า `cy` ของ `circle`

# --hints--

ควรจะมี 10 `text` elements

```js
assert($('text').length == 10);
```

อันดับที่ 1) label ควรมี text เป็น `34, 78`, ค่า `x` เป็น `39`, และค่า `y` เป็น `422`

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

อันดับที่ 2) label ควรมี text เป็น `109, 280`, ค่า `x` เป็น `114`,และค่า `y` เป็น `220`

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

อันดับที่ 3) label ควรมี text เป็น of `310, 120`, ค่า `x` เป็น `315`, และค่า `y` เป็น `380`

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

อันดับที่ 4) label ควรมี text เป็น `79, 411`, ค่า `x` เป็น `84`, และค่า `y` เป็น `89`

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

อันดับที่ 5) label ควรมี text เป็น`420, 220`, ค่า `x` เป็น `425`, และค่า `y` เป็น `280`

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

ุอันดับที่ 6) label ควรมี text เป็น `233, 145`, ค่า `x` เป็น `238`, ค่า `y` เป็น `355`

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

ึึอันดับที่ 7) label ควรมี text เป็น `333, 96`, ค่า `x` เป็น `338`,และค่า `y` เป็น `404`

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

อันดับที่ 8) label ควรมี text เป็น `222, 333`, ค่า `x` เป็น `227`,และค่า `y` เป็น `167`

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

อันดับที่ 9) label ควรมี text เป็น `78, 320`, ค่า `x` เป็น `83`, และค่า `y` เป็น `180`

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

อันดับที่ 10) label ควรมี text เป็น `21, 123`, ค่า `x` เป็น `26`, และค่า `y` เป็น `377`

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
