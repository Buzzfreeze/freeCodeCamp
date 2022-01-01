---
id: 5b7d72c338cd7e35b63f3e14
title: Improve Compatibility with Browser Fallbacks
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

เมื่อทำงานกับ CSS คุณมีโอกาสที่ต้องเผชิญกับปัญหาด้าน browser compatibility ณ จุดใดจุดหนึ่ง
นี่เป็นสาเหตุที่เราจำเป็นต้องกำหนด fallback ให้กับ browser เพื่อป้องกันปัญหาที่อาจจะเกิดขึ้น

เมื่อ browser ของคุณประมวลผล CSS ของหน้าเว็บหน้าหนึ่ง มันจะไม่สนใจ property ที่มันหาไม่เจอหรือไม่รองรับ
จากตัวอย่าง
ถ้าคุณใช้ตัวแปร CSS เพื่อกำหนดค่าให้สีพื้นหลังบนเว็บไซต์
Internet Explorer จะไม่สนใจสีของพื้นหลังเพราะมันไม่ได้รองรับตัวแปร CSS
ในกรณีนั้น browser จะใช้ค่าใดก็ตามที่มันมีสำหรับ property นั้น
ถ้ามันไม่สามารถหาค่าอื่นได้ มันจะกลับไปใช้ค่าเริ่มต้นซึ่งโดยปกติไม่ค่อยดีเท่าไหร่

นี่หมายความว่าถ้าคุณต้องการกำหนด browser fallback, มันก็ง่ายเหมือนกับการกำหนดค่าอื่น ๆ ที่มันรองรับ
เช่นนั้นพวก browser เก่า ๆ ก็จะมีค่าบางอย่างให้ใช้ ในขณะที่ browser ที่ใหม่กว่าจะ interpret การประกาศค่าอะไรก็ตามที่มาจาก CSS

# --instructions--

มันเหมือนกับว่าตัวแปรหนึ่งได้ถูกใช้เพื่อกำหนดค่าสีพื้นหลังของ `.red-box` class
เรามาพัฒนา browser compatibility ของเราโดยการเพิ่ม `background` declaration อีกอันต่อจาก declaration ที่ได้ทำไปแล้วและกำหนดให้มันมีค่าเป็น `red`

# --hints--

`.red-box` rule ควรมี fallback ที่ `background` ถูกกำหนดให้เป็น `red` ทันทีก่อน `background` declaration ที่มี

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi,
    ),
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: var(--red-color);
    height: 200px;
    width: 200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width: 200px;
  }
</style>
<div class="red-box"></div>
```
