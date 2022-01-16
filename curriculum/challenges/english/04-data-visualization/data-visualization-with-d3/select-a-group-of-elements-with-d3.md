---
id: 587d7fa6367417b2b2512bc3
title: Select a Group of Elements with D3
challengeType: 6
forumTopicId: 301490
dashedName: select-a-group-of-elements-with-d3
---

# --description--

D3 มี method `selectAll()` ที่ใช้เลือกกลุ่มของ element ด้วย 
method นี้จะหาทุก element ที่ตรงกับ argument และจะคืนค่าเป็น array ของ HTML node ที่ตรงทั้งหมด 
เช่น การเลือกแท็ก anchor ทุกตัวใน document ตามตัวอย่างด้านล่าง:

```js
const anchors = d3.selectAll("a");
```

method นี้ก็เหมือนกับ `select()`, `selectAll()` ที่จะเอา method มาเรียกใช้ต่อๆกันได้

# --instructions--

ให้เลือกแท็ก `li` ทุกตัวใน document และเปลี่ยนข้อความข้างในเป็น `list item` โดยใช้ method `.text()` 

# --hints--

ต้องมี `li` 3 ตัวในหน้า และแต่ละตัวต้องมีข้อความว่า `list item` โดยต้องเป็นตัวพิมพ์เล็กเหมือนกัน และเว้นวรรคเหมือนกันด้วย

```js
assert(
  $('li')
    .text()
    .match(/list item/g).length == 3
);
```

ต้องใช้ `d3` object 

```js
assert(code.match(/d3/g));
```

ต้องใช้ method `selectAll` 

```js
assert(code.match(/\.selectAll/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // เขียนโค้ดใต้บรรทัดนี้



    // เขียนโค้ดเหนือบรรทัดนี้
  </script>
</body>
```

# --solutions--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li")
      .text("list item")
  </script>
</body>
```
