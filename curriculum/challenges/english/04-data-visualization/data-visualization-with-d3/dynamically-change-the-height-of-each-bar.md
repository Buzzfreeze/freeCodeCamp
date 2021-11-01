---
id: 587d7fa9367417b2b2512bcf
title: Dynamically Change the Height เป็น Each Bar
challengeType: 6
forumTopicId: 301486
dashedName: dynamically-change-the-height-เป็น-each-bar
---

# --description--

height ของแต่ละ bar สามารถกำหนดค่าของแต่ละ data point ใน array เหมือนกับการ set ค่า `x` โดยอัตโนมัติ

```js
selection.attr("property", (d, i) => {

})
```

`d` เป็นค่า data point และ `i` เป็นค่า index ของ data point ใน array

# --instructions--

เปลี่ยน callback function สำหรับ `height` attribute เพื่อ return ค่า data เป็นสามเท่า

**Note:** อย่าลืมคูณทุก data points โดยค่าคงที่ของ data scales (เหมือนกับการ zoom) จะช่วยให้เห็นความแตกต่างของ bar values

# --hints--

อันดับที่ 1 `rect` ควรมีค่า `height` เป็น `36`.

```js
assert($('rect').eq(0).attr('height') == '36');
```

อันดับที่ 2 `rect` ควรมีค่า `height` เป็น `93`.

```js
assert($('rect').eq(1).attr('height') == '93');
```

อันดับที่ 3 `rect` ควรมีค่า `height` เป็น `66`.

```js
assert($('rect').eq(2).attr('height') == '66');
```

อันดับที่ 4 `rect` ควรมีค่า `height` เป็น `51`.

```js
assert($('rect').eq(3).attr('height') == '51');
```

อันดับที่ 5 `rect` ควรมีค่า `height` เป็น `75`.

```js
assert($('rect').eq(4).attr('height') == '75');
```

อันดับที่ 6 `rect` ควรมีค่า `height` เป็น `54`.

```js
assert($('rect').eq(5).attr('height') == '54');
```

อันดับที่ 7 `rect` ควรมีค่า `height` เป็น `87`.

```js
assert($('rect').eq(6).attr('height') == '87');
```

อันดับที่ 8 `rect` ควรมีค่า `height` เป็น `42`.

```js
assert($('rect').eq(7).attr('height') == '42');
```

อันดับที่ 9 `rect` ควรมีค่า `height` เป็น `27`.

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
         // Add your code below this line



         // Add your code above this line
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
