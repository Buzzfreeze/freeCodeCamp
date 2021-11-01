---
id: 587d7fa7367417b2b2512bc5
title: Work with Dynamic Data in D3
challengeType: 6
forumTopicId: 301498
dashedName: work-with-dynamic-data-in-d3
---

# --description--

`data()` และ `enter()` methods ควรจะใช้ data set พร้อมกับ `append()` method ได้ 
เพื่อสร้าง DOM element ใหม่สำหรับ data set

จากโจทย์ก่อนหน้า เราได้สร้าง `h2` element ขึ้นมาใหม่fสำหรับ item แต่ละตัวใน `dataset` array แต่พวกมันมีข้อความที่เหมือนกันคือ `New Title` เนื่องจากเราไม่ได้ใช้ data ที่ผูกไว้กับ `h2` elements แต่ละตัว

D3 `text()` method สามารถใช้ string หรือ callback function เป็น argument ได้:

```js
selection.text((d) => d)
```

จะเห็นว่า parameter `d` อ้างถึง single entry ใน dataset 

ใช้ `h2` element ตัวแรกผูกกับ 12, `h2` element ลำดับที่สอง ผูกกับ 31 และ`h2` element ลำดับที่สามผูกกับ 22 ตามลำดับ

# --instructions--

เปลี่ยน `text()` method ของแต่ละ `h2` element เพื่อแสดงค่าที่สอดคล้องกับ array ของ `dataset` กับ single space และ string `USD`. ตัวอย่างเช่น heading ควรจะแสดงผลเป็น `12 USD`

# --hints--

อันดับที่ 1) `h2` ควรแสดง text เป็น `12 USD`.

```js
assert($('h2').eq(0).text() == '12 USD');
```

อันดับที่ 2) `h2` ควรแสดง text เป็น `31 USD`.

```js
assert($('h2').eq(1).text() == '31 USD');
```

อันดับที่ 3) `h2` ควรแสดง text เป็น `22 USD`.

```js
assert($('h2').eq(2).text() == '22 USD');
```

อันดับที่ 4) `h2` ควรแสดง text เป็น `17 USD`.

```js
assert($('h2').eq(3).text() == '17 USD');
```

อันดับที่ 5) `h2` ควรแสดง text เป็น `25 USD`.

```js
assert($('h2').eq(4).text() == '25 USD');
```

อันดับที่ 6) `h2` ควรแสดง text เป็น `18 USD`.

```js
assert($('h2').eq(5).text() == '18 USD');
```

อันดับที่ 7) `h2` ควรแสดง text เป็น `29 USD`.

```js
assert($('h2').eq(6).text() == '29 USD');
```

อันดับที่ 8)`h2` ควรแสดง text เป็น `14 USD`.

```js
assert($('h2').eq(7).text() == '14 USD');
```

อันดับที่ 9) `h2` ควรแสดง text เป็น `9 USD`.

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
      // Add your code below this line

      .text("New Title");

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
      .text((d) => `${d} USD`);

  </script>
</body>
```
