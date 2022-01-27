---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cGJMqtE"
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5 ได้มีการเพิ่ม element `figure` และ `figcaption` ที่เกี่ยวข้องกันเข้ามา
โดย element สองตัวนี้จะใช้ครอบการแสดงผล (เช่น รูปภาพ แผนภูมิ และกราฟ) ไว้กับคำอธิบายการแสดงผลนั้น
การครอบ element พวกนี้ไว้ด้วยกัน จะช่วยเพิ่ม accessibility ใน 2 ด้าน คือเป็นการจับกลุ่มโค้ดให้อ่านง่ายขึ้น และเป็นการใช้ `figcaption` เพื่ออธิบาย `figure`

ส่วนการแสดงผลข้อมูลอย่างพวกกราฟต่าง ๆ เราจะใช้คำอธิบายกราฟสั้นๆ โดยอธิบายเทรนด์ของกราฟ หรือข้อสรุปของกราฟ เพื่อให้ผู้ใช้ที่มีปัญหาด้านการมองเห็นเข้าใจได้
เราจะมีแบบฝึกหัดอีกอื่น ที่จะสอนการเอาตาราง (ที่เป็นข้อมูลของกราฟ) ไว้นอกพื้นที่ของจอ (โดยใช้ CSS) เพื่อให้ผู้ใช้ screen reader เข้าใจกราฟได้ดีขึ้น

แท็ก `figcaption` ต้องอยู่ในแท็ก `figure` และก็สามารถใช้ร่วมกับ element อื่นได้
ลองดูตัวอย่าง:

```html
<figure>
  <img
    src="roundhouseDestruction.jpeg"
    alt="Photo of Camper Cat executing a roundhouse kick"
  />
  <br />
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

# --instructions--

คราวนี้นาย Camper Cat กำลังมีปัญหากับสร้างกราฟแท่ง เพื่อแสดงเวลาในแต่ละสัปดาห์ที่ใช้ไปในการฝีกการซ่อนตัว การต่อสู้ และการใช้อาวุธ
ให้เปลี่ยนแท็ก `div` เป็นแท็ก `figure` และเปลี่ยนแท็ก `p` ของคำอธิบายกราฟไปเป็นแท็ก `figcaption`

# --hints--

ต้องมีแท็ก `figure` หนึ่งอันในโค้ด

```js
assert($("figure").length == 1);
```

ต้องมีแท็ก `figcaption` หนึ่งอันในโค้ด

```js
assert($("figcaption").length == 1);
```

ต้องไม่มีแท็ก `div` ในหน้านี้แล้ว

```js
assert($("div").length == 0);
```

ต้องไม่มีแท็ก `p` ในหน้านี้แล้ว

```js
assert($("p").length == 0);
```

แท็ก `figcaption` ต้องเป็น child ของแท็ก `figure`

```js
assert($("figure").children("figcaption").length == 1);
```

ต้องมีแท็กปิดของ `figure` ด้วย

```js
assert(
  code.match(/<\/figure>/g) &&
    code.match(/<\/figure>/g).length === code.match(/<figure>/g).length
);
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
      <!-- แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น -->
      <div>
        <!-- กราฟแท่งจะอยู่ตรงนี้ -->
        <br />
        <p>
          Breakdown per week of time to spend training in stealth, combat, and
          weapons.
        </p>
      </div>
      <!-- แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น -->
    </section>
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
        <!-- กราฟแท่งจะอยู่ตรงนี้ -->
        <br />
        <figcaption>
          Breakdown per week of time to spend training in stealth, combat, and
          weapons.
        </figcaption>
      </figure>
    </section>
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
