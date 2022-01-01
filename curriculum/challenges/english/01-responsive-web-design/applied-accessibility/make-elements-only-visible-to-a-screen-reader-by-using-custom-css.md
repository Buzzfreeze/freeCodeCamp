---
id: 587d778d367417b2b2512aaa
title: Make Elements Only Visible to a Screen Reader by Using Custom CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
dashedName: make-elements-only-visible-to-a-screen-reader-by-using-custom-css
---

# --description--

คุณได้สังเกตหรือเปล่าว่า แบบฝึกหัดที่เกี่ยวกับการความสามรถในการเข้าถึงทั้งหมดที่ผ่านมายังไม่มีการใช้ CSS เลย?
นี่แสดงให้เห็นว่าความสำคัญของการใช้ outline เอกสารที่ถูกต้องตามหลักโลจิก และ แท็กที่มีความหมาย กับเนื้อหาของคุณก่อนการกล่าวถึงในมุมมองของการออกแบบ

อย่างไรก็ตาม เวทมนตร์ของ CSS สามารถช่วยเรื่องความสามารถในการเข้าถึงหน้าต่าง ๆ ของคุณได้เช่นกัน เมื่อคุณต้องการที่จะซ่อนเนื้อหาที่จำเป็นเฉพาะกับ screen reader จากการมองเห็น
สิ่งนี้เกิดขึ้นเมื่อข้อมูลอยู่ในรูปแบบที่สามารถรับรู้ได้ด้วยสายตา (ยกตัวอย่างเช่น กราฟต่าง ๆ) แต่ผู้ใช้ screen reader ต้องการการแสดงผลแบบอื่น (ยกตัวอย่างเช่น ตาราง) เพื่อเข้าถึงข้อมูล
CSS ถูกใช้เพื่อจัดวาง element ที่ถูกใช้โดย screen reader เพียงเท่านั้นให้อยู่นอกจากขอบเขตการมองเห็นบนหน้าต่างของ browser
นี่คือตัวอย่างของกฎของ CSS ที่ทำให้เกิดสิ่งนี้ :

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**Note:** การใช้ CSS approaches แบบนี้จะให้ผลคนละแบบ :

<ul>
<li><code>display: none;</code> or <code>visibility: hidden;</code> hides content for everyone, including screen reader users</li>
<li>Zero values for pixel sizes, such as <code>width: 0px; height: 0px;</code> removes that element from the flow of your document, meaning screen readers will ignore it</li>
</ul>

# --instructions--

ตัวอย่าง Camper Cat ได้สร้างกราฟ stacked bar chart สุดเจ๋งออกมาเพื่อหน้า training ของเข้า, และได้ใส่ข้อมูลเข้าไปในตารางเพื่อให้ผู้ที่มีความผิดปกติทางการมองเห็น
ตารางนั้นได้มี `sr-only` class อยู่ 1 อันแล้ว, แต่มันยังไม่ได้ทำตามกฎของ CSS อยู่ดี
จงใส่ค่า `absolute` ให้กับ `position` และกำหนดให้ `left` มีค่า `-10000px` , และให้ `width` และ `height` มีค่า `1px` ทั้งคู่

# --hints--

คุณควรกำหนดให้ `position` property ของ `sr-only` class คุณควรกำหนดให้ `absolute`.

```js
assert($('.sr-only').css('position') == 'absolute');
```

คุณควรกำหนดให้ `left` property ของ `sr-only` class มีค่าเท่ากับ `-10000px`

```js
assert($('.sr-only').css('left') == '-10000px');
```

คุณควรกำหนดให้ `width` property ของ `sr-only` class มีค่าเท่ากับ `1` pixel.

```js
assert(code.match(/width:\s*?1px/gi));
```

คุณควรกำหนดให้ `height` property ของ `sr-only` class มีค่าเท่ากับ `1` pixel

```js
assert(code.match(/height:\s*?1px/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    .sr-only {
      position: ;
      left: ;
      width: ;
      height: ;
      top: auto;
      overflow: hidden;
    }
  </style>
</head>
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
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>
        Hours of Weekly Training in Stealth, Combat, and Weapons
      </caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
    .sr-only {
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      top: auto;
      overflow: hidden;
    }
  </style>
</head>
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
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>
        Hours of Weekly Training in Stealth, Combat, and Weapons
      </caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
