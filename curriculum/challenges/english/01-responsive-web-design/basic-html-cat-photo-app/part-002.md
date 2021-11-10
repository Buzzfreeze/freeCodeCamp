---
id: 5dc1798ff86c76b9248c6eb3
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

`h1` ถึง `h6` heading elements ถูกใช้เพื่อบ่งบอกที่ความสพคัญของเนื้อหาที่อยู่ภายใต้มัน
ยิ่งเลขน้อย แสดงว่ามีความสำคัญมากขึ้น
ดังนั้น `h2` elementจะสำคัญน้อยกว่า `h1` elements
จงใช้เเค่ `h1` element อันเดียวต่อหนึ่งหน้า และใส่ heading ที่สำคัญน้อยกว่าใต้ heading ที่สำคัญมากกว่า

จงเพิ่ม `h2` element ต่อจาก `h1` element โดยใส่เพิ่มข้อความว่า `Cat Photos`.

# --hints--

`h1` element ควรมีแท็กเปิด โดยแท็กเปิดจะมี syntax แบบนี้: `<elementName>`.

```js
assert(document.querySelector('h1'));
```

Your `h1` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/h1\>/));
```

You should only have one `h1` element. Remove the extra.

```js
assert(
  document.querySelector('h1') && document.querySelectorAll('h1').length === 1
);
```

Your `h1` element's text should be 'CatPhotoApp'. You have either omitted the text or have a typo.

```js
assert(document.querySelector('h1').innerText.toLowerCase() === 'catphotoapp');
```

Your `h2` element should have an opening tag. Opening tags have this syntax: `<elementName>`.

```js
assert(document.querySelector('h2'));
```

Your `h2` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/h2\>/));
```

Your `h2` element's text should be 'Cat Photos'. Only place the text `Cat Photos` between the opening and closing `h2` tags.

```js
assert(document.querySelector('h2').innerText.toLowerCase() === 'cat photos');
```

Your `h2` element should be below the `h1` element. The `h1` element has greater importance and must be above the `h2` element.

```js
const collection = [...document.querySelectorAll('h1,h2')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('H1') < collection.indexOf('H2'));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
--fcc-editable-region--
    <h1>CatPhotoApp</h1>
--fcc-editable-region--
  </body>
</html>
```

