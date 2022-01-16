---
id: 587d7fa9367417b2b2512bce
title: Dynamically Set the Coordinates for Each Bar
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

ในบทเรียนที่แล้วเราได้สร้างและเพิ่ม `rect` ใน `svg` ตามข้อมูลใน `dataset` ไปแล้ว แต่กราฟแท่งที่เราเขียนขึ้นมายังวางซ้อนๆกันอยู่

ตำแหน่งของ `rect` จะขึ้นอยู่กับ `x` และ `y` ที่เรากำหนด 
`x` และ `y` นี้เป็นตัวที่บอก D3 ว่าจะเริ่มวาดรูปทรงนี้ที่ส่วนไหนของ `svg` 
ในแบบฝึกหัดที่แล้วเราได้กำหนด `x` และ `y` ไว้เป็น 0 ทำให้กราฟทุกๆแท่นที่สร้างขึ้นมาถูกเอาไปวางไว้ที่มุมบนซ้ายของ `svg`

สำหรับกราฟแท่ง กราฟทุกแท่งต้องมีตำแหน่ง `y` เดียวกัน (ที่ 0) และค่า `x` ต้องเปลี่ยนตามตำแหน่งที่แท่งนั้นอยู่
ให้จำไว้ว่า ถ้าค่า `x` มากรูปทรงจะขยับไปทางขวา และข้อมูลแต่ละตัวของ array ที่เรานำมาสร้างเป็นรูปทรงจะต้องมี `x` เพิ่มขึ้นเรื่อยๆ เพื่อทำให้ทุกแท่งของกราฟที่สร้างขึ้นมาใหม่ ขยับไปทางขวาเรื่อยๆ

method `attr()` ของ D3 จะรับ callback function เพื่อตั้งค่า attribute 
โดย callback function รับ argument 2 ตัว 
ตัวแรกเป็นข้อมูลที่อ่านได้ (`d`) และตัวที่สองเป็น index ของข้อมูลนั้นๆใน array (ซึ่งเป็นค่า optional แปลว่าจะรับหรือไม่รับก็ได้)
ลองดูตัวอย่าง:

```js
selection.attr("property", (d, i) => {

})
```

ที่ต้องรู้คือคุณไม่จำเป็นต้องใช้ `for` loop หรือ `forEach()` ในการอ่านค่าของ `dataset` แต่ให้เรียกใช้ method `data()` เพื่ออ่านค่าของข้อมูลใน `dataset` ทีละตัว และทุก method ที่ถูกเรียกใช้หลังจาก `data()` จะถูกใช้สำหรับข้อมูลแต่ละตัวที่อ่านได้

# --instructions--

ให้เปลี่ยนค่าของ `x` จากการเรียกใช้ callback function เพื่อให้ได้ค่าเป็น index คูณ 30

**Note:** แท่งแต่ละแท่นในกราฟมี width เป็น 25 ดังนั้นการทำให้ `x` เป็น 30 จะทำให้ระยะห่างของกราฟแต่ละแท่งเป็น 5

# --hints--

`rect` ตัวที่ 1 ต้องมีค่าของ `x` เป็น `0`

```js
assert($('rect').eq(0).attr('x') == '0');
```

`rect` ตัวที่ 2 ต้องมีค่าของ `x` เป็น `30`

```js
assert($('rect').eq(1).attr('x') == '30');
```

`rect` ตัวที่ 3 ต้องมีค่าของ `x` เป็น `60`

```js
assert($('rect').eq(2).attr('x') == '60');
```

`rect` ตัวที่ 4 ต้องมีค่าของ `x` เป็น `90`

```js
assert($('rect').eq(3).attr('x') == '90');
```

`rect` ตัวที่ 5 ต้องมีค่าของ `x` เป็น `120`

```js
assert($('rect').eq(4).attr('x') == '120');
```

`rect` ตัวที่ 6 ต้องมีค่าของ `x` เป็น `150`

```js
assert($('rect').eq(5).attr('x') == '150');
```

`rect` ตัวที่ 7 ต้องมีค่าของ `x` เป็น `180`

```js
assert($('rect').eq(6).attr('x') == '180');
```

`rect` ตัวที่ 8 ต้องมีค่าของ `x` เป็น `210`

```js
assert($('rect').eq(7).attr('x') == '210');
```

`rect` ตัวที่ 9 ต้องมีค่าของ `x` เป็น `240`

```js
assert($('rect').eq(8).attr('x') == '240');
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
       .attr("x", (d, i) => {
         // เขียนโค้ดใต้บรรทัดนี้



         // เขียนโค้ดเหนือบรรทัดนี้
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
       .attr("x", (d, i) => {
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
