---
id: bad87fee1348bd9aedf08803
title: Change the Color of Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkVmSm'
forumTopicId: 16775
dashedName: change-the-color-of-text
---

# --description--

ตอนนี้ เรามาเปลี่ยนสีของตัวอักษรบางตัวของเรากัน

พวกเราสามารถทำเช่นนี้ได้โดยการเปลี่ยน`style` ของ `h2` element.

property ที่รับผิดชอบในส่วนของสีของข้อความของ element คือ `color` style property.

นี่คือวืธีที่คุณจะกำหนดสีข้อความของ `h2` element ให้เป้นสีน้ำเงิน:

```html
<h2 style="color: blue;">CatPhotoApp</h2>
```

จงจำไว้ว่ามันเป็นวิธีที่ดีที่จะปิดท้าย inline `style` declarations ด้วย `;` 

# --instructions--

จงเปลี่ยน style ของ `h2` element ให้ข้อความของมันมีสีแดง

# --hints--

`h2` element ควรมี `style` declaration.

```js
assert($('h2').attr('style'));
```

`h2` element ควรมีสีเป็น `red`.

```js
assert($('h2')[0].style.color === 'red');
```

`style` declaration ควรลงท้ายด้วย `;` 

```js
assert($('h2').attr('style') && $('h2').attr('style').endsWith(';'));
```

# --seed--

## --seed-contents--

```html
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
<h2 style="color: red;">CatPhotoApp</h2>
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
