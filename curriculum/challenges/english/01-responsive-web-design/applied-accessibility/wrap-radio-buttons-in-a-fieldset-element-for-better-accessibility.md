---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
challengeType: 0
videoUrl: "https://scrimba.com/c/cVJVefw"
forumTopicId: 301030
dashedName: wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility
---

# --description--

คราวนี้เราจะมาพูดถึง accessibility ของ radio button กัน

แต่ละตัวเลือกของ radio button นั้นจะมี `label` 1 ตัวที่มี attribute `for` ที่ผูกไว้กับ `id` ของ input เหมือนที่เราเรียนไปในบทเรียนที่แล้ว
ปกติแล้ว เราจะให้ผู้ใช้เลือก radio button ได้แค่ตัวเดียว
เราจึงต้องมีวิธีที่จะใช้ครอบตัวเลือกนี้ไว้ร่วมกัน

เราจะใช้แท็ก `fieldset` ครอบตัวเลือกทั้งหมดของ radio button
และเราก็จะใช้แท็ก `legend` เพื่อเก็บคำอธิบายของกลุ่มตัวเลือกนี้
และ screen reader ก็จะอ่านตัวเลือกในแท็ก `fieldset`

บางครั้งเราก็ไม่จำเป็นต้องใช้แท็ก `fieldset` หรือ `legend` ถ้าตัวเลือกแต่ละตัวเลือกสื่อความหายได้ชัดเจนอยู่แล้ว
เช่น ในการเลือกเพศของผู้ใช้ เราจะใช้แค่ `label` กับ attribute `for` ของ radio button ก็เพียงพอแล้ว
ลองดูตัวอย่าง:

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one" />
    <label for="one">Choice One</label><br />
    <input id="two" type="radio" name="items" value="two" />
    <label for="two">Choice Two</label><br />
    <input id="three" type="radio" name="items" value="three" />
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

# --instructions--

นาย Camper Cat ต้องการข้อมูลระดับนินจาของผู้ใช้ของเขา เมื่อผู้ใช้ของเขาลงทะเบียนอีเมล

เขาได้เพิ่มรายการตัวเลือกของ radio button แล้ว และเขาได้เรียนเรื่องการใช้แท็ก `label` และ attribute `for` ในบทเรียนที่แล้วไปแล้ว
แต่โค้ดของเขาก็ยังจะต้องปรับเพิ่มอยู่อีกหน่อย

ให้เปลี่ยนแท็ก `div` ที่ครอบ radio button อยู่ ให้เป็นแท็ก `fieldset` และเปลี่ยนแท็ก `p` ข้างในให้เป็น `legend`

# --hints--

โค้ดของคุณต้องมีแท็ก `fieldset` ครอบ radio button อยู่

```js
assert($("fieldset").length == 1);
```

ต้องมีแท็กปิดของ `fieldset`

```js
assert(
  code.match(/<\/fieldset>/g) &&
    code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length
);
```

ต้องมีแท็ก `legend` เพื่อเก็บข้อความที่ถามระดับนินจาของผู้ใช้

```js
assert($("legend").length == 1);
```

ต้องไม่มีแท็ก `div` ในโค้ดแล้ว

```js
assert($("div").length == 0);
```

ต้องไม่มีแท็ก `p` ที่เก็บข้อความที่ถามระดับนินจาของผู้ใช้ ในโค้ดแล้ว

```js
assert($("p").length == 4);
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
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" />

      <!-- Only change code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie" />
        <label for="newbie">Newbie Kitten</label><br />
        <input
          id="intermediate"
          type="radio"
          name="levels"
          value="intermediate"
        />
        <label for="intermediate">Developing Student</label><br />
        <input id="master" type="radio" name="levels" value="master" />
        <label for="master">Master</label>
      </div>
      <!-- Only change code above this line -->

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

      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie" />
        <label for="newbie">Newbie Kitten</label><br />
        <input
          id="intermediate"
          type="radio"
          name="levels"
          value="intermediate"
        />
        <label for="intermediate">Developing Student</label><br />
        <input id="master" type="radio" name="levels" value="master" />
        <label for="master">Master</label>
      </fieldset>

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
