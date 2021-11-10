---
id: 5dfb6250eacea3f48c6300b2
title: Part 21
challengeType: 0
dashedName: part-21
---

# --description--

หต่อจาก unordered list, จงเพิ่มรูปใหม่ที่มี `src` attribute ที่มีค่าเป็น `https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg` และ `alt` attribute ที่มีค่าเป็น `A slice of lasagna on a plate.`

# --hints--

นี่ควรมี `img` element อยู่เหนือแท็กปิดของ `section` element อันที่สอง

```js
assert($('section')[1].lastElementChild.nodeName === 'IMG');
```

The new image either does not have an `alt` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.

```js
assert($('section')[1].lastElementChild.hasAttribute('alt'));
```

The new image should have an `alt` value of `A slice of lasagna on a plate.` Make sure the `alt` attribute's value is surrounded with quotation marks.

```js
assert(
  $('section')[1]
    .lastElementChild.getAttribute('alt')
    .replace(/\s+/g, ' ')
    .match(/^A slice of lasagna on a plate\.?$/i)
);
```

The new image does not have an `src` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.

```js
assert($('section')[1].lastElementChild.hasAttribute('src'));
```

The new image should have an `src` value of `https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg`. Make sure the `src` attribute's value is surrounded with quotation marks.

```js
assert(
  $('section')[1].lastElementChild.getAttribute('src') ===
    'https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
);
```

Although you have set the new image's `src` to the correct URL, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(!/\<img\s+.+\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/lasagna\.jpg/.test(code));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

