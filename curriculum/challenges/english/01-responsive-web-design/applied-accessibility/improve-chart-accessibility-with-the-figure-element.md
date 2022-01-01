---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5 ได้มีการเพิ่ม `figure` element และ `figcaption` ที่เกี่ยวข้องกันเข้ามา
items พวกนี้จะเก็บพวก visual representation (เช่น รูปภาพ แผนภูมิ และกราฟ) ไว้ด้วยกันกับ caption ของมัน
การจับ element พวกนี้มาอยู่ด้วยกันช่วยเพิ่มความสามารถในการเข้าถึงใน 2 แง่ คือ การจับกลุ่มเนื้อหาที่ความเกี่ยวข้องในแง่ของทางภาษา และการทำให้ text alternative ช่วยอธิบาย `figure`

สำหรับ data visualizations อย่างเช่น พวกกราฟต่าง ๆ
caption จะถูกใช้เพื่อโน้ตสั้น ๆ เกี่ยวกับแนวโน้มหรือข้อสรุปให้กับผู้ใช้ที่มีปัยหาด้านการมองเห็น
จะมีแบบฝึกหัดอีกอันจะผู้ถึงเรื่องวิธีการย้ายกราฟที่อยู่ในรูปของตารางของ data off-screen (โดยใช้ CSS) เพื่อผุู้ใช้ screen reader

นี่คือตัวอย่าง - จงจำไว้ว่า `figcaption` อยู่ข้างใน `figure` tags และสามารถใช้คู่กับ elements อื่นได้:

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick" />
  <br />
  <figcaption>Master Camper Cat demonstrates proper form of a roundhouse kick.</figcaption>
</figure>
```

# --instructions--

ตัวอย่าง Camper Cat กำลังมีปัญหากับสร้างกราฟ stacked bar เพื่อแสดงเวลาในแต่ละสัปดาห์ที่ถูกใช้ในการฝึก stealth, combat, and weapons
จงช่วยเขาจัดโครงสร้างเพจของเขาให้ดีขึ้นโดยการเปลี่ยน `div` tag เป็น`figure` tag, และจงเปลี่ยน `p` tag ที่เก็บ caption ไปเป็น `figcaption` tag.

# --hints--

โค้ดของคุณควรมี `figure` tag 1 อัน

```js
assert($('figure').length == 1);
```

มันควรมี `figcaption` tag อันหนึ่ง

```js
assert($('figcaption').length == 1);
```

มันไม่ควรมี `div` tag ในหน้านี้แล้ว

```js
assert($('div').length == 0);
```

มันไม่ควรมี `p` tag ในหน้านี้แล้ว

```js
assert($('p').length == 0);
```

`figcaption` should ของจะเป็น child ของ `figure` tag.

```js
assert($('figure').children('figcaption').length == 1);
```

`figure` element ควรมีแท็กปิด

```js
assert(code.match(/<\/figure>/g) && code.match(/<\/figure>/g).length === code.match(/<figure>/g).length);
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
    <section>
      <!-- Only change code below this line -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br />
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Only change code above this line -->
    </section>
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
    <section>
      <figure>
        <!-- Stacked bar chart will go here -->
        <br />
        <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
      </figure>
    </section>
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
