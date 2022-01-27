---
id: bad87fee1348bd9aedf08807
title: Import a Google Font
challengeType: 0
videoUrl: "https://scrimba.com/c/cM9MRsJ"
forumTopicId: 18200
dashedName: import-a-google-font
---

# --description--

นอกเหนือจากฟอนต์พื้นฐานที่ติดมากับเครื่องของเราแล้ว เรายังใช้ฟอนต์อื่นได้อีกด้วย

เรามีที่ที่สามารถดึงฟอนต์มาใช้ได้หลายที่มากๆ
แต่ในตัวอย่างนี้ เราจะดูการใช้ Google Fonts library กัน

[Google Fonts](https://fonts.google.com/) เป็น library web font ที่ใช้งานได้ฟรี ซึ่งคุณจะนำไปใช้ใน CSS ได้ โดยทำแค่การอ้างอิง URL ของฟอนต์

เรามาลองดึงข้อมูลของ Google font มาใช้กัน

ในการนำเข้าข้อมูลของ Google Font ให้คุณคัดลอก URL ของฟอนต์จาก Google Fonts library และนำไปวางไว้ใน HTML

ในแบบฝึกหัดนี้ เราจะใช้ฟอนต์ชื่อ `Lobster`
วิธีทำคือ ให้คัดลอกโค้ดข้างล่างและนำไปวางไว้ด้านบนของ code editor (เหนือแท็กเปิดของ `style` element):

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
```

ตอนนี้คุณก็จะใช้ฟอนต์ `Lobster` ใน CSS ได้แล้ว วิธีการเอาไปใช้ก็แค่ต้องตั้ง `Lobster` เป็น FAMILY_NAME ตามตัวอย่างด้านล่างนี้:

```css
font-family: FAMILY_NAME, GENERIC_NAME;
```

ส่วน GENERIC_NAME จะใส่หรือไม่ใส่ก็ได้ โดยตัวนี้จะเป็น fallback font (ฟอนต์สำรองในกรณีที่ฟอนต์หลักใช้ไม่ได้)
เราจะสอนเรื่อง fallback font ในแบบฝึกหัดถัดไป

ชื่อของ family name เป็น case-sensitive (ตัวเล็กตัวใหญ่ต้องตรงกัน) และถ้าในชื่อของฟอนต์มีการเว้นวรรค เช่น `Open Sans` คุณจะต้องครอบชื่อของฟอนต์ด้วย quote (เช่น `"Open Sans"`) แต่ถ้าไม่มีการเว้นวรรคในชื่อฟอนต์ จะระบุแค่ชื่อฟอนต์ไปได้เลยแบบนี้ `Lobster`

# --instructions--

ให้นำเข้าฟอนต์ `Lobster` มาในหน้าเว็บของคุณ และให้ใช้ element selector เพื่อทำให้ `h2` element มี `font-family` เป็น `Lobster`

# --hints--

ต้องนำเข้าฟอนต์ `Lobster`

```js
assert($('link[href*="googleapis" i]').length);
```

`h2` element ต้องมีฟอนต์เป็น `Lobster`

```js
assert(
  $("h2")
    .css("font-family")
    .match(/lobster/i)
);
```

ต้องใช้ CSS selector `h2` เพื่อเปลี่ยนฟอนต์ของ `h2`

```js
assert(
  /\s*[^\.]h2\s*\{\s*font-family\s*:\s*('|"|)Lobster\1\s*(,\s*('|"|)[a-z -]+\3\s*)?(;\s*\}|\})/gi.test(
    code
  )
);
```

`p` element ต้องยังใช้ฟอนต์เดิมอยู่ (ฟอนต์เดิมคือ `monospace`)

```js
assert(
  $("p")
    .css("font-family")
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
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
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
