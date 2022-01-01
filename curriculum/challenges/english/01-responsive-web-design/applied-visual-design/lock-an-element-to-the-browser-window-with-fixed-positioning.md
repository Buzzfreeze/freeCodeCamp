---
id: 587d781e367417b2b2512acc
title: Lock an Element to the Browser Window with Fixed Positioning
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

layout scheme อันต่อมาที่ CSS มีให้ใช้คือ `fixed` position ซึ่งเป็นการกำหนดตำแหน่งแบบ absolute ประเภทหนึ่ง โดยจะยึด element ไว้กับหน้าต่างของ browser
เช่นเดียวกับการกำหนดตำแหน่งแบบ absolute, มันจะถูกใช้พร้อมกับ CSS offset properties และจะเอา element นั้นออกจาก normal flow ของ document
item อื่น ๆ ซึ่งจำเป็นต้องใช้การปรับแต่ง layout

ความต่างสำคัญระหว่าง `fixed` และ `absolute` positions คือการที่ element ที่มี fixed position จะไม่ขยับเมื่อผู้ใช้ scroll หน้าเว็บ

# --instructions--

navigation bar ใน code มันถูกติดป้ายไว้ด้วย id ที่ชื่อ `navbar`
จงเปลี่ยน `position` ของมันให้เป็น `fixed` และเลื่อนมันลงมาจาก `top` 0 px และ `left` 0 px
หลังจากที่คุณได้เพิ่มโค้ดแล้ว จงลอง scroll หน้าต่าง preview เพื่อดูว่า navigation ยังอยู่ในตำแหน่งเดิม

# --hints--

`#navbar` element ควรมี `position` เป็น `fixed`

```js
assert($('#navbar').css('position') == 'fixed');
```

คุณควรใช้ `top` CSS offset เท่ากับ 0 pixels กับ `#navbar` element.

```js
assert($('#navbar').css('top') == '0px');
```

คุณควรใช้ `left` CSS offset เท่ากับ 0 pixels กับ `#navbar` element.

```js
assert($('#navbar').css('left') == '0px');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    width: 100%;
    background-color: #767676;
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
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

# --solutions--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
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
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```
