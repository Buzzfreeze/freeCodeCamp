---
id: bad87fee1348bd9aedf08807
title: Import a Google Font
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
forumTopicId: 18200
dashedName: import-a-google-font
---

# --description--

นอกเหนือจากการระบุฟ้อนต์ทั่วไปที่สามารถใช้ได้กับ operating systems ส่วนมาก, เรายังสามารถระบุฟ้อนต์ที่ไม่ใช่มาตรฐานเพื่อใช้ในเว็บไซต์ของเราได้
มันมีแหล่ฟ้อนต์หลายแหล่งบนอินเตอร์เน็ต
สำหรับตัวอย่างนี้ เราจะโฟกัสที่ Google Fonts library.

[Google Fonts](https://fonts.google.com/) เป็น free library สำหรับ web font ที่คุณสามารถใช้ใน CSS ได้โดยการอ้างอิงจาก URL ของฟ้อนต์

ดังนั้น เรามาลองนำเข้าและใช้ Google font กัน

เพื่อที่จะนำเข้า Google Font, คุณสามารถคัดลอก URL ของฟ้อนต์จาก Google Fonts library และวางมันไว้ใน HTML ของคุณ
สำหรับแบบฝึกหัดนี้ เราจะนำเข้า `Lobster` font
เพื่อที่จะทำเช่นนี้ จงคัดลอก code snippet ข้างล่างและวางมันไว้ที่ด้านบนของ code editor ของคุณ (ก่อนแท็กเปิดของ `style` element):

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

ตอนนี้คุณสามารถใช้ `Lobster` font ใน CSS โดยการใช้ `Lobster` เป็น FAMILY_NAME ตามตัวอย่างด้านล่าง:

```css
font-family: FAMILY_NAME, GENERIC_NAME;
```

GENERIC_NAME นั้นจะมีหรือไม่มีก็ได้และเป็น fallback font ในกรณีที่ฟ้อนต์ระบุไม่สามารถใช้งานได้
โดยนี่จะกล่าวถึงในแบบฝึกหัดถัดไป

Family names เป็น case-sensitive และจะต้องถูกครอบด้วย quotes ถ้ามีช่องไฟอยู่ระหว่างชื่อ
ยกตัวอย่างเช่น คุณของครอบ `"Open Sans"` font ด้วย quotes แต่ไม่ต้องทำเช่นนั้นกับ `Lobster` font.

# --instructions--

จงนำเข้า `Lobster` font มาที่หน้าเว็บของคุณ หลังจากนั้นจงใช้ element selector เพื่อกำหนดให้ `Lobster` เป็น `font-family` สำหรับ `h2` element

# --hints--

คุณควรนำ `Lobster` font เข้ามา

```js
assert($('link[href*="googleapis" i]').length);
```

`h2` element ควรใช้ฟ้อนต์ `Lobster`.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);
```

คุณควรใช้แค่ `h2` element selector เพื่อเปลี่ยนฟ้อนต์

```js
assert(
  /\s*[^\.]h2\s*\{\s*font-family\s*:\s*('|"|)Lobster\1\s*(,\s*('|"|)[a-z -]+\3\s*)?(;\s*\}|\})/gi.test(
    code
  )
);
```

`p` element ควรจะยังใช้ฟ้อนต์ `monospace` อยู่

```js
assert(
  $('p')
    .css('font-family')
    .match(/monospace/i)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  h2 {
    font-family: Lobster;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
