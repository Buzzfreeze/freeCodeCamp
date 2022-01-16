---
id: 587d7fa7367417b2b2512bc7
title: Change Styles Based on Data
challengeType: 6
forumTopicId: 301479
dashedName: change-styles-based-on-data
---

# --description--

D3 นั้นมีไว้เพื่อควบคุมการแสดงผลของข้อมูลโดยเฉพาะ
เพระาฉะนั้นจึงเป็นเรื่องปกติที่เราจะเปลี่ยน style ของ element ตามข้อมูล 
เราจะใช้ callback function ใน method `style()` เพื่อเปลี่ยน style ตามข้อมูลที่ต่างกันได้ด้วย

เช่น เราสามารถกำหนดได้ว่าถ้าข้อมูลมีค่าน้อยกว่า 20 ให้เป็นสีน้ำเงิน แต่ถ้ามีค่ามากกว่านั้นให้เป็นสีแดง 
เราใช้ callback function ใน method `style()` เพื่อสร้างเงื่อนไขในการใช้ style ได้
โดยใน callback function จะรับ parameter `d` ซึ่งเป็นค่าของข้อมูลตัวนั้นๆ

```js
selection.style("color", (d) => {

});
```

method `style()` ไม่ได้ใช้แค่การตั้งค่า `color` เท่านั้นแต่ยังใช้กับ property ตัวอื่นของ CSS ได้ด้วย

# --instructions--

ให้เขียน method `style()` โดยเขียน callback function เพื่อกำหนด `color` ให้กับ `h2` โดยถ้าข้อมูลมีค่าน้อยกว่า 20 ให้เป็นสีแดง (`red`) ถ้าเป็นค่าอื่นให้เป็นสีเขียว (`green`)

**Note:** สามารถใช้ if-else logic หรือ ternary operator

# --hints--

`h2` ตัวที่ 1 ต้องมี `color` เป็น `red`

```js
assert($('h2').eq(0).css('color') == 'rgb(255, 0, 0)');
```

`h2` ตัวที่ 2 ต้องมี `color` เป็น `green`

```js
assert($('h2').eq(1).css('color') == 'rgb(0, 128, 0)');
```

`h2` ตัวที่ 3 ต้องมี `color` เป็น `green`

```js
assert($('h2').eq(2).css('color') == 'rgb(0, 128, 0)');
```

`h2` ตัวที่ 4 ต้องมี `color` เป็น `red`

```js
assert($('h2').eq(3).css('color') == 'rgb(255, 0, 0)');
```

`h2` ตัวที่ 5 ต้องมี `color` เป็น `green`

```js
assert($('h2').eq(4).css('color') == 'rgb(0, 128, 0)');
```

`h2` ตัวที่ 6 ต้องมี `color` เป็น `red`

```js
assert($('h2').eq(5).css('color') == 'rgb(255, 0, 0)');
```

`h2` ตัวที่ 7 ต้องมี `color` เป็น `green`

```js
assert($('h2').eq(6).css('color') == 'rgb(0, 128, 0)');
```

`h2` ตัวที่ 8 ต้องมี `color` เป็น `red`

```js
assert($('h2').eq(7).css('color') == 'rgb(255, 0, 0)');
```

`h2` ตัวที่ 9 ต้องมี `color` เป็น `red`

```js
assert($('h2').eq(8).css('color') == 'rgb(255, 0, 0)');
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
      .style("color", (d) => d < 20 ? "red" : "green")
  </script>
</body>
```
