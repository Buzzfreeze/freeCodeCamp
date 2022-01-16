---
id: 587d7fa8367417b2b2512bca
title: Change the Presentation เป็น a Bar Chart
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-เป็น-a-bar-chart
---

# --description--

แบบทดสอบสุดท้ายในเรื่องกราฟแท่ง ให้ปรับการแสดงผลเพื่อให้กราฟดูดีขึ้น

1) ให้เพิ่มช่องว่างระหว่างกราฟแต่ละแท่ง โดยใช้ CSS `margin` ใน class `bar`
2) ทำให้ความสูงของแต่ละแท่งต่างกันชัดเจนมากขึ้น โดยเอาตัวคูณไปคุณกับความสูงของแท่ง

# --instructions--

เริ่มจาก ใน `style` ให้เพิ่ม `margin` `2px` ให้กับ class `bar` จากนั้นเปลี่ยน callback function ใน method `style()` 
โดยให้คืนค่ามาเป็นข้อมูลเดิมคูณ `10` (อย่าลืมเติม `px` ต่อท้าย)

**Note:** การคูณข้อมูลด้วยค่าคงที่จะไม่ได้เปลี่ยนแปลงความหมายของข้อมูล 
แต่จะเป็นเหมือนกับการซูมเข้า-ซูมออกเฉยๆ

# --hints--

`div` ตัวที่ 1 ต้องมี `height` เป็น `120` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

`div` ตัวที่ 2 ต้องมี `height` เป็น `310` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

`div` ตัวที่ 3 ต้องมี `height` เป็น `220` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

`div` ตัวที่ 4 ต้องมี `height` เป็น `170` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

`div` ตัวที่ 5 ต้องมี `height` เป็น `250` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

`div` ตัวที่ 6 ต้องมี `height` เป็น `180` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

`div` ตัวที่ 7 ต้องมี `height` เป็น `290` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

`div` ตัวที่ 8 ต้องมี `height` เป็น `140` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

`div` ตัวที่ 9 ต้องมี `height` เป็น `90` พิกเซลและมีค่า `margin` เป็น `2` พิกเซล

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
    /* เขียนโค้ดใต้บรรทัดนี้ */

    
    /* เขียนโค้ดเหนือบรรทัดนี้ */
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
      .style("height", (d) => (d + "px")) // แก้บรรทัดนี้
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
