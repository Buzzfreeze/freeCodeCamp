---
id: 587d78a7367417b2b2512ae0
title: Use CSS Animation to Change the Hover State of a Button
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

คุรสามารถใช้ CSS `@keyframes` เพื่อเปลี่ยนสีของปุ่มเมื่อมันอยู่ใน hover state

นี่คือตัวอย่างของการเปลี่ยนความหว้างของภาพเมื่อมันถูก hover:

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

จงจำไว้ว่า `ms` มาจากคำว่า  milliseconds

จงใช้ CSS `@keyframes` เพื่อเปลี่ยน `background-color` ของ `button` element ให้มันเป็น `#4791d0` เมื่อผู้ใช้ hovers มัน
`@keyframes` rule ควรได้รับค่า `100%`.

# --hints--

@keyframes rule ควรใช้สีพื้นหลังของ  `animation-name` 

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

There should be one rule under `@keyframes` that changes the `background-color` to `#4791d0` at 100%.

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
    background-color: #0F5897;
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
    background-color: #0F5897;
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
