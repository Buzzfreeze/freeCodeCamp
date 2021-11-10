---
id: 5dc2385ff86c76b9248c6eb7
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

HTML5 มีบาง element ที่จะบอกพื้นที่ของ content ที่แตกต่างกัน
element เหล่านี้ทำให้ HTML นั้นง่ายที่จะอ่านมายิ่งขึ้น และมันช่วยในเรื่องของ Search Engine Optimization (SEO) แล้วการเข้าถึง

จงระบุ main section ของหน้านี้ด้วยการเพิ่มแท็กเปิดของ `<main>` หลังจาก `h1` element, และแป็กปิดของ `</main>`  หลังจาก `p` element

# --hints--

`main` element ควรมีแท็กเปิด โดยแท็กเปิดมี syntax ดังนี้: `<elementName>`.

```js
assert(document.querySelector('main'));
```

Your `main` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/main\>/));
```

Your `main` element's opening tag should be below the `h1` element. You have them in the wrong order.

```js
const collection = [...document.querySelectorAll('main,h1')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('H1') < collection.indexOf('MAIN'));
```

Your `main` element's opening tag should be above the `h2` element. You have them in the wrong order.

```js
const collection = [...document.querySelectorAll('main,h2')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('MAIN') < collection.indexOf('H2'));
```

Your `main` element's closing tag should be below the `p` element. You have them in the wrong order.

```js
const mainNode = document.querySelector('main');
const pNode = document.querySelector('p');
assert(
  mainNode.contains(pNode) &&
    pNode.textContent.toLowerCase().match(/click here to view more cat photos/)
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
--fcc-editable-region--
    <h1>CatPhotoApp</h1>
    <h2>Cat Photos</h2>
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
--fcc-editable-region--
  </body>
</html>
```

