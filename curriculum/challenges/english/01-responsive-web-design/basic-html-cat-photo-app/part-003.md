---
id: 5dc17d3bf86c76b9248c6eb4
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

Paragraph (`p`) elements ถูกใช้เพื้นสร้างชุดตัวอักษรที่เป็นพารากราฟในเว็บไซต์

จงสร้าง paragraph (`p`) element อันหนึ่งต่อจาก `h2` elementและกำหนดให้มันมีตัวอักษรที่เขียนว่า `Click here to view more cat photos.`

# --hints--

`p` element should ควรมีแท็กเปิด โดยแท็กเปิดจะมี syntax ดังนี้ : `<elementName>`.

```js
assert(document.querySelector('p'));
```

Your `p` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/p\>/));
```

Your `p` element's text should be `Click here to view more cat photos.` You have either omitted the text or have a typo.

```js
const extraSpacesRemoved = document
  .querySelector('p')
  .innerText.replace(/\s+/g, ' ');
assert(extraSpacesRemoved.match(/click here to view more cat photos\.?$/i));
```

Your `p` element should be below the `h2` element. You have them in the wrong order.

```js
const collection = [...document.querySelectorAll('h2,p')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('H2') < collection.indexOf('P'));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
--fcc-editable-region--
    <h2>Cat Photos</h2>
--fcc-editable-region--
  </body>
</html>
```

