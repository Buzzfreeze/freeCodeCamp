---
id: 587d7fac367417b2b2512bde
title: Use a Pre-Defined Scale to Place Elements
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

พอเรากำหนด scale ของ scatter plot ได้แล้ว คราวนี้ก็ถึงเวลา map ค่าอีกแล้ว 
scale ก็เป็นเหมือนฟังก์ชันที่แปลงค่า `x` และ `y` ของข้อมูลดิบให้กลายเป็นค่าที่แสดงผลในขอบเขคของ SVG canvas ได้อย่างถูกต้อง

เราจะกำหนดตำแหน่งของรูปทรงแต่ละรูปได้ โดยใช้ฟังก์ชัน scale 
ซึ่งใน `rect` หรือ `text` ตำแหน่งของรูปทรงคือ attribute `x` และ `y`
และใน `circles` ตำแหน่งของรูปทรงคือ attribute `cx` และ `cy` 
ลองดูตัวอย่าง:

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

การใช้ sclae จะกำหนดตำแหน่งของรูปทรง เพื่อวาดรูปในตำแหน่งที่ถูกต้องบน SVG canvas 
เราไม่ต้องใช้ scale ถ้าเราต้องการแสดงค่าจริงๆของข้อมูลนั้น เช่นใน method `text()` ที่ใช้กับ tooltip หรือ label

# --instructions--

ให้ใช้ `xScale` และ`yScale` เพื่อกำหนดตำแหน่งให้ `circle` และ `text` บน SVG canvas 
โดยใน `circles` ให้ใช้ scale กับ attribute `cx` และ `cy` และให้กำหนดค่ารัศมี (`r`) เป็น `5`

ให้กำหนดค่า attribute `x` และ `y` ของ `text` โดยให้เพิ่มค่า `x` ไปอีก `10` ก่อนส่งค่าเข้าไปใน `xScale` เพื่อให้ข้อความแสดงอยู่ด้านขวาของจุดข้อมูล

# --hints--

ต้องมี `circle` 10 ตัว

```js
assert($('circle').length == 10);
```

`circle` ตัวที่ 1 ต้องมี `cx` ประมาณ `91` และ `cy` ประมาณ `368` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

`circle` ตัวที่ 2 ต้องมี `cx` ประมาณ `159` และ `cy` ประมาณ `181` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

`circle` ตัวที่ 3 ต้องมี `cx` ประมาณ `340` และ `cy` ประมาณ `329` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

`circle` ตัวที่ 4 ต้องมี `cx` ประมาณ `131` และ `cy` ประมาณ `60` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

`circle` ตัวที่ 5 ต้องมี `cx` ประมาณ `440` และ `cy` ประมาณ `237` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

`circle` ตัวที่ 6 ต้องมี `cx` ประมาณ `271` และ `cy` ประมาณ `306` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

`circle` ตัวที่ 7 ต้องมี `cx` ประมาณ `361` และ `cy` ประมาณ `351` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

`circle` ตัวที่ 8 ต้องมี `cx` ประมาณ `261` และ `cy` ประมาณ `132` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

`circle` ตัวที่ 9 ต้องมี `cx` ประมาณ `131` และ `cy` ประมาณ `144` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

`circle` ตัวที่ 10 ต้องมี `cx` ประมาณ `79` และ `cy` ประมาณ `326` หลังจากใช้ scale แล้ว และต้องมี `r` เป็น `5`

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

label ตัวที่ 1 ต้องมี `x` ประมาณ `100` และ `y` ที่ประมาณ `368` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

label ตัวที่ 2 ต้องมี `x` ประมาณ `168` และ `y` ที่ประมาณ `181` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

label ตัวที่ 3 ต้องมี `x` ประมาณ `350` และ `y` ที่ประมาณ `329` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

label ตัวที่ 4 ต้องมี `x` ประมาณ `141` และ `y` ที่ประมาณ `60` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

label ตัวที่ 5 ต้องมี `x` ประมาณ `449` และ `y` ที่ประมาณ `237` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

label ตัวที่ 6 ต้องมี `x` ประมาณ `280` และ `y` ที่ประมาณ `306` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

label ตัวที่ 7 ต้องมี `x` ประมาณ `370` และ `y` ที่ประมาณ `351` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

label ตัวที่ 8 ต้องมี `x` ประมาณ `270` และ `y` ที่ประมาณ `132` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

label ตัวที่ 9 ต้องมี `x` ประมาณ `140` และ `y` ที่ประมาณ `144` หลังจากใช้ scale แล้ว

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

label ตัวที่ 10 ต้องมี `x` ประมาณ `88` และ `y` ที่ประมาณ `326` หลังจากใช้ scale แล้ว

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
       // เขียนโค้ดใต้บรรทัดนี้



       // เขียนโค้ดเหนือบรรทัดนี้

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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
