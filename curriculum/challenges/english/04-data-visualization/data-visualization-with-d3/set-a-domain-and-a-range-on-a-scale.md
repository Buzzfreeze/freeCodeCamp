---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

scale ถูกใช้เพื่อระบุความสัมพันธ์ของแกนข้อมูล แปลว่า ค่าที่รับเข้ามาจะถูกเปลี่ยนให้เป็นค่าที่แสดงผล 
แต่ scale ก็มีความสามารถที่มากกว่านี้ และสามารถทำอะไรอย่างอื่นได้ด้วย

สมมติว่าเรามาชุดข้อมูลที่มีข้อมูลอยู่ในช่วง 50 ถึง 480 จะมี 
เราเรียกสิ่งนี้ว่า input information ของ scale หรือที่เรียกว่า <dfn>domain</dfn>

แล้วสมมติว่าเขาต้องการแสดงค่าของชุดข้อมูลนี้บนแกน `x` ใน SVG canvas ในช่วง 10 หน่วยถึง 500 หน่วย ของ canvas
เราเรียกสิ่งนี้ว่า output information ของ scale หรือที่เรียกว่า <dfn>range</dfn>

method `domain()` และ `range()` จะใช้เพื่อกำหนดค่าทั้งสองตัวนี้สำหรับ scale 
โดย method ทั้งสองตัวนี้จะรับ array เป็น argument 
ลองดูตัวอย่าง:

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

ใน console จะต้องแสดงค่า `10`, `500`, `323.37`, และ `807.67` ตามลำดับ

จากตัวอย่างข้างบนจะเห็นว่า scale จะใช้ความสัมพันธ์แบบเส้นตรงโดยใช้ค่าของ domain และค่า range เพื่อหาว่าค่าที่รับเข้ามาควรจะแสดงผลเป็นเท่าไหร่
เช่น ขอบล่างของ domain ที่มีค่าเป็น 50 เมื่อแปลงเป็น range จะต้องมีค่าเป็น 10

# --instructions--

ให้สร้าง scale และตั้งค่า domain เป็น `[250, 500]` โดยให้ range เป็น `[10, 150]`

**Note:** สามารถใช้ method `domain()` และ `range()` ต่อจาก `scaleLinear()` ที่การประกาศค่าตัวแปร `scale` ได้เลย

# --hints--

ต้องใช้ method `domain()`

```js
assert(code.match(/\.domain/g));
```

`domain()` ของ `scale` ต้องกำหนดค่าเป็น `[250, 500]`

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

ต้องใช้ method `range()`

```js
assert(code.match(/\.range/g));
```

`range()` ของ `scale` ต้องกำหนดค่าเป็น `[10, 150]`

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

ข้อความใน `h2` ต้องเป็น `-102`

```js
assert($('h2').text() == '-102');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // เขียนโค้ดใต้บรรทัดนี้
    const scale = d3.scaleLinear();



    // เขียนโค้ดเหนือบรรทัดนี้
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const scale = d3.scaleLinear();
    scale.domain([250, 500])
    scale.range([10, 150])
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```
