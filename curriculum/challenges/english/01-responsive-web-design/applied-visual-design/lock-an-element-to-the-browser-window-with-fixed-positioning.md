---
id: 587d781e367417b2b2512acc
title: Lock an Element to the Browser Window with Fixed Positioning
challengeType: 0
videoUrl: "https://scrimba.com/c/c2MDNUR"
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

layout แบบต่อมาของ CSS คือ position แบบ `fixed`

position แบบนี้ก็เป็นการกำหนดตำแหน่งแบบ absolute ประเภทหนึ่ง โดยจะยึดตำแหน่งของ element ไว้กับหน้าต่างของเบราว์เซอร์

position แบบนี้ก็ต้องใช้กับ CSS offset property และเมื่อใช้ position แบบนี้ element นั้นก็จะหลุดออกจาก normal flow ด้วยเช่นกัน แล้วจะทำให้ element อื่นที่อยู่รอบๆ ก็จะมีพฤติกรรมเหมือนกับว่าไม่มี element นี้อยู่

ความแตกต่างที่สำคัญระหว่าง position แบบ `fixed` และ `absolute` คือการที่ element ที่มี fixed position จะไม่ขยับเมื่อผู้ใช้เลื่อนหน้าเว็บ

# --instructions--

ใน code จะมีแถบเมนู (navigation bar) ทีมี id เป็น `navbar`
ให้เปลี่ยน `position` ของแถบเมนูนี้ให้เป็น `fixed` และขยับลงจาก `top` 0 px และขยับออกจาก `left` 0 px
เมื่อเพิ่มโค้ดแล้ว ให้ลองเลื่อนหน้าต่างขึ้นลง คุณจะเห็นว่าแถบเมนูจะยังอยู่ที่เดิม

# --hints--

`#navbar` ต้องมีค่าของ `position` เป็น `fixed`

```js
assert($("#navbar").css("position") == "fixed");
```

`#navbar` ต้องมีค่าของ property `top` เป็น 0 pixel

```js
assert($("#navbar").css("top") == "0px");
```

`#navbar` ต้องมีค่าของ property `left` เป็น 0 pixel

```js
assert($("#navbar").css("left") == "0px");
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
