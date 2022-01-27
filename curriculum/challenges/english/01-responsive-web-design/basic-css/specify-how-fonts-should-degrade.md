---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
challengeType: 0
videoUrl: "https://scrimba.com/c/cpVKBfQ"
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

เบราว์เซอร์ทั่วไปจะมีฟอนต์พื้นฐาน ที่เราสามารถนำมาใช้ได้เลยโดยที่ไม่ต้องนำเข้า
ฟอนต์พวกนี้เรียกว่า generic font family โดยจะมีฟอนต์เช่น `monospace`, `serif` และ `sans-serif` ฯลฯ

ถ้าฟอนต์ตัวไหนใช้งานไม่ได้ คุณสามารถบอกเบราว์เซอร์ให้เปลี่ยนไปใช้ฟอนต์สำรองได้

เช่น ถ้าคุณจะเขียนให้ element ใช้ฟอนต์ `Helvetica` แต่จะให้เปลี่ยนไปใช้ฟอนต์ `sans-serif` แทน ถ้า `Helvetica` ใช้งานไม่ได้ คุณจะเขียนโค้ดได้แบบนี้:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

และชื่อของ generic font family นั้นเป็นแบบ case-insensitive (จะใช้ตัวเล็กตัวใหญ่แบบไหนก็ได้)
และยังไม่ต้องใช้ quote ครอบด้วย เพราะว่าฟอนต์นี้เป็นคีย์เวิร์ดของ CSS

# --instructions--

ให้เขียน CSS เพื่อให้ `h2` ใช้ฟอนต์ `monospace` เป็นฟอนต์สำรอง เมื่อเขียนแล้ว `h2` ก็จะมีฟอนต์สองตัวคือ `Lobster` และ `monospace`

ในแบบฝึกหัดที่แล้ว คุณได้นำเข้าฟอนต์ `Lobster` โดยใช้แท็ก `link` ไปแล้ว
ตอนนี้ ให้คอมเมนต์คำสั่งนำเข้าของฟอนต์ `Lobster` ของ Google Font เพื่อไม่ให้ฟอนต์นี้ใช้งานได้
แล้วให้ลองดูว่า `h2` จะเปลี่ยนไปใช้ฟอนต์ `monospace` ได้อย่างไร

**Note:** ถ้าคอมพิวเตอร์ของคุณลงฟอนต์ `Lobster` ไว้ในเครื่อง คุณจะไม่เห็นการเปลี่ยนไปใช้ฟอนต์สำรอง เพราะว่าเบราว์เซอร์จะใช้ฟอนต์จากเครื่องของคุณแทน

# --hints--

`h2` element ต้องใช้ฟอนต์ `Lobster`

```js
assert(
  $("h2")
    .css("font-family")
    .match(/^"?lobster/i)
);
```

`h2` element ต้องเปลี่ยนไปใช้ฟอนต์ `monospace` เมื่อ `Lobster` ใช้งานไม่ได้

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

คุณควรคอมเมนต์คำสั่งที่ดึงฟอนต์ `Lobster` จาก Google โดยการใส่ `<!--` ไว้หน้าคำสั่ง

```js
assert(new RegExp("<!--[^fc]", "gi").test(code));
```

และต้องปิดคอมเมนต์ด้วยเครื่องหมาย `-->`

```js
assert(new RegExp("[^fc]-->", "gi").test(code));
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
