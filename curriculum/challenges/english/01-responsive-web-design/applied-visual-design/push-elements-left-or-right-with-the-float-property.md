---
id: 587d78a3367417b2b2512ace
title: Push Elements Left or Right with the float Property
challengeType: 0
videoUrl: "https://scrimba.com/c/c2MDqu2"
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

เครื่องมือในการกำหนดตำแหน่งอันถัดไป จะไม่ใช้ `position` แล้ว แต่จะให้ property `float` ของ element แทน

element ที่ `float` จะไม่ได้อยู่ใน normal flow ของเว็บแล้ว และจะถูกขยับไปอยู่ `left` หรือ `right` ของ parent element

โดยปกติ property `float` มักถูกใช้คู่กับ `width` เพื่อระบุว่า element นี้จะมีความกว้างเท่าไหร่

# --instructions--

โค้ดที่เรามาให้นี้ เมื่อแก้เสร็จแล้ว จะเป็นคอลัมน์ 2 คอลัมน์ ที่มี element `section` และ `aside` อยู่ข้าง ๆ กัน

ให้กำหนด `#left` ให้มีค่าของ `float` เป็น `left` และให้กำหนด `#right` ให้มีค่าของ `float` เป็น `right`

# --hints--

element ที่มี id เป็น `left` ต้องมี `float` เป็น `left`

```js
assert($("#left").css("float") == "left");
```

element ที่มี id เป็น `right` ต้องมี `float` เป็น `right`

```js
assert($("#right").css("float") == "right");
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    #left {
      width: 50%;
    }
    #right {
      width: 40%;
    }
    aside,
    section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

# --solutions--

```html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside,
    section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```
