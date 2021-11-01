---
id: 587d7fa9367417b2b2512bce
title: Dynamically Set the Coordinates for Each Bar
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

สร้างและเพิ่ม rectangle ใน `svg` element สำหรับแต่ละ point ใน `dataset` เพื่อแสดงบน bar แต่ทั้งหมดจะถูกวางซ้อนกัน

วาง rectangle ตาม the `x` and `y` attributes เป็นการบอก D3 ว่าจะเริ่มวาด shape บน `svg` area ตรงไหน จากโจทย์ล่าสุดค่าถูก set ไว้ที่ 0 ดังนั้นทุกๆ bar จะถูกวางที่ตำแหน่ง upper-left corner

สำหรับ bar chart ทุก bars ควรจะวางในตำแหน่ง vertical level เดียวกัน ซึ่งหมายความว่าค่า `y` จะอยู่ที่จุดเดียวกัน (ที่ 0) สำหรับทุก bars สำหรับค่า `x` จำเป็นต้องเปลี่ยนตามที่เพิ่มในค่า bar
อบ่าลืม หากค่า `x` มากตำแหน่งของ items จะอยู่ฝั่งขวา และค่า `x` ใน array ของ `dataset` ควรจะเพิ่มตาม

`attr()` method ใน D3 จะใช้ a callback function เพื่อ set ค่า attribute โดยที่ callback function จะมี 2 arguments ตัวแรกสำหรับ data point (สำหรับ `d`) และอีกตัวสำหรับค่า index ของ data point ใน array (ซึ่งเป็นค่า optional)

```js
selection.attr("property", (d, i) => {

})
```

ไม่จำเป็นต้องใช้ `for` loop หรือใช้ `forEach()` เพื่อ iterate items ใน data set ให้เรียกใช้ `data()` method เพื่อแยกวิเคราะห์ data set และทุกๆ method จะถูกเรียกใช้หลังจาก `data()` ของแต่ละ item ถูก run ใน data set

# --instructions--

เปลี่ยนค่า `x` attribute callback function เพื่อให้ returns index 30 ค่า

**Note:** แต่ละ bar มี width ที่ 25 ดังนั้นการเพิ่มค่า `x` โดยให้แต่ละ bars มี space ระยะห่างที่ 30 
ค่าของ space ที่มีมากกว่า 25 จะมีการใช้งานตามตัวอย่าง

# --hints--

อันดับที่ 1) `rect` ควรมีค่า `x` เป็น `0`.

```js
assert($('rect').eq(0).attr('x') == '0');
```

อันดับที่ 2)`rect` ควรมีค่า `x` เป็น `30`.

```js
assert($('rect').eq(1).attr('x') == '30');
```

อันดับที่ 3) `rect` ควรมีค่า `x` เป็น `60`.

```js
assert($('rect').eq(2).attr('x') == '60');
```

อันดับที่ 4) `rect` ควรมีค่า `x` เป็น `90`.

```js
assert($('rect').eq(3).attr('x') == '90');
```

อันดับที่ 5) `rect` ควรมีค่า `x` เป็น `120`.

```js
assert($('rect').eq(4).attr('x') == '120');
```

อันดับที่ 6) `rect` ควรมีค่า `x` เป็น `150`.

```js
assert($('rect').eq(5).attr('x') == '150');
```

อันดับที่ 7) `rect` ควรมีค่า `x` เป็น `180`.

```js
assert($('rect').eq(6).attr('x') == '180');
```

อันดับที่ 8) `rect` ควรมีค่า `x` เป็น `210`.

```js
assert($('rect').eq(7).attr('x') == '210');
```

อันดับที่ 9) `rect` ควรมีค่า `x` เป็น `240`.

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
         // Add your code below this line



         // Add your code above this line
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
