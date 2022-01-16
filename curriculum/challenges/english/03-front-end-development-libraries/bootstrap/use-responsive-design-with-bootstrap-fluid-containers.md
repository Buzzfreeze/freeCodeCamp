---
id: bad87fee1348bd9acde08712
title: Use Responsive Design with Bootstrap Fluid Containers
challengeType: 0
forumTopicId: 18362
dashedName: use-responsive-design-with-bootstrap-fluid-containers
---

# --description--

ในบทเรียนเรื่อง HTML5 และ CSS ที่เราได้สร้างแอป Cat Photo ไปแล้ว ตอนนี้เราจะกลับไปเพิ่ม style ให้หน้านี้โดยการใช้ CSS framework ที่ได้รับความนิยมอย่าง Bootstrap

Bootstrap จะหาว่าหน้าจอเปิดอยู่นี้กว้างเท่าไหร่ แล้วจึงปรับขนาด element ต่างๆ ของ HTML ให้เหมาะสมกับขนาดหน้าจอนั้น การปรับการแสดงผลตามขนาดหน้าจอนี้เรียกว่า <dfn>Responsive Design</dfn>

Responsive Design จะทำให้เราไม่ต้องเขียนเว็บที่ใช้ในโทรศัพท์และบนคอมพิวเตอร์แยกกัน Bootstrap จะช่วยทำให้เว็บสวยได้บนหน้าจอทุกขนาด

คุณสามารถใช้ Bootstrap กับเว็บของคุณเว็บไหนก็ได้ เพียงแค่เพิ่มโค้ดข้างล่างนี้ในส่วน head ของ HTML:

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
```

สำหรับแบบฝึกหัดนี้เราได้เพิ่ม Bootstrap ไว้ให้แล้ว ไม่จำเป็นต้องเพิ่มโค้ดข้างบนอีก
หมายเหตุ จะเห็นว่าเราใช้ได้ทั้ง `>` และ `/>` ในการปิด tag `link` นี้

เรามาเริ่มลองใช้ Bootstrap โดยการย้ายโค้ด HTML ทั้งหมด (ยกเว้น tag `link` และ element `style`) ไปไว้ใน element `div` ที่มี class เป็น `container-fluid`

# --hints--

ให้สร้าง element `div` ที่มี class เป็น `container-fluid`

```js
assert($('div').hasClass('container-fluid'));
```

อย่าลืม tag ปิด สำหรับ element `div` 

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

ย้าย HTML element ทั้งหมดที่อยู่หลัง tag ปิดของ `style` ไปอยู่ใน `div` ที่มี class เป็น `container-fluid`

```js
assert($('.container-fluid').children().length >= 8 && !$('.container-fluid').has("style").length && !$('.container-fluid').has("link").length);
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

<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
