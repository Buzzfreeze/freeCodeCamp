---
id: 5ef9b03c81a63668521804ea
title: Part 64
challengeType: 0
dashedName: part-64
---

# --description--

จงสังเกตว่า ทุกอย่างที่คุณได้ใส่เข้าไปให้กับหน้าเว็บหน้านี้ อยู่ใน `body` element
content element ทุกหมดในหน้านี้จะถูกแสดงผลในหน้าจอก็ต่อเมื่ออยู่ใน `body` element
อย่างไรก็ตาม ข้อมูลที่สำคัญอื่น ๆ จะไปอยู่ใน `head` element.

จงเพิ่ม `head` element ที่ด้านบนของ `body` element.

# --hints--

ถ้าหาไม่เจอ คุณอาจจะเผลอลบ `body` element ไปหรือมันขาดแท็กเปิดหรือปิด

```js
assert(document.querySelector('body') && code.match(/<\/body>/));
```

Your `head` element should have an opening tag. Opening tags have the following syntax: `<elementName>`.

```js
assert(code.match(/\<head\>/));
```

Your `head` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/\<\/head\>/));
```

Your `head` element should be above the opening `body` element tag. You have it put it somewhere else.

```js
const noSpaces = code.replace(/\s/g, '');
assert(noSpaces.match(/\<\/head\>\<body\>/));
```

# --seed--

## --seed-contents--

```html
<html>
--fcc-editable-region--
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
--fcc-editable-region--
</html>
```

