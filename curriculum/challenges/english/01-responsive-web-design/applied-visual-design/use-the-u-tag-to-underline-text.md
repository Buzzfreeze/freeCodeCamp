---
id: 587d781a367417b2b2512ab8
title: Use the u Tag to Underline Text
challengeType: 0
videoUrl: "https://scrimba.com/c/cN6aQCL"
forumTopicId: 301082
dashedName: use-the-u-tag-to-underline-text
---

# --description--

เราสามารถใช้แท็ก `u` เพื่อขีดเส้นใต้ข้อความได้

แท็กนี้มักใช้เพื่อแสดงให้เห็นว่าข้อความนั้นมีความสำคัญ
เมื่อเราใช้แท็ก `u` เบราว์เซอร์จะทำให้ CSS ของ element นั้นเป็น `text-decoration: underline;`

# --instructions--

ให้ใช้แท็ก `u` ครอบข้อความ `Ph.D. students`

**Note:** ให้ระวังในการใช้แท็ก `u` เพราะบางครั้งอาจทำให้ผู้ใช้สับสนได้ว่าเป็นลิงก์หรือว่าเป็นแค่การเน้นข้อความ
เพราะว่าข้อความในแท็ก `a` ก็จะถูกขีดเส้นใต้เหมือนกัน

# --hints--

ต้องใช้แท็ก `u` ในโค้ด

```js
assert($("u").length === 1);
```

ในแท็ก `u` ต้องมีข้อความ `Ph.D. students` อยู่ข้างใน

```js
assert($("u").text() === "Ph.D. students");
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
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
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>
        Google was founded by Larry Page and Sergey Brin while they were Ph.D.
        students at <strong>Stanford University</strong>.
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
    height: 25px;
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
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>
        Google was founded by Larry Page and Sergey Brin while they were
        <u>Ph.D. students</u> at <strong>Stanford University</strong>.
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
