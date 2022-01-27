---
id: 587d78a7367417b2b2512ae2
title: Create Visual Direction by Fading an Element from Left to Right
challengeType: 0
videoUrl: "https://scrimba.com/c/cGJqqAE"
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

ในแบบฝึกหัดนี้ คุณจะได้เปลี่ยน `opacity` ของ element ที่กำลังเคลื่อนไหว เพื่อที่ element นี้จะได้ค่อย ๆ หายไปเมื่อเคลื่อนไปถึงด้านขวาของจอ

ลองดูใน animation จะเห็นว่า element กลม ๆ ที่มีพื้นหลังเป็น gradient จะขยับไปด้านขวา ตอน keyframe อยู่ที่ 50% ใน `@keyframes` rule

# --instructions--

ให้แก้ไข animation ของ element ที่มี id เป็น `ball`
โดยการเพิ่ม property `opacity` และกำหนดค่าให้เป็น 0.1 ที่ `50%` เพื่อที่ element จะได้ค่อย ๆ จางหายไปเมื่อเคลื่อนไปทางขวา

# --hints--

`keyframes` rule ต้องกำหนดให้ `opacity` เป็น 0.1 ที่ 50%

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
    }
  }
</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
