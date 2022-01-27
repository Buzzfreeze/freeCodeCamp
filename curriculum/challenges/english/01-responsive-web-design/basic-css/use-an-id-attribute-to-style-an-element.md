---
id: bad87dee1348bd9aede07836
title: Use an id Attribute to Style an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cakyZfL"
forumTopicId: 18339
dashedName: use-an-id-attribute-to-style-an-element
---

# --description--

อย่างหนึ่งที่ทำให้ `id` attribute เจ๋งมาก ๆ ก็คือ คุณจะใช้ `id` เพื่อตกแต่ง CSS ได้เหมือนกับคลาสเลย

อย่าลืมว่า `id` ไม่สามารถใช้ซ้ำได้ และต้องใช้แค่กับ element เดียวเท่านั้น
และการตกแต่ง element นั้น style ของ `id` จะถูกให้ความสำคัญมากกว่า style ของคลาส
ดังนั้นถ้า เราใช้ทั้ง style ของ id และคลาสใน element เดียวกัน
style ของ `id` จะถูกใช้งาน

ลองดูตัวอย่างการแต่ง element ที่มี `id` เป็น `cat-photo-element` โดยกำหนดให้พื้นหลังเป็นสีเขียว

จะใช้โค้ดใน `style` element แบบนี้:

```css
#cat-photo-element {
  background-color: green;
}
```

ถ้ายังจำได้ ใน `style` element ของคุณ คุณจะประกาศคลาสได้โดยใส่ `.` ไว้หน้าชื่อคลาส
แต่ในการประกาศ style ของ id คุณจะต้องใส่ `#` ไว้หน้า id แทน

# --instructions--

ให้เปลี่ยนพื้นหลังของแบบฟอร์มที่มี `id` เป็น `cat-photo-form` ให้เป็นพื้นหลังสีเขียว

# --hints--

`form` element ต้องมี id เป็น `cat-photo-form`

```js
assert($("form").attr("id") === "cat-photo-form");
```

`background-color` ของ `form` ต้องเป็น `green`

```js
assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)");
```

`form` ต้องมี `id` attribute

```js
assert(
  code.match(/<form.*cat-photo-form.*>/gi) &&
    code.match(/<form.*cat-photo-form.*>/gi).length > 0
);
```

`form` ต้องไม่มี attribute `class` และ `style`

```js
assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi));
```

# --seed--

## --seed-contents--

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
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

  <form
    action="https://freecatphotoapp.com/submit-cat-photo"
    id="cat-photo-form"
  >
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
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
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

  #cat-photo-form {
    background-color: green;
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

  <form
    action="https://freecatphotoapp.com/submit-cat-photo"
    id="cat-photo-form"
  >
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
