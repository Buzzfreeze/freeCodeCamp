---
id: 5ef9b03c81a63668521804ec
title: Part 66
challengeType: 0
dashedName: part-66
---

# --description--

จงสังเกตว่า  content ทั้งหมดของหน้าเว็บไซต์จะถูกเก็บไว้ใน `html` element
element ที่เหลือจะต้องเป็นลูกหลานของ`html` element อันนี้

จงเพิ่ม `lang` attribute ที่มีค่าเป็น `en` ที่แท็กเปิดชอง  `html` เพื่อว่าว่าหน้าเว็บหน้านี้จะใช้ภาษาอังกฤษ

# --hints--

ถ้าหาไม่เจอ คุณอาจจะเผลอลบ `html` element ไปหรือมันขาดแท็กเปิดหรือปิด

```js
assert(code.match(/\<html.*?\>/) && code.match(/\<\/html\>/));
```

Your `html` element should have a `lang` attribute with the value `en`. You may have omitted the attribute/value, or have a typo.

```js
const extraSpacesRemoved = code.replace(/\s+/g, ' ');
assert(extraSpacesRemoved.match(/\<html lang\=("|')([a-z]+)\1\>/));
```

Although you have set the `html` element's `lang` attribute to `en`, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(!/\<\s*html\s+lang\s*=en/i.test(code));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<html>
--fcc-editable-region--
  <head>
    <title>CatPhotoApp</title>
  </head>
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
          <fieldset>
            <legend>Is your cat an indoor or outdoor cat?</legend>
            <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
            <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
          </fieldset>
          <fieldset>
            <legend>What's your cat's personality?</legend>
            <input id="loving" type="checkbox" name="personality" value="loving" checked> <label for="loving">Loving</label>
            <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
            <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic">Energetic</label>
          </fieldset>
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
    <footer>
      <p>
        No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
      </p>
    </footer>
  </body>
</html>
```

