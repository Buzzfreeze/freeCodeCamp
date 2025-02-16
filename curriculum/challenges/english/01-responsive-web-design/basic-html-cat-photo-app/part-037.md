---
id: 5efb23e70dc218d6c85f89b1
title: Part 37
challengeType: 0
dashedName: part-37
---

# --description--

มี input หลายแบบที่คุณสามารถสร้างได้ด้วย `type` attribute
คุณสามารถสร้างช่องใส่รหัสผ่าน ปุ่มรีเซ้ต หรือหน้าต่างที่ทำให้ผู้ใช้สามารถเลือกไฟล์จากคอมพิวเตอร์ของพวกเขาเองได้

จงสร้างช่องใส่ข้อความเพื่อรับ input ที่เป็นตัวอักษรจากผู้ใช้ โดยการเพิ่ม `type` attribute ที่มีค่าเป็น `text` ให้กับ `input` element

# --hints--

ถ้าคุณหามันไม่เจอ คุณอาจะเผลอลบ `input` element หรือเขียนคำสั่งของมันได้ไม่ถูกต้อง
ถ้าคุณทำการเพิ่ม attributes, จงเช็คให้มั่นใจว่าค่าที่ใส่เข้าไปมีการครอบด้วย quotation mark แล้ว

```js
assert($('input').length);
```

Your `form` element should only contain the `input` element. Remove any extra HTML elements or text between the `form` element's tags.

```js
assert(
  $('form')[0].children.length === 1 &&
    $('form')[0].innerText.trim().length === 0
);
```

Your `input` element does not have a `type` attribute. with the value `text`. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.

```js
assert($('input')[0].hasAttribute('type'));
```

Your `input` element should have a `type` attribute with the value `text`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.

```js
assert(
  $('input')[0]
    .getAttribute('type')
    .replace(/\s+/g, ' ')
    .match(/^text$/i)
);
```

Although you have set the `input` element's `type` attribute to the `text`, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(!/\<input\s+type\s*=\s*text/.test(code));
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
          <input>
--fcc-editable-region--
        </form>
      </section>
    </main>
  </body>
</html>
```

