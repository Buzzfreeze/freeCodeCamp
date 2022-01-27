---
id: 587d781c367417b2b2512abf
title: Decrease the Opacity of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7aKqu4'
forumTopicId: 301055
dashedName: decrease-the-opacity-of-an-element
---

# --description--

เราจะใช้ property `opacity` ใน CSS เพื่อปรับความโปร่งใสของ element นั้น

<blockquote>โดยถ้ามีค่าเป็น 1 หมายความว่า element นั้นจะทึบ<br>ถ้ามีค่าเป็น 0.5 เราก็จะมองทะลุ element นั้นได้บางส่วน<br>ส่วนถ้าเป็น 0 เราจะมองทะลุ element นั้นได้เลย</blockquote>

ซึ่งถ้าเรากำหนดค่าของ `opacity` ให้กับ element แล้ว ค่านี้จะส่งผลกับ element นั้นทั้งก้อน ไม่ว่าจะเป็นรูปที่มีความโปร่งแสงอยู่แล้ว หรือสีพื้นหน้าและพื้นหลังของข้อความก็ตาม

# --instructions--

ให้กำหนดค่า property `opacity` ของแท็ก `a` ให้มีค่าเป็น 0.7 โดยใช้ CSS class selector เพื่อเลือกคลาส `links`

# --hints--

property `opacity` ของแท็ก `a` ต้องมีค่าเป็น 0.7 โดยเป็นการเปลี่ยนค่าตามคลาส `links`

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
