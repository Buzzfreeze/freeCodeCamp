---
id: bad87fee1348bd9bedf08813
title: Add Borders Around Your Elements
challengeType: 0
videoUrl: "https://scrimba.com/c/c2MvnHZ"
forumTopicId: 16630
dashedName: add-borders-around-your-elements
---

# --description--

CSS สามารถสร้างกรอบของ element ได้ด้วย ซึ่งจะมี property `style`, `color` และ `width` เหมือนกัน

เช่น ถ้าเราต้องการสร้างกรอบสีแดงหนา 5 pixel รอบ HTML element
เราจะใช้คลาสนี้ได้:

```html
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

# --instructions--

ให้สร้างคลาสที่ชื่อ `thick-green-border`
โดยคลาสนี้จะเพิ่มขอบสีเขียวหนา 10px รอบ HTML element
และใส่คลาสนี้ให้กับรูปแมวของคุณ

คุณจะทำให้ element หนึ่งตัวมีหลายคลาสได้โดยใช้ `class` attribute โดยคุณจะต้องแบ่งชื่อของคลาสด้วยเว้นวรรค
เช่น:

```html
<img class="class1 class2" />
```

# --hints--

`img` element ต้องมีคลาสที่ชื่อ `smaller-image`

```js
assert($("img").hasClass("smaller-image"));
```

`img` element ต้องมีคลาสที่ชื่อ `thick-green-border`.

```js
assert($("img").hasClass("thick-green-border"));
```

กรอบของรูปภาพคุณต้องมีความหนาเป็น `10px`

```js
assert(
  $("img").hasClass("thick-green-border") &&
    parseInt($("img").css("border-top-width"), 10) >= 8 &&
    parseInt($("img").css("border-top-width"), 10) <= 12
);
```

กรอบของภาพต้องใช้ `border-style` เป็น `solid`

```js
assert($("img").css("border-right-style") === "solid");
```

`border-color` ของ `img` element ต้องเป็น `green`

```js
assert($("img").css("border-left-color") === "rgb(0, 128, 0)");
```

# --seed--

## --seed-contents--

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
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

# --solutions--

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
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

  .thick-green-border {
    border-width: 10px;
    border-color: green;
    border-style: solid;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
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
