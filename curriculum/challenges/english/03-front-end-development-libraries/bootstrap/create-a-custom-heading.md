---
id: bad87fee1348bd9aede08845
title: Create a Custom Heading
challengeType: 0
forumTopicId: 16816
dashedName: create-a-custom-heading
---

# --description--

เราจะสร้าง heading ง่ายๆ สำหรับแอป Cat Photo โดยใส่ชื่อ title กับรูปน้องแมวน่ารักๆ ใน row เดียวกัน

จำได้ใช่มั้ยว่า Bootstrap ใช้ระบบ responsive grid ที่ทำให้การใส่ element หลายๆตัวไว้ใน row เดียวกัน และการตั้งค่าความกว้างของ element ใน row นั้นๆง่ายขึ้น แล้วก็ class ส่วนใหญ่ของ Bootstrap สามารถนำไปใช้ได้กับ `div` element

มาลองใส่ภาพแรกและ `h2` element เข้าไปใน `<div class="row">` element โดยการใส่ `h2` element ไว้ใน `<div class="col-xs-8">` และใส่รูปภาพไว้ใน `<div class="col-xs-4">` ซึ่งจะทำให้ทั้ง 2 element นี้อยู่ใน row เดียวกัน

จะเห็นว่าตอนนี้ภาพที่เราเพิ่มเข้ามามีขนาดที่พอดีกับข้อความใน `h2` แล้ว

# --hints--

`h2` และ `img` ตัวบนสุดจะต้องอยู่ด้วยกัน ใน  `div` ที่มี class เป็น `row`

```js
assert($('div.row:has(h2)').length > 0 && $('div.row:has(img)').length > 0);
```

`img` ตัวบนสุดจะต้องอยู่ภายใน `div` ที่มี class เป็น `col-xs-4` อีกที

```js
assert(
  $('div.col-xs-4:has(img)').length > 0 &&
    $('div.col-xs-4:has(div)').length === 0
);
```

`h2` ก็จะต้องอยู่ใน `div` ที่มี class เป็น `col-xs-8`

```js
assert(
  $('div.col-xs-8:has(h2)').length > 0 &&
    $('div.col-xs-8:has(div)').length === 0
);
```

อย่าลืม tag ปิด สำหรับ `div` ทุกตัว

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

<style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary  text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  <p>Things cats <span class="text-danger">love:</span></p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```
