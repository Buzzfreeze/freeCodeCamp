---
id: 587d7fa8367417b2b2512bc9
title: Update the Height เป็น an Element Dynamically
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-เป็น-an-element-dynamically
---

# --description--

จากโจทย์ที่ผ่านมาเราสามารถแสดง data ในแบบของรูปภาพได้จาก array และเพิ่ม CSS classes ในบทเรียนนี้เราสามารถรวมความรู้ทั้งสองแบบเข้าด้วยกันเพื่อสร้าง bar chart อย่างง่ายๆ ตามขั้นตอนด้านล่าง

1) สร้าง `div` fสำหรับแต่ละ data point ใน array

2) กำหนดให้ `div` เป็น dynamic height โดยใช้ callback function ใน `style()` method ที่กำหนดค่า height เท่ากับ data value

format เพื่อกำหนด style โดยใช้ callback function:

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

เพิ่ม `style()` method เพื่อกำหนดค่า `height` property ของแต่ละ element โดยใช้ callback function เพื่อ return ค่าของแต่ละ data point กลับมาและเพิ่ม string `px` ให้กับกับมัน

# --hints--

อันดับที่ 1) `div` ควรมีค่า `height` เป็น `12` pixels.

```js
assert($('div').eq(0)[0].style.height === '12px');
```

อันดับที่ 2) `div` ควรมีค่า `height` เป็น `31` pixels.

```js
assert($('div').eq(1)[0].style.height === '31px');
```

อันดับที่ 3) `div` ควรมีค่า `height` เป็น `22` pixels.

```js
assert($('div').eq(2)[0].style.height === '22px');
```

อันดับที่ 4) `div` ควรมีค่า `height` เป็น `17` pixels.

```js
assert($('div').eq(3)[0].style.height === '17px');
```

อันดับที่ 5) `div` ควรมีค่า `height` เป็น `25` pixels.

```js
assert($('div').eq(4)[0].style.height === '25px');
```

อันดับที่ 6) `div` ควรมีค่า `height` เป็น `18` pixels.

```js
assert($('div').eq(5)[0].style.height === '18px');
```

อันดับที่ 7) `div` ควรมีค่า `height` เป็น `29` pixels.

```js
assert($('div').eq(6)[0].style.height === '29px');
```

อันดับที่ 8) `div` ควรมีค่า `height` เป็น `14` pixels.

```js
assert($('div').eq(7)[0].style.height === '14px');
```

อันดับที่ 9) `div` ควรมีค่า `height` เป็น `9` pixels.

```js
assert($('div').eq(8)[0].style.height === '9px');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
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
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
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
      .style('height', d => `${d}px`)
  </script>
</body>
```
