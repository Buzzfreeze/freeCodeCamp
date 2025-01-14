---
id: 5ef9b03c81a63668521804e5
title: Part 60
challengeType: 0
dashedName: part-60
---

# --description--

เพื่อที่จะทำให้ checkbox ถูกติ๊กหรือ radio button ถูกเลือกโดยค่าเริ่มต้น คุณจำเป็นต้องเพิ่ม `checked` attribute ให้กับมัน
มันไม่มีความจำเป็นที่จะกำหนดค่าใด ๆ ให้กับ `checked` attribute
คุณแค่เพิ่มคำว่า `checked` ให้กับ `input` element ก็เพียงพอแล้ว

Make the first radio button and the first checkbox selected by default.

# --hints--

จงเช็คให้มั่นใจว่า มันมี 2 radio button และ 3 checkboxes อยู่ใน `fieldset` elements ตามลำดับ

```js
assert(
  $('input[type="radio"]').length === 2 &&
    $('fieldset > input[type="checkbox"]').length === 3
);
```

The first radio button is missing the `checked` attribute.

```js
assert($('input[type="radio"]')[0].hasAttribute('checked'));
```

The second radio button should not have the `checked` attribute.

```js
assert(!$('input[type="radio"]')[1].hasAttribute('checked'));
```

The first checkbox is missing the `checked` attribute.

```js
assert($('input[type="checkbox"]')[0].hasAttribute('checked'));
```

The second checkbox should not have the `checked` attribute.

```js
assert(!$('input[type="checkbox"]')[1].hasAttribute('checked'));
```

The third checkbox should not have the `checked` attribute.

```js
assert(!$('input[type="checkbox"]')[2].hasAttribute('checked'));
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
          <fieldset>
            <legend>Is your cat an indoor or outdoor cat?</legend>
            <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
            <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
          </fieldset>
          <fieldset>
            <legend>What's your cat's personality?</legend>
            <input id="loving" type="checkbox" name="personality" value="loving"> <label for="loving">Loving</label>
            <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
            <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic"> Energetic</label>
          </fieldset>
--fcc-editable-region--
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  </body>
</html>
```

