---
id: 5ef9b03c81a63668521804df
title: Part 45
challengeType: 0
dashedName: part-45
---

# --description--

`id` attribute ถูกใช้เพื่อระบุ HTML elements
แต่ละค่าของ `id` attribut จะต้องแตกต่างจาก`id` value ที่เหลือในหน้านั้น 

จงเพิ่ม `id` attribute ที่มีค่าเป็น `indoor` ให้กับ radio button
เมื่อ element มีหลาย attributes, ลำดับของ attributes จะไม่มีผลอะไร

# --hints--

radio button ควรจะอยู่หว่างแท็กเปิดและแท็กปิดของ `label` element.

```js
const labelChildNodes = [...$('form > label')[0].childNodes];
assert(
  labelChildNodes.filter((childNode) => childNode.nodeName === 'INPUT').length
);
```

Your radio button should have an `id` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.

```js
assert($('input')[0].hasAttribute('id'));
```

Your radio element should have an `id` attribute with the value `indoor`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.

```js
assert($('input')[0].id.match(/^indoor$/));
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
        <form action="https://freecatphotoapp.com/submit-cat-photo">
--fcc-editable-region--
          <label><input type="radio"> Indoor</label>
--fcc-editable-region--
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  </body>
</html>
```

