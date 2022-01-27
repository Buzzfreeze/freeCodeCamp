---
id: 587d781b367417b2b2512aba
title: Use the s Tag to Strikethrough Text
challengeType: 0
videoUrl: ""
forumTopicId: 301079
dashedName: use-the-s-tag-to-strikethrough-text
---

# --description--

เราสามารถใช้แท็ก `s` เพื่อสร้างขีดกลางข้อความได้
ซึ่งจะเป็นเหมือนการขีดฆ่าข้อความ เพื่อสื่อว่าข้อความนั้นจะไม่ใช้แล้ว
เมื่อเราใช้แท็ก `s` เบราว์เซอร์จะทำให้ CSS ของ element นั้นเป็น `text-decoration: line-through;`

# --instructions--

ให้ใช้แท็ก `s` ครอบคำว่า `Google` ที่อยู่ในแท็ก `h4`
และให้เพิ่มคำว่า `Alphabet` ไว้หลังคำว่า `Google` โดยไม่ต้องขีดฆ่า

# --hints--

ต้องใช้แท็ก `s` ในโค้ด

```js
assert($("s").length == 1);
```

ข้อความในแท็ก `s` ต้องเป็นคำว่า `Google` โดยอยู่ในแท็ก `h4` อีกทีหนึ่ง
และแท็ก `s` ต้องไม่ครอบคำว่า `Alphabet` ไปด้วย

```js
assert(
  $("h4 > s")
    .text()
    .match(/Google/gi) &&
    !$("h4 > s")
      .text()
      .match(/Alphabet/gi)
);
```

ต้องมีคำว่า `Alphabet` อยู่ในแท็ก `h4` โดยไม่ต้องขีดฆ่าคำว่า `Alphabet`

```js
assert(
  $("h4")
    .html()
    .match(/Alphabet/gi)
);
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
      <h4><s>Google</s> Alphabet</h4>
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
