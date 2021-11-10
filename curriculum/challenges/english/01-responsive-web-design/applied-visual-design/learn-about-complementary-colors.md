---
id: 587d78a3367417b2b2512ad1
title: Learn about Complementary Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

ทฤษฎีสีและผลของมันในการออกแบบเป็นหัวข้อที่ค่อนข้างลึกซึ่งColor theory and its impact on design is a deep topic and only the basics are covered in the following challenges. On a website, color can draw attention to content, evoke emotions, or create visual harmony. Using different combinations of colors can really change the look of a website, and a lot of thought can go into picking a color palette that works with your content.

The color wheel is a useful tool to visualize how colors relate to each other - it's a circle where similar hues are neighbors and different hues are farther apart. When two colors are opposite each other on the wheel, they are called complementary colors. They have the characteristic that if they are combined, they "cancel" each other out and create a gray color. However, when placed side-by-side, these colors appear more vibrant and produce a strong visual contrast.

Some examples of complementary colors with their hex codes are:

<blockquote>red (#FF0000) and cyan (#00FFFF)<br>green (#00FF00) and magenta (#FF00FF)<br>blue (#0000FF) and yellow (#FFFF00)</blockquote>

This is different than the outdated RYB color model that many of us were taught in school, which has different primary and complementary colors. Modern color theory uses the additive RGB model (like on a computer screen) and the subtractive CMY(K) model (like in printing). Read [here](https://en.wikipedia.org/wiki/Color_model) for more information on this complex subject.

มันมีเครื่องมือที่ช่วยเลือกสีมากมายบนอินเตอร์เน็ต ที่ช่วยหาสีที่เข้าคู่กัน

**Note:** การใช้สีเป็นวิธีที่มีพลังในการเพิ่มความน่าสนใจของหน้าเว้บ อย่างไรก็ตามแค่สีไม่ควรจะเป็นสิ่งเดียวที่ถูกใช้เพื่อสื่อถึงความสำคัญของข้อมูลเพราะผู้ใช้ที่มีความพิการทางการมองเห็นจะไม่สามารถเข้าใจมันได้
ปัญหานี้จะถูกพูดถึงอย่างละเอียดอีกครั้งในแบบฝึกหัด Applied Accessibility 

# --instructions--

จงเปลี่ยน `background-color` property ของ `blue` และ `yellow` classes ใ้มีสีตามชื่อคลาสของพวกมัน
สังเกตว่าสองสีนี้มันดูต่างกันเมื่ออยู่ข้างกันมากกว่าตอนที่เทียบมันกับพื้นหลังขาว

# --hints--

`div` elementที่มาพร้อมกับคลาส `blue` ควรมี `background-color` สีน้ำเงิน

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

The `div` element with class `yellow` should have a `background-color` of yellow.

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```
