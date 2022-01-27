---
id: 587d781b367417b2b2512abc
title: Adjust the background-color Property of Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

คุณสามารถเปลี่ยนพื้นหลังแค่ของข้อความที่คุณต้องการจะเน้นได้ด้วย โดยการระบุ `background-color` ให้กับ element ที่คุณต้องการจะเน้นข้อความ
ในแบบฝึกหัดนี้ ให้คุณใช้ `rgba()` หรือ `rgb()` แทนการใช้ `hex` code ในการระบุสี

<blockquote>rgba ย่อมาจาก:<br>  r = red<br>  g = green<br>  b = blue<br>  a = alpha (ความโปร่งใสของสี)</blockquote>

ค่า RGB สามารถเป็นได้ตั้งแต่ 0 ถึง 255 และค่า alpha สามารถเป็นได้ตั้งแต่ 1 (ทึบแสงที่สุด) ถึง 0 (โปร่งใสที่สุด)
`rgba()` นั้นเหมาะที่จะใช้ในกรณีนี้ที่สุด เพราะว่าคุณจะปรับค่า opacity (ความโปร่งใสของสี) ได้
ซึ่งจะทำให้พื้นหลังทะลุสีนี้ขึ้นมาได้

ให้ใช้ `background-color: rgba(45, 45, 45, 0.1)` โดยโค้ดนี้จะสร้างพื้นหลังสีเทาเข้ม ที่มี opacity เป็น 0.1

# --instructions--

ให้ทำให้ข้อความดูเด่นขึ้น โดยปรับ `background-color` ของ `h4` element ให้มีค่าตามค่า `rgba()` ที่กำหนดให้

และให้ลบ property `height` ออก และเพิ่ม `padding` 10px ให้กับ `h4`

# --hints--

ต้องเพิ่ม property `background-color` ให้กับ `h4` element โดยให้กำหนดค่าเป็น `rgba(45, 45, 45, 0.1)`

```js
assert(/(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(code.replace(/\s/g, '')));
```

ต้องเพิ่ม property `padding` ให้กับ `h4` element โดยให้กำหนดค่าเป็น 10 pixel

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px',
);
```

ต้องลบ property `height` ของ `h4` element ออก

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
      <hr />
      <p>
        <em
          >Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at
          <strong>Stanford University</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br /><br />
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
      <hr />
      <p>
        <em
          >Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at
          <strong>Stanford University</strong>.</em
        >
      </p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br /><br />
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
