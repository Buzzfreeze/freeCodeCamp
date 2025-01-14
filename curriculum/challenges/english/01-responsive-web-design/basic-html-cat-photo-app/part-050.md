---
id: 5f0d48e7b435f13ab6550051
title: Part 50
challengeType: 0
dashedName: part-50
---

# --description--

`legend` element จะทำหน้านี้เหมือนกับแคปชั่นของ content ใน `fieldset` element
มันจะให้บริบทของสิ่งที่พวกเขาควรกรอกเข้าไปในส่วนนี้กับผู้ใช้

จงเพิ่ม `legend` element ที่มีข้อความ `Is your cat an indoor or outdoor cat?` เหนือ radio buttons ทั้งสองอัน

# --hints--

`legend` element ควรมีแท็กเปิดโดยแท็กเปิดจะมี syntax ดังนี้: `<elementName>`

```js
assert(document.querySelector('legend'));
```

Your `legend` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/legend\>/));
```

Your `legend` element should be the first element right below `fieldset` element's opening tag and before the first radio button's opening `label` tag. It is not in the correct position.

```js
const fieldsetElem = document.querySelector('fieldset');
const fieldsetElemChildren = fieldsetElem.children;
assert(
  fieldsetElem.firstElementChild.nodeName === 'LEGEND' &&
    fieldsetElemChildren[1].nodeName === 'LABEL' &&
    fieldsetElemChildren[1].children[0].nodeName === 'INPUT' &&
    fieldsetElemChildren[1].children[0].id === 'indoor'
);
```

Your `legend` element's text should be `Is your cat an indoor or outdoor cat?`. You have either omitted the text, have a typo, or it is not between the `legend` element's opening and closing tags.

```js
const extraSpacesRemoved = document
  .querySelector('legend')
  .innerText.replace(/\s+/g, ' ');
assert(extraSpacesRemoved.match(/Is your cat an indoor or outdoor cat\??$/i));
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
          <fieldset>
--fcc-editable-region--
            <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
            <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
--fcc-editable-region--
          </fieldset>
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  </body>
</html>
```

