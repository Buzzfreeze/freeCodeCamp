---
id: bad88fee1348ce8acef08815
title: Use the Bootstrap Grid to Put Elements Side By Side
challengeType: 0
forumTopicId: 18371
dashedName: use-the-bootstrap-grid-to-put-elements-side-by-side
---

# --description--

ระบบ responsive ของ Boostrap วางอยู่บนพื้นฐานที่ว่าใน grid 1 แถว (`row`) จะมี 12 คอลัมน์ (`column`) ซึ่งทำให้การจัดการความกว้างของ element ต่างๆในแต่ละ row ได้ง่าย และ class ส่วนใหญ่ของ Bootstrap ก็จะนำไปใช้กับ `div` element ได้

Bootstrap จะมีขนาดของ column ที่ต่างกัน ซึ่งขึ้นอยู่กับความกว้างหน้าจอของ user เช่น หน้าจอโทรศัพท์มือถือที่แคบ หรือหน้าจอคอมพิวเตอร์ที่กว้างกว่า

ยกตัวอย่างเช่น class `col-md-*` ของ Bootstrap ที่ `md` จะหมายถึงขนาดกลาง (medium) และ `*` จะแทนด้วยตัวเลขที่ระบุว่า element นี้มีความกว้างครอบคลุมกี่ column 
ในตัวอย่างนี้ element นี้บนหน้าจอขนาดกลาง อย่างเช่นแลปท็อป จะมีจำนวน column เท่ากับ * (โดย * จะเป็นตัวเลขตั้งแต่ 1 ถึง 12)

ในแอป Cat Photo ที่เราได้สร้างมาแล้ว เราจะใช้ `col-xs-*` โดยที่ `xs` หมายถึงขนาดเล็กพิเศษ หรือ extra small (เช่น จอมือถือ) และ `*` คือตัวเลขที่ระบุว่า element นี้จะกว้างเป็นจำนวนกี่ column

นำปุ่ม `Like`, `Info` และ `Delete` มาเรียงอยู่ใน row เดียวกัน โดยการย้ายปุ่มทั้ง 3 ไปอยู่ไว้ใน `<div class="row">` และใส่แต่ละปุ่มไว้ใน `<div class="col-xs-4">`

# --hints--

ปุ่มทั้ง 3 จะต้องอยู่ใน `div` element เดียวกันที่มี class เป็น `row`

```js
assert($('div.row:has(button)').length > 0);
```

ปุ่มแต่ละปุ่มจะต้องอยู่ใน `div` element ของตัวเองที่มี class เป็น `col-xs-4`

```js
assert($('div.col-xs-4:has(button)').length > 2);
```

อย่าลืม tag ปิดสำหรับทุกๆ `button` element

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

อย่าลืม tag ปิดสำหรับ `div` element ทุกอันด้วย

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
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

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-block btn-primary">Like</button>
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
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

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
  
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```
