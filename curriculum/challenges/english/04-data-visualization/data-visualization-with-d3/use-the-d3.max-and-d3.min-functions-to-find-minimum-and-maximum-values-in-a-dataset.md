---
id: 587d7fac367417b2b2512bdc
title: >-
  Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a
  Dataset
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

D3 methods `domain()` และ `range()` ใช้กำหนด information เพื่อ scale ค่าต่างๆอ้างอิงจาก data ที่มี 
การใช้ทั้งสอง methods ร่วมกันจะทำงานง่ายกว่า

หลายๆครั้งที่ set domain เราต้องใช้ค่า minimum และ maximum ของ data set โดยการ manual หาค่าเหล่านั้น ถ้าหากว่า data set มีขนาดใหญ่ จะเกิดความผิดพลาดได้ง่าย

ใน D3 มี 2 methods - `min()` และ `max()` เพื่อใช้สำหรับ return ค่าสูงสุดและต่ำสุดตามลำดับ ดังตัวอย่าง:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

dataset อาจจะเป็นแบบ nested arrays เช่น `[x, y]` coordinate ที่ใช้ใน scatter plot ทั้ง `min()` และ `max()` methods สามารถใช้ callback function เพื่อหาค่าสูงสุดและต่ำสุดใน nested arrays ได้ โดยใช้ argument ของ callback function `d` สำหรับค่าใน inner array โดยที่ callback จะ return element จาก inner array (ค่า`x` หรือ `y` ) มาให้  
ตัวอย่างของการหาค่า min และ max แบบ array ซ้อน arrays

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` would have the value `1`.

# --instructions--

`positionData` array มี sub arrays of x, y, และ z coordinates. ให้ใช้ D3 method เพื่อหาค่า maximum ของ z coordinate (ค่าลำดับที่สาม) จาก arrays และ save ไว้ใน `output` variable

# --hints--

text ใน `h2` ควรเป็น `8`

```js
assert(output == 8 && $('h2').text() == '8');
```

ควนใช้ `max()` method

```js
assert(
  code.match(/\.max/g),
  'Your code should use the <code>max()</code> method.'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
