---
id: 587d78a3367417b2b2512acf
title: Change the Position of Overlapping Elements with the z-index Property
challengeType: 0
videoUrl: "https://scrimba.com/c/cM94aHk"
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

เมื่อเราวาง element ทับกัน (เช่นการใช้ `position: absolute | relative | fixed | sticky`) element ที่มาที่หลังในโค้ด HTML จะอยู่ทับ element ที่มาก่อน
แต่เราก็มี property `z-index` ที่ใช้ระบุลำดับหน้าหลังของ element ที่ทับกันอยู่ได้
เราจะใช้เลขจำนวนเต็มในการกำหนดค่าให้ property `z-index` โดย element ที่มี `z-index` มากกว่าจะอยู่ด้านนห้า element ที่มี `z-index` ต่ำกว่าเสมอ

# --instructions--

ให้เพิ่ม property `z-index` ให้ element ที่มีคลาสชื่อ `first` (สี่เหลี่ยมสีแดง) โดยให้มีค่าเป็น 2 เพื่อที่สี่เหลี่ยมสีแดงจะได้อยู่ด้านหน้าสี่เหลี่ยมสีฟ้า

# --hints--

element ที่มีคลาสเป็น `first` ต้องมี `z-index` เป็น 2

```js
assert($(".first").css("z-index") == "2");
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```
