---
id: 587d78a3367417b2b2512ace
title: Push Elements Left or Right with the float Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

เครื่องมือในการกำหนดตำแหน่งอันถัดไป จะไม่ยุ่งกับ `position`แต่จะเป็นการกำหนด `float` property ของ element
Floating element จะถูกเอาออกจาก normal flow ของ document และจะถูกผลักให้ไปอยู่ `left` หรือ `right` ของ parent element ที่เก็บมันไว้
มันมักจะถูกใช้กับ `width` property เพื่อระบุช่องว่างในแนวนอนที่ floated element ต้องการ

# --instructions--

markup ที่กำหนดให้จะมีลักษณะเป็น two-column layout, ที่มี `section` และ `aside` element อยู่ข้าง ๆ กัน
จงกำหนดให้ `#left` item มี `float` เป็น `left` และ `#right` item มี `float` เป็น `right`

# --hints--

element ที่มี id `left` ควรมี `float` เป็น `left`

```js
assert($('#left').css('float') == 'left');
```

element ที่มี id `right` ควรมี`float` เป็น `right`

```js
assert($('#right').css('float') == 'right');
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
    aside, section {
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
    aside, section {
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
