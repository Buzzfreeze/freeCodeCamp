---
id: bad88fee1348ce8acef08815
title: Use the Bootstrap Grid to Put Elements Side By Side
challengeType: 0
forumTopicId: 18371
dashedName: use-the-bootstrap-grid-to-put-elements-side-by-side
---

# --description--

Boostrap ใช้ระบบ responsive 12-column grid ซึ่งทำให้ง่ายในการจัดการ element ต่างๆ ใน แต่ละ row ให้มีความกว้างที่สัมพันธ์กัน และ class ส่วนมากของ Bootstrap สามารถนำไปใช้ได้กับ `div` element

Bootstrap มีคุณลักษณะความกว้างของ column ที่แตกต่างกันไปขึ้นอยู่กับความกว้างหน้าจอของ user อย่างเช่น หน้าจอโทรศัพท์มือถือที่แคบ และ หน้าจอแลปท็อปที่กว้างกว่า

ยกตัวอย่างเช่น class `col-md-*` ของ Bootstrap ที่ `md` จะหมายถึงขนาดกลาง และ `*` จะแทนด้วยตัวเลขที่ระบุว่า element นี้จะกว้างเป็นจำนวนกี่ column โดยรวมแล้วกล่าวได้ว่า ความกว้างของ column ของ element นี้บนหน้าจอขนาดกลาง อย่างเช่นแลปท็อป จะมีขนาดเท่ากับจำนวน * ที่ระบุไว้

ในแอป Cat Photo ที่เราได้สร้างมาแล้ว เราจะใช้ `col-xs-*` โดยที่ `xs` หมายถึงขนาดเล็กพิเศษ (เช่น จอมือถือ) และ `*` คือตัวเลขที่ระบุว่า element นี้จะกว้างเป็นจำนวนกี่ column

นำปุ่ม `Like`, `Info` และ `Delete` มาเรียงในบรรทัดเดียวกัน โดยการย้ายปุ่มทั้ง 3 ไปอยู่ไว้ใน `<div class="row">` และฝังแต่ละปุ่มใน `<div class="col-xs-4">`

# --hints--

ปุ่มทั้ง 3 จะต้องอยู่ภายใน `div` element ที่มี class `row`

```js
assert($('div.row:has(button)').length > 0);
```

แล้วแต่ละปุ่มนั้นจะต้องอยู่ใน `div` element ที่มี class `col-xs-4` ของตัวเองแต่ละอันอีกที

```js
assert($('div.col-xs-4:has(button)').length > 2);
```

อย่าลืม tag ปิดสำหรับทุกๆ `button` elements

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

รวมถึง tag ปิดสำหรับ `div` elements ทุกอันด้วย

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
