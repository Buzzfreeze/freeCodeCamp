---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: "https://scrimba.com/c/cKb3nCq"
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

การที่ของสีข้อความและสีของพื้นหลังมีคอนทราสต์ต่ำ จะทำให้ข้อความอ่านยาก
การมีคอนทราสต์ที่เหมาะสมจะทำให้ตัวหนังสืออ่านได้ง่ายขึ้น แต่ว่า แค่ถึงจะเรียกว่า "เหมาะสม" ล่ะ?

Web Content Accessibility Guidelines (WCAG) แนะนำว่าอัตราส่วนของคอนทราสต์ (contrast ratio) ของข้อความทั่วไป ควรมีค่าอย่างน้อย 4.5 ต่อ 1
อัตราส่วนนี้จะคำนวนจากความสว่างของทั้ง 2 สี
โดยสีที่เหมือนกันจะมีอัตราส่วนนี้เป็น 1:1

# --instructions--

นาย Camper Cat ได้เลือกตัวอักษรสีเทาอ่อน บนพื้นหลังสีขาว ทำให้อัตราส่วนของคอนทราสต์เป็นแค่ 1.5:1 ซึ่งทำให้อ่านยากมาก
ให้เปลี่ยน `color` ของข้อความจากสีเทาอ่อน (`#D3D3D3`) ให้เป็นสีเทาที่เข้มขึ้น (`#636363`) ซึ่งจะทำให้อัตราส่วนจองคอนทราสต์กลายเป็น 6:1

# --hints--

ต้องเปลี่ยน `color` ของข้อความใน `body` ไปเป็นสีเทาเข้ม

```js
assert($("body").css("color") == "rgb(99, 99, 99)");
```

ต้องไม่เปลี่ยน `background-color` ของ `body`

```js
assert($("body").css("background-color") == "rgb(255, 255, 255)");
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
