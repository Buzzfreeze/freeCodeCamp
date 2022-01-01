---
id: 587d7787367417b2b2512aa1
title: Make Screen Reader Navigation Easier with the header Landmark
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

HTML5 element อันต่อมาที่จะเพิ่มความหมายในแง่ความภาษาและทำให้ความสามารถในการเข้าถึงดีขึ้นคือ `header` tag
มันถูกใช้เพื่อเก็บข้อมูลสำหรับการแนะนำตัวเว็บไซต์หรือ navigation links สำหรับ parent tag ของมัน และมันยังทำงานได้ดีกับเนื้อหาที่ซ้ำ ๆ ในบริเวณส่วนบนของหลาย ๆ หน้า

`header` ได้แบ่ง embedded landmark feature ที่คุณเห็นกับ `main` โดยการทำให้ assistive technologies สามารถนำทางไปยังเนื้อหานั้นได้รวดเร็วมากยิ่งขึ้น

**Note:** `header` นั้นถูกใช้ใน `body` tag ของ HTML document ของคุณ มันแตกต่างจาก `head` element ที่เก็บทั้งชื่อของหน้านั้น, meta information, และอื่น ๆ

# --instructions--

ตัวอย่างเช่น Camper Cat กำลังเขียนบทความสุดคูลเกี่ยวกับการฝึกนินจา และต้องการจะเพิ่มหน้าหน้าหนึ่งในเว็บไซต์ของเขา
จงเปลี่ยน `div` อันบนที่ตอนนี้เก็บ `h1` เป็น `header` tag แทน

# --hints--

โค้ดของคุณควรมี `header` tag 1 อัน

```js
assert($('header').length == 1);
```

`header` tags ควรจะเก็บ `h1`

```js
assert($('header').children('h1').length == 1);
```

โค้ดของคุณไม่ควรจะมี `div` tag ใด ๆ แล้ว

```js
assert($('div').length == 0);
```

`header` element ควรมีแท็กปิด

```js
assert(code.match(/<\/header>/g) && code.match(/<\/header>/g).length === code.match(/<header>/g).length);
```

# --seed--

## --seed-contents--

```html
<body>
  <div>
    <h1>Training with Camper Cat</h1>
  </div>

  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>
  </header>

  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```
