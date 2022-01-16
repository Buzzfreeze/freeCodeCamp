---
id: 587d7fa8367417b2b2512bcd
title: Create a Bar for Each Data Point in the Set
challengeType: 6
forumTopicId: 301482
dashedName: create-a-bar-for-each-data-point-in-the-set
---

# --description--

ในแบบทดสอบที่แล้วเราได้เพิ่มสี่เหลี่ยมผืนผ้าให้กับ ให้กับ `svg` เพื่อแสดงแท่งของกราฟแท่งไปแล้ว 
คราวนี้เราจะเอาความรู้เรื่อง `data()`, `enter()`, และรุปทรงของ SVG มาสร้างกราฟแทงตามข้อมูลใน `dataset` กัน

ืก่อนหน้าเราได้ทำการเพิ่ม `div` ตามข้อมูลใน `dataset` ไปแล้ว:

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

การใช้ `rect` แทนการใช้ `div` จะต่างกันเล็กน้อย 
ตรงที่เราจะเพิ่ม `rect` ลงใน `svg` เราจะไม่เพิ่มลงใน `body` โดยตรง
แล้วเราจำเป็นต้องบอกให้ D3 รู้ว่าเราจะเพิ่ม `rect` ไปในส่วนไหนของ `svg`  

# --instructions--

ให้ใช้ method `data()`, `enter()` และ `append()` เพื่อสร้างและเพิ่ม `rect` ตามข้อมูลใน `dataset` โดยที่กราฟแต่ละแท่งจะวางต่อๆกันอยู่แบบไม่ถูกต้อง เดี๋ยวเราจะมาแก้เรื่องการวางตัวของกราฟแต่ละแท่งในแบบทดสอบถัดไป 

# --hints--

ใน document ต้องมี `rect` ทั้งหมด 9 ตัว

```js
assert($('rect').length == 9);
```

ต้องใช้ method `data()`

```js
assert(code.match(/\.data/g));
```

ต้องใช้ method `enter()`

```js
assert(code.match(/\.enter/g));
```

ต้องใช้ method `append()`

```js
assert(code.match(/\.append/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       // เขียนโค้ดใต้บรรทัดนี้



       // เขียนโค้ดเหนือบรรทัดนี้
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
