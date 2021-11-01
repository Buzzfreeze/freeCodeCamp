---
id: 587d7fa6367417b2b2512bc3
title: Select a Group of Elements with D3
challengeType: 6
forumTopicId: 301490
dashedName: select-a-group-of-elements-with-d3
---

# --description--

D3 มี `selectAll()` method ที่ใช้เลือกกลุ่มของ elementsเช่นกัน มันจะส่งค่าของ array ใน HTML nodes สำหรับทุก items ใน document ที่มีค่า input match กับค่า string ตัวอย่างเช่น anchor tags ใน document ด้านล่าง:

```js
const anchors = d3.selectAll("a");
```

เหมือนเช่นกับ `select()` method, `selectAll()` supports method chaining และยังสามารถใช้ได้กับ methods อื่นๆด้วย

# --instructions--

เลือกทุก `li` tags ใน document และเปลี่ยน text ไปเป็น string `list item` โดยใช้ `.text()` method.

# --hints--

ควรจะมี 3 `li` elements ใน page และแต่ละ text ควรจะระบุ `list item` Capitalization และ spacing ควรจะ match กันด้วย

```js
assert(
  $('li')
    .text()
    .match(/list item/g).length == 3
);
```

ควรสามารถเข้าถึง `d3` object 

```js
assert(code.match(/d3/g));
```

ควรใช้ `selectAll` method

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
    // Add your code below this line



    // Add your code above this line
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
