---
id: 587d7788367417b2b2512aa2
title: Make Screen Reader Navigation Easier with the nav Landmark
challengeType: 0
videoUrl: "https://scrimba.com/c/czVwWSv"
forumTopicId: 301024
dashedName: make-screen-reader-navigation-easier-with-the-nav-landmark
---

# --description--

`nav` ก็เป็นอีกหนึ่ง element ของ HTML5 ที่มีตัวช่วยสำหรับการนำทางในหน้าเว็บ สำหรับ screen reader
เราจะใช้แท็กนี้เพื่อเก็บ navigation หลักของเว็บคุณ

ถ้ามีลิงค์ที่ถูกใช้ซ้ำ ๆ อยู่ที่ด้านล่างของแต่ละหน้า คุณไม่จำเป็นต้องครอบลิงก์พวกนั้นด้วยแท็ก `nav`
ในกรณีนี้การใช้ `footer` (จะพูดถึงในแบบฝึกหัดหน้า) ก็เพียงพอแล้ว

# --instructions--

นาย Camper Cat ได้ใส่ลิงค์ของ navigation ที่ด้านบนของหน้า training ของเขาแล้ว แต่ตอนนี้เขาครอบลิงก์โดยใช้แท็ก `div`

ให้เปลี่ยน `div` เป็น `nav` เพื่อเพิ่ม accessibility ในหน้านี้

# --hints--

โค้ดของคุณต้องมีแท็ก `nav` 1 อัน

```js
assert($("nav").length == 1);
```

แท็ก `nav` ต้องครอบ `ul` และข้อมูลทั้งหมดของแท็กนี้ไว้

```js
assert($("nav").children("ul").length == 1);
```

ต้องไม่มีแท็ก `div` ในโค้ดแล้ว

```js
assert($("div").length == 0);
```

ต้องมีแท็กปิดของ `nav` ด้วย

```js
assert(
  code.match(/<\/nav>/g) &&
    code.match(/<\/nav>/g).length === code.match(/<nav>/g).length
);
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
</body>
```
