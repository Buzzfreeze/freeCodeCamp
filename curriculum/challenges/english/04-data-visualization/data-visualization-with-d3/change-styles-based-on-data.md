---
id: 587d7fa7367417b2b2512bc7
title: Change Styles Based on Data
challengeType: 6
forumTopicId: 301479
dashedName: change-styles-based-on-data
---

# --description--

D3 จะเกี่ยวข้องกับ visualization และการแสดงผลขอ data เราสามารถเปลี่ยน style ของ elements ได้อย่างที่เราต้องการโดยอ้างอิงจาก data ที่มีอยู่ ยังสามารถใช้ callback function ใน `style()` method ได้อีกด้วย เพื่อเปลี่ยน style ของ elements ที่ต่างกัน

ตัวอย่างเช่น เราสามารถกำหนดีให้กับจุดๆหนึ่งได้ หากมีค่าน้อยกว่า 20 แต่หากมีค่ามากกว่านั้น สีจะเป็นเป็นสีแดง และยังสามารถใช้ callback function ใน `style()` method ได้อีกเวย รวมไปถึง conditional logic 
สำหรับ callback function จะใช้ `d` parameter เพื่อแสดง data point

```js
selection.style("color", (d) => {

});
```

`style()` method ไม่มีข้อจำกัดในการ setting `color` ซึ่งยังสามารถใช้กัย CSS properties อื่นๆได้อีกด้วย

# --instructions--

เพิ่ม `style()` method โดยกำหนด `color` ให้กับ `h2` elements เขียน callback function เพื่อให้ค่าของ data ที่น้อยกว่า 20 เป็นสีแดง ส่วนค่าอื่นๆเป็นสีเขียว

**Note:** สามารถใช้ if-else logic หรือ ternary operator

# --hints--

อันดับที่ 1) `h2` ควรมี `color` เป็น red.

```js
assert($('h2').eq(0).css('color') == 'rgb(255, 0, 0)');
```

อันดับที่ 2) `h2` ควรมี `color` เป็น green.

```js
assert($('h2').eq(1).css('color') == 'rgb(0, 128, 0)');
```

อันดับที่ 3) `h2` ควรมี `color` เป็น green.

```js
assert($('h2').eq(2).css('color') == 'rgb(0, 128, 0)');
```

อันดับที่ 4) `h2` ควรมี `color` เป็น red.

```js
assert($('h2').eq(3).css('color') == 'rgb(255, 0, 0)');
```

อันดับที่ 5) `h2` ควรมี `color` เป็น green.

```js
assert($('h2').eq(4).css('color') == 'rgb(0, 128, 0)');
```

อันดับที่ 6) `h2` ควรมี `color` เป็น red.

```js
assert($('h2').eq(5).css('color') == 'rgb(255, 0, 0)');
```

อันดับที่ 7) `h2` ควรมี `color` เป็น green.

```js
assert($('h2').eq(6).css('color') == 'rgb(0, 128, 0)');
```

อันดับที่ 8) `h2` ควรมี `color` เป็น red.

```js
assert($('h2').eq(7).css('color') == 'rgb(255, 0, 0)');
```

อันดับที่ 9) `h2` ควรมี `color` เป็น red.

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
      .style("color", (d) => d < 20 ? "red" : "green")
  </script>
</body>
```
