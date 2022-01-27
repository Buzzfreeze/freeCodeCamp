---
id: 587d78a3367417b2b2512ad1
title: Learn about Complementary Colors
challengeType: 0
videoUrl: "https://scrimba.com/c/c2MD3Tr"
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

ทฤษฎีสีและการใช้ทฤษฎีสีในการออกแบบเป็นหัวข้อที่ค่อนข้างลึกซึ้ง แต่ในแบบฝึกหัดที่เราจะเรียนนี้เราจะเรียนแค่พื้นฐานผิวๆเท่านั้น

ในเว็บไซต์ของเรา สีสามารถเพิ่มความน่าสนใจของเนื้อหา, กระตุ้นความรู้สึก, หรือสร้างความกลมกลืนของหน้าเว็บได้
การเปลี่ยนรูปแบบการใช้สี จะทำให้เว็บไซต์ของเรามีความรู้สึกต่างกันได้เลย
ทำให้คุณควรให้ความสำคัญกับการเลือกชุดสี (color palette) เพื่อให้เข้ากับเนื้อหาที่คุณต้องการนำเสนอมากที่สุด

วงล้อสี (color wheel) เป็นเครื่องมือที่มีประโยชน์ ที่ช่วยแสดงให้เห็นถึงความเกี่ยวโยงของสี
โดยสีที่อยู่โทนเดียวกันจะอยู่ใกล้กัน และสีที่มีโทนต่างกันจะอยู่ห่างกันออกไป
เมื่อสีสองสีอยู่ตรงข้ามกันในวงล้อสี เราจะเรียกว่าสีคู่ตรงข้าม (complementary color)
ลักษณะประจำตัวของสีคู่ตรงข้ามคือ ถ้าเราเอามาผสมกัน ทั้งสองสีนี้จะหักล้างซึ่งกันและกัน แล้วผสมกันเป็นสีเทา
แต่ถ้าเราเอาสีนี้ไว้ข้างๆกัน สีพวกนี้จะดูสดขึ้น และสร้างคอนทราสต์ที่ชัดเจน

ตัวอย่างของการใช้สีคู่ตรงข้ามคือ:

<blockquote>red (#FF0000) และ cyan (#00FFFF)<br>green (#00FF00) และ magenta (#FF00FF)<br>blue (#0000FF) และ yellow (#FFFF00)</blockquote>

ทฤษฏีสีนี้จะต่างกับทฤษฏีสีแบบ RYB model ที่เราเรียนมาในโรงเรียน
ทฤษฎีสีสมัยใหม่นั้นมาจาก RGB model (ยกตัวอย่างเช่น จอคอมพิวเตอร์) และ CMY(K) model (ยกตัวอย่างเช่น สิ่งพิมพ์)
ลองอ่านข้อมูลเพิ่มเติมเกี่ยวกับทฤษฏีสี [ที่นี่](https://en.wikipedia.org/wiki/Color_model)

มีเครื่องมือที่ช่วยหาชุดสีที่เหมาะสมได้ มากมายบนอินเตอร์เน็ต

**Note:** การใช้สีเป็นวิธีที่ทรงพลัง ซึ่งจะช่วยเพิ่มความน่าสนใจของหน้าเว็บไซต์ของเราได้
แต่เราก็ไม่ควรใช้แค่สีในการสื่อข้อมูลที่สำคัญ เพราะจะทำให้ผู้ใช้ที่มีความพิการทางการมองเห็นไม่สามารถเข้าใจได้
ปัญหานี้จะถูกพูดถึงอย่างละเอียดอีกครั้ง ในบทเรียนเรื่อง Applied Accessibility

# --instructions--

ให้เปลี่ยน property `background-color` ของคลาส `blue` และ `yellow` ให้มีสีตามชื่อคลาสของตัวเอง
ให้สังเกตว่าสองสีนี้จะดูต่างกันเมื่ออยู่ข้างกัน มากกว่าตอนที่เทียบกับพื้นหลังขาว

# --hints--

`div` ที่มีคลาสเป็น `blue` ต้องมีค่าของ `background-color` เป็น `blue`

```js
assert($(".blue").css("background-color") == "rgb(0, 0, 255)");
```

`div` ที่มีคลาสเป็น `yellow` ต้องมีค่าของ `background-color` เป็น `yellow`

```js
assert($(".yellow").css("background-color") == "rgb(255, 255, 0)");
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #ffffff;
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
    background-color: #ffffff;
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
