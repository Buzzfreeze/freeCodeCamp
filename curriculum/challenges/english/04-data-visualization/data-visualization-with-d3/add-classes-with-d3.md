---
id: 587d7fa7367417b2b2512bc8
title: Add Classes with D3
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

การใช้ inline styles ใน HTML elements ทำให้จัดการได้ยาก ถึงแม้จะเป็น apps ที่มีขนาดเล็กก็ตาม วิธีที่ง่ายกว่าคือการเพิ่ม class ให้กับ elements และ style ซึ่ง class จะถูกเรียกใช้แค่ครั้งเดียวตามกฎของ CSS ส่วน D3 จะใช้ `attr()` method เพิ่มทุก HTML attribute ให้กับ elementรวมถึงชื่อของ class 

 `attr()` method ทำงานเหมือนกับ `style()` พวกมันใช้สามารถใช้ comma-separated values และ callback function ได้ ตัวอย่างของการเพิ่ม class `container` ให้กับ selection:

```js
selection.attr("class", "container");
```

Note: `class` parameter จะมีจำนวนเท่าเดิม เฉพาะ `container` parameter ที่จะเปลี่ยน

# --instructions--

เพิ่ม `attr()` method ใน editor แลพเพิ่ม class ของ `bar` ใน `div` elements.

# --hints--

 `div` elements ควรจะมี class `bar`

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

ควรจะใช้ `attr()` method.

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
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```
