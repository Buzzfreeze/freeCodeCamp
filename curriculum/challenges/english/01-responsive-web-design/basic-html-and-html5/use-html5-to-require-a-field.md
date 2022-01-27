---
id: bad87fee1348bd9aedc08830
title: Use HTML5 to Require a Field
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMd4EcQ'
forumTopicId: 18360
dashedName: use-html5-to-require-a-field
---

# --description--

คุณสามารถกำหนดได้ว่า ช่องไหนใน form ที่คุณต้องการจริง ๆ บ้าง เพื่อที่ผู้ใช้จะได้ไม่ส่งแบบฟอร์ม ที่ยังกรอกข้อมูลในส่วนที่คุณต้องการไม่ครบ 

เช่น ถ้าคุณจะกำหนดให้ผู้ใช้จำเป็นต้องกรอกข้อมูลในกล่องข้อความ คุณจะต้องเพิ่มคำว่า `required` ข้างใน `input` element แบบนี้ `<input type="text" required>`

# --instructions--

ให้เพิ่ม `required` ใน text `input` ของคุณ ซึ่งจะทำให้ผู้ใช้ส่งข้อมูลไม่ได้ถ้าไม่ระบุข้อมูลในกล้องข้อความนั้น

ถ้าทำเสร็จแล้ว ให้ลองกดปุ่ม Submit โดยที่ไม่ต้องกรอกข้อความไปในกล่องข้อความ และดูวิธีการแจ้งเตือนของ HTML5

# --hints--

element `input` ต้องมี  `required` attribute

```js
assert($('input').prop('required'));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  
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
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
