---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

การทำให้รูปภาพresponsive ด้วย CSS นั้นง่ายมาก ๆ
คุณแค่ต้องเพิ่ม property เหล่านี้ให้กับรูป:

```css
img {
  max-width: 100%;
  height: auto;
}
```

`max-width` ที่มีค่า `100%` จะทำให้คุณมั่นใจได้ว่าขนาดของรูปจะไม่กว้างเกิน container ที่ใส่มันไว้
และ `height` ที่มีค่า `auto` จะทำให้ขนาดของรูปมีอัตราส่วนตามของต้นฉบับ

# --instructions--

จงเพิ่ม style rule ให้กับ `responsive-img` class เพื่อทำให้มัน responsive
มันควรไม่กว้างเกิน container ของมัน (ในกรณีนี้ก็คือ preview window) และมันควรจะคงอัตราส่วนภาพเท่ากับต้นฉบับ
หลังจากคุณเพิ่มโค้ดและจงปรับขนาด preview ให้เห็นว่ารูปภาพของคุณเป็นอย่างไร

# --hints--

`responsive-img` class ของคุณควรมี `max-width` ที่ถูกตั้งให้เท่ากับ `100%`.

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

Your `responsive-img` class should have a `height` set to `auto`.

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

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
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

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```
