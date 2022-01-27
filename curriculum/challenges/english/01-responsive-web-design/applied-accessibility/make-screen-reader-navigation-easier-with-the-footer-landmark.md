---
id: 587d7788367417b2b2512aa3
title: Make Screen Reader Navigation Easier with the footer Landmark
challengeType: 0
videoUrl: "https://scrimba.com/c/crVrDh8"
forumTopicId: 301022
dashedName: make-screen-reader-navigation-easier-with-the-footer-landmark
---

# --description--

คราวนี้ เรามีแท็ก `footer` ซึ่งก็คล้ายๆกับ `header` และ `nav` นั่นแหละ เพราะว่าแท็กนี้ก็มีตัวช่วยในการนำทางที่ทำให้ assistive device ช่วยนำทางได้ดีขึ้น
ปกติเราจะใช้แท็กนี้เก็บข้อมูลลิขสิทธิ์หรือลิงค์ที่เกี่ยวข้อง ที่ปกติเราจะวางไว้ส่วนล่างสุดของหน้าเว็บ

# --instructions--

หน้า training ของนาย Camper Cat กำลังไปได้สวยแล้ว
ให้เปลี่ยนแท็ก `div` ที่เขาใช้เก็บข้อมูลลิขสิทธิ์ เป็นแท็ก `footer` แทน

# --hints--

โค้ดของคุณต้องมีแท็ก `footer` หนึ่งอัน

```js
assert($("footer").length == 1);
```

ต้องไม่มีแท็ก `div` ในโค้ดแล้ว

```js
assert($("div").length == 0);
```

ต้องมีทั้งแท็กเปิดและแท็กปิดของ `footer`

```js
assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Training</h1>
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
      <article>
        <h3>Climb foliage quickly using a minimum spanning tree approach</h3>
      </article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article>
        <h3>Dispatch multiple enemies with multithreaded tactics</h3>
      </article>
      <article>
        <h3>Goodbye world: 5 proven ways to knock out an opponent</h3>
      </article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article>
        <h3>Swords: the best tool to literally divide and conquer</h3>
      </article>
      <article>
        <h3>Breadth-first or depth-first in multi-weapon training?</h3>
      </article>
    </section>
  </main>

  <div>&copy; 2018 Camper Cat</div>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Training</h1>
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
      <article>
        <h3>Climb foliage quickly using a minimum spanning tree approach</h3>
      </article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article>
        <h3>Dispatch multiple enemies with multithreaded tactics</h3>
      </article>
      <article>
        <h3>Goodbye world: 5 proven ways to knock out an opponent</h3>
      </article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article>
        <h3>Swords: the best tool to literally divide and conquer</h3>
      </article>
      <article>
        <h3>Breadth-first or depth-first in multi-weapon training?</h3>
      </article>
    </section>
  </main>

  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
