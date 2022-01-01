---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVefw'
forumTopicId: 301030
dashedName: wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility
---

# --description--

หัวข้อเกี่ยวกับ form อันถัดไปจะกล่าวถึงเรื่องการเข้าถึงของ radio buttons
แต่ละตัวเลือกนั้นจะมี `label` 1 อันกับ `for` attribute 1 อันผูกไว้กับ `id` ของ item ที่สัมพันธ์กันอย่างที่ทำพร้อมกับ challenge ก่อนหน้า
เนื่องจาก radio buttons มักมาเป็นกลุ่มที่อนุญาตให้ผู้ใช้เลือกได้แค่ตัวเดียว จึงมีวิธีหนึ่งที่จะช่วยทำให้เห็นว่าตัวเลือกเหล่านี้เป็นเซ็ตเดียวกัน

`fieldset` tag จะต้องเก็บกลุ่มของ radio buttons ทั้งหมด
สิ่งนี้มักใช้ `legend` tag 1 อันเพื่อให้คำอธิบายของกลุ่มตัวเลือกนั้น ซึ่ง screen readers จะอ่านแต่ละตัวเลือกที่อยู่ใน `fieldset` element.

`fieldset` wrapper และ `legend` tag นั้นไม่จำเป็นเมื่อแต่ละตัวเลือกมันอธิบายตัวมันเองอยู่แล้ว เช่นการเลือเพศ การใช้ `label` กับ `for` attribute ของแต่ละ radio button นั้นก็เพียงพอแล้ว
นี่คือตัวอย่าง :

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

ตัวอย่าง Camper Cat ต้องการข้อมูลเกี่ยวกับระดับนินจาของผู้ใช้ของเขาเมื่อพวกเขาเหล่านั้นสมัครเข้าร่วมลิสต์อีเมล
เขาได้เพิ่มเซ็ตของ radio buttons อันหนึ่งและเรียนรู้จากบทเรียนที่แล้วของเราในการใช้ `label` tags กับ `for` attributes กับแต่ละตัวเลือก
อย่างไรก็ตาม โค้ดของเขายังต้องการความช่วยเหลือบางอย่าง
จงเปลี่ยน `div` tag ที่เก็บ radio buttons ให้เป็น `fieldset` tag และจงเปลี่ยน `p` tag ข้างในมันให้เป็น `legend`.

# --hints--

โค้ดของคุณควรมี `fieldset` tag ล้อมรอบเซ็ตของ radio button

```js
assert($('fieldset').length == 1);
```

`fieldset` element ควรมีแท็กปิด

```js
assert(code.match(/<\/fieldset>/g) && code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length);
```

คุณควรมี `legend` tag เพื่อเก็บข้อความที่ถามระดับนินจาของผู้ใช้

```js
assert($('legend').length == 1);
```

โค้ดของคุณไม่ควรมี `div` tag ใด ๆ แล้ว

```js
assert($('div').length == 0);
```

โค้ดของคุณไม่ควรมี `p` tag ที่เก็บข้อความที่ถามระดับนินจากของผู้ใช้อีกต่อไปแล้ว

```js
assert($('p').length == 4);
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
        <input id="intermediate" type="radio" name="levels" value="intermediate" />
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
      The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses.
      But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that
      is lasagna...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>
      Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning
      stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
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
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" />

      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie" />
        <label for="newbie">Newbie Kitten</label><br />
        <input id="intermediate" type="radio" name="levels" value="intermediate" />
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
      The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses.
      But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that
      is lasagna...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>
      Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning
      stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...
    </p>
  </article>
  <img src="samuraiSwords.jpeg" alt="" />
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>
      Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence
      anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat
      person?...
    </p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
