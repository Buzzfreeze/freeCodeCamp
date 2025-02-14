---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

คุณสามารถใช้ CSS `@keyframes` เพื่อเปลี่ยนสีของปุ่มเมื่อเอาเมาส์ไปชี้ได้ด้วย

ลองดูตัวอย่างการเปลี่ยนความกว้างของภาพ เมื่อเอาเมาส์ไปชี้:

```html
<style>
  img {
    width: 30px;
  }
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />
```

# --instructions--

โดย `ms` ย่อมาจาก millisecond (1/1000 วินาที)

ให้ใช้ CSS `@keyframes` เพื่อเปลี่ยน `background-color` ของ `button` element ให้เป็น `#4791d0` เมื่อผู้ใช้นำเมาส์ไปชี้
`@keyframes` rule ต้องมีค่าแค่ที่ `100%` เท่านั้น

# --hints--

@keyframes rule ต้องใช้ `animation-name` ที่ชื่อ `background-color`

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

ใน `@keyframes` ต้องมี rule เดียวเท่านั้น โดยอยู่ที่ 100% ซึ่งจะเปลี่ยนค่าของ `background-color` เป็น `#4791d0`

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0f5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }
</style>

<button>Register</button>
```

# --solutions--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0f5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }

  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
