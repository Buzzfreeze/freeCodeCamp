---
id: 587d7fa6367417b2b2512bc2
title: Add Document Elements with D3
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

D3 มีหลายวิธีสำหรับเพิ่มและเปลี่ยน elements ใน document

 `select()` method เป็นการเลือก element จาก document โดยระบุ argument ท่ีเป็นชื่อของ element ที่ต้องการ เพื่อส่งค่ากลับ HTML node สำหรับ element ของ document ที่ตรงกับชื่อ ดังตัวอย่าง:

```js
const anchor = d3.select("a");
```

จากตัวอย่างด้านบน จะทำการหา anchor tag ใน page ก่อนและ saves HTML node เพื่อสำหรับ variable `anchor` โดยสามารถใช้ selection กับ methods อืื่นๆได้อีกด้วย สำหรับ `d3` ในตัวอย่างจะอ้างอิงถึง D3 object โ

วิธีที่มีประสิทธิภาพคือ `append()` และ `text()`

`append()` method ใช้สำหรับเพิ่ม element ที่ต้องการให้กับ document การเพิ่ม HTML node เพื่อเลือก items และส่งค่ากลับไปยัง node เดิม

`text()` method เป็นการตั้งค่าข้อความของ node ที่เลือกหรือรับข้อความปัจจุบัน สามารถ set ค่าได้โดยการ pass string ไปเป็น argument ข้างในวงเล็บ 

ตัวอย่างการเลือกใช้ unordered list, เพิ่ม list item, และ text:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

D3 อนุญาตให้ใช้หลาย methods ร่วมกันได้ เพื่อให้เกิด action หลายๆอย่างต่อเนื่องกัน

# --instructions--

ใช้ `select` method เพื่อเลือก `body` tag ใน document จากนั้นใช้ `append` `h1` tag และเพิ่ม text `Learning D3` ให้กับ `h1` element.

# --hints--

`body` ควรมี `h1` element

```js
assert($('body').children('h1').length == 1);
```

`h1` element ควรมี text `Learning D3` in 

```js
assert($('h1').text() == 'Learning D3');
```

ควรเข้าถึง `d3` object

```js
assert(code.match(/d3/g));
```

ควรใช้ `select` method

```js
assert(code.match(/\.select/g));
```

ควรใช้ `append` method

```js
assert(code.match(/\.append/g));
```

ควรใช้ `text` method

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```
