---
id: 587d78a7367417b2b2512ae2
title: Create Visual Direction by Fading an Element from Left to Right
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

สำหรับแบบฝึกหัดนี้ คุณจะได้เปลี่ยน `opacity` ของ element ที่ถูก animate เพื่อที่มันจะได้ค่อย ๆ หายไปเมื่อมันถึงด้านขวาของจอ 

ที่ animation ที่ได้แสดงออกมา element กลม ๆ ที่มาพร้อมกับพื้นหลัง gradient จะย้ายไปที่ด้านขวาที่ 50% mark ของ animation ตาม `@keyframes` rule

# --instructions--

จงชี้ไปที่ element ที่มีไอดีเป้น `ball` และเพิ่ม `opacity` property ที่ถูกกำหนดให้เป็น 0.1 ที่ `50%`, เพื่อที่ element จะได้ค่อย ๆ หายไปเมื่อมันเคลื่อนไปทางขวา 

# --hints--

`keyframes` rule สำหรับการจางควรจะกำหนดให้ `opacity` property อยู่ที่ 0.1 ตรง 50%

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
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
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
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
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
