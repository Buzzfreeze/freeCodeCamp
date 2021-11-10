---
id: 5ef9b03c81a63668521804d8
title: Part 36
challengeType: 0
dashedName: part-36
---

# --description--

`input` element นั้นทำให้คุณสามารถเก็บข้อมูลได้หลากหลายแบบจากแบบฟอร์มที่อยู่บนเว็บไซต์
เช่นเดียวกับ anchor (`a`) elements, `input` elements เป็น <dfn>self-closing</dfn> ซึ่งแปลว่ามันไม่ต้องการแท็กปิด

Nest an `input` element in the `form` element.

# --hints--

`form` element ควรมีทั้งแท็กเปิดและแท็กปิด ถ้าหาไม่เจอคุณอาจจะเผลอลบแท็กเปิดหรือแท็กปิดของมันไปโดยไม่รู้ตัว

```js
const noSpaces = code.replace(/\s/g, '');
assert(
  document.querySelector('form') &&
    code.match(/<\/form>/g) &&
    noSpaces.indexOf('<form') < noSpaces.indexOf('</form>')
);
```

Your `form` element's opening tag should only have an `action` attribute. Remove anything else you may have typed in it.

```js
assert([...document.querySelector('form').attributes].length < 2);
```

You should create an input element. Check the syntax.

```js
assert(document.querySelector('input'));
```

Your `input` element should have an opening tag, but not a closing tag.

```js
assert(document.querySelector('input') && !code.match(/<\/input\>/g));
```

Your `input` element should be nested within the `form` element.

```js
assert(document.querySelector('form > input'));
```

Your `form` should only contain the `input` element. Remove any HTML elements or text between the `form` element's tags.

```js
assert(
  $('form')[0].children.length === 1 &&
    $('form')[0].innerText.trim().length === 0
);
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
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
          <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
        </figure>
      </section>
      <section>
        <h2>Cat Form</h2>
--fcc-editable-region--
        <form action="https://freecatphotoapp.com/submit-cat-photo">
        </form>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

