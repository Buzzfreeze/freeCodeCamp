---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

สีเป็นส่วนสำคัญสำหรับการออกแบบเพื่อการมองเห็น แต่การใช้มันทำให้เกิด 2 ปัญหา
1 เราไม่ควรใช้แค่สีเพื่อการสื่อความข้อมูลที่มีความสำคัญเพราะ screen reader จะไม่เห็นมัน
2 สีพื้นหน้าและพื้นหลังต้องการ contrast ที่เพียงพอเพื่อที่คนตาบอดสีจะสามารถแยกแยะมันได้

challenges ก่อนหน้าได้กล่าวถึงการใช้ text alternatives เพื่อแก้ปัญหาแรก
สำหรับ challenge สุดท้ายนี้จะกล่าวถึงการใช้เครื่องมือตรวจเช็ค contrast เพื่อจัดการกับปัญหหาที่สอง
WCAG-recommended contrast ratio คือ 4.5:1 ซึ่งสามารถใช้ได้กับทั้งการจะคู่สีและการจับคู๋ grayscale

คนตาบอดสีจะมีปัญหาในการแยกแยะบางสี โดยปกติจะเป็นในแง่ของเฉดสี (hue) แต่บางที่ก็เป้นที่ความสว่าง (lightness) ได้เช่นกัน
คุณอาจจะจำได้ว่า contrast ratio นั้นถูกคำนวณมากจากค่าความสว่างสัมพัทธ์ของสีพื้นหน้าและพื้นหลัง

ในแบบฝึกหัดI, 4.5:1 contrast ratio สามารถทำได้จากการเพิ่มสีดำให้กับสีเข้มและเพิ่มสีขาวให้กับสีที่อ่อนกว่า
บนวงล้อสี สีน้ำเงิน ม่วง บานเย็น และแดงถูกมองว่าเป็นสีเข้ม และสีส้ม เหลือง เขียว และฟ้าเขียวเป็นสีอ่อน

# --instructions--

Camper Cat กำลังทดลองใช้สีต่าง ๆ กับข้อความและพื้นหลังของบล็อกของเขา แต่คู่สีปัจจุบันของเขาค่อนข้างจะเป็นสีเขียว `background-color` กับข้อความสีแดงเลือดหมู `color` ซึ่งมี contrast ratio อยู่ที่ 2.5:1
คุณสามารถปรับค่าความสว่างของมันได้เพราะเขากำหนดค่าสีโดยใช้ CSS `hsl()` property (ซึ่งมาจาก hue (เฉดสี), saturation (ความอิ่มตัว), lightness (ความสว่าง)) โดยการเปลี่ยน argument ตัวที่สาม
จงเพิ่มความสว่างของ`background-color` จาก 35% ไปที่ 55%, และลดความสว่าง `color` จาก 20% ไปที่ 15%
สิ่งนี้จะช่วยให้ contrast มีค่าอยู่ที่ 5.9:1.

# --hints--

โค้ดของคุณควรปรับค่าความสว่างสำหรับ `color` property ของข้อความไปที่ 15%

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

Your code should only change the lightness value for the `background-color` property to a value of 55%.

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```
