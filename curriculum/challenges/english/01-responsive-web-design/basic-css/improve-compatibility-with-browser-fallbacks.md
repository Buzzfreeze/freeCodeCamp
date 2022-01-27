---
id: 5b7d72c338cd7e35b63f3e14
title: Improve Compatibility with Browser Fallbacks
challengeType: 0
videoUrl: ""
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

เวลาคุณใช้ CSS คุณจะต้องได้เจอกับปัญหาด้านความเข้ากันได้ของเบราว์เซอร์ (browser compatibility) แน่นอน
นี่เป็นสาเหตุที่เราจำเป็นต้องกำหนด fallback ให้กับเบราว์เซอร์ เพื่อป้องกันปัญหาที่อาจจะเกิดขึ้น

เมื่อเบราว์เซอร์ ของคุณประมวลผล CSS ของหน้าเว็บหน้าหนึ่ง เบราว์เซอร์จะไม่สนใจ property นั้น ถ้าหาไม่เจอหรือไม่รองรับ

จากตัวอย่าง
ถ้าคุณใช้ตัวแปร CSS เพื่อกำหนดค่าให้สีพื้นหลังบนเว็บไซต์
Internet Explorer จะไม่สนใจสีของพื้นหลังเพราะว่า IE ไม่ได้รองรับตัวแปร CSS
ในกรณีนี้ เบราว์เซอร์จะใช้อื่นที่มีของ property นั้น
ถ้าไม่สามารถหาค่าอื่นได้ เบราว์เซอร์จะกลับไปใช้ค่าเริ่มต้น ซึ่งโดยเราก็คงไม่อยากให้เบราว์เซอร์ใช้ค่านั้น

นี่แปลว่าถ้าคุณอยากกำหนด fallback ของเบราว์เซอร์
วิธีง่ายๆก็แค่ประกาศ style เพิ่มไว้ ก่อนที่จะประกาศ style ที่เราจะใช้จริงๆ
ซึ่งวิธีนี้ ถ้าเบราว์เซอร์รุ่นเก่าๆมาอ่านค่าของ style ที่เราจะใช้จริง แล้วพบว่าไม่สามารถใช้ค่านั้นได้ เบราว์เซอร์นั้นก็จะย้อนไปอ่านค่าของ style ตัวที่ประกาศไว้ก่อนแทน

# --instructions--

ตอนนี้ในโค้ดมีการใช้ตัวแปร CSS ในคลาส `.red-box`
เรามาทำให้ CSS ของเรายังคงทำงานได้ในเบราว์เซอร์รุ่นเก่ากัน
โดยให้ประกาศ `background` ก่อนหน้าการประกาศที่มีอยู่แล้ว และกำหนดค่าให้เป็น `red`

# --hints--

`.red-box` ต้องมี fallback ของ `background` ที่กำหนดค่าให้เป็น `red` เหนือการประกาศ `background` ที่ใช้ตัวแปร

```js
assert(
  code
    .replace(/\s/g, "")
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
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
