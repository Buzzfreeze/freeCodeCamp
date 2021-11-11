---
id: 5a9d7295424fe3d0e10cad14
title: Inherit CSS Variables
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLZZhZ'
forumTopicId: 301088
dashedName: inherit-css-variables
---

# --description--

เมื่อคุณสร้างตัวแปร มันเป็นไปได้ที่คุณจะใช้ใน selector ที่คุณได้สร้างมันขึ้นมา
มันยังเป็นไปได้ที่ตัวแปรนี้จะถูกใช้กับลูกหลานของ selector นั้น
ที่เป็นเช่นนี้เพราะตัวแปร CSS จะได้ถูกถ่ายถอด เหมือนกับ property ทั่ว ๆ ไป

เพื่อทำให้การถ่ายถอดแบบนี้เกิดประโยชน์ ตัวแปร CSS มันจะถูกประกาศใน <dfn>:root</dfn> element.

`:root` เป็น <dfn>pseudo-class</dfn> selector ที่จะจับคู่กับ root element ของเอกสาร หรือปกติก็คือ `html` element
การสร้างตัแปรไว้ที่ `:root`, จะทำให้พวกมันสามารถใช้งานได้ทุกที่และสามารถเข้าถึงได้โดย selector ตัวอื่นๆ ใน style sheet.

# --instructions--

จงสร้างตัวแปรที่ชื่อ`--penguin-belly` ไว้ใน `:root` selector และกำหนดให้มันมีค่าเป็น `pink`
คุณจะเห็นได้ว่าตัวแปรตัวนั้นถูกถ่ายถอดและ child element ทั้งหมดที่ใช้มันจะมีสีชมพู

# --hints--

ตัวแปร `--penguin-belly` ควรถูกประกาศไว้ใน `:root` และถูกกำหนดค่าให้เป็น `pink`

```js
assert(
  code.match(/:root\s*?{[\s\S]*--penguin-belly\s*?:\s*?pink\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    /* Only change code below this line */

    /* Only change code above this line */
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    --penguin-skin: gray;
    --penguin-beak: orange;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

# --solutions--

```html
<style>:root {--penguin-belly: pink;}</style>
```
