---
id: 587d7faa367417b2b2512bd6
title: Add a Tooltip to a D3 Element
challengeType: 6
forumTopicId: 301470
dashedName: add-a-tooltip-to-a-d3-element
---

# --description--

Tooltip ใช้แสดงข้อมูลเกี่ยวกับ item บนแต่ละหน้า เมื่อ user นำ mouse ไปชี้ มีหลายวิธีที่สามารถเพิ่ม tooltip ใน visualization อย่างเช่นใช้ SVG `title` element

`title` จับคู่กับ `text()` method เพื่อเพิ่มข้อมูลในแต่ละ bar 

# --instructions--

เพิ่ม `title` element ภายใต้แต่ละ `rect` node จากนั้นเรียก `text()` method กับ callback function 
จะเห็นมี text แสดง data value

# --hints--

ควรจะมี 9 `title` elements.

```js
assert($('title').length == 9);
```

อันดับที่ 1 `title` element ควรมี tooltip text `12`

```js
assert($('title').eq(0).text() == '12');
```

อันดับที่ 2 `title` element ควรมี tooltip text `31`

```js
assert($('title').eq(1).text() == '31');
```

อันดับที่ 3 `title` element ควรมี tooltip text  `22`

```js
assert($('title').eq(2).text() == '22');
```

อันดับที่ 4 `title` element ควรมี tooltip text  `17`.

```js
assert($('title').eq(3).text() == '17');
```

อันดับที่ 5 `title` element ควรมี tooltip text  `25`.

```js
assert($('title').eq(4).text() == '25');
```

อันดับที่ 6 `title` element ควรมี tooltip text  `18`.

```js
assert($('title').eq(5).text() == '18');
```

อันดับที่ 7 `title` element ควรมี tooltip text  `29`.

```js
assert($('title').eq(6).text() == '29');
```

อันดับที่ 8 `title` element ควรมี tooltip text  `14`.

```js
assert($('title').eq(7).text() == '14');
```

อันดับที่ 9 `title` element ควรมี tooltip text  `9`.

```js
assert($('title').eq(8).text() == '9');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```

# --solutions--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       .append("title")
       .text((d) => d)
       

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```
