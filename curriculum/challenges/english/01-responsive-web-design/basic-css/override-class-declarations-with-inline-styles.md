---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: "https://scrimba.com/c/cGJDRha"
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

และเราก็พิสูจน์ไปแล้วว่า การประกาศใช้ CSS ของ id จะสำคัญกว่า CSS ของ class โดยไม่สนลำดับการประกาศใน `style` element

ยังมีวิธีอื่นที่จะเขียนทับ CSS อยู่อีก
คุณยังจำ inline style ได้ไหม?

# --instructions--

ให้ใช้ inline style เพื่อทำให้ `h1` element เป็นสีขาว

ยังจำหน้าตาของ inline style ได้ไหม:

```html
<h1 style="color: green;"></h1>
```

ไม่ต้องลบคลาส `blue-text` และ `pink-text` ใน `h1` element ออก

# --hints--

`h1` element ต้องมีคลาส `pink-text`

```js
assert($("h1").hasClass("pink-text"));
```

`h1` element ต้องมีคลาส `blue-text`

```js
assert($("h1").hasClass("blue-text"));
```

`h1` element ต้องมี id เป็น `orange-text`

```js
assert($("h1").attr("id") === "orange-text");
```

ต้องใช้ inline style ใน `h1` element

```js
assert(document.querySelector("h1[style]"));
```

`h1` element ต้องมี `color` เป็น `white`

```js
assert($("h1").css("color") === "rgb(255, 255, 255)");
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">
  Hello World!
</h1>
```
