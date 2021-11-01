---
id: 587d7fab367417b2b2512bd8
title: Add Attributes to the Circle Elements
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

โจทย์ที่ผ่านมาได้สร้าง `circle` elements สำหรับแต่ละจุดใน `dataset` และเพิ่มมันให้กับ SVG canva 
แต่ D3 จำเป็นต้องใช้ข้อมูลเกี่ยวกับตำแหน่งและขนาดสำหรับแต่ละ`circle` เพื่อที่จะได้แสดงอย่างถูกต้อง

`circle` ใน SVG มีสาม attributes โดยที่ `cx` และ `cy` attributes เป็น coordinates. 
พวกมันสามารถบอก D3 ได้ว่าตำแหน่งของ *center* อยู่ตรงส่วนไหนของ SVG canvas
Radius (`r` attribute) จะใช้บอกขนาดของ `circle`
เหมือนกับ `rect` `y` coordinate,  `cy` attribute สำหรับ `circle` ที่วัดจาก top ของ SVG canvas ไม่ได้วัดจาก bottom

ทั้งสาม attributes สามารถใช้ callback function เพื่อกำหนดค่า 
ทุก methods จะใช้ `data(dataset)` หลังจาก run ในแต่ละ item ใน `dataset` 
ส่วน `d` parameter iใน callback function อ้างอิงถึง item ปัจจุบันใน array ของ `dataset` 
สามารถใช้ bracket notation ได้เช่น `d[0]` เพื่อเข้าถึงค่าในarray

# --instructions--

เพิ่ม `cx`, `cy`, และ `r` attributes ให้กับ `circle` elements โดยที่ค่าของ `cx` ควรจะอยู่เป็นอันดับแรกของ array แต่บะ item ใน `dataset` ค่าของ `cy` ควรจะอยู่เป็นอันดับที่สองของ array เพื่อให้มั่นใจว่าสามารถแสดง chart แบบ right-side-up และไม่กลับด้าน ส่วนค่าของ `r` ควรจะมีค่าเท่ากับ `5` สำหรับทุก circles

# --hints--

ควรจะมี 10 `circle` elements.

```js
assert($('circle').length == 10);
```

อันดับที่ 1 `circle` element ควรมีค่า `cx` เป็น `34`, ค่า `cy` เป็น `422`, และค่า `r` เป็น `5`

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

อันดับที่ 2) `circle` element ควรมีค่า `cx` เป็น `109`, ค่า `cy` เป็น `220`, และค่า `r` เป็น `5`

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

อันดับที่ 3) `circle` element ควรมีค่า `cx` เป็ฯ `310`, ค่า `cy` เป็น `380`, และค่า `r` เป็น `5`.

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

อันดับที่ 4) `circle` element ควรมีค่า `cx` เป็น `79`, ค่า `cy` เป็น `89`, และค่า `r` เป็น `5`.

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

อันดับที่ 5) `circle` element ควรมีค่า `cx` เป็น `420`, ค่า `cy` เป็น `280`, และค่า `r` เป็น `5`.

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

ุอันดับที่ 6) `circle` element ควรมีค่า `cx` เป็น `233`, ค่า `cy` เป็น `355`, และค่า `r` เป็น `5`.

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

ึอันดับที่ 7) `circle` element ควรมีค่า `cx` เป็น `333`, ค่า `cy` เป็น `404`, และค่า `r` เป็น `5`.

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

อันดับที่ 8) `circle` element ควรมีค่า `cx` เป็น `222`, ค่า `cy` เป็น `167`, และค่า `r` เป็น `5`.

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

อันดับที่ 9) `circle` element ควรมีค่า `cx` เป็น `78`, ค่า `cy` เป็น `180`, และค่า `r` เป็น `5`.

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

อันดับที่ 10) `circle` element ควรมีค่า `cx` เป็น `21`, ค่า `cy` เป็น `377`, และค่า `r` เป็น `5`.

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
       // Add your code below this line



       // Add your code above this line

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
