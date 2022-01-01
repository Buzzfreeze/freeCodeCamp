---
id: 587d7788367417b2b2512aa2
title: Make Screen Reader Navigation Easier with the nav Landmark
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
dashedName: make-screen-reader-navigation-easier-with-the-nav-landmark
---

# --description--

`nav` element เป็นอีก HTML5 item ที่มี embedded landmark feature สำหรับการนำทาง (ลิงค์ไปที่อื่น) screen reader อย่างง่าย ๆ
tag นี้ถูกใช้เพื่อเก็บลิงค์ของ navigation หลักในหน้าของคุณ

ถ้ามีลิงค์ที่ถูกใช้ซ้ำ ๆ อยู่ที่ด้านล่างของแต่ละหน้า มันไม่จำเป็นที่จะ markup พวกมันด้วย `nav` tag
การใช้ `footer` (จะกล่าวถึงในแบบฝึกหัดถัดไป) ในกรณีนี้ถือว่าเพียงพอแล้ว

# --instructions--

ตัวอย่างเช่น Camper Cat ได้ใส่ลิงค์ของ navigation ที่ด้านบนของหน้า training ของเขาแต่เก็บพวกมันไว้ใน `div`
จงเปลี่ยน `div` ให้เป็น `nav` tag เพื่อปรับปรุงการเข้าถึงหน้านั้นของเขา

# --hints--

โค้ดของคุณควรมี `nav` tag 1 อัน

```js
assert($('nav').length == 1);
```

`nav` tags ควรเก็บ `ul` และ list item ของมันไว้

```js
assert($('nav').children('ul').length == 1);
```

โค้ดของคุณไม่ควรมี `div` tag ใด ๆ อีกต่อไป

```js
assert($('div').length == 0);
```

`nav` element ควรมีแท็กปิด

```js
assert(code.match(/<\/nav>/g) && code.match(/<\/nav>/g).length === code.match(/<nav>/g).length);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <div>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </div>
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

# --solutions--

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
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
