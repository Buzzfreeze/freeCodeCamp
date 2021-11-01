---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

scales ใช้เพื่อระบุ relationship หมายความว่า input value ควรจะมีค่าที่สอดคล้องกับ output value อย่างไรก็ตาม scales สามารถ flexible และเพิ่มขึ้นได้

dataset มีค่าอยู่ในช่วง 50 ถึง 480 จะมี input information สำหรับ scale ที่เรียกว่า <dfn>domain</dfn>.

หากต้องการใช้ points ของแกน `x` axis บน SVG canvas ที่อยู่ระหว่าง 10 units และ 500 units จะมี output information สำหรับ scale ที่เรียกว่า <dfn>range</dfn>.

`domain()` และ `range()` methods จะกำหนด values เพื่อทำการ scale ทั้งสอง methods จะใช้ array ของ elements เพื่อเป็น argument ดังตัวอย่างเช่น

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

ค่าควรจะแสดง console ดังนี้: `10`, `500`, `323.37`, และ `807.67`

สามารถสังเกตุได้ว่า scale จะใช้ linear relationship ระหว่าง domain และค่า range เพื่อหา output สำหรับค่าที่ได้กำหนดไว้ เช่นค่า minimum value ใน domain (50) ควรจะมีค่า minimum เป็น (10) ใน range

# --instructions--

สร้าง scale และ set ค่า domain เป็น `[250, 500]` ที่มี rangeg เท่ากับ `[10, 150]`

**Note:** สามารถใช้ `domain()` และ `range()` methods ใน `scale` variable

# --hints--

ควรใช้ `domain()` method.

```js
assert(code.match(/\.domain/g));
```

`domain()` ของ `scale` ควรกำหนดค่าเป็น `[250, 500]`.

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

ควรใช้ `range()` method.

```js
assert(code.match(/\.range/g));
```

`range()` ของ `scale` ควรกำหนดค่าเป็น `[10, 150]`.

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

text ใน `h2` ควรเป็น `-102`.

```js
assert($('h2').text() == '-102');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
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
