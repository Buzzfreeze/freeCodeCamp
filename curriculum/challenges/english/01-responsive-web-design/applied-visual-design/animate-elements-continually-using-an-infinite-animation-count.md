---
id: 587d78a8367417b2b2512ae3
title: Animate Elements Continually Using an Infinite Animation Count
challengeType: 0
videoUrl: "https://scrimba.com/c/cVJDVfq"
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

ในแบบฝึกหัดที่ผ่านมา เราได้พูดถึงวิธีการใช้ animation property บางตัวใน `@keyframes` rule ไปแล้ว
animation property อีกตัวหนึ่งที่ควรรู้จักคือ `animation-iteration-count` ซึ่งจะทำให้คุณสามารถควบคุมจำนวนครั้งที่คุณต้องการให้วนลูปได้

ลองดูตัวอย่างการใช้งาน:

```css
animation-iteration-count: 3;
```

ในกรณีนี้ animation จะทำงานสามครั้งจากนั้นก็จะหยุด แต่เราก็ทำให้ animation แสดงไปเรื่อยๆได้ โดยการตั้งค่าเป็น `infinite`

# --instructions--

ให้ทำให้บอลเด้งไปเด้งมาตลอดเวลา โดยการเปลี่ยน property `animation-iteration-count` ให้เป็น `infinite`

# --hints--

property `animation-iteration-count` ควรมีค่าเป็น `infinite`

```js
assert($("#ball").css("animation-iteration-count") == "infinite");
```

# --seed--

## --seed-contents--

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```
