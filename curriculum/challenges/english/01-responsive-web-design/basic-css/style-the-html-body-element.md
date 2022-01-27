---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

ตอนนี้ เรามาพูดถึงเรื่อง CSS inheritance กันเถอะ

HTML ทุกหน้าจะมี `body` element หนึ่งตัว

# --instructions--

เราจะให้คุณพิสูจน์ว่า `body` element มีอยู่จริง โดยให้คุณกำหนดให้ `background-color` ของ `body` เป็นสีดำ

ให้เพิ่มโค้ดนี้ใน `style` element:

```css
body {
  background-color: black;
}
```

# --hints--

`body` element ต้องมี `background-color` เป็น `black`

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

CSS rule ของคุณต้องใช้ `{` และ `}` ให้ถูกต้อง

```js
assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));
```

CSS rule ต้องลงท้ายด้วย semi-colon

```js
assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));
```

# --seed--

## --seed-contents--

```html
<style></style>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
  }
</style>
```
