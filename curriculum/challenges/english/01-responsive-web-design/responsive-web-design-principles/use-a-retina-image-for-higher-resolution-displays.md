---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: "https://scrimba.com/p/pzrPu4/cVZ4Rfp"
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

ปัจจุบันนี้โลกเรามีอุปกรณ์ที่ใช้เข้าเว็บได้มากขึ้น โดยอุปกรณ์พวกนี้จะมีขนาดแตกต่างกันมาก

Pixel density (ความหนาแน่นของพิกเซล) ของแต่ละอุปกรณ์จะแตกต่างกัน โดยเราอาจจะคุ้นเคยกับค่านี้ในชื่อ Pixel Per Inch (PPI: พิกเซลต่อนิ้ว) หรือ Dots Per Inch (DPI:จำนวนจุดสีต่อนิ้ว)

หน้าจอที่เป็นที่รู้จักกันมากที่สุดอันหนึ่งคือ "Retina Display" ของ Apple ที่ใช้ในทั้ง Apple Watch, iPhone, iPad, Macbook รุ่นใหม่ๆ
จอแบบ Retina Display นี้จะมี pixel density ต่างจากจอปกติอย่างมาก ทำให้รูปบางรูปของเราอาจ "แตก" เมื่อใช้บนจอนี้

วิธีที่ง่ายที่สุดที่จะทำให้รูปของคุณไม่แตกถ้าดูบนจอที่มีความละเอียดสูง คือการกำหนดค่า `width` และ `height` ของรูปให้เป็นแค่ครึ่งเดียวของไฟล์ต้นฉบับ
ลองดูตัวอย่าง:

```html
<style>
  img {
    height: 250px;
    width: 250px;
  }
</style>
<img src="coolPic500x500" alt="A most excellent picture" />
```

# --instructions--

ให้กำหนด `width` และ `height` ของแท็ก `img` ให้มีขนาดแค่ครึ่งเดียวของรูปต้นฉบับ
ในกรณีนี้ `height` และ `width` ของรูปต้นฉบับคือ `200px`

# --hints--

แท็ก `img` ต้องมี `width` เป็น 100 pixel

```js
assert(document.querySelector("img").width === 100);
```

แท็ก `img` ต้องมี `height` เป็น 100 pixel

```js
assert(document.querySelector("img").height === 100);
```

# --seed--

## --seed-contents--

```html
<style></style>

<img
  src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg"
  alt="freeCodeCamp sticker that says 'Because CamperBot Cares'"
/>
```

# --solutions--

```html
<style>
  img {
    height: 100px;
    width: 100px;
  }
</style>

<img
  src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg"
  alt="freeCodeCamp sticker that says 'Because CamperBot Cares'"
/>
```
