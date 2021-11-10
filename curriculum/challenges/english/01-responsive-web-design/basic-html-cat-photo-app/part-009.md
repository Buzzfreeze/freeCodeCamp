---
id: 5dc24165f86c76b9248c6ebc
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

`img` elements ทุกตัวควรมี `alt` attribute
ข้อความของ `alt` attribute จะถูกใช้เพื่อ screen readers เพื่อทำให้การเข้าถึงดียิ่งขึ้นและขะแสดงขึ้นมาถ้ารูปภาพนั้นไม่สามารถแสดงผลได้ตามปกติ
ตัวอย่างเข่น `<img src="cat.jpg" alt="A cat">` จะมี `alt` attribute ที่เขียนว่า `A cat`

จงเพิ่ม`alt` attribute ให้กับe `img` element พร้อมกับใส่ข้อความว่า `A cute orange cat lying on its back`

# --hints--

โค้ดของคุณควรมี `img` element
คุณควรลบ `img` element ที่มาจากขั้นตอนก่อนหน้า

```js
assert(document.querySelector('img'));
```

Your `img` element does not have an `alt` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.

```js
assert(document.querySelector('img').hasAttribute('alt'));
```

Your `img` element's `alt` attribute value is set to something other than 'A cute orange cat lying on its back'. Make sure the `alt` attribute's value is surrounded with quotation marks.

```js
const altText = document
  .querySelector('img')
  .alt.toLowerCase()
  .replace(/\s+/g, ' ');
assert(altText.match(/A cute orange cat lying on its back\.?$/i));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg">
--fcc-editable-region--
    </main>
  </body>
</html>
```

