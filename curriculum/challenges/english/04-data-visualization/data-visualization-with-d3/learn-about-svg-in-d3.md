---
id: 587d7fa8367417b2b2512bcb
title: Learn About SVG in D3
challengeType: 6
fหรือumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> ย่อมาจาก <dfn>Scalable Vector Graphics</dfn>

"scalable" หมายความว่าถ้าเราซูมเข้าหรือซูมออก รูปของเราจะไม่แตกเป็นพิกเซล ไม่ว่าเราจะแสดงผลบนจอโทรศัพท์หรือจอทีวีขนาดใหญ่

ปกติจะใช้ SVG สร้างรูปทรงเลขาคณิตทั่วไป ทั่วไป
แล้วเพราะว่า D3 จะแสดงข้อมูลเป็นภาพ ดังนั้นจึงใช้ SVG เพื่อสร้างรูปทรงที่จะเอามาแสดง ในการแสดง SVG shapes ในหน้าเว็บ จะต้องใช้แท็ก `svg`

CSS จะปรับขนาดได้ถ้าใช้หน่วยแบบ relative (เช่น `vh`, `vw`, หรือ `%`) แต่การใช้ SVG จะยืดหยุ่นกว่าในการแสดงผลข้อมูล

# --instructions--

ให้เพิ่ม `svg` ใน `body` โดยใช้ `append()` โดยกำหนดให้ attribute `width` มีค่าเป็นค่าคงที่ `w` ที่มีให้ และ attribute `height` มีค่าเป็นค่าคงที่ `h` ที่มีให้
ให้ใช้ method `attr()` หรือ `style()` สำหรับการตั้งค่า attribute นี้
คุณจะเห็นการเปลี่ยนแปลงได้เลยเพราะเราได้ตั้งค่า `background-color` ไว้เป็น `pink` ในแท็ก `style` แล้ว

**Note:** เมื่อใช้ `attr()` กับ attribute width และ height ไม่จำเป็นต้องใส่หน่วย 
การที่ทำแบบนี้จะเป็นพื้นฐานของการ scale เลย เพราะว่าแต่ละ element จะถูกล็อคอัตราส่วนความกว้างต่อความสูงไว้เป็น 5:1

# --hints--

ใน document ต้องมี `svg` หนึ่งตัว

```js
assert($('svg').length == 1);
```

element `svg` ต้องมี attribute `width` เป็น `500` หรือ `500px`

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

element `svg` ต้องมี attribute `height` เป็น `100` หรือ `100px`

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
      // เขียนโค้ดใต้บรรทัดนี้



      // เขียนโค้ดเหนือบรรทัดนี้
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
