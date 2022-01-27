---
id: 587d778a367417b2b2512aa6
title: Improve Form Field Accessibility with the label Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cGJMMAN"
forumTopicId: 301016
dashedName: improve-form-field-accessibility-with-the-label-element
---

# --description--

การเพิ่ม accessibility โดยใช้ semantic markup ของ HTML คือการใช้แท็กและ attribute ที่เหมาะสม
ในแบบฝึกหัดต่อจากนี้ เราจะพูดถึงการใช้ attribute ในฟอร์ม

แท็ก `label` จะใช้ครอบข้อความของ form control ที่ถูกกำหนดไว้ โดยทั่วไปจะเป็นชื่อหรือ label สำหรับตัวเลือกหนึ่ง ๆ
แท็กนี้จะผูกค่าเข้ากับฟอร์ม และช่วยให้ฟอร์มของเราอ่านได้ง่ายขึ้น
แท็ก `label` ก็จะมี attribute `for` เพื่อใช้เชื่อม `label` เข้ากับ from control
โดย screen reader จะอ่านค่าจากตรงนี้

คุณได้เรียนเรื่อง radio button และ label ไปในบทเรียนเรื่อง Basic HTML ไปแล้ว
ในบทนั้น พวกเราซ้อน radio button input element ไว้ใน `label` ร่วมกับข้อความของ label เพื่อให้คลิกที่ข้อความได้
ถ้าเราใส่ id ของ input ไว้ใน for เราก็จะได้ผลแบบเดียวกัน

ค่าของ attribute `for` จำเป็นต้องเหมือนกับค่าของ attribute `id` ของ form control
ลองดูตัวอย่าง:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
</form>
```

# --instructions--

นาย Camper Cat หวังว่าจะมีคนสนใจโพสต์ของเขาเยอะ ๆ และต้องการที่จะใส่ฟอร์มสำหรับกรอก email เพื่อสมัครสมาชิก
ให้เพิ่ม attribute `for` ใน `label` ที่มีข้อความเป็น email โดยระบุค่าเป็น `id` ของ `input`

# --hints--

โค้ดของคุณต้องมี attribute `for` ในแท็ก `label` และต้องระบุค่าด้วย

```js
assert($("label").attr("for"));
```

ค่าของ attribute `for` ต้องตรงกับ `id` ของ `input` ที่เอาไว้กรอกอีกเมล

```js
assert($("label").attr("for") == "email");
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
      <input type="text" id="email" name="email" />

      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>
      The internet is littered with varying opinions on nutritional paradigms,
      from catnip paleo to hairball cleanses. But let's turn our attention to an
      often overlooked fitness fuel, and examine the protein-carb-NOM trifecta
      that is lasagna...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>
      Felines the world over have been waging war on the most persistent of
      foes. This red nemesis combines both cunning stealth and lightning speed.
      But chin up, fellow fighters, our time for victory may soon be near...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>
      Chuck Norris is widely regarded as the premier martial artist on the
      planet, and it's a complete coincidence anyone who disagrees with this
      fact mysteriously disappears soon after. But the real question is, is he a
      cat person?...
    </p>
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
      <input type="text" id="email" name="email" />

      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>
      The internet is littered with varying opinions on nutritional paradigms,
      from catnip paleo to hairball cleanses. But let's turn our attention to an
      often overlooked fitness fuel, and examine the protein-carb-NOM trifecta
      that is lasagna...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>
      Felines the world over have been waging war on the most persistent of
      foes. This red nemesis combines both cunning stealth and lightning speed.
      But chin up, fellow fighters, our time for victory may soon be near...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>
      Chuck Norris is widely regarded as the premier martial artist on the
      planet, and it's a complete coincidence anyone who disagrees with this
      fact mysteriously disappears soon after. But the real question is, is he a
      cat person?...
    </p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
