---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

ตอนนี้ เรามาพูดถึง CSS inheritance กันเถอะ

HTML page ทุกหน้ามี `body` element อันหนึ่ง

# --instructions--

เราสามารถพิสูจน์ได้ว่า `body` element อยู่ตรงหน้าเราโดยการกำหนดให้มันมี `background-color` สีดำ

เราสามารถทำเช่นนี้ได้โดยการเพิ่มโค้ดต่อไปนี้ให้กับ `style` element:

```css
body {
  background-color: black;
}
```

# --hints--

`body` element ควรมี `background-color` เป็นสีดำ

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

CSS rule ควรจะถูกจะมีทั้ง curly brackets เปิดและปิด

```js
assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));
```

CSS rule ด้วยลงท้ายด้วย semi-colon

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
