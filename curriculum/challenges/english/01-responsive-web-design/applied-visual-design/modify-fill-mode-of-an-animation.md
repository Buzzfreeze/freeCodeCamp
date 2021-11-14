---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

นั่นดีมาก! 
แต่มันก็ยังดูไม่ค่อยถูกต้องซักเท่าไหร่
สังเกตว่า animation จะถูกรีเซ็ตหลังจากผ่านไป `500ms` ซึ่งทำให้ปุ่มนั้นกลับไปมีสีเดิม
คุณต้องการให้ปุ่มยังคงสีที่ถูกไฮไลต์เอาไว้

สิ่งนี้สามารถทำได้โดยการกำหนด `animation-fill-mode` property ให้มีค่า `forwards`
`animation-fill-mode` จะระบุสไตล์ที่จะใช้กับ element เมื่อ animation นั้นจบแล้ว
คุณสามารถกำหนดให้มันเป็นแบบนี้:

```css
animation-fill-mode: forwards;
```

# --instructions--

จงกำหนดให้ `animation-fill-mode` property ของ `button:hover` มีค่าเป็น `forwards` เพื่อที่ปุ่มจะได้ถูกไฮไลต์แบบนั้นเมื่อผู้ใช้ hovers มัน

# --hints--

`button:hover` ควรมี `animation-fill-mode` property ที่มีค่าเป็น `forwards`

```js
assert(
  code.match(
    /button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi
  ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi
    ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi
    )
);
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
    /* Only change code below this line */

    /* Only change code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
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
    animation-fill-mode: forwards;
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
