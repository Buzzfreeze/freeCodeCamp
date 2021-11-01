---
id: 587d7fa8367417b2b2512bcc
title: Display Shapes with SVG
challengeType: 6
forumTopicId: 301485
dashedName: display-shapes-with-svg
---

# --description--

สร้าง `svg` element ที่มีทั้งความกว้างและความสูง ส่วนนี้เราจะสามารถมองเห็นได้เพราะว่ามี `background-color` ที่ apply ค่าใน `style` tag

ขั้นตอนต่อไปคือการสร้าง shape สำหรับ `svg` ซึ่งใน SVG สามารถรองรับได้หลายรูปแบบเช่น สี่เหลี่ยมผืนผ้าและวงกลม
ยกตัวอย่างเช่น rectangle (`<rect>`) SVG shape สามารถสร้าง a bar ใน a bar chart ได้

เมื่อจะวาง shape ใน `svg` area เราสามารถ specify ค่า `x` and `y` coordinates ได้ origin point (0, 0) จะอยู่ตรงที่ upper-left corner คเมื่อบวกค่าให้กับ `x` shape จะขยับไปอยู่ทางขวา และเมื่อเพิ่มค่า `y` shape จะขยับลงจาก origin point

เพื่อวาง shape เพื่อให้อยู่ตรงกลสงของ 500 (width) x 100 (height) `svg` จากโจทย์ข้อก่อนหน้า ให้ค่า `x` coordinate เป็น 250 และค่าของ `y` coordinate เป็น 50.

SVG `rect` มีทั้งหมด 4 attributes ประกอบไปด้วย `x` และ `y` coordinates ที่จะแสดงตำแหน่งใน `svg` area อีกทั้งยังมี `height` และ `width` เพื่อ specify size

# --instructions--

เพิ่ม `rect` shape ให้กับ `svg` โดยใช้ `append()` ซึ่งให้มี `width` attribute เป็ร `25` และ `height` attribute เป็น `100`และให้ `rect` `x` และ `y` attributes มีค่าเป็น `0`.

# --hints--

document ควรมี 1 `rect` element.

```js
assert($('rect').length == 1);
```

`rect` element ควรมี `width` attribute set ค่าเป็น `25`.

```js
assert($('rect').attr('width') == '25');
```

`rect` element ควรมี `height` attribute set ค่าเป็น `100`.

```js
assert($('rect').attr('height') == '100');
```

`rect` element ควรมี `x` attribute set ค่าเป็น `0`.

```js
assert($('rect').attr('x') == '0');
```

`rect` element ควรมี `y` attribute set ค่าเป็น `0`.

```js
assert($('rect').attr('y') == '0');
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
                  .attr("height", h)
                  // Add your code below this line



                  // Add your code above this line
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
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0);
  </script>
</body>
```
