---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0
forumTopicId: 16817
dashedName: create-a-form-element
---

# --description--

คุณสามารถสร้างแบบฟอร์มบนเว็บที่สามารถส่งข้อมูลไปที่ server ของคุณได้โดยใช้แค่ HTML เพียงอย่างเดียวเท่านั้น
คุณสามารถทำเช่นนี้ได้โดยการระบุ `action` attribute ไว้ใน `form` element

นี่คือตัวอย่างe:

```html
<form action="/url-where-you-want-to-submit-form-data">
  <input>
</form>
```

# --instructions--

จงเก็บ `input` element ที่สร้างไว้แล้วไว้ใน `form` element และกำหนด `"https://www.freecatphotoapp.com/submit-cat-photo"` ให้กับ `action` attribute ของ `form` element.

# --hints--

`input` element เดิมควรถูกเก็บไว้ใน `form` element

```js
const inputElem = document.querySelector('form input');
assert(
  inputElem.getAttribute('type') === 'text' &&
    inputElem.getAttribute('placeholder') === 'cat photo URL'
);
```

Your `form` should have an `action` attribute which is set to `https://www.freecatphotoapp.com/submit-cat-photo`.

```js
const action = $('form').attr('action');
assert(action.match(/^https:\/\/(www\.)?freecatphotoapp\.com\/submit-cat-photo$/i))
```

Your `form` element should have well-formed open and close tags.

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

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <input type="text" placeholder="cat photo URL">
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
    <input type="text" placeholder="cat photo URL">
  </form>
</main>
```
