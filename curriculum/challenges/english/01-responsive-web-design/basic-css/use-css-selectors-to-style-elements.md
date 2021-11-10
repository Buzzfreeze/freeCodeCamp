---
id: bad87fee1348bd9aedf08805
title: Use CSS Selectors to Style Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

ด้วย CSS, มันมี CSS properties หลายร้อยอันที่คุณสามารถใช้เพื่อเปลี่ยนรูปร่างหน้าตาของ element ที่อยู่บนหน้าเว็บของคุณ

เพื่อคุณพิมพ์ `<h2 style="color: red;">CatPhotoApp</h2>`, คุณจะตกแต่ง `h2` element อันนั้นด้วย inline CSS, ซึ่งย่อมาจาก Cascading Style Sheets

นี่เป็นพวกวิธีเพื่อระบุ style ของ element หนึ่ง, แต่มันยังมีวิธีที่ดีกว่าในการใช้ CSS

ที่ด้านบนของโค้ด, จงสร้าง `style` block แบบนี้:

```html
<style>
</style>
```

ภายใน style block อันนั้น คุณสามารถสร้าง  <dfn>CSS selector</dfn> ให้กับ `h2` element ทั้งหมดได้
ยกตัวอย่างเช่น ถ้าคุณต้องการให้ `h2` element ทั้งหมดเป็นสีแดง คุณสามารถเพิ่ม style rule อันหนึ่งเข้าไปแบบนี้ :

```html
<style>
  h2 {
    color: red;
  }
</style>
```

จงไว้ว่า มันสำคัญมากที่จะใส่ทั้ `{` และ `}` รอบ style rule ของแต่ละ element
คุณยังจำเป็นต้องเช็คให้มั่นใจว่า style definition ของ element นั้นอยู่ระหว่างแท็กเปิดและปิดของ style tags
สุดท้ายนี้ จงมั่นใจว่าได้เพิ่ม semicolon อันหนึ่งที่ด้านท้ายของแต่ละ style rules ของ element 

# --instructions--

จงลบ style attribute ของ `h2` element และแทนที่ด้วยการสร้าง CSS `style` block
จงเพิ่ม CSS ที่จำเป็นต่อการเปลี่ยน `h2` elements ทั้งหมดให้เป็นสีฟ้า

# --hints--

`style` attributeควรถูกเอาออกจาก `h2` element

```js
assert(!$('h2').attr('style'));
```

You should create a `style` element.

```js
assert($('style') && $('style').length >= 1);
```

Your `h2` element should be blue.

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

Your stylesheet `h2` declaration should be valid with a semicolon and closing brace.

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

All your `style` elements should be valid and have closing tags.

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

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
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

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
