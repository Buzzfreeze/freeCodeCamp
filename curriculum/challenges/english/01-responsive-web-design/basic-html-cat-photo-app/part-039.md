---
id: 5ef9b03c81a63668521804d9
title: Part 39
challengeType: 0
dashedName: part-39
---

# --description--

Placeholder text ถูกใช้เพื่อให้คำใบ้เก็บกับข้อมูลที่ผู้ใช้ควรใส่เข้ามา
ยกตัวอย่างเช่น `<input type="text" placeholder="Email address">`

จงเพิ่ม placeholder text `cat photo URL` ให้กับ `input` element

# --hints--

ถ้าคุณหามันไม่เจอ คุณอาจะเผลอลบ `input` element หรือเขียนคำสั่งของมันได้ไม่ถูกต้อง
ถ้าคุณทำการเพิ่ม attributes, จงเช็คให้มั่นใจว่าค่าที่ใส่เข้าไปมีการครอบด้วย quotation mark แล้ว

```js
assert($('input').length);
```

Your `form` should only contain the `input` element. Remove any HTML additional elements or text within the `form` element.

```js
assert(
  $('form')[0].children.length === 1 &&
    $('form')[0].innerText.trim().length === 0
);
```

Your `input` element does not have a `placeholder` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.

```js
assert($('input')[0].hasAttribute('placeholder'));
```

Your `input` element should have a `placeholder` attribute with the value `cat photo URL`.  You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.

```js
assert(
  $('input')[0]
    .getAttribute('placeholder')
    .replace(/\s+/g, ' ')
    .match(/^cat photo URL$/i)
);
```

Although you have set the `input` element's `placeholder` attribute to `cat photo URL`, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(!/\<\s*input\s+placeholder\s*=\s*cat\s+photo\s+url/i.test(code));
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
          <input type="text" name="catphotourl">
--fcc-editable-region--
        </form>
      </section>
    </main>
  </body>
</html>
```

