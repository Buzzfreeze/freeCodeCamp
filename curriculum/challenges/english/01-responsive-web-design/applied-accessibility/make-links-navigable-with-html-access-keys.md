---
id: 587d7790367417b2b2512aaf
title: Make Links Navigable with HTML Access Keys
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML ได้เสนอ `accesskey` attribute ที่จะไว้กำหนด shortcut key เพื่อใช้ในการ activate หรือดึงความสนใจมาที่element
จงเพิ่ม `accesskey` attribute สามารถช่วยให้การนำทางมีประสิทธิภาพมากขึ้นสำหรับผู้ใช้ที่ใช้เพียงแค่ keyboard เท่านั้น

HTML5 อนุญาตให้ attribute นี้สามารถถูกใช้ได้กับทุก element, แต่มันอาจจะไม่ค่อยมีประโยชน์ดท่าไหร่นักกับ element ที่ interactive กับผู้ใช้
นี่รวมถึงลิงค์, ปุ่ม, และ form controls

นี่คือตัวอย่าง :

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

Camper Cat ต้องการที่จะเชื่อม 2 หัวข้อบทความเข้ากับ keyboard shortcuts เพื่อที่ผู้ใช้ของเขาจะได้ navigate เนื้อหาทั้งหมดไดรวดเร็วมากยิ่งขึ้น
จงเพิ่ม `accesskey` attribute ให้กับ links ทั้งสองอันและกำหนดของอันแรกให้เป็น `g` (สำหรับ Garfield) และอันที่สองเป็น `c` (สำหรับ Chuck Norris).

# --hints--

โค้ดของคุณควรเพิ่ม `accesskey` attribute 1 อันให้กับ `a` tag ที่มี `id` ของ `first`

```js
assert($('#first').attr('accesskey'));
```

Your code should add an `accesskey` attribute to the `a` tag with the `id` of `second`.

```js
assert($('#second').attr('accesskey'));
```

Your code should set the `accesskey` attribute on the `a` tag with the `id` of `first` to `g`. Note that case matters.

```js
assert($('#first').attr('accesskey') == 'g');
```

Your code should set the `accesskey` attribute on the `a` tag with the `id` of `second` to `c`. Note that case matters.

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


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="#">Is Chuck Norris a Cat Person?</a></h2>


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
  <article>


    <h2><a id="first" accesskey="g" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" accesskey="c" href="#">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
