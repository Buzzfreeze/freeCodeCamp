---
id: bad87fee1348cd8acef08812
title: Create a Block Element Bootstrap Button
challengeType: 0
forumTopicId: 16810
dashedName: create-a-block-element-bootstrap-button
---

# --description--

โดยทั่วไปแล้ว `button` element ที่มี class `btn` และ `btn-default` จะมีความกว้างตามขนาดของข้อความข้างในปุ่ม เช่น:

```html
<button class="btn btn-default">Submit</button>
```

ปุ่มนี้มีความกว้างเท่าคำว่า `Submit` เท่านั้น

<button class='btn btn-default'>Submit</button>
การเพิ่ม class `btn-block` จะทำให้ปุ่มนั้นๆ กลายเป็น block element แล้วความกว้างของปุ่มจะยาวตามความกว้างของหน้านั้น และ element ที่อยู่ถัดไปก็จะไปขึ้น "บรรทัดใหม่" ใต้ปุ่มที่เป็น block element ปุ่มนั้น


```html
<button class="btn btn-default btn-block">Submit</button>
```

ปุ่มนี้มีความกว้างเต็ม 100% ของความกว้างของหน้า

<button class='btn btn-default btn-block'>Submit</button>

หมายเหตุ การสร้างปุ่มที่เป็น block element ยังต้องมี class `btn` อยู่เหมือนเดิม

มาลองสร้างปุ่ม ที่มี class `btn-block` ของ Bootstrap กัน

# --hints--

ปุ่มนี้ยังต้องมี class `btn` และ `btn-deffault` อยู่เหมือนเดิม

```js
assert($('button').hasClass('btn') && $('button').hasClass('btn-default'));
```

ให้เพิ่ม class `btn-block`

```js
assert($('button').hasClass('btn-block'));
```

อย่าลืม tag ปิด สำหรับ `button` element

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-default">Like</button>
  <p>Things cats love:</p>
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
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-block btn-default">Like</button>
  <p>Things cats love:</p>
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
