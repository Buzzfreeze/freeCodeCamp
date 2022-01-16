---
id: 587d7fa9367417b2b2512bcf
title: Dynamically Change the Height เป็น Each Bar
challengeType: 6
forumTopicId: 301486
dashedName: dynamically-change-the-height-เป็น-each-bar
---

# --description--

เราสามารถตั้งค่าความสูงของกราฟแต่ละแท่งได้ ตามค่าของข้อมูลใน array ได้ด้วยวิธีเดียวกับการที่เราตั้งค่า `x`

```js
selection.attr("property", (d, i) => {

})
```

โดย `d` เป็นค่าของข้อมูลและ `i` เป็นค่า index ของข้อมูลนั้นๆใน array

# --instructions--

ให้เปลี่ยน callback function ของ attribute `height` เพื่อให้คืนค่ามาเป็นข้อมูลคูณสาม

**Note:** ถ้ายังจำได้การคูณข้อมูลด้วยค่าคงที่จะเป็นการเปลี่ยนสเกลของข้อมูลเฉยๆ แต่ไม่ได้ทำให้ความหมายของข้อมูลเปลี่ยนไป (เหมือนกับการ zoom) ซึ่งการใช้วิธีนี้จะทำให้เห็นความต่างของกราฟแต่ละแท่งชัดขึ้น

# --hints--

`rect` ตัวที่ 1 ต้องมี `height` เป็น `36`

```js
assert($('rect').eq(0).attr('height') == '36');
```

`rect` ตัวที่ 2 ต้องมี `height` เป็น `93`

```js
assert($('rect').eq(1).attr('height') == '93');
```

`rect` ตัวที่ 3 ต้องมี `height` เป็น `66`

```js
assert($('rect').eq(2).attr('height') == '66');
```

`rect` ตัวที่ 4 ต้องมี `height` เป็น `51`

```js
assert($('rect').eq(3).attr('height') == '51');
```

`rect` ตัวที่ 5 ต้องมี `height` เป็น `75`

```js
assert($('rect').eq(4).attr('height') == '75');
```

`rect` ตัวที่ 6 ต้องมี `height` เป็น `54`

```js
assert($('rect').eq(5).attr('height') == '54');
```

`rect` ตัวที่ 7 ต้องมี `height` เป็น `87`

```js
assert($('rect').eq(6).attr('height') == '87');
```

`rect` ตัวที่ 8 ต้องมี `height` เป็น `42`

```js
assert($('rect').eq(7).attr('height') == '42');
```

`rect` ตัวที่ 9 ต้องมี `height` เป็น `27`

```js
assert($('rect').eq(8).attr('height') == '27');
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // เขียนโค้ดใต้บรรทัดนี้



         // เขียนโค้ดเหนือบรรทัดนี้
       });
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>
```
