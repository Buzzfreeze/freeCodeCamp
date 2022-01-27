---
id: bad87fee1348bd9aede08835
title: Nest Many Elements within a Single div Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cNW4kC3'
forumTopicId: 18246
dashedName: nest-many-elements-within-a-single-div-element
---

# --description--

`div` element หรือที่เรียกว่า division element เป็น element ที่ใช้เพื่อครอบ element อื่น

`div` เป็น HTML element ที่ถูกใช้บ่อยที่สุด

โดย `div` element จะต้องถูกเปิดด้วย `<div>` และปิดด้วย `</div>` 

# --instructions--

ให้ซ้อนลิสต์ "Things cats love" และ "Top 3 things cats hate" ไว้ใน `div` element ตัวเดียวกัน

Hint: ใส่แท็กเปิดของ `div` เหนือ `p` element ที่มีข้อความข้างในเป็น "Things cats love" และใส่แท็กปิดของ `div` ไว้ใต้แท็กปิดของ `ol` 
เพื่อทำให้ลิสต์ทั้งสองตัวอยู่ใน `div` อันเดียวกัน

# --hints--

`p` elements ต้องซ้อนอยู่ใน `div` element

```js
assert($('div').children('p').length > 1);
```

`ul` element ต้องซ้อนอยู่ใน `div` element

```js
assert($('div').children('ul').length > 0);
```

`ol` element ต้องซ้อนอยู่ใน `div` element

```js
assert($('div').children('ol').length > 0);
```

ต้องมีแท็กปิดของ `div` element ด้วย

```js
assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>

  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked /> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor" /> Outdoor</label><br />
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked /> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy" /> Lazy</label>
    <label for="energetic"
      ><input id="energetic" type="checkbox" name="personality" value="energetic" /> Energetic</label
    ><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>
  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked /> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor" /> Outdoor</label><br />
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked /> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy" /> Lazy</label>
    <label for="energetic"
      ><input id="energetic" type="checkbox" name="personality" value="energetic" /> Energetic</label
    ><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```
