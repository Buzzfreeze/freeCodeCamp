---
id: 587d7fab367417b2b2512bda
title: Create a Linear Scale with D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

กราฟแท่งและ scatter plot เขียนข้อมูลงไปใน SVG canvas โดยตรง 
แต่ถ้าความสูงของกราฟแท่ง หรือตำแหน่งของจุดข้อมูล มีค่ามากกว่าความกว้างหรือความยาวของพื้นที่ SVG ค่าเหล่านั้นจะไปแสดงผลอยู่นอกพื้นที่ SVG

ใน D3 มีฟังก์ชัน `scale` ที่ช่วยแก้ปัญหานี้ได้  
โดย `scales` เป็นฟังก์ชันที่จะบอกโปรแกรมว่า จะวาดข้อมูลดิบของเราไปบนตำแหน่งพิกเซลไหนใน SVG canvas

เช่น ถ้าเรามี SVG canvas ที่มีขนาด 100x500 และต้องการวาดกราฟ Gross Domestic Product (GDP) ของหลายๆประเทศลงไป
ตัวเลขที่ใช้ในข้อมูลอาจมีหน่วยเป็นพันล้านหรือล้านล้านก็ได้ 
แต่เราสามารถใช้ D3 เพื่อ scale ให้ค่าของ GDP นั้นแสดงผลในพื้นที่ขนาด 100x500 ได้

ซึ่งจากข้อมูลนี้ เราแทบจะไม่มีทางวาดข้อมูลดิบหลักล้านลงในพื้นที่นี้ได้เลย 
ก่อนที่เราจะวาดกราฟเราต้องกำหนด scale ที่ทำให้ ทำให้ค่า `x` และ `y` ไม่เกินขนาดของ canvas ของเราก่อน

D3 มี scale หลายแบบ แต่สำหรับ linear scale (ใช้งานบ่อยในในข้อมูลเชิงปริมาณ) จะมี method `scaleLinear()` ของ D3:
(method นี้จะคืนค่าเป็นฟังก์ชัน)

```js
const scale = d3.scaleLinear()
```

โดยค่าเริ่มต้น scale จะมองว่าค่าที่รับเข้ามาจะเท่ากับค่าที่แสดงผล เราจะพูดถึงวิธีการเปลี่ยนรูปแบบนี้ในบทเรียนอื่น

# --instructions--

ให้เปลี่ยนตัวแปร `scale` เพื่อสร้าง linear scale
แล้วในตัวแปร `output` ให้เรียกใช้ฟังก์ชัน `scale` โดยส่ง argument เป็น `50`

# --hints--

text ใน `h2` ควรเป็น `50`

```js
assert($('h2').text() == '50');
```

ต้องใช้ method `scaleLinear()`

```js
assert(code.match(/\.scaleLinear/g));
```

ตัวแปร `output` ต้องเรียกใช้ `scale` โดยส่ง argument เป็น `50`

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // เขียนโค้ดใต้บรรทัดนี้

    const scale = undefined; // สร้าง scale ตรงนี้
    const output = scale(); // เรียกใช้ scale โดยใช้ argument ตรงนี้

    // เขียนโค้ดเหนือบรรทัดนี้

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
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```
