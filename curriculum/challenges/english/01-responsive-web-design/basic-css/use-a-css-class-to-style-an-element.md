---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/c2MvDtV"
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

Class เป็น style ที่สามารถนำไปใช้ซ้ำกับ HTML element ตัวอื่นได้

ลองดูตัวอย่างการประกาศคลาสของ CSS:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

คุณจะเห็นได้ว่าเราได้สร้างคลาส CSS ชื่อ `blue-text` ในแท็ก `<style>`
คุณสามารถใช้คลาสกับ HTML element ได้แบบนี้: `<h2 class="blue-text">CatPhotoApp</h2>`

ในการประกาศชื่อของคลาสใน CSS `style` element จะต้องพิมพ์จุดไว้หน้าชื่อของคลาสด้วย
แต่การนำคลาสไปใช้ใน class attribute ของ HTML element คุณจะไม่ต้องใส่จุด ลองกลับไปดูตัวอย่างและการใช้งานคลาส `blue-text` ด้านบน

# --instructions--

ใน `style` element ให้เปลี่ยน selector ของ `h2` เป็นคลาส `.red-text` และและเปลี่ยน color จาก `blue` เป็น `red`
และให้กำหนด`class` attribute ของ `h2` element เป็น `red-text`

# --hints--

`color` ของ `h2` element ต้องเป็น `red`

```js
assert($("h2").css("color") === "rgb(255, 0, 0)");
```

`h2` element ต้องมี class ชื่อ `red-text`

```js
assert($("h2").hasClass("red-text"));
```

ต้องประกาศคลาส `red-text` ไว้ใน stylesheet (แท็ก style) และตั้งค่าให้มี `color` เป็น `red`

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

ห้ามใช้ style แบบ inline ใน `h2` element (แบบนี้เรียกว่า inline: `style="color: red"`)

```js
assert($("h2").attr("style") === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
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
