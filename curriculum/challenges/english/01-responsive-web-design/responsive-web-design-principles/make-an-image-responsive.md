---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

การเปลี่ยนขนาดรูปภาพตามขนาดหน้าจอโดยใช้ CSS นั้นง่ายมาก ๆ
คุณแค่ต้องเพิ่ม property นี้ให้รูปของคุณ:

```css
img {
  max-width: 100%;
  height: auto;
}
```

การตั้งค่า `max-width` ให้เป็น `100%` จะทำให้ขนาดของรูปไม่กว้างเกิน parent element และการตั้งค่า `height` ให้เป็น `auto` จะทำให้ขนาดของรูปมีอัตราส่วนตามรูปต้นฉบับ

# --instructions--

ให้เพิ่ม style ให้กับคลาส `responsive-img` เพื่อทำให้รูปนี้เปลี่ยนขนาดตามขนาดหน้าจอ

โดยรูปต้องไม่กว้างกว่า parent element (ในกรณีนี้ก็คือหน้าต่าง preview) และรูปนี้ต้องมีอัตราส่วนตามภาพต้นฉบับ
เมื่อเพิ่มโค้ดแล้ว ให้ลองปรับขนาดหน้าต่าง preview จะได้เห็นว่ารูปภาพจะเปลี่ยนไปอย่างไร

# --hints--

คลาส `responsive-img` ต้องมี `max-width` เป็น `100%`

```js
assert(getComputedStyle($(".responsive-img")[0]).maxWidth === "100%");
```

คลาส `responsive-img` ต้องมี `height` เป็น `auto`

```js
assert(code.match(/height:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .responsive-img {
  }

  img {
    width: 600px;
  }
</style>

<img
  class="responsive-img"
  src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg"
  alt="freeCodeCamp stickers set"
/>
<img
  src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg"
  alt="freeCodeCamp stickers set"
/>
```

# --solutions--

```html
<style>
  .responsive-img {
    max-width: 100%;
    height: auto;
  }

  img {
    width: 600px;
  }
</style>

<img
  class="responsive-img"
  src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg"
  alt="freeCodeCamp stickers set"
/>
<img
  src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg"
  alt="freeCodeCamp stickers set"
/>
```
