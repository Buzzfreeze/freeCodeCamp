---
id: 5ef9b03c81a63668521804da
title: Part 41
challengeType: 0
dashedName: part-41
---

# --description--

จงใช้ `button` element เพื่อสร้างปุ่มที่คลิกได้ขึ้นมา
ยกตัวอย่างเช่น `<button>Click Here</button>` จะสร้างปุ่มที่มาพร้อมกับข้อความ `Click Here`

จงเพิ่ม `button` element ที่มาพร้อมกับข้อความ `Submit` ต่อจาก `input` element
จำไว้ว่า พฤติกรรมเริ่มต้นของการคลิกที่ปุ่มแบบฟอร์มที่มี attribute อะไรก็ตามจะส่งแบบฟอร์มนั้นไปที่ที่อยู่ที่ถูกระบุไว้ใน `action` attribute ของแบบฟอร์ม

# --hints--

`button` element ควรมีแท็กเปิดโดยแท็กเปิดจะมี syntax ดังนี้: `<elementName>`.

```js
assert(document.querySelector('button'));
```

Your `button` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/button\>/));
```

Your `button` element's text should be 'Submit'. You have either omitted the text or have a typo.

```js
assert(document.querySelector('button').innerText.toLowerCase() === 'submit');
```

Your `button` element should be below the `input` element. You have them in the wrong order.

```js
const collection = [...document.querySelectorAll('input, button')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('INPUT') < collection.indexOf('BUTTON'));
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
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
--fcc-editable-region--
        </form>
      </section>
    </main>
  </body>
</html>
```

