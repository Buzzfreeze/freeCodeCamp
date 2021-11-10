---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

มีฟ้อนต์เริ่มต้นหลายตัวที่สามารถใช้งานได้ในทุก browser
พวกนี้คือ font family ที่ใชได้ทั่วไปรวมถึง `monospace`, `serif` และ `sans-serif`

เมื่อฟ้อนต์หนึ่งใช้งานไม่ได้ คุณสามารถบอก browser ให้ "degrade" ไปเป็นฟ้อนต์อื่น

ยกตัวอย่างเช่น ถ้าคุณต้องการให้ element ใช้ `Helvetica` font, แต่ degrade ไปเป็น `sans-serif` font เป็น `Helvetica` ใช้งานไม่ได้, คุณสามารถระบุมันได้แบบนี้:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

ชื่อของ Generic font family นั้นไม่ใช่ case-sensitive
นอกจากนี้พวกมันยังไม่ต้องการ quotes เพราะมันเป็นคีย์เวิร์ดของ CSS 

# --instructions--

จงใช้ `monospace` font กับ `h2` element, เพื่อที่มันจะได้ฟ้อนต์สองอันตอนนี้ - `Lobster` และ `monospace`

ในแบบฝึกหัดที่แล้ว, คุณได้นำเข้า `Lobster` font โดยใช้ `link` tag. 
ตอนนี้ จงคอมเมนต์คำสั่งนำเข้าของ `Lobster` font จาก Google Fonts เพื่อที่มันจะได้ไม่สามารถใช้งานได้อีกต่อไป
สังเกตว่า `h2` element degrades ไปเป็น `monospace` font อย่างไร

**Note:** ถ้าคุณมี `Lobster` font ติดตั้งไว้ใน computer, คุณจะไม่เห็นการ degrade เพราะ browser ของคุณสามารถหาฟ้อนต์นั้นได้

# --hints--

h2 element ควรใช้ฟ้อนต์ `Lobster`.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

Your h2 element should degrade to the font `monospace` when `Lobster` is not available.

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

You should comment out your call to Google for the `Lobster` font by putting `<!--` in front of it.

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

You should close your comment by adding `-->`.

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
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
    font-family: Lobster;
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
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
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
