---
id: 587d7fa8367417b2b2512bcd
title: Create a Bar for Each Data Point in the Set
challengeType: 6
forumTopicId: 301482
dashedName: create-a-bar-for-each-data-point-in-the-set
---

# --description--

การเพิ่ม rectangle ให้กับ `svg` element เพื่อแสดง bar สามารถทำได้โดยการรวม `data()`, `enter()`, และ SVG shapes เพื่อสร้างและเพิ่ม rectangle ให้กับแต่ละ data point ใน `dataset`

ืก่อนหน้าเราได้ทำการเพิ่ม `div` ให้กับแต่ละ item ใน `dataset`:

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

การทำงานระหว่าง `rect` elements แทนการใช้ `div` elements จะมีความแตกต่างกันเล็กน้อย โดยที่ `rect` elements ต้องถูกเพิ่มให้กับ `svg` element ไม่ได้ถูกเรียกใช้งานโดยตรงใน `body` ดังนั้นจึงจำเป็นที่จะเรียกใช้ D3 เมื่อจะใช้งาน `rect` ภายในพื้นที่ของ `svg`  

# --instructions--

ใช้ `data()`, `enter()`และ`append()` methods เพื่อสร้างและเพิ่ม `rect` สำหรับแต่ละ item ใน `dataset` โดยที่ bars ควรจะแสดงในส่วนของ top 

# --hints--

document ควรมี 9 `rect` elements.

```js
assert($('rect').length == 9);
```

ควรใช้ `data()` method.

```js
assert(code.match(/\.data/g));
```

ควรใช้ `enter()` method.

```js
assert(code.match(/\.enter/g));
```

ควรใช้ `append()` method.

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
       // Add your code below this line



       // Add your code above this line
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
