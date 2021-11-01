---
id: 587d7fa7367417b2b2512bc6
title: Add Inline Styling to Elements
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3 สามารถเพิ่ม inline CSS styles บน dynamic elements กับ `style()` method

`style()` method ใช้ comma-separated key-value คู่กับ argument 
ตัวอย่างสำหรับ set สีของข้อความที่เลือกให้เป็นสีน้ำเงิน:

```js
selection.style("color","blue");
```

# --instructions--

เพิ่ม `style()` method ใน editor เพื่อให้ text เป็นแบบ `font-family` ของ `verdana`

# --hints--

`h2` elements ควรมี `font-family` ของ `verdana`.

```js
assert($('h2').css('font-family') == 'verdana');
```

ควรใช้ `style()` method

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
      // Add your code below this line



      // Add your code above this line
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
