---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/c8aggtk"
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

property `align-items` ก็จะคล้ายๆกับ `justify-content`

ถ้ายังจำได้ property `justify-content` จะเรียง flex items เรียงตาม main axis
โดย main axis ของ row จะเป็นเส้นแนวนอน และ main axis ของ column จะเป็นเส้นแนวตั้ง

Flex container จะมี **cross axis** (แกนตัด) ด้วย ซึ่งจะเป็นเส้นที่ตรงข้ามกับ main axis เลย โดย
cross axis ของ row จะเป็นแนวตั้ง และ
cross axis ของ column จะเป็นแนวนอน

เราจะใช้ property `align-items` เพื่อจัดเรียง flex item ตาม cross axis
การใช้ property ใน row จะเป็นการบอกให้ CSS เรียง item ขึ้นหรือลงภายใน column
และถ้าใช้ใน column จะเป็นการบอกให้ CSS เรียง item ไปซ้ายหรือขวาภายใน container

`align-items` จะรับค่าอื่นได้ตามนี้:

<ul><li><code>flex-start</code>: เรียง item ไว้ที่จุดเริ่มต้นของ flex container ถ้าเป็น row จะเรียง item ไว้ด้านบนของ container และถ้าเป็น column จะเรียง item ไว้ด้านซ้ายของ container</li><li><code>flex-end</code>: เรียง item ไว้ที่จุดสิ้นสุดของ flex container ถ้าเป็น row จะเรียง item ไว้ด้านล่างของ container และถ้าเป็น column จะเรียง item ไว้ด้านขวาของ container</li><li><code>center</code>: จะเรียง item ไว้ตรงกลาง ถ้าเป็น row จะเรียงไว้กึ่งกลางในแนวตั้ง (ให้มีพื้นที่ว่างด้านบนและล่างของ item เท่ากัน) และถ้าเป็น column จะเรียงไว้กึ่งกลางในแนวนอน (ให้มีพื้นที่ว่างด้านซ้ายและขวาของ item เท่ากัน)</li><li><code>stretch</code>: จะยืด item ให้เต็ม flex container เช่น ถ้าเป็น row แล้ว item จะถูกยืดเต็มตั้งแต่ส่วนบนสุดถึงส่วนล่างสุดของ container โดยค่านี้จะเป็นค่าเริ่มต้นถ้าคุณไม่ได้ระบุ <code>align-items</code></li><li><code>baseline</code>: จะเรียง item ตาม baseline ของ item นั้น โดย Baseline จะเป็นเหมือนเส้นบรรทัดเส้นล่าง เวลาเราเขียนหนังสือ</li></ul>

# --instructions--

ถ้าได้ลองทำดู น่าจะเข้าใจการทำงานของ property นี้ได้ดีขึ้น

ให้เพิ่ม CSS property `align-items` ให้กับ `#box-container` และให้กำหนดค่าเป็น `center`

**Bonus**  
ให้ลองเปลี่ยนค่าของ property `align-items` ใน code editor เป็นค่าอื่นๆด้านบน จะได้เห็นว่าค่าแต่ละตัวมีผลต่างกันอย่างไร
แต่ก่อนกด Run Test อย่าลืมเปลี่ยนกลับเป็น `center` ด้วย

# --hints--

`#box-container` ต้องมีค่าของ property `align-items` เป็น `center`

```js
assert($("#box-container").css("align-items") == "center");
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
