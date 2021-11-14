---
id: 587d78a8367417b2b2512ae3
title: Animate Elements Continually Using an Infinite Animation Count
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

ในแบบฝึกหัดที่แล้วได้กล่าวถึงวิธีการใช้ animation properties บางตัวใน `@keyframes` rule
animation property อีกอันหนึ่งก็คือ `animation-iteration-count` ซึ่งจะทำให้คุณสามารถควบคุมจำนวนครั้งที่คุณต้องการให้มาวนลูปได้
นี่คือตัวอย่าง:

```css
animation-iteration-count: 3;
```

ในกรณีนี้ animation จะหยุดเมื่อมันได้วนทำไปครบสามครั้ง แต่มันก็เป็นไปได้ที่จะทำให้ animation วนลูปอย่างต่อเนื่องโดยการกำหนดค่าให้เป็น `infinite`

# --instructions--

เพื่อที่จะทำให้บอลที่กระดอนอยู่วนลูปเด้งไปมาตลอดเวลา, จงเปลี่ยน `animation-iteration-count` property ให้เป็น `infinite`

# --hints--

`animation-iteration-count` property ควรมีค่าเป็น `infinite`.

```js
assert($('#ball').css('animation-iteration-count') == 'infinite');
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
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
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
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
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
