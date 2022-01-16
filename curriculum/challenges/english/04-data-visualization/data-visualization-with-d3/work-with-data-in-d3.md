---
id: 587d7fa7367417b2b2512bc4
title: Work with Data in D3
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

เราจะใช้ library D3 เวลาเราจะเขียนโปรแกรมที่ใช้ข้อมูลเป็นหลัก (data-driven)
ถ้าเรามีชุดของข้อมูล (`dataset`) เราจะใช้ method ของ D3 เพื่อแสดงข้อมูล (`data`) บนหน้าเว็บเราได้ 
ข้อมูลอาจจะมีหลากหลายรูปแบบ แต่ในแบบทดสอบนี้เราลองใช้ข้อมูลง่ายๆที่เป็น array ของตัวเลขกันก่อน

ขั้นแรก จะเป็นการทำให้ D3 รู้ก่อนว่าเราจะใช้ข้อมูลอะไร โดยเราจะใช้ method `data()` เพื่อเลือก DOM element ที่เราจะส่งข้อมูลไปให้ โดยที่เราจะส่งข้อมูลไปเป็น argument ของ method

วิธีการทำงานปกติแล้วจะเป็นการสร้าง element ตัวใหม่หนึ่งตัวใน document ต่อข้อมูลหนึ่งตัวในชุดข้อมูล 
D3 มี method ชื่อ `enter()` ที่จะใช้ทำแบบนี้โดยเฉพาะ

ถ้าใช้ method `enter()` ร่วมกับ `data()` ก็จะเหมือนกับการเลือก element จากหน้าเว็บ และเปรียบเทียบกับจำนวนของข้อมูลในแต่ละชุดข้อมูล ถ้ามีจำนวน element น้อยกว่าจำนวนข้อมูล method จะสร้าง element ที่หายไปขึ้นมาให้

ตัวอย่างนี้จะเลือก `ul` และสร้าง list item (`li`) ใหม่ โดยดูจากจำนวนข้อมูลใน array:

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

จากตัวอย่างด้านบน D3 จะทำการเลือก `ul` บนหน้าเว็บก่อน แล้วนั้นจึงเลือก `li` ทุกตัว แต่จะคืนค่าเป็นค่าว่างเพราะตอนนี้ใน `ul` ยังไม่มี `li` เลย
หลังจากนั้น method `data()` จะอ่านชุดข้อมูลและจะเรียกใช้โค้ดด้านล่างนี้สามครั้ง (ตามจำนวนข้อมูลในชุดข้อมูล) 
เริ่มจาก method `enter()` จะเห็นว่าไม่มี `li` บนหน้าเลย แต่จะเห็นว่าจริงๆแล้วต้องมี `li` 3 ตัว (สำหรับข้อมูลแต่ละตัวใน `dataset`) ทำให้ต้องเพิ่ม `li` ตัวใหม่ใน `ul` โดยมีข้อความว่า `New item`

# --instructions--

ให้เลือก `body` จากนั้นให้เลือก `h2` ทั้งหมด แล้วให้ใช้ D3 เพื่อสร้างและเพิ่มแท็ก `h2` ตามข้อมูลใน array `dataset`
โดยข้อความใน `h2` ต้องเป็น `New Title` 
ต้องเขียนโค้ดที่ทำตามเงื่อนไขด้านบนโดยใช้ method `data()` และ `enter()`

# --hints--

ใน document ต้องมี `h2` ทั้งหมด 9 ตัว

```js
assert($('h2').length == 9);
```

ข้อความใน `h2` ต้องเป็น `New Title` โดยมีตัวใหญ่ตัวเล็ก และการเว้นวรรคที่ตรงกัน

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

ต้องใช้ method `data()` ในโค้ด

```js
assert(code.match(/\.data/g));
```

ต้องใช้ method `enter()` ในโค้ด

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```
