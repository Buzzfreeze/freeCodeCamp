---
id: 587d7fac367417b2b2512bdd
title: Use Dynamic Scales
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

D3 `min()` และ `max()` methods ช่วยในการ set scale

กำหนดให้ complex data set ต้องมีการ set scale เพื่อแสดงภาพที่พอดีกับค่าอwidth และ height ของ SVG container หาต้องการ plot data ทั้งหมดใน SVG canvas เพื่อแสดงผลบนหน้า web page

ตัวอย่างข้างล่างคือการกำหนด x-axis scale สำหรับ scatter plot data โดยที่ `domain()` method จะส่ง information ของ raw dat ไปให้ scale ค่าก่อนทำการ plot ส่วน `range()` method จะส่ง information ของ actual space บนหน้า web page ที่จะทำการแสดงผล

ในตัวอย่างจะพบว่า domain มีค่าเริ่มจาก 0 ไปถึง maximum  ซึ่งมันใช้ `max()` method และ callback function โดยอ้างอิงจากค่า x ใน arrays โดย range ที่ใช้ใน SVG canvas จะเป็นค่า width (`w`) ที่รวมค่า padding ของ space ระหว่างแต่ละ scatter plot dots กับ พื้นที่ขอบของ SVG canvas ไปด้วย

```js
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

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

อาจจะมีความสับสนสำหรับค่า padding กำหนดให้รูปภาพมีแกน x เป็น horizontal line จาก 0 ถึง 500 (ค่า width สำหรับ SVG canvas) และ padding อยู่ใน `range()` method ที่กำหนดให้ plot เริ่มจาก 30 ตามเส้นตรง (แทนที่ค่า 0) และไปสิ้นสุดที่ 470 (แทนที่ค่า 500)

# --instructions--

ใช้ `yScale` variable สร้าง linear y-axis scale โดยที่ domain ควรเริ่มจาก 0 ไปจนถึงค่า maximum ของ `y` ใน set และ range ควรใช้ค่า SVG height (`h`) ที่รวมค่า padding ไปด้วย

**Note:** อย่าลืม plot ที่ตำแหน่ง right-side-up เมื่อกำหนด range สำหรับ y coordinates ให้ใช้ค่า argument แรกมีค่า (height - padding) ที่มากกว่า argument ที่สอง

# --hints--

text ใน `h2` ควรเป็น `30`.

```js
assert(output == 30 && $('h2').text() == '30');
```

`domain()` ของ yScale ควรเท่ากับ `[0, 411]`.

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

`range()` ของ yScale ควรเท่ากับ `[470, 30]`.

```js
assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));
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

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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


    const padding = 30;

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);


    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
