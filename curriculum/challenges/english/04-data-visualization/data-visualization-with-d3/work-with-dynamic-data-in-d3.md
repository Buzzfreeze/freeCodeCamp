---
id: 587d7fa7367417b2b2512bc5
title: Work with Dynamic Data in D3
challengeType: 6
forumTopicId: 301498
dashedName: work-with-dynamic-data-in-d3
---

# --description--

ในแบบทดสอบที่แล้วเราได้เรียนเรื่องการใช้ `data()` และ `enter()` เพื่อแสดงผลข้อมูลไปแล้ว 
เราใช้ method ทั้งสองตัวนี้กับ `append()` เพื่อสร้าง DOM element ตัวใหม่ สำหรับข้อมูลแต่ละตัวในชุดข้อมูลได้

ในแบบทดสอบที่แล้ว เราได้สร้าง `h2` ใหม่ขึ้นมาตามจำนวนข้อมูลใน array `dataset` แต่ element ที่เราเพิ่มมานี้ยังมีข้อความเหมือนกันคือ `New Title` ที่เป็นแบบนี้เพราะเราไม่ได้เอาข้อมูลไปผูกไว้กับ `h2`

method `text()` ของ D3 สามารถใช้ string หรือ callback function เป็น argument ก็ได้:

```js
selection.text((d) => d)
```

โดย `d` จะเป็นค่าของข้อมูลแต่ละตัวใน dataset 

ถ้าดูตามโค้ดใน code editor แล้ว `h2` ตัวแรกจะได้ข้อมูลเป็น 12, `h2` ตัวที่สองจะได้ข้อมูลเป็น 31 และ `h2` ตัวที่สาม 22 ตามลำดับ

# --instructions--

ให้แก้ method `text()` ของ `h2` แต่ละตัว ให้แสดงค่าตามข้อมูลใน array `dataset` โดยให้เอาข้อมูลมาต่อด้วยเว้นวรรคหนึ่งตัว และ string `USD` เช่น heading ตัวแรกจะต้องแสดงผลเป็น `12 USD`

# --hints--

 `h2` ตัวที่ 1 ต้องแสดงข้อความ `12 USD`

```js
assert($('h2').eq(0).text() == '12 USD');
```

 `h2` ตัวที่ 2 ต้องแสดงข้อความ `31 USD`

```js
assert($('h2').eq(1).text() == '31 USD');
```

 `h2` ตัวที่ 3 ต้องแสดงข้อความ `22 USD`

```js
assert($('h2').eq(2).text() == '22 USD');
```

 `h2` ตัวที่ 4 ต้องแสดงข้อความ `17 USD`

```js
assert($('h2').eq(3).text() == '17 USD');
```

 `h2` ตัวที่ 5 ต้องแสดงข้อความ `25 USD`

```js
assert($('h2').eq(4).text() == '25 USD');
```

 `h2` ตัวที่ 6 ต้องแสดงข้อความ `18 USD`

```js
assert($('h2').eq(5).text() == '18 USD');
```

 `h2` ตัวที่ 7 ต้องแสดงข้อความ `29 USD`

```js
assert($('h2').eq(6).text() == '29 USD');
```

`h2` ตัวที่ 8 ต้องแสดงข้อความ `14 USD`

```js
assert($('h2').eq(7).text() == '14 USD');
```

 `h2` ตัวที่ 9 ต้องแสดงข้อความ `9 USD`

```js
assert($('h2').eq(8).text() == '9 USD');
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
      // เขียนโค้ดใต้บรรทัดนี้

      .text("New Title");

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
      .text((d) => `${d} USD`);

  </script>
</body>
```
