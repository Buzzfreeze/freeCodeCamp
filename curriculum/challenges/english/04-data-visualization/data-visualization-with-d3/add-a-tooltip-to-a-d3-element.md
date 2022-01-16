---
id: 587d7faa367417b2b2512bd6
title: Add a Tooltip to a D3 Element
challengeType: 6
forumTopicId: 301470
dashedName: add-a-tooltip-to-a-d3-element
---

# --description--

Tooltip คือสิ่งที่เอาไว้แสดงข้อมูลเมื่อเอาเมาส์ไปชี้ เราเพิ่ม tooltip ในการแสดงผลได้หลายวิธี แต่ในตัวอย่างนี้เราจะใช้ `title` element ของ SVG

จะต้องใช้ method `text()` กับ `title` เพื่อแสดงข้อมูลของกราฟแต่ละแท่ง 

# --instructions--

ให้เพิ่ม `title` element ใน `rect` แต่ละตัว แล้วให้เรียกใช้ method `text()` โดยใช้ callback function เพื่อให้ข้อความใน `title` แสดงค่าของข้อมูล

# --hints--

ต้องมี `title` ทั้งหมด 9 ตัว.

```js
assert($('title').length == 9);
```

`title` ตัวที่ 1 ต้องมีข้อความใน tooltip เป็น `12`

```js
assert($('title').eq(0).text() == '12');
```

`title` ตัวที่ 2 ต้องมีข้อความใน tooltip เป็น `31`

```js
assert($('title').eq(1).text() == '31');
```

`title` ตัวที่ 3 ต้องมีข้อความใน tooltip เป็น  `22`

```js
assert($('title').eq(2).text() == '22');
```

`title` ตัวที่ 4 ต้องมีข้อความใน tooltip เป็น  `17`.

```js
assert($('title').eq(3).text() == '17');
```

`title` ตัวที่ 5 ต้องมีข้อความใน tooltip เป็น  `25`.

```js
assert($('title').eq(4).text() == '25');
```

`title` ตัวที่ 6 ต้องมีข้อความใน tooltip เป็น  `18`.

```js
assert($('title').eq(5).text() == '18');
```

`title` ตัวที่ 7 ต้องมีข้อความใน tooltip เป็น  `29`.

```js
assert($('title').eq(6).text() == '29');
```

`title` ตัวที่ 8 ต้องมีข้อความใน tooltip เป็น  `14`.

```js
assert($('title').eq(7).text() == '14');
```

`title` ตัวที่ 9 ต้องมีข้อความใน tooltip เป็น  `9`.

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
       // เขียนโค้ดใต้บรรทัดนี้



       // เขียนโค้ดเหนือบรรทัดนี้

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
