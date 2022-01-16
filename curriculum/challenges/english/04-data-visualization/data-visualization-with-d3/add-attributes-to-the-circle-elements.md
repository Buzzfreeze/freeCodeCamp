---
id: 587d7fab367417b2b2512bd8
title: Add Attributes to the Circle Elements
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

ในแบบทดสอบที่แล้วเราได้สร้าง `circle` element สำหรับข้อมูลแต่ละตัวใน `dataset` และเพิ่มลงใน SVG canvas ไปแล้ว
แต่เราต้องบอก D3 ด้วยว่า `circle` แต่ละตัวจะอยู่ที่ตำแหน่งไหน และมีขนาดเท่าไหร่

`circle` ใน SVG มี attribute 3 ตัว โดย `cx` และ `cy` ตำแหน่งของวงกลม ซึ่งเป็นการระบุตำแหน่ง*จุดศูนย์กลาง*ของวงกลม ใน SVG canvas
และ attribute `r` หรือรัศมี (Radius) จะใช้บอกขนาดของ `circle`
โดย `cy` จะเหมือนกับ `y` ของ `rect` ตรงที่จะเริ่มจาก 0 ซึ่งหมายถึงส่วนบนสุดของ SVG canvas

attribute ทั้งสามตัวจะใช้ callback function เพื่อกำหนดค่าได้ 
อย่าลืมว่าทุก method ที่ถูกเรียกใช้หลังจาก `data(dataset)` จะถูกเรียกใช้ตามจำนวนข้อมูลใน `dataset` 
ส่วน parameter `d` ใน callback function จะหมายถึงข้อมูลที่กำลังอ่านอยู่ใน `dataset` ซึ่งใน `dataset` ชุดนี้ข้อมูลแต่ละตัวใน `dataset` ก็จะเป็น array เหมือนกัน
แล้วเราจะใช้ bracket notation เพื่อเข้าถึงค่าใน array นั้นได้ เช่น `d[0]`

# --instructions--

ให้เพิ่ม attribute `cx`, `cy`, และ `r` ให้กับ element `circle` โดยที่ค่าของ `cx` จะเป็นค่าแรกของ array ย่อยใน `dataset` และ `cy` จะเป็นค่าที่สองของ array ย่อย 
อย่าลืมว่าต้องเขียนกราฟให้ไม่กลับหัวด้วย ถ้าจำวิธีไม่ได้ให้ลองกลับไปดูตอนที่เราเรียนเรื่องการกลับหัวกราฟแท่ง 
และทุก `circle` ต้องมีค่าของ `r` เป็น `5`

# --hints--

ต้องมี `circle` ทั้งหมด 10 ตัว

```js
assert($('circle').length == 10);
```

`circle` ตัวที่ 1 ต้องมี `cx` เป็น `34`, `cy` เป็น `422`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

`circle` ตัวที่ 2 ต้องมี `cx` เป็น `109`, `cy` เป็น `220`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

`circle` ตัวที่ 3 ต้องมี `cx` เป็ฯ `310`, `cy` เป็น `380`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

`circle` ตัวที่ 4 ต้องมี `cx` เป็น `79`, `cy` เป็น `89`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

`circle` ตัวที่ 5 ต้องมี `cx` เป็น `420`, `cy` เป็น `280`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

ุ`circle` ตัวที่ 6 ต้องมี `cx` เป็น `233`, `cy` เป็น `355`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

ึ`circle` ตัวที่ 7 ต้องมี `cx` เป็น `333`, `cy` เป็น `404`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

`circle` ตัวที่ 8 ต้องมี `cx` เป็น `222`, `cy` เป็น `167`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

`circle` ตัวที่ 9 ต้องมี `cx` เป็น `78`, `cy` เป็น `180`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

`circle` ตัวที่ 10 ต้องมี `cx` เป็น `21`, `cy` เป็น `377`, และ `r` เป็น `5`

```js
assert(
  $('circle').eq(9).attr('cx') == '21' &&
    $('circle').eq(9).attr('cy') == '377' &&
    $('circle').eq(9).attr('r') == '5'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // เขียนโค้ดใต้บรรทัดนี้



       // เขียนโค้ดเหนือบรรทัดนี้

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>
```
