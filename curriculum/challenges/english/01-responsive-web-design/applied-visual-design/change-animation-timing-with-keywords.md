---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

สำหรับ CSS animations, `animation-timing-function` property จะควบคุมความเร็วที่ element ที่ถูก animate จะเปลี่ยนไปในแต่ละช่วงของ animation
ถ้า animation เป็นรถคันหนึ่งที่กำลังวิ่งจากจุด A ไปจุด B ในเวลาที่กำหนด (`animation-duration`), `animation-timing-function` จะบอกความเร่งและความหน่วงของการที่รถวิ่งตลอดเส้นทาง

มันมีหลายคีย์เวิร์ดที่สามารถใช้ได้
ยกตัวอย่างเช่น ค่าเริ่มต้นเป้น `ease`, ซึ่งจะเป็นการเริ่มต้นช้า ๆ และค่อย ๆ เพิ่มความเร็วจนไปถึงตรงกลาง ก่อนที่จะลดความเร็วลงอีกครั้งก่อนที่ปลายทาง
อีกตัวเลือกหนึ่งคือ `ease-out`,ซึ่งจะเป็นการเริ่มต้นอย่างเร็วแล้วค่อย ๆ ลดความเร็วลงเรื่อย ๆ 
ส่วน `ease-in`, จะเป็นการเริ่มอย่างช้า ๆ ในตอนแรกแล้วค่อยเร่งความเร็วจนถึงปลายทาง
และ `linear`, จะเป็นการใช้ความเร็วคงที่ตลอดการ animate

# --instructions--

สำหรับ element ที่มี id เป็น `ball1` และ `ball2`
จงเพิ่ม `animation-timing-function` property ให้พวกมันแต่ละอันและกำหนดค่าให้`#ball1` เป็น `linear`, และ `#ball2` เป็น `ease-out`
สังเกตความแตกต่างระหว่างการเคลื่อนที่ของพวกมันตลอดการเคลื่อนที่ เนื่องจากพวกมันมี `animation-duration` เดียวกันที่ 2 วินาที

# --hints--

ค่าของ `animation-timing-function` property สำหรับ element ที่มี ID เป็น `ball1` ควรเป็น `linear`

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

The value of the `animation-timing-function` property for the element with the id `ball2` should be `ease-out`.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;

  }
  #ball2 {
    left:56%;

  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
