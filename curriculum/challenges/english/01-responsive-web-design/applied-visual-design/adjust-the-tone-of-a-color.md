---
id: 587d78a4367417b2b2512ad5
title: Adjust the Tone of a Color
challengeType: 0
videoUrl: "https://scrimba.com/c/cEDJvT7"
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

การใช้ `hsl()` ใน CSS จะทำให้เราปรับโทนของสีได้ง่ายขึ้นด้วย

การผสมสีขาวกับ hue จะทำให้เกิด tint ของสีนั้น
การผสมสีดำกับ hue จะทำให้เกิด shade ของสีนั้น
และโทนนั้นเกิดจากการเติมสีเทา หรือโดยการเติมทั้งสีเทาและสีขาว

ตัวอักษร 's' และ 'l' ของ `hsl()` มาจาก saturation (ความอิ่มตัวของสี) และ lightness (ความสว่าง)
เปอร์เซ็นความอิ่มตัวของสีจะเปลี่ยนปริมาณของสีเทา และเปอร์เซ็นความสว่างจะเป็นตัวบอกว่ามีสีขาวหรือดำในสีอยู่เท่าไหร่
ซึ่งจะมีประโยชน์มากเมื่อคุณมี hue ที่คุณชอบ แต่ต้องการให้มีสีที่หลากหลายมากขึ้น

# --instructions--

ปกติแล้ว ทุก element จะมีค่าเริ่มต้นของ `background-color` เป็น `transparent` (โปร่งใส/ไม่มีสี)

ในตอนนี้ `nav` element ของพวกเรามีพื้นหลังเป็น `cyan` เพราะว่า element ข้างหลังมี `background-color` ที่เป็น `cyan`

ให้เพิ่ม `background-color` ให้กับ `nav` element เพื่อที่ `nav` จะได้มี hue เหมือนกับ `cyan` แต่มี saturation เป็น `80%` และมี brightness เป็น `25%` เพื่อเปลี่ยน tone และ shade ของของสี

# --hints--

`nav` ต้องมี `background-color` เป็นสีที่เกิดจากการปรับแต่งสี cyan โดยใช้ property `hsl()`

```js
assert(
  code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #ffffff;
  }

  nav {
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #ffffff;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
