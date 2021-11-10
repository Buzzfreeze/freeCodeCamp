---
id: 5dc24073f86c76b9248c6ebb
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

HTML <dfn>attributes</dfn> นั้นเป็นคำที่มีความพิเศษโดยจะถูกใช้ในแท็กเปิดของ element เพื่อกำหนดพฤติกรรมของ element
`src` attribute ใน `img` element จะระบุ URL ของรูปภาพ (ซึ่งเป็นตำแหน่งที่รูปภาพถูกเก็บไว้)
นี่คือตัวอย่างการใช้`img` element ที่มี `src` attribute: `<img src="https://www.your-image-source.com/your-image.jpg">`.

จงเพิ่ม `src` attribute ให้กับ `img` element ที่มีอยู่โดยกำหนดให้มันชี้ไปที่: `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`.

# --hints--

Yโค้ดของคุณควรมี `img` element
คุณอาจจะลองลบ `img` element หรือไม่ใส่ quote ให้กับค่าของ`src` attribute ก็ได้

```js
assert(document.querySelector('img'));
```

Your `img` element should have an `src` attribute. You have either omitted the attribute or have a typo. Make sure there is a space between the element name and the attribute name.

```js
assert(document.querySelector('img').src);
```

Your `img` element's `src` attribute should be set to '`https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`'. You have either omitted the URL or have a typo. The case of the URL is important.

```js
assert(document.querySelector('img').src === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg');
```

Although you have set the `img` element's `src` to the correct URL, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(!/\<img\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg/.test(code));
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
      <img>
--fcc-editable-region--
    </main>
  </body>
</html>
```

