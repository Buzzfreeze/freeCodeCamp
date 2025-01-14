---
id: 5ef9b03c81a63668521804d7
title: Part 35
challengeType: 0
dashedName: part-35
---

# --description--

`action` attribute บ่งบอกว่าข้อมูลจากฟอร์มควรถูกส่งไปที่ไหน
ยกตัวอย่างเช่น `<form action="/submit-url"></form>` จะบอก browser ว่าขอมูลจากแบบฟอร์มจะถูกส่งไปที่  `/submit-url`

จงเพิ่ม `action` attribute ที่มีค่าเป็น `https://freecatphotoapp.com/submit-cat-photo` ให้กับ `form` element.

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

Your `form` element nested in the last `section` element should be below the `h2` element. You have the `h2` element and the `form` element in the wrong order.

```js
assert(document.querySelector('form').previousElementSibling.nodeName === 'H2');
```

Your `form` element should have no content. Remove any HTML elements or text between the `form` element's tags.

```js
assert($('form')[0].innerHTML.trim().length === 0);
```

Your `form` element does not have an `action` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.

```js
const form = document.querySelector('form');
assert(form.hasAttribute('action'));
```

Your `form` element should have an `action` attribute with the value `https://freecatphotoapp.com/submit-cat-photo`.

```js
const form = document.querySelector('form');
assert(
  form
    .getAttribute('action')
    .match(/^https:\/\/freecatphotoapp\.com\/submit-cat-photo$/)
);
```

Although you have set the `action` attribute to the correct URL, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(
  !/\<form\s+action\s*=\s*https:\/\/freecatphotoapp\.com\/submit-cat-photo/.test(
    code
  )
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
        <form>
        </form>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

