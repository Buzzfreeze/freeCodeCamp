---
id: bad87fee1348bd9acdf08812
title: Size Your Images
challengeType: 0
forumTopicId: 18282
dashedName: size-your-images
---

# --description--

CSS มี property หนึ่งที่ชื่อ `width` ที่จะควบคุมความกว้างของ element
เช่นเดียวกับฟ้อนต์ เราใช้ `px` (pixels) เพื่อระบุค่าความกว้างของรูปภาพ

ยกตัวอย่างเช่น ถ้าเราต้องการสร้าง CSS class ที่ชื่อ `larger-image` ที่จะกำหนดให้ HTML element มีความกว้างเท่ากับ 500 pixels, เราจะเขียนว่า:

```html
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

# --instructions--

จงสร้างคลาสที่ชื่อ `smaller-image` และใช้มันเพื่อปรับขนาดของรูปภาพเพื่อที่มันจะได้กว้างแค่ 100 pixel

# --hints--

`img` element ควรมีคลาสชื่อ `smaller-image`.

```js
assert(
  $("img[src='https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg']")
    .attr('class')
    .trim()
    .split(/\s+/g)
    .includes('smaller-image'),
);
```

ภาพของคุณควรกว้าง 100 pixel

```js
assert($('img').width() < 200 && code.match(/\.smaller-image\s*{\s*width\s*:\s*100px\s*(;\s*}|})/i));
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label><br />
    <label><input type="checkbox" name="personality" checked /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Energetic</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <div>
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label><br />
    <label><input type="checkbox" name="personality" checked /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Energetic</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```
