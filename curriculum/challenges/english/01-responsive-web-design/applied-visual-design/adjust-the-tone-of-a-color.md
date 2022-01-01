---
id: 587d78a4367417b2b2512ad5
title: Adjust the Tone of a Color
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

ตัวเลือก `hsl()` ใน CSS ยังทำให้มันง่ายที่จะปรับโทนของสี
การผสมสีขาวด้วย pure hue จะสร้าง tint (การย้อมสี) ของ color และการเพิ่มสีดำจะทำให้เกิด shade
ในอีกแง่หนึ่ง โทนนั้นเกิดจากการเติมสีเทาหรือโดยการเติมทั้ง tint และ shade
จำไว้ว่า 's' และ 'l' ของ `hsl()` มาจาก saturation และ lightness
เปอร์เซ็นความอิ่มตัวของสีจะเปลี่ยนปริมาณของสีเทาและเปอร์เซ็นความสว่างจะเป็นตัวบอกว่ามีสีขาวหรือดำในสีอยู่เท่าไหร่
ซึ่งมันมีประโยชน์มากเมื่อคุณมี base hue ที่คุณชอบ แต่ต้องการให้มีสีที่หลากหลายขึ้น

# --instructions--

ทุก element ที่ค่าเริ่มต้นของ `background-color` เป็น `transparent`
ในตอนนี้ `nav` element ของพวกเรามีพื้นหลังเป็น `cyan` เพราะว่า element ข้างหลังมันมี `background-color` ที่เป็น `cyan`
จงเพิ่ม `background-color` ให้กับ `nav` element เพื่อที่มันจะได้มี`cyan` hue ที่เหมือนกัน แต่มีค่าความอิ่มตัวเท่ากับ `80%` และมีความสว่างเท่ากับ `25%` เพื่อเปลี่ยน tone และ shade ของมัน

# --hints--

`nav` element ควรมี `background-color` อันหนึ่งที่เป็น cyan ที่ถูกปรับเปลี่ยน tone โดยใช้ `hsl()` property.

```js
assert(code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi));
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
