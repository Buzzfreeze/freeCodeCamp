---
id: 587d778d367417b2b2512aaa
title: Make Elements Only Visible to a Screen Reader by Using Custom CSS
challengeType: 0
videoUrl: "https://scrimba.com/c/cJ8QGkhJ"
forumTopicId: 301020
dashedName: make-elements-only-visible-to-a-screen-reader-by-using-custom-css
---

# --description--

คุณได้สังเกตหรือเปล่าว่า ในแบบฝึกหัดเรื่อง accessibility ที่ผ่านมาเรายังไม่ได้ใช้ CSS เลย?
ที่เราได้เรียนมานี้เป็นการเน้นย้ำถึงความสำคัญในการจัดวางข้อมูลต่างๆในเว็บ และการใช้แท็กที่มีความหมายตรงกับเนื้อหาของคุณ ก่อนที่เราจะสอนคุณเรื่องการออกแบบ

เราจะใช้ CSS เพิ่ม accessibility ได้โดยการ ซ่อนเนื้อหาที่ screen reader ใช้ ให้ผู้ใช้ทั่วไปมองไม่เห็นเนื้อหานั้น
เราจะใช้การแสดงผลแบบนี้ เมื่อเราต้องการแสดงข้อมูลที่ต้องใช้ตาดู (เช่น กราฟต่าง ๆ) แต่ผู้ใช้ screen reader จะต้องอ่านข้อมูลในรูปแบบอื่น (เช่น ตาราง)
เราจะใช้ CSS เพื่อย้าย element ที่เราจะให้ screen reader อ่าน ไปไว้นอกขอบเขตการมองเห็นของเบราว์เซอร์
ลองดูตัวอย่าง CSS:

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

**Note:** การใช้ CSS แบบนี้ด้านล่างนี้ จะไม่ได้ผลลัพธ์ที่เราต้องการ:

<ul>
<li><code>display: none;</code> หรือ <code>visibility: hidden;</code> จะซ่อนเนื้อหาจากผู้ใช้ทุกคน รวมถึงคนที่ใช้ screen reader ด้วย</li>
<li>การกำหนดขนาดให้เป็น 0 pixel เช่น <code>width: 0px; height: 0px;</code> จะเป็นการดึง element นั้นออกจาก normal flow ซึ่งทำให้ screen reader ไม่อ่านค่านี้เหมือนกัน</li>
</ul>

# --instructions--

คราวนี้นาย Camper Cat ได้สร้างกราฟแท่ง ในหน้า training ของเขา
และได้ลงข้อมูลไว้ในตาราง เพื่อให้ผู้ที่มีความผิดปกติทางการมองเห็นใช้
ตารางนั้นมีคลาส `sr-only` แล้ว แต่ยังไม่ได้ระบุ CSS ให้คลาสนั้น
ให้ใส่ค่าให้กับ CSS ของคลาส `sr-only` โดยให้กำหนดค่าดังนี้
`position` มีค่าเป็น `absolute`
`left` มีค่าเป็น `-10000px`
`width` และ `height` มีค่าเป็น `1px` ทั้งคู่

# --hints--

ต้องกำหนดให้ property `position` ของคลาส `sr-only` มีค่าเป็น `absolute`

```js
assert($(".sr-only").css("position") == "absolute");
```

ต้องกำหนดให้ property `left` ของคลาส `sr-only` มีค่าเป็น `-10000px`

```js
assert($(".sr-only").css("left") == "-10000px");
```

ต้องกำหนดให้ property `width` ของคลาส `sr-only` มีค่าเป็น `1` pixel

```js
assert(code.match(/width:\s*?1px/gi));
```

ต้องกำหนดให้ property `height` ของคลาส `sr-only` มีค่าเป็น `1` pixel

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
      <figcaption>
        Breakdown per week of time to spend training in stealth, combat, and
        weapons.
      </figcaption>
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
      <h3>Goodbye, world: 5 proven ways to knock out an opponent</h3>
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
      <figcaption>
        Breakdown per week of time to spend training in stealth, combat, and
        weapons.
      </figcaption>
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
      <h3>Goodbye, world: 5 proven ways to knock out an opponent</h3>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
