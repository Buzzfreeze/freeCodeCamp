---
id: 587d78a3367417b2b2512ad1
title: Learn about Complementary Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

ทฤษฎีสีและผลของมันในการออกแบบเป็นหัวข้อที่ค่อนข้างลึกซึ้ง โดยเราจะกล่าวถึงมันในแบบฝึกหัดถัด ๆ ไปแต่ในนี้จะอธิบายในส่วนของพื้นฐานเท่านั้น
ในเว็บไซต์ของเรา สีสามารถเพิ่มความน่าสนใจของ content, สร้างความประทับใจ, หรือสร้าง visual harmony หรือความกลมกลืนที่ได้จากการมองเห็นก็ได้
การใช้ชุดสีหลาย ๆ แบบสามารถเปลี่ยนหน้าตาของเว็บไซต์ได้ ซึ่งทำให้เราควรจำคำนึงถึงการเลือก color palette ให้ดี ๆ เพื่อที่มันจะได้เข้ากับ content ของคุณ

วงล้อสีนั้นเป็นเครื่องมือที่มีประโยชน์ในการช่วยแสดงให้เห็นถึงความเกี่ยวโยงของสีสีหนึ่งกับสีอื่น ๆ โดยมันจะเป็นวงกลมที่มี hue ที่คล้ายกันอยู่ใกล้กับ และ hue ที่ต่างกันจะอยู่ห่างกัน
เมื่อสีสองสีอยู่ตรงข้ามกันในวงล้อสี มันจะถูกเรียกว่าสีคู่ตรงข้าม (complementary color)
ลักษณะประจำตัวของสีคู่ตรงข้ามคือ ถ้าเราเอามันมาผสมกัน มันจะหักล้างซึ่งกันและกัน แล้วสร้างสีเทาขึ้นมา
อย่างไรก็ตาม เมื่อเราเอามันมาวางไว้ข้าง ๆ กัน สีพวกนี้จะดูสดขึ้นและสร้าง visual contrast ที่รุนแรงออกมา

ตัวอย่างหนึ่งของสีคู่ตรงข้ามคือ :

<blockquote>red (#FF0000) and cyan (#00FFFF)<br>green (#00FF00) and magenta (#FF00FF)<br>blue (#0000FF) and yellow (#FFFF00)</blockquote>

คู่สีนี้จะต่างกับ RYB color model ที่ถูกสอนให้กับเราในโรงเรียน โดยมันจะมีสีปฐมภูมิกับทุติยภูมิที่แตกต่าง
ทฤษฎีสีสมัยใหม่นั้นมาจาก RGB model (ยกตัวอย่างเช่น จอคอมพิวเตอร์) และ CMY(K) model (ยกตัวอย่างเช่น สีพิมพ์)
อ่าน [ตรงนี้](https://en.wikipedia.org/wiki/Color_model) เพื่อข้อมูลเพิ่มเติมเกี่ยวกับความซับซ้อนของมัน

มันมีเครื่องมือที่ช่วยเลือกสีมากมายบนอินเตอร์เน็ต ที่ช่วยหาชุดสีที่เหมาะสมได้

**Note:** การใช้สีเป็นวิธีที่ทรงพลัง มันช่วยพิ่มความน่าสนใจของหน้าเว็บไซต์ของเราได้
แต่อย่างไรก็ตาม สีไม่ควรจะเป็นสิ่งเดียวที่ถูกใช้เพื่อสื่อถึงความสำคัญของข้อมูลเพราะผู้ใช้ที่มีความพิการทางการมองเห็นจะไม่สามารถเข้าใจมันได้
ปัญหานี้จะถูกพูดถึงอย่างละเอียดอีกครั้งในแบบฝึกหัด Applied Accessibility

# --instructions--

จงเปลี่ยน `background-color` property ของ `blue` และ `yellow` classes ให้มีสีตามชื่อคลาสของพวกมัน
สังเกตว่าสองสีนี้มันดูต่างกันเมื่ออยู่ข้างกันมากกว่าตอนที่เทียบมันกับพื้นหลังขาว

# --hints--

`div` element ที่มาพร้อมกับคลาสชื่อ `blue` ควรมี `background-color` สีน้ำเงิน

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

`div` element ที่มาพร้อมกับคลาสชื่อ `yellow` ควรมี `background-color` สีเหลือง

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
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
