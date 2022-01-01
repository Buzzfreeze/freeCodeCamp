---
id: 587d781c367417b2b2512abf
title: Decrease the Opacity of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7aKqu4'
forumTopicId: 301055
dashedName: decrease-the-opacity-of-an-element
---

# --description--

`opacity` property ใน CSS ถูกใช้เพื่อปรับ opacity, หรือในทางตรงข้ามก็คือทำให้ item โปร่งแสงนั่นเอง

<blockquote>A value of 1 is opaque, which isn't transparent at all.<br>A value of 0.5 is half see-through.<br>A value of 0 is completely transparent.</blockquote>

ค่าที่ถูกกำหนดให้ จะถูกใช้กับ element ทั้งอันไม่ว่ามันจะเป็นรูปที่โปร่งแสงอยู่แล้วหรือสีพื้นหน้าและพื้นหลังของกล่องข้อความ

# --instructions--

จงกำหนดให้ `opacity` ของ anchor tags มีค่า 0.7 โดยใช้ `links` class เพื่อเลือกมัน

# --hints--

คุณควรกำหนดให้ `opacity` property ของ anchor tags มีค่าเท่ากับ 0.7 โดยใส่ที่ใช้ `links` class

```js
assert(/\.links\s*{([\s\S]*?;)*\s*opacity\s*:\s*0*\.70*\s*(;[\s\S]*?|\s*)}/.test($('style').text()));
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
          >Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at
          <strong>Stanford University</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br /><br />
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
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
    opacity: 0.7;
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
          >Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at
          <strong>Stanford University</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br /><br />
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
