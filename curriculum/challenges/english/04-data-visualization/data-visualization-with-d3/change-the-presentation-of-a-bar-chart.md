---
id: 587d7fa8367417b2b2512bca
title: Change the Presentation เป็น a Bar Chart
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-เป็น-a-bar-chart
---

# --description--

โจทย์สุดท้ายสำหรับสร้าง bar chart 

1) เพิ่มพื้นที่ระหว่างแต่ละ bar เพื่อแยะพวกมันออกจากกัน สามารถทำได้โดยการเพิ่ม margin ใน CSS สำหรับ `bar` class
2) เพิ่ม height ของแต่ละ bars เพื่อให้เห็นความแตกต่างอย่างชัดเจน สามารถทำได้โดย
การคูณค่าให้กับ scale ของ height

# --instructions--

เพิ่ม `margin` `2px` ให้กับ `bar` class ใน `style` tag จากนั้นเปลี่ยน callback function ใน `style()` method 
ซึ่งจะreturnค่ากลับเป็น `10` เท่าของ original data (plus the `px`)

**Note:** คูณแต่ละ data point โดยค่าคงที่ (*same* constant) เฉพาะการเปลี่ยนscale 
มันเหมือนกับการซูมเข้า แต่ไม่ได้เปลี่ยนความหมายของข้อมูล

# --hints--

อันดับที่ 1) `div` ควรมีค่า `height` เป็น `120` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

อันดับที่ 2) `div` ควรมีค่า `height` เป็น `310` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

อันดับที่ 3) `div` ควรมีค่า `height` เป็น `220` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

อันดับที่ 4) `div` ควรมีค่า `height` เป็น `170` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

อันดับที่ 5) `div` ควรมีค่า `height` เป็น `250` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

อันดับที่ 6) `div` ควรมีค่า `height` เป็น `180` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

อันดับที่ 7) `div` ควรมีค่า `height` เป็น `290` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

อันดับที่ 8) `div` ควรมีค่า `height` เป็น `140` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

อันดับที่ 9) `div` ควรมีค่า `height` เป็น `90` pixels และมีค่า `margin` เป็น `2` pixels.

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */

    
    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>
```
