---
id: 587d78b1367417b2b2512b0a
title: Use a Retina Image for Higher Resolution Displays
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

เนื่องจากอุปกรณ์ที่เชื่อมต่อกับอินเตอร์ได้มีมากขึ้น ขนาดและสเปคของอุปกรณ์จึงค่อนข้างหลากหลายและการแสดงผลที่พวกเขาใช้อาจจะมีความแตกต่างกันได้
Pixel density เป็นส่วนที่อาจจะแตกต่างกันได้ในแต่ละอุปกรณ์และ density ที่ว่านี้เป็นที่รู้จักกันในชื่อ Pixel Per Inch(PPI) หรือ Dots Per Inch(DPI)
หน้าจอที่เป็นที่รู้จักกันมากที่สุดอันหนึ่งคือ "Retina Display" ของApple MacBook Pro notebooks รุ่นล่าสุดและ iMac computers ทีพึ่งออกมา
เนื่องจากความแตกต่างของ pixel density ระหว่างจอแบบ "Retina" และ "Non-Retina", รูปภาพบางรูปที่ไม่ได้ตั้งใจให้ใช้กับจอที่มีความละเอียดสูงอาจจะดู "pixelated" เมื่อแสดงผลบนจอที่มีความละเอียดสูง

วิธีที่ง่ายที่สุดที่จะทำให้รูปภาพของคุณแสดงบนจอที่มีความละเอียดสูงได้อย่างไม่มีปัญหา คือการกำหนดค่า `width` และ `height` ของพวกมันมีค่าแค่ครึ่งเดียวของ original file 
นี่คือตัวอย่างของรูปภาพที่มีความสูงและความกว้างครึ่งเดียวจากขนาด original ของมัน:

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

จงกำหนดให้ `width` และ `height` ของ `img` tag มีค่าแค่ครึ่งหนึ่งของค่ original ของมัน
ในกรณีนี้ `height` และ `width` ของรูปต้นฉบับคือ `200px`

# --hints--

`img` tag ของคุณควรมีค่า `width` เท่ากับ 100 pixels.

```js
assert(document.querySelector('img').width === 100);
```

Your `img` tag should have a `height` of 100 pixels.

```js
assert(document.querySelector('img').height === 100);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```
