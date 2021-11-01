---
id: 587d7fa7367417b2b2512bc4
title: Work with Data in D3
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

D3 library ใช้สำหรับ data-driven เมื่อมี set ของ data เราสามารถประยุกต์ใช้ D3 methods เพื่อนแสดงข้อมูลบน page ข้อมูลอาจจะมีหลากหลาย formats แต่เราสามารถปรับมันให้อยู่ในรูปของตัวเลขที่อยู่ใน array 

`data()` method ถูกใช้เพื่อเลือก DOM elements สำหรับ attach data ให้กับ elements เหล่านั้น 
โดยที่ data set จะถูกส่งผ่าน argument ของ method

workflow pattern จะถูกสร้างสำหรับ element ใหม่ๆใน document ในแต่บะส่วนของ data set 
D3 มี `enter()` method เพื่อใช้ในวัตถุประสงค์นี้โดนเฉพาะ

เมื่อรวม `enter()` กับ `data()` method ก็จะเหมือนกับการเลือก elements จาก page และเปรียบเทียบกับจำนวนของ data items ในแต่ละ set ถ้าหามีจำนวน elements น้อยกว่า data items มันจะสร้าง missing elements ขึ้นมา

ตัวอย่างในการเลือก `ul` element และสร้าง list item ใหม่ อ้างอิงจากจำนวนของ array ทั้งหมด:

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

จากตัวอย่างด้านบน D3 ทำการเลือก `ul` บน page เป็นอันดับแรก จากนั้นจึงเลือกทุก list items ที่ return empty selection หลังจากนั้น `data()` method จะรีวิว review dataset และ run code สามครั้ง ครั้งแรกสำหรับทุก item ใน array  `enter()` method จะเห็นว่าไม่มี `li` elements บน page จึงจำเป็นต้อง run 3 ครั้ง (สำหรับข้อมูลแต่ละตัวใน `dataset`) สำหรับ `li` elements ตัวใหม่จะถูกเพิ่มให้กับ `ul` พร้อมทั้งข้อความ `New item`

# --instructions--

เลือก `body` node จากนั้นเลือก `h2` ทั้งหมด ให้ใช้ D3 เพื่อสร้างและเพิ่ม `h2` tag สำหรับแต่ละ item ใน `dataset` array
text ใน `h2` ควรเป็น `New Title` โดยใช้ `data()` และ `enter()` methods

# --hints--

document ควรมี 9 `h2` elements.

```js
assert($('h2').length == 9);
```

text ใน `h2` elements ควรมี `New Title` ประกอบไปด้วย capitalization และ space ที่สอดคล้องกัน

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

ควรใช้ `data()` method.

```js
assert(code.match(/\.data/g));
```

ควรใช้ `enter()` method.

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```
