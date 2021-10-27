---
id: bad87fee1348bd9aedd08845
title: Add Font Awesome Icons to our Buttons
challengeType: 0
forumTopicId: 16638
required:
  - link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    raw: true
dashedName: add-font-awesome-icons-to-our-buttons
---

# --description--

Font Awesome คือ library ไอคอนที่ใช้งานง่าย ซึ่งเป็นได้ทั้ง เว็บฟอนต์ หรือรูปเวกเตอร์ โดยที่จะมีคุณสมบัติเหมือนฟอนต์ คือ สามารถกำหนดขนาดเป็นหน่วย pixel ได้ หรือถ้าหากไม่ได้กำหนด ก็จะมีขนาดเท่ากันกับขนาดฟอนต์ใน parent element ของ HTML นั้น

โดยสามารถติดตั้ง Font Awesome ในแอปไหนก็ได้ แค่ใส่โค้ดข้างล่างในส่วน head ของ HTML:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```

เราได้ติดตั้ง Font Awesome ไว้แล้วบนเพจนี้ ไม่จำเป็นต้องใส่โค้ดข้างบนอีก ในการใช้งาน

เดิมทีนั้น `i` element ถูกใช้เพื่อทำให้ฟอนต์เป็นตัวเอียง แต่ปัจจุบันถูกนำมาใช้เพื่อเพิ่มไอคอนมากกว่า ซึ่งคุณสามารถเพิ่ม class ต่างๆ ของ Font Awesome ใน `i` element เพื่อเปลี่ยนเป็นไอคอน ตัวอย่างเช่น:

```html
<i class="fas fa-info-circle"></i>
```

หมายเหตุ `span` element ก็สามารถใช้เพื่อเพิ่มไอคอนแทน `i` ได้เช่นกัน

# --instructions--

ลองใช้ Font Awesome ในการเพิ่มไอคอน `thumbs-up` ไปในปุ่ม Like โดยใช้ `i` element ที่มี class ชื่อว่า `fas` และ `fa-thumbs-up` แล้วให้คำว่า `Like` อยู่ตามหลังไอคอน

# --hints--

ใส่ class `fas` และ `fa-thumbs-up` ไปใน `i` element

```js
assert($('i').is('.fas.fa-thumbs-up') || $('span').is('.fas.fa-thumbs-up'));
```

ไอคอน `fa-thumbs-up` จะต้องอยู่ภายในปุ่ม Like

```js
assert(
  ($('i.fa-thumbs-up').parent().text().match(/Like/gi) &&
    $('.btn-primary > i').is('.fas.fa-thumbs-up')) ||
    ($('span.fa-thumbs-up').parent().text().match(/Like/gi) &&
      $('.btn-primary > span').is('.fas.fa-thumbs-up'))
);
```

`i` element ควรจะต้องอยู่ใน `button` element

```js
assert(
  $('button').children('i').length > 0 ||
    $('button').children('span').length > 0
);
```

อย่าลืมปิด tag `i`

```js
assert(code.match(/<\/i>|<\/span>/g));
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
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
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
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
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
