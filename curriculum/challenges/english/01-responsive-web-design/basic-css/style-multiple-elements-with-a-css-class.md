---
id: bad87fee1348bd9aefe08806
title: Style Multiple Elements with a CSS Class
challengeType: 0
videoUrl: "https://scrimba.com/c/cRkVbsQ"
forumTopicId: 18311
dashedName: style-multiple-elements-with-a-css-class
---

# --description--

การใช้ `class` จะทำให้คุณใช้ style กับแท็กหลายๆแบบได้
ให้ลองกำหนด class ของ `p` element ตัวแรกเป็น `red-text` ดู แล้วคุณจะเห็นการเปลี่ยนแปลง

# --hints--

ข้อความใน `h2` ต้องเป็นสีแดง

```js
assert($("h2").css("color") === "rgb(255, 0, 0)");
```

คลาสของ `h2` ต้องเป็น `red-text`

```js
assert($("h2").hasClass("red-text"));
```

ข้อความใน `p` element ตัวแรกต้องเป็นสีแดง

```js
assert($("p:eq(0)").css("color") === "rgb(255, 0, 0)");
```

ข้อความใน `p` element ตัวที่สองและสามต้องไม่เป็นสีแดง

```js
assert(
  !($("p:eq(1)").css("color") === "rgb(255, 0, 0)") &&
    !($("p:eq(2)").css("color") === "rgb(255, 0, 0)")
);
```

คลาสของ `p` element ตัวแรกต้องเป็น `red-text`

```js
assert($("p:eq(0)").hasClass("red-text"));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
<style>
  .red-text {
    color: red;
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
