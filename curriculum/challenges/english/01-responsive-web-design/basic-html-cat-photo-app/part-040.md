---
id: 5ef9b03c81a63668521804db
title: Part 40
challengeType: 0
dashedName: part-40
---

# --description--

เพื่อป้องกันไม่ให้ผู้ใช้ส่งแบบฟอร์มที่ยังไม่ได้กรอกข้อมูลที่จำเป็นมา คุณต้องเพิ่ม `required` attribute ให้กับ `input` element นั้น
มันไม่มีความจำเป็นที่จะกำหนดค่าหรือใส่ค่าใด ๆ ให้กับ  `required` attribute
คุณเพียงต้องเพิ่มคำว่า `required` ให้กับ `input` element โดยเช็คให้มั่นใจว่ามันมีช่องว่างระหว่างมันกับ attributes อื่นแล้ว

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

Your `input` element should have a `required` attribute. Remember, you just add the word `required` inside the `input` element's tag.

```js
assert($('input')[0].hasAttribute('required'));
```

A value should not be given to the `required` attribute.

```js
assert($('input')[0].getAttribute('required') === '');
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
          <input type="text" name="catphotourl" placeholder="cat photo URL">
--fcc-editable-region--
        </form>
      </section>
    </main>
  </body>
</html>
```

