---
id: 587d781b367417b2b2512abc
title: Adjust the background-color Property of Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

แทนที่จะเปลี่ยนสีพื้นหลังหรือสีของข้อความทั้งหมดเพื่อให้อ่านเนื้อหาได้ง่าย คุณสามารถเพิ่ม `background-color` ให้กับ element ที่ล้อมรอบข้อความที่คุณต้องการที่จะเน้น
แบบฝึกหัดนี้จะใช้ `rgba()` แทน `hex` codes หรือ `rgb()`

<blockquote>rgba stands for:<br>  r = red<br>  g = green<br>  b = blue<br>  a = alpha/level of opacity</blockquote>

ค่า RGB สามารถเป็นได้ตั้งแต่ 0 ถึง 255 ค่า alpha สามารถเป็นได้ตั้งแต่ 1 (ทึบแสงที่สุด) ถึง 0 (โปร่งแสงที่สุด)
`rgba()` นั้นเหมาะที่จะใช้ในกรณีนี้ที่สุด เนื่องจากคุณสามารถใช้ปรับค่า opacity ได้
ซึ่งแปลว่าคุณไม่จำเป็นต้องปิดพื้นหลังทั้งหมด

คุณจะใช้ `background-color: rgba(45, 45, 45, 0.1)` สำหรับแบบฝึกหัดนี้
มันจะสร้างสีเทาเข้มที่มีค่า opacity เท่ากับ 0.1.

# --instructions--

เพื่อทำให้ข้อความดูเด่นขึ้น, จงปรับ`background-color` ของ`h4` element ให้มีค่าตามค่า `rgba()` ที่กำหนดให้

นอกจากนั้น จงลบ `height` property และเพิ่ม `padding` 10px ให้กับ `h4`
# --hints--

โค้ดของคุณควรเพิ่ม  `background-color` property ให้กับ `h4` element และกำหนดค่าให้มันเท่ากับ `rgba(45, 45, 45, 0.1)`.

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

คุณควรเพิ่ม `padding` property อันหนึ่งให้กับ `h4` elementและกำหนดให้มันมีค่า 10 pixel

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

`height` property ของ `h4` element ควรจะถูกเอาออกไป

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
