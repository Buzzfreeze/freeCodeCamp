---
id: 587d7fa6367417b2b2512bc2
title: Add Document Elements with D3
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

มี method ของ D3 ตัวที่ใช้เพิ่มและเปลี่ยน element ใน document ได้

method `select()` ใช้เพื่อเลือก element จาก document โดยระบุชื่อของ element ที่อยากได้เป็น argument 
แล้ว method นี้จะดึง element แรกที่ชื่อตรงกันใน document มาให้ ลองดูตัวอย่าง:

```js
const anchor = d3.select("a");
```

จากตัวอย่างด้านบน จะทำการหาแท็ก `a` ตัวแรกในหน้า และเก็บ HTML node ของ element นี้ลงในตัวแปร `anchor` 
method selection สามารถใช้กับ method อื่นๆได้ด้วย สำหรับ `d3` ในตัวอย่างจะเป็น D3 object ที่จะใช้เพื่อเข้าถึง method ของ D3 

method อีกสองตัวที่มีประโยชน์คือ `append()` และ `text()`

method `append()` ใช้สำหรับเพิ่ม element ที่ต้องการให้กับ document 

method `text()` ใช้สำหรับอ่านหรือเปลี่ยนข้อความใน note ถ้าต้องการอ่านข้อความให้เรียกใช้ method โดยไม่ต้องส่ง argument ถ้าต้องการเปลี่ยนข้อความให้ส่ง string ไปเป็น argument

ตัวอย่างนี้จะทำการ เลือก unordered list (`ul`), เพิ่ม list item (`li`), และเปลี่ยน text:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

ในการใช้ D3 เราจะเชื่อมหลายๆ method เข้าด้วยกันแบบตัวอย่างด้านบนนี้ได้

# --instructions--

ให้ใช้ method `select` เพื่อเลือกแท็ก `body` ใน document จากนั้นใช้ `append` เพื่อเพิ่ม `h1` เข้าไป และตั้งค่าข้อความใน `h1` ให้เป็น `Learning D3`

# --hints--

ต้องมี `h1` ใน `body`

```js
assert($('body').children('h1').length == 1);
```

`h1` ต้องมีข้อความเป็น `Learning D3`

```js
assert($('h1').text() == 'Learning D3');
```

ต้องเรียกใช้ `d3` object

```js
assert(code.match(/d3/g));
```

ต้องใช้ method `select`

```js
assert(code.match(/\.select/g));
```

ต้องใช้ method `append`

```js
assert(code.match(/\.append/g));
```

ต้องใช้ method `text`

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // เขียนโค้ดใต้บรรทัดนี้



    // เขียนโค้ดเหนือบรรทัดนี้
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
