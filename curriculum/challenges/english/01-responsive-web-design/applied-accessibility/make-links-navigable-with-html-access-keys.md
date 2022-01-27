---
id: 587d7790367417b2b2512aaf
title: Make Links Navigable with HTML Access Keys
challengeType: 0
videoUrl: "https://scrimba.com/c/cQvmaTp"
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML ได้เพิ่ม attribute `accesskey` เข้ามา โดย attribute นี้จะเอาไว้กำหนด shortcut key เพื่อใช้ในการ activate หรือดึงความสนใจมาที่ element

การเพิ่ม attribute `accesskey` สามารถช่วยให้การนำทางมีประสิทธิภาพมากขึ้น สำหรับผู้ใช้ที่ใช้แค่ keyboard

HTML5 ทำให้ attribute นี้สามารถใช้ได้กับทุก element แต่อาจจะไม่ค่อยมีประโยชน์เท่าไหร่นักกับ element ที่ผู้ใช้สามารถใช้งานได้โดยตรง เช่น ลิงก์, ปุ่ม, และ form control

ลองดูตัวอย่าง :

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

นาย Camper Cat ต้องการให้ผู้ใช้ ใช้คีย์บอร์ดเพื่อคลิกไปอ่านโพสต์เต็มๆของเขาได้

ให้เพิ่ม attribute `accesskey` ให้กับทั้งสองลิงก์ โดยกำหนดให้ค่าของ accesskey ของลิงก์แรกเป็น `g` (สำหรับ Garfield) และ accesskey ของลิงก์ที่สองเป็น `c` (สำหรับ Chuck Norris)

# --hints--

แท็ก `a` ที่มี `id` เป็น `first` ต้องมีการกำหนดค่า attribute `accesskey`

```js
assert($("#first").attr("accesskey"));
```

แท็ก `a` ที่มี `id` เป็น `second` ต้องมีการกำหนดค่า attribute `accesskey`

```js
assert($("#second").attr("accesskey"));
```

attribute `accesskey` ของแท็ก `a` ที่มี `id` เป็น `first` ต้องมีค่าเป็น `g` (ต้องเป็นตัวพิมพ์เล็ก)

```js
assert($("#first").attr("accesskey") == "g");
```

attribute `accesskey` ของแท็ก `a` ที่มี `id` เป็น `second` ต้องมีค่าเป็น `c` (ต้องเป็นตัวพิมพ์เล็ก)

```js
assert($("#second").attr("accesskey") == "c");
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>
      <a id="first" href="#">The Garfield Files: Lasagna as Training Fuel?</a>
    </h2>

    <p>
      The internet is littered with varying opinions on nutritional paradigms,
      from catnip paleo to hairball cleanses. But let's turn our attention to an
      often overlooked fitness fuel, and examine the protein-carb-NOM trifecta
      that is lasagna...
    </p>
  </article>
  <article>
    <h2><a id="second" href="#">Is Chuck Norris a Cat Person?</a></h2>

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
  <article>
    <h2>
      <a id="first" accesskey="g" href="#"
        >The Garfield Files: Lasagna as Training Fuel?</a
      >
    </h2>

    <p>
      The internet is littered with varying opinions on nutritional paradigms,
      from catnip paleo to hairball cleanses. But let's turn our attention to an
      often overlooked fitness fuel, and examine the protein-carb-NOM trifecta
      that is lasagna...
    </p>
  </article>
  <article>
    <h2>
      <a id="second" accesskey="c" href="#">Is Chuck Norris a Cat Person?</a>
    </h2>

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
