---
id: bad87fee1348bd9aedc08830
title: Use HTML5 to Require a Field
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMd4EcQ'
forumTopicId: 18360
dashedName: use-html5-to-require-a-field
---

# --description--

คุณสามารถกำหนดบอกว่าคุณต้องการบาง form field ได้เพื่อที่ผู้ใช้ของจะจะได้ไม่สามารถส่งแบบฟอร์มตราบใดที่พวกเขายังกรอกข้อมูลในส่วนที่คุณต้องการไม่ครบ 

ยกตัวอย่างเช่น ถ้าคุณต้องการข้อมูลใน text input field, คุณสามารถเพิ่มคำว่า `required` ข้างใน `input` element แบบนี้: `<input type="text" required>`

# --instructions--

จงทำให้ text `input` เป็น `required` field, เพื่อที่ผู้ใช้ของคุณจะไม่สามารถส่งแบบฟอร์มได้หากเขาไม่กรอกข้อมูลในช่องนั้น

หลังจากนั้น จงพยายามทส่งแบบฟอร์มโดยที่ไม่ได้กรอกข้อมูลอะไรลงไป และจงดูว่าแบบฟอร์ม HTML5 ได้แจ้งเตือนว่าช่องนี้จำเป็นต้องกรอกหรือเปล่า?

# --hints--

text `input` element ควรมี  `required` attribute.

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
