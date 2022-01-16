---
id: 587d7fa8367417b2b2512bc9
title: Update the Height เป็น an Element Dynamically
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-เป็น-an-element-dynamically
---

# --description--

ในแบบทดสอบที่ผ่านๆมาเราได้สอนเรื่องการแสดงผลข้อมูลจาก array และการเพิ่ม CSS class ไปแล้ว คราวนี้เราจะใช้สิ่งที่เรียนมาในการสร้างกราฟแท่ง (bar chart) อย่างง่ายๆ ตามขั้นตอนด้านล่าง

1) สร้าง `div` สำหรับข้อมูลแต่ละตัวใน array

2) กำหนดให้ความสูงของ `div` เปลี่ยนแปลงตามข้อมูล โดยใช้ callback function ใน method `style()` โดยให้ height มีค่าเท่ากับข้อมูลตัวนั้นๆ

ถ้ายังจำได้ syntax ในการกำหนด style โดยใช้ callback function จะมีหน้าตาแบบนี้:

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

ให้เพิ่ม method `style()` เพื่อกำหนดค่าของ property `height` ของแต่ละ element โดยใช้ callback function 
callback function ต้องคืนค่ามาเป็นค่าของข้อมูลตัวนั้น ต้อท้ายด้วย string `px` เพื่อใช้กำหนดความสูงในหน่วยพิกเซล

# --hints--

`div` ตัวที่ 1 ต้องมี `height` เป็น `12` พิกเซล

```js
assert($('div').eq(0)[0].style.height === '12px');
```

`div` ตัวที่ 2 ต้องมี `height` เป็น `31` พิกเซล

```js
assert($('div').eq(1)[0].style.height === '31px');
```

`div` ตัวที่ 3 ต้องมี `height` เป็น `22` พิกเซล

```js
assert($('div').eq(2)[0].style.height === '22px');
```

`div` ตัวที่ 4 ต้องมี `height` เป็น `17` พิกเซล

```js
assert($('div').eq(3)[0].style.height === '17px');
```

`div` ตัวที่ 5 ต้องมี `height` เป็น `25` พิกเซล

```js
assert($('div').eq(4)[0].style.height === '25px');
```

`div` ตัวที่ 6 ต้องมี `height` เป็น `18` พิกเซล

```js
assert($('div').eq(5)[0].style.height === '18px');
```

`div` ตัวที่ 7 ต้องมี `height` เป็น `29` พิกเซล

```js
assert($('div').eq(6)[0].style.height === '29px');
```

`div` ตัวที่ 8 ต้องมี `height` เป็น `14` พิกเซล

```js
assert($('div').eq(7)[0].style.height === '14px');
```

`div` ตัวที่ 9 ต้องมี `height` เป็น `9` พิกเซล

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
      // เขียนโค้ดใต้บรรทัดนี้



      // เขียนโค้ดเหนือบรรทัดนี้
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
