---
id: bad87fee1348bd9aecf08806
title: Use a CSS Class to Style an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

Class เป้น style ที่สามารถใช้ซ้ำได้และสามารถเพิ่มให้กับ HTML element

นี่คือตัวอย่างของ CSS class declaration:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

คุณสามารถสังเกตได้ว่าพวกเราได้สร้าง CSS class ที่ชื่อ `blue-text` ภายใน `<style>` tag.
คุณสามารถใช้ class กับ HTML element ได้แบบนี้: `<h2 class="blue-text">CatPhotoApp</h2>`
จงจำไว้ว่า ใน CSS `style` element, ชื่อของ classจะเริ่มด้วย period
ใน class attribute ของ HTML element, ชื่อของ class จะไม่มี period

# --instructions--

ใน `style` element, จงเปลี่ยน `h2` selector ให้เป็น `.red-text` และอัพเดฟค่าสีจาก `blue` เป็น `red`

จงกำหนดให้ `h2` element มี `class` attribute ที่มีค่าเป็น `red-text`

# --hints--

`h2` element ควรมีสีแดง

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

Your `h2` element should have the class `red-text`.

```js
assert($('h2').hasClass('red-text'));
```

Your stylesheet should declare a `red-text` class and have its color set to `red`.

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

You should not use inline style declarations like `style="color: red"` in your `h2` element.

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  
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
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
