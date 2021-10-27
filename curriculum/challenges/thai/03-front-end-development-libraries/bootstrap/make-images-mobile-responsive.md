---
id: bad87fee1348bd9acde08812
title: Make Images Mobile Responsive
challengeType: 0
forumTopicId: 18232
dashedName: make-images-mobile-responsive
---

# --description--

ก่อนอื่นให้เพิ่มรูปใหม่ไว้ข้างล่างรูปเก่า โดยกำหนด `src` attribute เป็น `https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg`.

หากต้องการให้รูปที่เราเพิ่งเพิ่มมานี้มีความกว้างที่พอดีกับหน้าจอมือถือของเราล่ะ?

วิธีที่ง่ายวิธีการนึงคือการใช้ Bootstrap เพียงแค่การเพิ่ม class `img-responsive` ให้ tag image เท่านี้รูปของเราก็จะพอดีกับความกว้างของเพจแล้ว

# --hints--

จะต้องมีรูปภาพในทั้งหมด 2 ภาพในเพจ

```js
assert($('img').length === 2);
```

รูปภาพใหม่ที่เพิ่มเข้ามาจะต้องอยู่ใต้รูปภาพเก่า และมี class `img-responsive`.

```js
assert($('img:eq(1)').hasClass('img-responsive'));
```

ไม่ต้องเพิ่ม class `smaller-image` ให้รูปภาพใหม่ที่เพิ่มมา

```js
assert(!$('img:eq(1)').hasClass('smaller-image'));
```

ให้ใช้ `src` เป็น `https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg` สำหรับรูปภาพใหม่

```js
assert($('img:eq(1)').attr('src') === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg');
```

อย่าลืมใส่ `>` เพื่อปิด tag img

```js
assert(
  code.match(/<img/g) &&
    code.match(/<img[^<]*>/g).length === 2 &&
    code.match(/<img/g).length === 2
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
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <h2 class="red-text">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive">

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
