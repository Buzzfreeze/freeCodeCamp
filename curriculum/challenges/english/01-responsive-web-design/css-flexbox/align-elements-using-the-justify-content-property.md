---
id: 587d78ac367417b2b2512af6
title: Align Elements Using the justify-content Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

บางครั้ง flex item ข้างใน flex container ไม่ได้อยู่เต็มพื้นที่ทั้งหมดของ container
มันเป็นเรื่องทั่วไปที่จะอยากบอก CSS ถึงวิธีการจัดวางให้เป็นเส้นตรงและเว้นระยะของ flex item ตามวิธีที่เราคิดไว้
โชคดีที่ `justify-content` property นั้นมีหลายทางเลือกเพื่อที่จะรับมือกับส่วนนี้
แต่ก่อนอื่น ยังมีคำศัพท์เทคนิคสำคัญบางคำที่ควรจะเข้าใจก่อนจะไปดูทางเลือกพวกนั้น

[นี่เป็นรูปที่จะแสดงให้เห็นถึงการจัดแถวตามแนวคิดด้านล่าง](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

จงจำไว้ว้าการกำหนดให้ flex container เป็นแบบ row จะเป็นการจัดวาง flex item ให้เรียงต่อกันจากซ้ายไปขวา ส่วนถ้ากำหนดเป็นแบบ column จะเป็นการจัดวางแต่ชั้น ๆ จากบนลงล่าง
ทิศทางที่ flex item ถูกจัดเรียงในแต่ละ container นั้นจะเรียกว่า **main axis**
สำหรับตอนนี้มันเป็นเพียงเส้นแนวนอนที่ตัดผ่านแต่ละ item สำหรับแบบ row และเป็นเส้นเส้นตั้งสำหรับแบบ column

มีหลายทางเลือกสำหรับวิธีการจัดระยะห่างของ flex items บนเส้น main axis
หนึ่งในตัวที่มักถูกใช้บ่อย ๆ คือ `justify-content: center;` ซึ่งจะจัดให้ flex item เป็นเส้นตรงภายใน flex container
ส่วนทางเลือกอื่น ๆ ก็จะเป็น:

<ul><li><code>flex-start</code>: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container. This is the default alignment if no <code>justify-content</code> is specified.</li><li><code>flex-end</code>: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.</li><li><code>space-between</code>: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the remaining space is distributed evenly among the other items.</li><li><code>space-around</code>: similar to <code>space-between</code> but the first and last items are not locked to the edges of the container, the space is distributed around all the items with a half space on either end of the flex container.</li><li><code>space-evenly</code>: Distributes space evenly between the flex items with a full space at either end of the flex container</li></ul>

# --instructions--

ตัวอย่างจะช่วยเป็นเห็นการทำงานของ property นี้ได้ดียิ่งขึ้น
จงเพิ่ม CSS property `justify-content` ให้กับ `#box-container` element และจงกำหนดให้มีค่าเป็น `center`

**Bonus**  
จงลองใช้วิธีอื่น ๆ ของ `justify-content` property ใน code editor เพื่อให้เห็นความแตกต่างของพวกมัน
แต่จงจำไว้ว่าเราจะใช้แค่ `center` ใน challenge นี้เท่านั้น

# --hints--

`#box-container` element ควรมี `justify-content` property อันหนึ่งที่ถูกกำหนดให้มีค่าเป็น `center`

```js
assert($('#box-container').css('justify-content') == 'center');
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
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
