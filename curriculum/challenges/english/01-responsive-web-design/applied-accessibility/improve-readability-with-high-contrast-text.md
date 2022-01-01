---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

contrast ที่น้อยระหว่างสีของพื้นหน้าและพิ้นหลังสามารถทำให้ข้อความนั้นยากที่จะอ่าน
contrast ที่เพียงพอช่วยให้เนื้อหาของคุณอ่านง่ายขึ้น แต่ว่า "เพียง" ที่ว่าคืออะไรกันแน่?

Web Content Accessibility Guidelines (WCAG) แนะนำว่า contrast ratio ของข้อความทั่วไปควรมีค่าอย่างน้อย 4.5 to 1
อัตราส่วนนี้ถูกคำนวณโดยเปรียบเทียบ relative luminance values ของ 2 สี
โดยมีค่าตั้งแต่ 1:1 สำหรับสีที่เหมือนกัน

# --instructions--

ตัวเลือกของ Camper Cat สำหรับโพสต์ล่าสุดในบล็อกของเขาซึ่งเป็นข้อความสีเทาอ่อนบนพื้นหลังสีขาวมี contrast ratio แค่ 1.5:1 มันทำให้ยากที่จะอ่าน
จงเปลี่ยน `color` ของข้อความจากสีเทาตอนนี้ (`#D3D3D3`) ให้เป็นสีเทาที่เข้มขึ้น (`#636363`) เพื่อช่วยให้ contrast ratio มีค่า 6:1.

# --hints--

โค้ดของคุณควรเปลี่ยน `color` ของข้อความสำหรับ `body` ไปเป็นเทาที่เข้มกว่า

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

คุณไม่ควรเปลี่ยน `background-color` ของ `body`.

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    body {
      color: #d3d3d3;
      background-color: #fff;
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
      The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in
      competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the
      public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at
      the Claw of Fury tournament.
    </p>
    <p>
      As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external
      influences. My own catnip use shall continue as purely recreational.
    </p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
    body {
      color: #636363;
      background-color: #fff;
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
      The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in
      competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the
      public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at
      the Claw of Fury tournament.
    </p>
    <p>
      As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external
      influences. My own catnip use shall continue as purely recreational.
    </p>
  </article>
</body>
```
