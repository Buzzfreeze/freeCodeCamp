---
id: 5efada803cbd2bbdab94e332
title: Part 28
challengeType: 0
dashedName: part-28
---

# --description--

ข้างใน `figure` element ที่คุณพึ่งเพิ่มเข้ามา จงเก็บ `img` element ที่ `src` attribute มีค่าเป็น `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

# --hints--

`figure` element ควรมีแท็กเปิดโดยแท็กเปิดจะมี syntax ดังนี้: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

Your second `figure` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/figure>/g).length === 2);
```

There should be a second `figure` element right above the second `section` element's closing tag. You have them in the wrong order.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

You should have a third `img` element nested in the `figure` element.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

The third image should have an `src` attribute set to `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Although you have set the new image's `src` to the correct URL, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(!/\<img\s+.+\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/cats\.jpg/.test(code));
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
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
--fcc-editable-region--
        <figure>
        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

