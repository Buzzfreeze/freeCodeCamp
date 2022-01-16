---
id: 587d7fac367417b2b2512bdd
title: Use Dynamic Scales
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

method `min()` และ `max()` ของ D3 มีประโยชน์ในการตั้งค่า scale

ถ้าเรามีชุดข้อมูลที่ซับซ้อน สิ่งที่สำคัญอย่างหนึ่งคือเราต้องแสดงข้อมูลให้อยู่ในขอบเขตของพื้นที่ SVG ให้ได้ SVG เพื่อที่จะได้เอาไปแสดงบนหน้าเว็บได้อย่างครบถ้วน

ตัวอย่างข้างล่างคือการกำหนด scale ในแกน `x` สำหรับข้อมูลที่ใช้กับกราฟแบบ scatter plot 
โดยที่ method `domain()` จะส่งรายละเอียดของของข้อมูลดิบไปให้ scale ก่อนทำการแสดงผล 
ส่วน method `range()` จะส่งรายละเอียดของพื้นที่แสดงผลบนหน้าเว็บของเราไปให้ scale ก่อนที่จะทำการแสดงผล

ในตัวอย่างจะเห็นว่า domain มีค่าตั้งแต่ 0 ไปจนถึงค่าสูงสุด โดยค่าสูงสุดถูกกำหนดโดยใช้ method `max()` และ callback function ตามค่า x ใน array 
และ range จะใช้ความกว้าง (`w`) ของ SVG canvas โดยรวมค่า padding (การเว้นระยะ) ไปด้วย
การเพิ่ม padding ลงไปด้วยทำให้จุดที่วาดออกมาบนกราฟ ไม่อยู่ติดกับขอบของกราฟมากเกินไป

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

คุณอาจจะงงเรื่อง padding แต่ไม่เป็นไร 
ให้ลองนึกภาพว่าแกน x เป็นเส้นแนวระนาบ (แนวนอน) ที่มีค่าตั้งแต่ 0 ถึง 500 (ค่า width ของ SVG canvas) 
การเพิ่ม padding ไปใน method `range()` โดยให้ padding เป็น 30 จะทำให้จุดที่วาดลงในกราฟเริ่มวาดที่ตำแหน่งที่ 30 และไม่เกิน 470 (ซึ่งถ้าไม่เพิ่ม padding ลงไป จุดจะเริ่มวาดได้ตั้งแต่ 0 ไปจนถึง 500 ซึ่งมันจะติดขอบของกราฟเกินไป ซึ่งอาจทำให้การแสดงผลดูยาก)

# --instructions--

ให้ใช้ตัวแปร `yScale` สร้าง linear scale บนแกน y โดยที่ `domain` ต้องเริ่มจาก 0 ไปจนถึงค่า `y` ที่สูงที่สุดในชุดข้อมูล 
และต้องใช้ความสูงของพื้นที่ SVG (`h`) ซึ่งรวม padding ไปด้วย ในการตั้งค่า `range`

**Note:** อย่าลืมว่าต้องวาดกราฟให้ไม่กลับหัว 
และเวลากำหนด range สำหรับแกน y ต้องใช้ค่าที่มาก (ความสูง - padding) เป็น argument แรก และใช้ค่าที่น้อยเป็น argument ที่สอง

# --hints--

ข้อความใน `h2` ต้องเป็น `30`

```js
assert(output == 30 && $('h2').text() == '30');
```

`domain()` ของ yScale ต้องเป็น `[0, 411]`

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

`range()` ของ yScale ต้องเป็น `[470, 30]`

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

    // Padding คือช่องว่างระหว่างขอบของกราฟและจุดข้อมูล
    const padding = 30;

    // สร้างสเกล x และ y

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // เขียนโค้ดใต้บรรทัดนี้

    const yScale = undefined;


    // เขียนโค้ดเหนือบรรทัดนี้

    const output = yScale(411); // คืนค่าเป็น 30
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
