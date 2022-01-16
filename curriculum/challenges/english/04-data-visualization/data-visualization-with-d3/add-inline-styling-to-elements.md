---
id: 587d7fa7367417b2b2512bc6
title: Add Inline Styling to Elements
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3 สามารถเพิ่ม inline CSS style ใน element ได้โดยใช้ method `style()`

method `style()` จะรับ argument สองตัว โดยตัวแรกเป็น property ของ CSS ที่ต้องการใช้ และตัวที่สองเป็นค่าที่ต้องการตั้งให้ property นั้น 
ตัวอย่างข้างล่างเป็นตัวอย่างที่ตั้งค่า `color` ให้มีสี `blue`:

```js
selection.style("color","blue");
```

# --instructions--

ให้เพิ่ม method `style()` ใน editor เพื่อให้ข้อความมี `font-family` เป็น `verdana`

# --hints--

`h2` ต้องมี `font-family` เป็น `verdana`.

```js
assert($('h2').css('font-family') == 'verdana');
```

ต้องใช้ method `style()`

```js
assert(code.match(/\.style/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // เขียนโค้ดใต้บรรทัดนี้



      // เขียนโค้ดเหนือบรรทัดนี้
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana")

  </script>
</body>
```
