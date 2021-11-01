---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
forumTopicId: 301488
dashedName: invert-svg-elements
---

# --description--

เราจะสามารถสังเกตุได้ว่า bar chart นั้นกลับด้านอยู่ นี่เป็นเพราะวิธีการของ SVG ที่ใช้ (x, y) coordinates
จาก SVG จะพบว่า origin point ของ coordinates จะอยู่ที่ the upper-left สำหรับ `x` coordinate ถูกวางไว้ที่ 0 ตรงที่ขอบซ้ายของ SVG area สำหรับ `y` coordinate จะถูกวางไว้ที่ 0 ตรง top edge ของ SVG area เมื่อค่าของ `x` มากขึ้น rectangle จะขยับไปอยู่ฝั่งขวา ส่วนเมื่อค่า `y` มากขึ้น rectangle จะถูกขยับลงไปด้านล่าง

เพื่อกำหนดให้ bars อยู่ตรงที่ right-side-up จึงจำเป็นต้องเปลี่ยนวิธีการคำนวณสำหรับ `y` coordinate เพื่อปรับทั้งค่า height ของ bar และ total height ของ SVG area

ค่า height ของ SVG area เป็น 100 ถ้าหาก data point มีค่าเป็น 0 และต้องการให้ค่า bar เริ่มต้นที่ bottom ของ SVG area (ไม่ใช่ top) ต้องกำหนดให้ค่า `y` coordinate มีค่าเป็น 100 แล้วถ้าหากค่า data point value เป็น 1 ต้องกำหนดค่าเริ่มต้นให้ `y` coordinate เป็น 100 เพื่อให้ bar อยู่ที่ bottom ดัวนั้นจึงจำเป็นที่ต้องกำหนดค่า height ของ bar เป็น 1เพื่อค่าสุดท้ายของ `y` coordinate จะได้เป็น 99

`y` coordinate คือ `y = heightOfSVG - heightOfBar` เพื่อที่ bars จะได้อยู่ที่ตำแหน่ง right-side-up

# --instructions--

เปลี่ยน callback function สำหรับ `y` attribute เพื่อ set ค่า bars ให้อยู่ที่ตำแหน่ง right-side-up อย่าลืมว่าค่า `height` ของ bar จะมีค่าเป็น 3 เท่าของ `d`

**Note:** ความสัมพันธ์ `y = h - m * d` โดยที่ `m` เป็นค่าคงที่ของแต่ละ data points

# --hints--

อันดับที่ 1) `rect` ควรจะมีค่า `y` เป็น `64`.

```js
assert($('rect').eq(0).attr('y') == h - dataset[0] * 3);
```

อันดับที่ 2) `rect` ควรจะมีค่า `y` เป็น `7`.

```js
assert($('rect').eq(1).attr('y') == h - dataset[1] * 3);
```

อันดับที่ 3) `rect` ควรจะมีค่า `y` เป็น `34`.

```js
assert($('rect').eq(2).attr('y') == h - dataset[2] * 3);
```

อันดับที่ 4) `rect` ควรจะมีค่า `y` เป็น `49`.

```js
assert($('rect').eq(3).attr('y') == h - dataset[3] * 3);
```

อันดับที่ 5) `rect` ควรจะมีค่า `y` เป็น `25`.

```js
assert($('rect').eq(4).attr('y') == h - dataset[4] * 3);
```

อันดับที่ 6) `rect` ควรจะมีค่า `y` เป็น `46`.

```js
assert($('rect').eq(5).attr('y') == h - dataset[5] * 3);
```

อันดับที่ 7) `rect` ควรจะมีค่า `y` เป็น `13`.

```js
assert($('rect').eq(6).attr('y') == h - dataset[6] * 3);
```

อันดับที่ 8) `rect` ควรจะมีค่า `y` เป็น `58`.

```js
assert($('rect').eq(7).attr('y') == h - dataset[7] * 3);
```

อันดับที่ 9) `rect` ควรจะมีค่า `y` เป็น `73`.

```js
assert($('rect').eq(8).attr('y') == h - dataset[8] * 3);
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
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
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
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```
