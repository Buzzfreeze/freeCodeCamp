---
id: 587d7788367417b2b2512aa3
title: Make Screen Reader Navigation Easier with the footer Landmark
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVrDh8'
forumTopicId: 301022
dashedName: make-screen-reader-navigation-easier-with-the-footer-landmark
---

# --description--

คล้ายกับ `header` และ `nav`
`footer` element มี built-in landmark feature ตัวหนึ่งที่ทำให้ assistive devices สามารถนำทางมาที่มันได้เร็วขึ้น
มันถูกใช้เพื่อเก็บข้อมูล copyright หรือลิงค์ที่เกี่ยวข้องกับเอกสารที่มักถูกวางไว้ที่ด้านล่างของหน้าหนึ่ง ๆ 

# --instructions--

หน้า training ของ Camper Cat กำลังไปได้สวย
จงเปลี่ยน `div` ที่เขาใช้ให้เก็บข้อมูล copyright ของเขาที่ด้านล่างของหน้านี้ไว้ใน `footer` element.

# --hints--

โค้ดของคุณควรมี 1 `footer` tag.

```js
assert($('footer').length == 1);
```

โค้ดของคุณไม่ควรมี `div` tag ใด ๆ แล้ว

```js
assert($('div').length == 0);
```

โค้ดของคุณควรมีแท็กเปิดและแท็กปิดของ `footer` tag

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


  <footer>&copy; 2018 Camper Cat</footer>


</body>
```
