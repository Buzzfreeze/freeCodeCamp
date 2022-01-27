---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: "https://scrimba.com/c/cmzMEUw"
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

สีเป็นส่วนสำคัญสำหรับการออกแบบเพื่อการมองเห็น แต่การใช้สีก็จะทำให้เกิดปัญหา ด้าน accessibility สองส่วน คือ
1 เราไม่ควรใช้แค่สีในการสื่อความของข้อมูลที่มีความสำคัญเพราะ screen reader จะไม่เห็นสี
2 สีพื้นหน้าและพื้นหลังต้องการต้องมีคอนทราสต์ที่เพียงพอ เพื่อที่คนตาบอดสีจะสามารถแยกแยะสีได้

เราได้พูดถึงการใช้ข้อความเพื่อแก้ปัญหาแรกไปแล้ว
และเราก็ได้พูดถึงจากตรวจสอบคอนทราสต์ เพื่อแก้ปัญหาที่สองไปในแบบฝึกหัดที่แล้ว
โดยอัตราส่วนของคอนทราสต์ที่ WCAG แนะนำคือ 4.5:1 ซึ่งสามารถใช้ได้กับทั้งการเลือกสี และเลือกสีโทนเทา

คนตาบอดสีจะมีปัญหาในการแยกแยะบางสี โดยปกติจะเป็นในแง่ของ hue แต่บางที่ก็เป็นที่ความสว่าง (lightness) ได้เช่นกัน
คุณอาจจะจำได้ว่าอัตราส่วนของคอนทราสต์ นั้นถูกคำนวณมาจากค่าความสว่างที่ต่างกันของสีพื้นหน้าและพื้นหลัง

ซึ่งจริงๆแล้ว เราสามารถทำให้อัตราส่วนของคอนทราสต์เป็น 4.5:1 ได้จากการเพิ่มสีดำให้กับสีเข้มและเพิ่มสีขาวให้กับสีที่อ่อนกว่า
บนวงล้อสี สีน้ำเงิน ม่วง บานเย็น และแดงถูกมองว่าเป็นสีเข้ม ส่วนสีส้ม เหลือง เขียว และฟ้าเขียวถือเป็นสีอ่อน

# --instructions--

ตอนนี้นาย Camper Cat กำลังทดลองใช้สีต่าง ๆ กับข้อความและพื้นหลังของบล็อคของเขา
ตอนนี้เขาใช้ `background-color` เป็นสีเขียว และ `color` ของข้อความเป็นสีแดงเลือดหมู ซึ่งสีคู่นี้มีอัตราส่วนคอนทราสต์อยู่ที่ 2.5:1
คุณสามารถปรับค่าความสว่างของสีนี้ได้เพราะนาย Camper Cat กำหนดค่าสีโดยใช้ CSS `hsl()` (ซึ่งมาจาก hue, saturation (ความอิ่มตัว), lightness (ความสว่าง)) โดยการเปลี่ยน argument ตัวที่สาม
ให้เพิ่มความสว่างของ `background-color` จาก 35% ไปเป็น 55%, และลดความสว่างของ `color` จาก 20% ไปเป็น 15%
ซึ่งจะทำให้อัตราส่วนคอนทราสต์มีค่าอยู่ที่ 5.9:1

# --hints--

ต้องปรับค่าความสว่างสว่างของ property `color` ของข้อความเป็น 15% โดยไม่เปลี่ยนค่าอื่น

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

ต้องปรับค่าความสว่างสว่างของ property `background-color` เป็น 55% โดยไม่เปลี่ยนค่าอื่น

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
    <p>
      The influence that catnip has on feline behavior is well-documented, and
      its use as an herbal supplement in competitive ninja circles remains
      controversial. Once again, the debate to ban the substance is brought to
      the public's attention after the high-profile win of Kittytron, a
      long-time proponent and user of the green stuff, at the Claw of Fury
      tournament.
    </p>
    <p>
      As I've stated in the past, I firmly believe a true ninja's skills must
      come from within, with no external influences. My own catnip use shall
      continue as purely recreational.
    </p>
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
    <p>
      The influence that catnip has on feline behavior is well-documented, and
      its use as an herbal supplement in competitive ninja circles remains
      controversial. Once again, the debate to ban the substance is brought to
      the public's attention after the high-profile win of Kittytron, a
      long-time proponent and user of the green stuff, at the Claw of Fury
      tournament.
    </p>
    <p>
      As I've stated in the past, I firmly believe a true ninja's skills must
      come from within, with no external influences. My own catnip use shall
      continue as purely recreational.
    </p>
  </article>
</body>
```
