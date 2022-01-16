---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
forumTopicId: 301488
dashedName: invert-svg-elements
---

# --description--

ในแบบทดสอบที่แล้วจะเห็นว่ากราฟแท่งของเรายังกลับด้านอยู่ ที่เป็นแบบนี้เพราะว่า SVG ใช้ตำแหน่งแบบ (x, y)

ใน SVG จุดเริ่มต้นของตำแหน่ง (0,0) จะอยู่ที่มุมบนซ้าย 
ถ้าเราตั้งให้ `x` เป็น 0 รูปทรงของเราจะอยู่ที่ด้านซ้ายของพื้นที่ของ SVG
ถ้าเราตั้งให้ `y` เป็น 0 รูปทรงของเราจะอยู่ที่ด้านบนของพื้นที่ของ SVG 
และถ้าเราเพิ่ม `x` จะทำให้ `rect` ขยับไปทางขวา ส่วนถ้าเราเพิ่ม `y` จะทำให้ `rect` ขยับลงล่าง

ในการทำให้กราฟของเราไม่กลับหัว จึงจำเป็นต้องเปลี่ยนวิธีการคำนวณตำแหน่ง `y` โดยต้องเอาทั้งความสูงของพื้นที่ SVG และความสูงของแท่งมาใช้

ค่า height ของพื้นที่ SVG เป็น 100 ถ้าข้อมูลของเราเป็น และต้องการให้แท่งของเราอยู่ที่ด้านล่างของพื้นที่ SVG เราต้องกำหนดให้ค่า `y` มีค่าเป็น 100 แต่ถ้าข้อมูลเป็น 1 เราต้องให้ `y` มีค่าเริ่มต้นเป็น 100 เพื่อให้แท่งของเราอยู่ที่ส่วนล่างของพื้นที่ SVG แล้วค่อยเอาความสูงของแท่งมาใช้ ซึ่งจะทำให้ `y` เป็น 99

สมการของตำแหน่ง `y` ก็จะเป็น `y = heightOfSVG - heightOfBar` เพื่อให้กราฟของเราไม่กลับหัว

# --instructions--

ให้เปลี่ยน callback function ของ `y` เพื่อทำให้กราฟของเราไม่กลับหัว อย่าลืมว่าค่า `height` ของกราฟแท่งเราจะมีค่าเป็น 3 เท่าของ `d`

**Note:** สมการคือ `y = h - m * d` โดยที่ `m` เป็นค่าคงที่ที่เป็นตัวคูณของแต่ละข้อมูล

# --hints--

`rect` ตัวที่ 1 ต้องมี `y` เป็น `64`

```js
assert($('rect').eq(0).attr('y') == h - dataset[0] * 3);
```

`rect` ตัวที่ 2 ต้องมี `y` เป็น `7`

```js
assert($('rect').eq(1).attr('y') == h - dataset[1] * 3);
```

`rect` ตัวที่ 3 ต้องมี `y` เป็น `34`

```js
assert($('rect').eq(2).attr('y') == h - dataset[2] * 3);
```

`rect` ตัวที่ 4 ต้องมี `y` เป็น `49`

```js
assert($('rect').eq(3).attr('y') == h - dataset[3] * 3);
```

`rect` ตัวที่ 5 ต้องมี `y` เป็น `25`

```js
assert($('rect').eq(4).attr('y') == h - dataset[4] * 3);
```

`rect` ตัวที่ 6 ต้องมี `y` เป็น `46`

```js
assert($('rect').eq(5).attr('y') == h - dataset[5] * 3);
```

`rect` ตัวที่ 7 ต้องมี `y` เป็น `13`

```js
assert($('rect').eq(6).attr('y') == h - dataset[6] * 3);
```

`rect` ตัวที่ 8 ต้องมี `y` เป็น `58`

```js
assert($('rect').eq(7).attr('y') == h - dataset[7] * 3);
```

`rect` ตัวที่ 9 ต้องมี `y` เป็น `73`

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
         // เขียนโค้ดใต้บรรทัดนี้



         // เขียนโค้ดเหนือบรรทัดนี้
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
