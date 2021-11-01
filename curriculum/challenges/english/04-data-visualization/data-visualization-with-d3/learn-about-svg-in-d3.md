---
id: 587d7fa8367417b2b2512bcb
title: Learn About SVG in D3
challengeType: 6
fหรือumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> stands fหรือ <dfn>Scalable Vectหรือ Graphics</dfn>.

"scalable" หมายความว่าถ้า zoom in หรือ zoom out บน object จะไม่แสดง pixelated เนื่องจากเป็นระบบการปรับขนาดด้วยจอแสดงผล ไม่ว่าจะเป็นบนหน้าจอมือถือขนาดเล็กหรือจอทีวีขนาดใหญ่

SVG ถูกใช้สำหรับ geometric shapes ทั่วไปและ D3 จะแสดง data เป็นภาพ ดังนั้นจึงใช้ SVG เพื่อสร้าง shapes สำหรับการแสดงภาพ SVG shapes สำหรับ web page ต้องใช้ภายใน aHTML `svg` tag

CSS สามารถปรับขนาดเมื่อรูปแบบถูกใช้สำหรับ relative units (เช่น `vh`, `vw`, หรือ percentages) แต่การใช้ SVG ต้องมีความ flexible มากกว่าเพื่อสร้าง data visualizations

# --instructions--

เพิ่ม `svg` node ใน `body` โดยใช้ `append()` กำหนดให้ `width` attribute กำหนดค่าคงที่ของ `w` และ `height` attribute กำหนดค่าคงที่ของ `h` โดยใช้ `attr()` หรือ `style()` methods  จะสามารถเห็น output ได้เนื่องจากมี `background-colหรือ` การกำหนดสี pink ใน `style` tag

**Note:** เมื่่อใช้ `attr()` width และ height attributes ไม่จำเป็นต้องมี units Tเนื่องจากมีการสร้าง block ของ scaling ของแต่ละ element ไว้อยู่แล้วที่ 5:1 อัตราส่วนของความกว้าง : ความสูง

# --hints--

document ควรมี 1 `svg` element

```js
assert($('svg').length == 1);
```

`svg` element ควรมีค่า  `width` attribute เป็น `500` หรือ styled มีค่าของ width ที่ `500px`.

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

`svg` element ควรมีค่า  `height` attribute เป็น `100` หรือ styled มีค่าของ height ที่ `100px`.

```js
assert($('svg').attr('height') == '100' || $('svg').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>
  svg {
    background-colหรือ: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
  </script>
</body>
```
