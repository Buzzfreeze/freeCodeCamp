---
id: 5f07be6ef7412fbad0c5626b
title: Part 15
challengeType: 0
dashedName: part-15
---

# --description--

ก่อนที่จะเพิ่ม content ใหม่ คุณควรลองใช้ `section` element เพื่อแยก cat photos content ออกจาก content ในอนาคต

จงเอา element ทุกอันที่อยู่ใน `main` element ตอนนี้ไปใส่ใน `section` element.

# --hints--

 `section` element ควรมีแท็กเปิด โดยแท็กเปิดจะมี  syntax ดังนี้: `<elementName>`.

```js
assert(document.querySelector('section'));
```

Your `section` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/section\>/));
```

The entire `section` element should be between the opening and closing tags of the `main` element.

```js
assert(document.querySelector('section').parentNode.nodeName === 'MAIN');
```

The existing `h2`, comment, `p` element, and anchor (`a`) element should be between the opening and closing tags of the `section` element.

```js
const childrenOfSection = [...document.querySelector('section').childNodes];
const foundElems = childrenOfSection.filter((child) => {
  return ['H2', 'A', 'P'].includes(child.nodeName);
});
assert(foundElems.length === 3);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
--fcc-editable-region--
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
      <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    </main>
--fcc-editable-region--
  </body>
</html>
```

