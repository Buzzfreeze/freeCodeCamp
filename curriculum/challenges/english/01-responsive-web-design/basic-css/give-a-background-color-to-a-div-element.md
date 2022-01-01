---
id: bad87fed1348bd9aede07836
title: Give a Background Color to a div Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cdRKMCk'
forumTopicId: 18190
dashedName: give-a-background-color-to-a-div-element
---

# --description--

คุณสามารถกำหนดสีพื้นหลังของ element ได้ด้วย `background-color` property.

ยกตัวอย่างเช่น, ถ้าคุณต้องการให้สีของพื้นหลัง element หนึ่งเป็นสีเขียว `green`, คุณสามารถใส่โค้ดนี้ลงใน `style` element:

```css
.green-background {
  background-color: green;
}
```

# --instructions--

จงสร้างคลาสที่ชื่อ `silver-background` ที่มี `background-color` เป้น `silver`
จงเพิ่มคลาสนี้ให้ `div` element

# --hints--

`div` element ควรมีคลาสชื่อ `silver-background`

```js
assert($('div').hasClass('silver-background'));
```

`div` element ควรมีพื้นหลังสีเงิน

```js
assert($('div').css('background-color') === 'rgb(192, 192, 192)');
```

คลาสหนึ่งที่ชื่อ `silver-background` ควรจะถูกประกาศไว้ใน `style` element และค่าของ `silver` จะถ้าถูกกำหนดให้กับ `background-color` property

```js
assert(code.match(/\.silver-background\s*{\s*background-color\s*:\s*silver\s*;?\s*}/));
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label><br />
    <label><input type="checkbox" name="personality" checked /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Energetic</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      class="smaller-image thick-green-border"
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <div class="silver-background">
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
    <label><input type="radio" name="indoor-outdoor" checked /> Indoor</label>
    <label><input type="radio" name="indoor-outdoor" /> Outdoor</label><br />
    <label><input type="checkbox" name="personality" checked /> Loving</label>
    <label><input type="checkbox" name="personality" /> Lazy</label>
    <label><input type="checkbox" name="personality" /> Energetic</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```
