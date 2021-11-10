---
id: 587d778a367417b2b2512aa6
title: Improve Form Field Accessibility with the label Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMMAN'
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

การพัฒนาการเข้าถึงด้วย semantic HTML markup ถูกใช้เพื่อการใส่ชื่อและ attributes tag ที่เหมาะสม
ในอีกหลาย ๆ challenges จะกล่าวถึงสถานการณ์สำคัญ ๆ ที่ใช้ attributes ในฟอร์ม

`label` tag ที่เก็บข้อความของ form control item ที่ถูกกำหนดไว้ โดยทั่วไปจะเป้นชื่อหรือ label สำหรับตัวเลือกหนึ่ง ๆ
สิ่งนี้จะผูกความหมายเข้ากับ item และช่วยให้ฟอร์มของเราอ่านได้ง่ายขึ้น
`for` attribute บน `label` tag เกี่ยวข้องกับ `label` ที่มากับ the form control และถูกใช้โดยscreen readers

คุณได้เรียนเกี่ยวกับ radio buttons และ labels ของพวกมันในบทหนึ่งของ Basic HTML section
ในบทเรียนนั้น พวกเราเก้บ radio button input element ไว้ใน `label` element พร้อมกับ label textเพื่อที่ข้อความจะได้ถูกคลิกได้
อีกทางหนึ่งที่จะทำ ก็คือการใช้ `for` attribute ตามที่ได้อธิบายไว้ในบทเรียนนี้

ค่าของ `for` attribute จำเป้นต้องเหมือนกับค่าของ `id` attribute ของ form control
นี่คือตัวอย่าง :

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

# --instructions--

Camper Cat ความหวังว่าจะมีคนสนใจโพสต์ของเขาเยอะ ๆ และต้องการที่จะใส่ฟอร์มสำหรับกรอก email เพื่อสมัครเข้าไป
จงเพิ่ม `for` attribute บน email `label` ที่ตรงกับ `id` บนช่อง `input` ของมัน

# --hints--

โค้ดของคุณควรมี `for` attribute บน `label` tag ที่ไม่ได้ว่างเปล่า

```js
assert($('label').attr('for'));
```

Your `for` attribute value should match the `id` value on the email `input`.

```js
assert($('label').attr('for') == 'email');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
