---
id: 587d781b367417b2b2512abe
title: Add a box-shadow to a Card-like Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cvVZdUd"
forumTopicId: 301031
dashedName: add-a-box-shadow-to-a-card-like-element
---

# --description--

เราจะใช้ property `box-shadow` เพื่อเพิ่มเงาให้กับ element

property `box-shadow` จะรับค่าตามนี้

<ul>
  <li><code>offset-x</code> (ระยะห่างของเงาถึง element ในแนวนอน),</li>
  <li><code>offset-y</code> (ระยะห่างของเงาถึง element ในแนวตั้ง),</li>
  <li><code>blur-radius</code>,</li>
  <li><code>spread-radius</code> และ</li>
  <li><code>color</code>, ตามลำดับนี้</li>
</ul>

ค่าของ `blur-radius` และ `spread-radius` นั้นจะใส่หรือไม่ใส่ก็ได้

เราสามารถสร้าง box-shadow หลายๆตัวได้ ได้โดยการใช้คอมม่า (`,`) เพื่อแยก property แต่ละตัวของ `box-shadow` ออกจากกัน

ตัวอย่างด้านล่างนี้ จะใช้ CSS เพื่อสร้างเงาหลายๆอันพร้อมกับ โดยเงาที่สร้างนี้จะมีความเบลอเล็กน้อย และมีสีเป็นสีดำที่เกือบโปร่งใส:

```css
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
```

# --instructions--

ตอนนี้ ในโค้ดมี element ที่มี id เป็น `thumbnail`
ให้ใช้ CSS ตามตัวอย่างข้างบน เพื่อสร้าง `box-shadow` ให้กับ element ที่มี id เป็น `thumbnail` โดยใช้ CSS seletor

# --hints--

`thumbnail` ต้องมี property `box-shadow`

```js
assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
```

ต้องกำหนดค่าของ `box-shadow` ตาม CSS ที่เรามีให้ด้านบน

```js
assert(
  code.match(
    /box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }

  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr />
      <p>
        <em
          >Google was founded by Larry Page and Sergey Brin while they were
          <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      ><br /><br />
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr />
      <p>
        <em
          >Google was founded by Larry Page and Sergey Brin while they were
          <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a
        href="https://en.wikipedia.org/wiki/Larry_Page"
        target="_blank"
        class="links"
        >Larry Page</a
      ><br /><br />
      <a
        href="https://en.wikipedia.org/wiki/Sergey_Brin"
        target="_blank"
        class="links"
        >Sergey Brin</a
      >
    </div>
  </div>
</div>
```
