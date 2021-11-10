---
id: 5dc23f9bf86c76b9248c6eba
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

คุณสามารถเพิ่มรูปภาพให้กับเว็บไซต์ได้โดยใช้ `img` element
`img` element จะมีแท็กเปิดแต่ไม่มีแท็กปิด
tag ของ element ที่ไม่มีแท็กปิดจะถูกเรียกว่า <dfn>self-closing tag</dfn>.

จงเพิ่ม `img` element ต่อจาก `p` element
ณ จุดนี้ จะยังไม่มีรูปขึ้นมาแสดงบนหน้าจอ browser

# --hints--

`img` element ควรมีแท็กเปิด โดยแท็กเปิดจะมี syntax ดังนี้: `<elementName>`

```js
assert(document.querySelector('img'));
```

Your `img` element should not have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(!code.match(/<\/img\>/));
```

You should only have one `img` element. Remove any extras.

```js
assert(document.querySelectorAll('img').length === 1);
```

Your `img` element should be below the `p` element. You have them in the wrong order.

```js
const collection = [...document.querySelectorAll('p,img')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('P') < collection.indexOf('IMG'));
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
--fcc-editable-region--
      <p>Click here to view more cat photos.</p>
--fcc-editable-region--
    </main>
  </body>
</html>
```

