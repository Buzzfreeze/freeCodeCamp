---
id: 587d7787367417b2b2512aa1
title: Make Screen Reader Navigation Easier with the header Landmark
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

element ของ HTML5 อันต่อมาที่เราจะสอนคือแท็ก `header`
แท็กนี้จะใช้เพื่อเก็บข้อมูล คร่าวๆของเว็บไซต์ หรือเป็นลิงก์เพื่อใช้นำทางของแท็กที่เป็น parent 
โดยแท็กนี้จะใช้ได้ดี ถ้าใช้ครอบเนื้อหาที่ใช้ในหลายๆหน้า

แท็ก `header` ก็จะเหมือนกับแท็ก `main` ที่จะทำให้ assistive technology พาผู้ใช้ไปยังเนื้อหานั้นได้เร็วยิ่งขึ้น

**Note:** `header` ถูกสร้างขึ้นมาให้ใช้ในแท็ก `body` ของหน้าเว็บ HTML ของคุณ โดยแท็กนี้จะต่างจากแท็ก `head` ที่ใช้เก็บชื่อของหน้าเว็บ metadata ฯลฯ

# --instructions--

ตอนนี้นาย Camper Cat กำลังเขียนบทความเกี่ยวกับการฝึกนินจา และอยากเพิ่มหน้านั้นในเว็บไซต์ของเขา
ให้เปลี่ยน `div` อันบนสุด (ที่ครอบ `h1` อยู่) ให้เป็นแท็ก `header` แทน

# --hints--

โค้ดของคุณต้องมีแท็ก `header` 1 อัน

```js
assert($('header').length == 1);
```

ในแท็ก `header` ต้องมี `h1` อยู่หนึ่งตัว

```js
assert($('header').children('h1').length == 1);
```

ในโค้ดต้องไม่มีแท็ก `div` แล้ว

```js
assert($('div').length == 0);
```

ต้องมีแท็กปิดของ `header` ด้วย

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
