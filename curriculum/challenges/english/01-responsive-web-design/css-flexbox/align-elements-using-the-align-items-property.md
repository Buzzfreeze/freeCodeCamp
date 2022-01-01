---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

`align-items` property นั้นคล้ายคลึงกับ `justify-content`
จงจำไว้ว่า `justify-content` property จะจัดให้ flex items เรียงตามแกนหลัก
สำหรับ row แกนหลักจะเป็นเส้นแนวนอน และเป็นเส้นแนวตั้งสำหรับ column

Flex container จะมี **cross axis** อันหนึ่งโดยมันจะตรงข้ามกับแกนหลัก
cross axis ของ row จะเป็นแนวตั้ง
cross axis ของ column จะเป็นแนวนอน

CSS ได้พัฒนาให้ `align-items` (กำหนดลักษณะการจัดเรียง Element ทั้งหมดโดยรวมในแนวแกนขวางซึ่งจะตรงกันข้ามกับแนวแกนหลัก) property สามารถถูกใช้เพื่อจัดเรียน flex item ให้เป็นเส้นตรงตาม cross axis
มันจะบอก CSS ว่าจะจัด item อยู่แถวบนแถวล่างภายใน container สำหรับ row
และบอกว่าจะผลักให้ items ไปซ้ายหรือขวาภายใน container สำหรับ column

ค่าต่าง ๆ ที่สามารถใช้ได้กับ `align-items` จะมีดังนี้:

<ul><li><code>flex-start</code>: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.</li><li><code>flex-end</code>: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.</li><li><code>center</code>: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).</li><li><code>stretch</code>: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom. This is the default value if no <code>align-items</code> value is specified.</li><li><code>baseline</code>: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.</li></ul>

# --instructions--

ตัวอย่างช่วยให้เห็นการทำงานของ property นี้
จงเพิ่ม CSS property `align-items` ให้กับ `#box-container` element และจงกำหนดให้มันมีค่า `center`.

**Bonus**  
จงลองตัวเลือกอื่น ๆ ของ `align-items` property ใน code editor เพื่อให้เห็นความต่างของพวกมัน
แต่จงจำไว้ว่าค่าที่เป็น `center` เป็นเพียงค่าเดียวที่จะใช้ใน challenge นี้

# --hints--

`#box-container` element ควรมี `align-items` property อันหนึ่งที่ถูกกำหนดให้มีค่า `center`

```js
assert($('#box-container').css('align-items') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```
