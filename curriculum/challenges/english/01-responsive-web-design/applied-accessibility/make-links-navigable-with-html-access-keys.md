---
id: 587d7790367417b2b2512aaf
title: Make Links Navigable with HTML Access Keys
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML ได้เพิ่ม `accesskey` attribute เข้ามา โดยมันเอาไว้กำหนด shortcut key เพื่อใช้ในการ activate หรือดึงความสนใจมาที่ element
การเพิ่ม `accesskey` attribute สามารถช่วยให้การนำทางมีประสิทธิภาพมากขึ้นสำหรับผู้ใช้ที่ใช้ โดยเพียงแค่ keyboard (ทางลัด สำหรับ Keyboard เพื่อเข้าถึงหน้าเว็บหน้านั้นๆ โดยการกดตัวอักษรบนคัย์บอร์ด)

HTML5 ทำให้ attribute นี้สามารถใช้ได้กับทุก element แต่มันอาจจะไม่ค่อยมีประโยชน์เท่าไหร่นักกับ element ที่ interact กับผู้ใช้
นี่รวมถึงลิงค์, ปุ่ม, และ form controls

นี่คือตัวอย่าง :

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

ตัวอย่าง Camper Cat ต้องการที่จะเชื่อม 2 หัวข้อบทความเข้ากับ keyboard shortcuts เพื่อที่ผู้ใช้ของเขาจะได้ navigate เนื้อหาทั้งหมดได้รวดเร็วมากยิ่งขึ้น
จงเพิ่ม `accesskey` attribute ให้กับ links ทั้งสองอันและกำหนดของอันแรกให้เป็น `g` (สำหรับ Garfield) และอันที่สองเป็น `c` (สำหรับ Chuck Norris).

# --hints--

โค้ดของคุณควรเพิ่ม `accesskey` attribute 1 อันให้กับ `a` tag ที่มี `id` ของ `first`

```js
assert($('#first').attr('accesskey'));
```

คุณควรเพิ่ม `accesskey` attribute ให้กับ `a` tag ที่มี `id` เป็น `second`.

```js
assert($('#second').attr('accesskey'));
```

คุณควรกำหนดให้ `accesskey` attribute ใน `a` tag ที่มี `id` เป็น `first` มีค่า `g`
จำไว้ว่า case ของข้อความมีความสำคัญ

```js
assert($('#first').attr('accesskey') == 'g');
```

คุณควรกำหนดให้ `accesskey` attribute ใน `a` tag ที่มี `id` เป็น `second` มีค่า `c`
จำไว้ว่า case ของข้อความมีความสำคัญ

```js
assert($('#second').attr('accesskey') == 'c');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2><a id="first" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>

    <p>
      The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses.
      But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that
      is lasagna...
    </p>
  </article>
  <article>
    <h2><a id="second" href="#">Is Chuck Norris a Cat Person?</a></h2>

    <p>
      Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence
      anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat
      person?...
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
  <article>
    <h2><a id="first" accesskey="g" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>

    <p>
      The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses.
      But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that
      is lasagna...
    </p>
  </article>
  <article>
    <h2><a id="second" accesskey="c" href="#">Is Chuck Norris a Cat Person?</a></h2>

    <p>
      Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence
      anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat
      person?...
    </p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
