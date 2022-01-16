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

method `domain()` และ `range()` ของ D3 ใช้กำหนดรายละเอียดที่ใช้เพื่อ scale ค่าต่างๆตามข้อมูลที่มี 
แต่เราก็มี method อื่นที่ใช้ง่ายกว่า

หลายๆครั้งที่เราตั้งค่า domain เราต้องใช้ค่าต่ำสุด และค่าสูงสุด ของชุดข้อมูล 
การหาค่าต่ำสุดและค่าสูงสุดของชุดข้อมูลเอง อาจเกิดคววามผิดพลาดได้ง่ายหากชุดข้อมูลมีขนาดใหญ่

ใน D3 มี method 2 ตัวคือ `min()` และ `max()` ที่ใช้หาค่าต่ำสุดและค่าสูงสุดของชุดข้อมูล 
ลองดูตัวอย่าง:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

ในบางครั้งชุดข้อมูลของเราอาจเป็นแบบ array ที่ซ้อนกันอยู่ เช่น ตำแหน่ง `[x, y]` ที่ใช้ใน scatter plot 
ถ้าเป็นแบบนี้ method `min()` และ `max()` ก็จะรับ callback function เพื่อหาค่าสูงสุดและต่ำสุดใน array ที่ซ้อนกันอยู่ได้ 
ในตัวอย่างด้านล่าง callback function จะรับ argument `d` เป็น array ชั้นใน โดยที่ callback จะต้องคืนค่าของ array ชั้นในมาให้ (ค่า `x` หรือ `y` ) 
ลองดูตัวอย่างการหาค่า `x` ที่ต่ำที่สุด ของ array ที่ซ้อนกันอยู่

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` จะมีค่าเป็น `1`

# --instructions--

array `positionData` มี array ย่อยที่เก็บค่าของตำแหน่ง x, y, และ z อยู่ 
ให้ใช้ method ของ D3 เพื่อหาค่าสูงสุดของตำแหน่ง z (ค่าตัวที่สามใน array ย่อย) และเก็บลงในตัวแปรชื่อ `output`

# --hints--

ข้อความใน `h2` ต้องเป็น `8`

```js
assert(output == 8 && $('h2').text() == '8');
```

ต้องใช้ method `max()`

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
    // เขียนโค้ดใต้บรรทัดนี้

    const output = undefined; // แก้บรรทัดนี้

    // เขียนโค้ดเหนือบรรทัดนี้

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
