---
id: 587d7fa7367417b2b2512bc8
title: Add Classes with D3
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

ถ้าเราใช้ inline styles หลายๆตัวจะเริ่มทำให้จัดการยากแล้ว ถึงแม้ว่าแอปเราจะไม่ใหญ่ก็ตาม 
วิธีที่ง่ายกว่าคือการเพิ่ม class ให้กับ element และตกแต่ง element นั้นตาม style ของ class ที่เขียนไว้แล้ว 
เราจะใช้ method `attr()` ของ D3 ในการจัดการ HTML attribute ทุกตัวของ element ซึ่งรวมถึง class ด้วย

method `attr()` จะทำงานเหมือนกับ `style()` โดยจะรับ property และค่าของ property นั้นที่คั่นด้วยคอมม่า หรือเป็น callback function ได้ 
ลองดูตัวอย่่างการเพิ่ม class `container` ให้กับ element ที่เลือก:

```js
selection.attr("class", "container");
```

Note: จะต้องใช้ parameter `class` เป็นตัวเดิมไม่ว่าเราจะเพิ่ม class กี่ตัวก็ตาม

# --instructions--

ให้เพิ่ม method `attr()` ใน editor โดยใช้เพื่อให้ `div` มี class เป็น `bar`

# --hints--

 `div` ต้องมี class เป็น `bar`

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

ต้องใช้ method `attr()`

```js
assert(code.match(/\.attr/g));
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
      // เขียนโค้ดใต้บรรทัดนี้
      .attr("class","bar");
      // เขียนโค้ดเหนือบรรทัดนี้
  </script>
</body>
```
