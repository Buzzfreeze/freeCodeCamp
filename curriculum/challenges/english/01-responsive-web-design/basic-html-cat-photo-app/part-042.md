---
id: 5efb2c990dc218d6c85f89b2
title: Part 42
challengeType: 0
dashedName: part-42
---

# --description--

แม้ว่าคุณจะเพิ่มปุ่มของคุณไปแล้วที่ด้านล่างของ text input, มันจะยังอยู๋ข้างกันเมื่อแสดงผลบนหน้าจอ
นั่นก็เพราะว่าทั้ง `input` และ `button` elements เป็น <dfn>inline elements</dfn> ซึ่งแปลว่ามันจะไม่มีการขึ้นบรรทัดใหม่

คุณได้เรียนไปในบทก่อนหน้าว่า ปุ่มจะทำการส่งแบบฟอร์มตามค่าาเริ่มต้นของมัน แต่คุณยังสามารถเพิ่ม `type` attribute พร้อมกับค่า `submit` ให้กับมันเพื่อที่จะได้ทำให้มันดูชัดมากยิ่งขึ้น 
จงทำเช่นนี้เพื่อระบุว่าปุ่มนี้มีไว้เพื่อกดส่งแบบฟอร์ม

# --hints--

`button` element ควรมีแท็กเปิดโดยแท็กเปิดจะมี syntax ดังนี้: `<elementName>`.

```js
assert(document.querySelector('button'));
```

Your `button` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/button\>/));
```

Your `button` element does not have a `type` attribute. Check that there is a space after the opening tag's name.

```js
assert($('button')[0].hasAttribute('type'));
```

Your `button` element should have a `type` attribute with the value `submit`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.

```js
assert(
  $('button')[0]
    .getAttribute('type')
    .match(/^submit$/i)
);
```

Although you have set the `button` element's `type` attribute to `submit`, it is recommended to always surround the value of an attribute with quotation marks.

```js
assert(!/\<\s*button\s+type\s*=\s*submit/i.test(code));
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
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
--fcc-editable-region--
          <button>Submit</button>
--fcc-editable-region--
        </form>
      </section>
    </main>
  </body>
</html>
```

