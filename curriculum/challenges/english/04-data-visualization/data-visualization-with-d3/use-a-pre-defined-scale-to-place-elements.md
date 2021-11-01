---
id: 587d7fac367417b2b2512bde
title: Use a Pre-Defined Scale to Place Elements
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

การกำหนด scales สำหรับ scatter plot เป็นกระบวณการเปลี่ยนค่า`x` และ `y` ของ raw data ไปเป็นค่าที่ fit เพื่อ render ได้อย่างถูกต้องบน SVG canvas และทำให้ค่าแต่ละจุดอยู่บน plotting area ได้อย่างเหมาะสมไม่หลุดออกไปข้างนอกพื้นที่

กำหนดค่า coordinate attribute สำหรับแต่ละ SVG shape กับ scaling function ซึ่งประกอบด้วยค่า `x` และ `y` attributes สำหรับ `rect` หรือ `text` elements หรือ `cx` และ `cy` สำหรับ`circles` ตัวอย่างเช่น:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

กำหนด Scales ของ shape coordinate attributes เพื่อplot data points บน SVG canvas ไม่จำเป็นต้อง apply scales เมื่อต้องการแสดงค่า actual data เช่นใน `text()` method สำหรับ tooltip หรือ label

# --instructions--

ใช้ `xScale` และ`yScale` เพื่อกำหนดตำแหน่งให้ทั้ง `circle` และ `text` บน SVG canvas สำหรับ `circles` ที่ apply scales ให้กับ `cx` และ `cy` attributes ให้กำหนดค่า radius ของทั้งสองเป็น `5` units

ให้กำหนดค่า `x` และ `y` attributes สำหรับ `text` elements  โดย labels ควรอยู่ในตำแหน่งด้านขวาของ dots โดยเพิ่มค่า `10` units ให้กับค่า `x` ก่อนส่งค่าเข้าไปใน `xScale`

# --hints--

ควรจะมี 10 `circle` elements

```js
assert($('circle').length == 10);
```

อันดับที่ 1 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `91` และค่า `cy` อยู่ที่ประมาณ `368` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

อันดับที่ 2 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `159` และค่า `cy` อยู่ที่ประมาณ `181` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

อันดับที่ 3 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `340` และค่า `cy` อยู่ที่ประมาณ `329` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

อันดับที่ 4 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `131` และค่า `cy` อยู่ที่ประมาณ `60` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

อันดับที่ 5 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `440` และค่า `cy` อยู่ที่ประมาณ `237` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

อันดับที่ 6 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `271` และค่า `cy` อยู่ที่ประมาณ `306` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

อันดับที่ 7 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `361` และค่า `cy` อยู่ที่ประมาณ `351` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

อันดับที่ 8 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `261` และค่า `cy` อยู่ที่ประมาณ `132` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

อันดับที่ 9 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `131` และค่า `cy` อยู่ที่ประมาณ `144` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

อันดับที่ 10 `circle` element ควรมีค่า `cx` อยู่ที่ประมาณ `79` และค่า `cy` อยู่ที่ประมาณ `326` หลังจาก apply scales. และควรจะมีค่า `r` เป็น `5`.

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

ควรจะมี 10 `text` elements.

```js
assert($('text').length == 10);
```

อันดับที่ 1) label ควรมีค่า `x` อยู่ที่ประมาณ `100` และค่า `y` อยู่ที่ประมาณ `368` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

อันดับที่ 2) label ควรมีค่า `x` อยู่ที่ประมาณ `168` และค่า `y` อยู่ที่ประมาณ `181` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

อันดับที่ 3) label ควรมีค่า `x` อยู่ที่ประมาณ `350` และค่า `y` อยู่ที่ประมาณ `329` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

อันดับที่ 4) label ควรมีค่า `x` อยู่ที่ประมาณ `141` และค่า `y` อยู่ที่ประมาณ `60` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

อันดับที่ 5) label ควรมีค่า `x` อยู่ที่ประมาณ `449` และค่า `y` อยู่ที่ประมาณ `237` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

อันดับที่ 6) label ควรมีค่า `x` อยู่ที่ประมาณ `280` และค่า `y` อยู่ที่ประมาณ `306` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

อันดับที่ 7) label ควรมีค่า `x` อยู่ที่ประมาณ `370` และค่า `y` อยู่ที่ประมาณ `351` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

อันดับที่ 8) label ควรมีค่า `x` อยู่ที่ประมาณ `270` และค่า `y` อยู่ที่ประมาณ `132` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

อันดับที่ 9) label ควรมีค่า `x` อยู่ที่ประมาณ `140` และค่า `y` อยู่ที่ประมาณ `144` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

อันดับที่ 10) label ควรมีค่า `x` อยู่ที่ประมาณ `88` และค่า `y` อยู่ที่ประมาณ `326` หลังจาก apply scales.

```js
assert(
  Math.round($('text').eq(9).attr('x')) == '88' &&
    Math.round($('text').eq(9).attr('y')) == '326'
);
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
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
  </script>
</body>
```
