---
id: bad87fee1348bd9aedf08845
title: Use a span to Target Inline Elements
challengeType: 0
forumTopicId: 18370
dashedName: use-a-span-to-target-inline-elements
---

# --description--

คุณสามารถใช้ span ในการทำ inline element ได้นะ
ยังจำตอนที่เราใช้ class `btn-block` เพื่อทำให้ปุ่มนั้นกว้างเต็มบรรทัดได้มั้ย?

<button class='btn' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>normal button</button>

<button class='btn btn-block' style='background-color: rgb(0, 100, 0);  color: rgb(255, 255, 255);'>btn-block button</button>

ปุ่มข้างบนเป็นตัวอย่างของ element แบบ "inline" (ปุ่มบน) และ "block" (ปุ่มล่าง)

เมื่อใช้ `span` element เราจะรวม element หลายๆ element ให้อยู่ในบรรทัดเดียวกันได้ แล้วเราก็ยังแต่ง style ของ element ที่อยู่ในบรรทัดเดียวกันให้ต่างกันได้ด้วย

มาลองใช้ `span` element โดยการใช้ span ครอบคำว่า `love` ที่อยู่ประโยค `Things cats love` ใน `p` element แล้วกำหนด class ให้ `span` เป็น `text-danger` เพื่อทำให้ข้อความเป็นสีแดง

เราจะเปลี่ยนสีคำว่า hate ในประโยค `Top 3 things cats hate` ใน `p` element ได้ด้วยวิธีเดียวกัน:

```html
<p>Top 3 things cats <span class="text-danger">hate:</span></p>
```

# --hints--

`span` element จะต้องอยู่ใน `p` element

```js
assert($('p span') && $('p span').length > 0);
```

`span` element จะต้องมีแค่คำว่า `love` อยู่ภายใน

```js
assert(
  $('p span') &&
    $('p span').text().match(/love/i) &&
    !$('p span')
      .text()
      .match(/Things cats/i)
);
```

`span` element จะต้องมี class `text-danger`

```js
assert($('span').hasClass('text-danger'));
```

อย่าลืม tag ปิดสำหรับ `span` element

```js
assert(
  code.match(/<\/span>/g) &&
    code.match(/<span/g) &&
    code.match(/<\/span>/g).length === code.match(/<span/g).length
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
  <p>Things cats <span class="text-danger">love</span>:</p>
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
