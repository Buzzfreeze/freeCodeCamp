---
id: 587d78a3367417b2b2512acf
title: Change the Position of Overlapping Elements with the z-index Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

เมื่อ elements ถูกวางทับกันแล้ว (เช่นการใช้ `position: absolute | relative | fixed | sticky`)
element ที่มาที่หลังใน HTML markup จะอยู่ที่ด้านหน้าของ element ตัวอื่น ๆ โดยค่าเริ่มต้น
อย่างไรก็ตาม `z-index` property สามารถระบุลำดับหน้าหลังของ element ที่ซ้อนทับกันอยู่ได้
เราจะใช้จำนวนเต็มเพื่อกำหนดค่าของมัน โดยค่า `z-index` property ที่สูงกว่าจะทำให้ element นั้นมาอยู่ที่ด้านหน้ามากกว่าตัวที่มีค่าน้อยกว่า 

# --instructions--

จงเพิ่ม `z-index` property ให้ element ที่มีคลาสชื่อ`first` (สี่เหลี่ยมสีแดง) และกำหนดให้มันมีค่าเป็น 2 เพื่อที่มันจะได้บัง element อีกตัว (สี่เหลี่ยมสีฟ้า)

# --hints--

element ที่มีคลาสชื่อ`first` ควรมี `z-index` เป็น 2

```js
assert($('.first').css('z-index') == '2');
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
