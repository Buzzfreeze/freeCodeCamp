---
id: bad87fee1348bd9aedf08805
title: Use CSS Selectors to Style Elements
challengeType: 0
videoUrl: "https://scrimba.com/c/cJKMBT2"
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

CSS มี property เป็นร้อยๆตัวที่ใช้กำหนดรูปแบบหน้าตาของ element ที่อยู่บนหน้าเว็บของคุณ

ถ้าคุณใช้โค้ดนี้ `<h2 style="color: red;">CatPhotoApp</h2>`
จะเป็นการตกแต่ง `h2` element โดยใช้ inline CSS (CSS ย่อมาจาก Cascading Style Sheets)

โค้ดด้านบนเป็นตัวอย่างของการใช้ style กับ element รูปแบบหนึ่ง แต่ก็ยังมีอีกวิธีหนึ่งในการใช้ CSS ที่ดีกว่า

ที่ด้านบนของโค้ดใน code editor ให้สร้าง `style` block แบบนี้:

```html
<style></style>
```

โดยใน style block ที่เขียนมานี้ คุณจะเขียน <dfn>CSS selector</dfn> เพื่อให้ style มีผลกับ `h2` element ทุกตัวได้
เช่น ถ้าคุณต้องการให้ `h2` element ทุกตัวเป็นสีแดง คุณจะเพิ่ม style rule เข้าไปแบบนี้ได้:

```html
<style>
  h2 {
    color: red;
  }
</style>
```

สิ่งสำคัญคือ ต้องไม่ลืมที่จะใส่ `{` และ `}` ครอบ style rule ของแต่ละ element
โดยที่การประกาศใช้ style แต่ละตัวของ element นั้น ต้องอยู่ใน `{` และ `}` ของ style ด้วย

สุดท้าย ให้เติม semicolon (`;`) ต่อท้าย style rule ทุกตัวของ element ด้วย

# --instructions--

ให้ลบ `style` attribute ของ `h2` ออก และเปลี่ยนไปใช้ CSS `style` block แทน
และให้เขียน CSS ที่จะเปลี่ยนสีของข้อความใน `h2` element ทั้งหมดให้เป็นสีฟ้า

# --hints--

ต้องลบ `style` ออกจาก `h2` element

```js
assert(!$("h2").attr("style"));
```

ต้องสร้าง `style` element ขึ้นมาหนึ่งตัว

```js
assert($("style") && $("style").length >= 1);
```

`color` ของ `h2` element ต้องเป็น `blue`

```js
assert($("h2").css("color") === "rgb(0, 0, 255)");
```

ต้องประกาศ style ของ `h2` โดยปิดด้วย `;` และ `}`

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

ต้องมี `style` element และต้องมีแท็กปิดด้วย

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

```html
<h2 style="color: red;">CatPhotoApp</h2>
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
