---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0
forumTopicId: 16817
dashedName: create-a-form-element
---

# --description--

คุณสามารถสร้างแบบฟอร์มบนเว็บได้ โดยแบบฟอร์มนั้นสามารถส่งข้อมูลไปที่ server ของคุณได้เลย โดยใช้แค่ HTML เท่านั้น

วิธีการคือต้องเพิ่ม `action` attribute ให้กับ `form` element

ลองดูตัวอย่าง:

```html
<form action="/url-where-you-want-to-submit-form-data">
  <input />
</form>
```

โดย action จะเป็นค่าของ URL ที่คุณจะให้แบบฟอร์มของคุณส่งข้อมูลไป

# --instructions--

ให้ซ้อน `input` element ที่สร้างแล้วไว้ใน `form` element และกำหนดให้ `action` attribute ของ `form` element ให้มีค่าเป็น `"https://www.freecatphotoapp.com/submit-cat-photo"`

# --hints--

ต้องซ้อน `input` element ตัวเดิมไว้ใน `form` element

```js
const inputElem = document.querySelector("form input");
assert(
  inputElem.getAttribute("type") === "text" &&
    inputElem.getAttribute("placeholder") === "cat photo URL"
);
```

`form` ต้องมี `action` attribute เป็น `https://www.freecatphotoapp.com/submit-cat-photo`

```js
const action = $("form").attr("action");
assert(
  action.match(/^https:\/\/(www\.)?freecatphotoapp\.com\/submit-cat-photo$/i)
);
```

ต้องใช้แท็กเปิดและแท็กปิดของ `form` element อย่างถูกต้อง

```js
assert(
  code.match(/<\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

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
  <input type="text" placeholder="cat photo URL" />
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL" />
  </form>
</main>
```
