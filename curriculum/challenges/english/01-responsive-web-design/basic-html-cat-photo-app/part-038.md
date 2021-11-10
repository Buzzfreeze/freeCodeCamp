---
id: 7cf9b03d81a65668421804c3
title: Part 38
challengeType: 0
dashedName: part-38
---

# --description--

เพื่อที่ข้อมูลจากแบบฟอร์มจะสามารถเข้าถึงได้ด้วยที่อยู่ที่ถูกระบุไว้ใน `action` attribute, คุณต้องกำหนดให้ช่องที่ให้ข้อความมี `name` attribute และกำหนดค่าให้มันเพื่อมันจะได้ถูกแสดงเมื่อมันถูกส่งไปแล้ว
ตัวอย่างเช่น คุณสามารถใช้ syntax ดังต่อไปนี้เพื่อเป็นช่องใส่อีเมล: `<input type="text" name="email">`.

จงเพิ่ม `name` attribute ที่มีค่าเป็น `catphotourl` ให้กับช่องให้ข้อความของคุณ

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

Your `input` element does not have a `name` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.

```js
assert($('input')[0].hasAttribute('name'));
```

Your `input` element should have a `name` attribute with the value `catphotourl`.  You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.

```js
assert(
  $('input')[0]
    .getAttribute('name')
    .match(/^catphotourl$/i)
);
```

Although you have set the `input` element's `name` attribute to `catphotourl`, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(!/\<\s*input\s+.*\s*=\s*catphotourl/.test(code));
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
          <input type="text">
--fcc-editable-region--
        </form>
      </section>
    </main>
  </body>
</html>
```

