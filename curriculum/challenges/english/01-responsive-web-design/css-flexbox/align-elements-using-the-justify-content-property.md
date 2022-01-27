---
id: 587d78ac367417b2b2512af6
title: Align Elements Using the justify-content Property
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/c43gnHm"
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

บางครั้ง flex item ข้างใน flex container ไม่ได้ขยายเต็มพื้นที่ของ container

ปกติแล้ว เราก็คงอยากบอก CSS ให้จัดวางและเว้นระยะของ child element
ซึ่งสามารถทำได้ไม่ยาก ถ้าเราใช้ property `justify-content`
ก่อนที่จะลองใช้ เราต้องรู้จักและเข้าใจคำศัพท์บางตัวก่อน

[ลองดูรูปที่จะช่วยให้เข้าใจคอนเซ็ปท์ด้านล่างได้ดีขึ้น](https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

ยังจำได้ใช่ไหมว่าถ้า flex container เป็นแบบ row จะเป็นการจัดวาง flex item ให้เรียงต่อกันจากซ้ายไปขวา ส่วนถ้ากำหนดเป็นแบบ column จะเป็นการจัดวางเป็นชั้น ๆ จากบนลงล่าง

ทิศทางที่ flex item ถูกจัดเรียงในแต่ละ container นั้นจะเรียกว่า **main axis** (แกนหลัก)
ในตอนนี้ main axis ของ row จะเป็นแค่เส้นแนวนอนที่ตัดผ่านแต่ละ item
และ main axis ของ column ก็จะเป็นแค่เส้นแนวตั้ง

เรามีวิธีในการจัดวาง flex item บนเส้น main axis ได้หลายแบบ
โดยแบบที่เห็นได้บ่อยที่สุดคือ `justify-content: center;` ซึ่งจะจัดให้ flex item อยู่กลาง main axis ใน flex container เลย
ส่วนวิธีอื่นก็จะเป็น:

<ul><li><code>flex-start</code>: จะวาง item ไว้ที่จุดเริ่มต้นของ flex container เลย ซึ่งถ้าเป็น row จะทำให้ item อยู่ทางซ้ายของ container และถ้าเป็น column จะทำให้ item อยู่ส่วนบนของ container ซึ่งค่านี้จะเป็นค่าเริ่มต้น ถ้าเราไม่ได้กำหนดค่าของ <code>justify-content</code></li><li><code>flex-end</code>: จะวาง item ไว้ที่จุดสิ้นสุดของ flex container เลย ซึ่งถ้าเป็น row จะทำให้ item อยู่ทางขวาของ container และถ้าเป็น column จะทำให้ item อยู่ส่วนล่างของ container</li><li><code>space-between</code>: จะวาง item ไว้ตรงกลางของ main axis โดยมีช่องว่างระหว่าง item แต่ละตัวเล็กน้อย โดย item แรกและ item สุดท้ายจะอยู่ที่จุดเริ่มต้นและจุดสิ้นสุดของ flex container เช่น ถ้าเป็น row แล้ว item แรกจะอยู่ชิดขอบซ้ายของ container และ item สุดท้ายจะอยู่ชิดขอบขวาของ container และช่องว่างที่เหลืออยู่จะเอามาแบ่งกัน เพื่อให้ item ที่เหลือมีความห่างเท่าๆกัน</li><li><code>space-around</code>: จะคล้ายๆกับ <code>space-between</code> แต่ item แรกและ item สุดท้ายจะไม่อยู่ติดขอบของ container โดย item แต่ละตัวจะมีความห่างเท่าๆกัน และ item ที่อยู่ชิดของ container จะถูกดันออกมาจากขอบ เป็นระยะครึ่งหนึ่งของระยะห่างระหว่าง item</li><li><code>space-evenly</code>: จะทำให้แต่ละ item มีระยะห่างเท่าๆกัน โดย item ตัวแรกและตัวสุดท้ายจะอยูาห่างจากขอบของ container เป็นระยะเท่ากับระยะห่างจาก item ตัวอื่น</li></ul>

# --instructions--

ถ้าได้ลองทำดู น่าจะเข้าใจการทำงานของ property นี้ได้ดีขึ้น

ให้เพิ่ม CSS property `justify-content` ให้กับ `#box-container` และกำหนดให้มีค่าเป็น `center`

**Bonus**  
ให้ลองเปลี่ยนค่าของ property `justify-content` ใน code editor เป็นค่าอื่นๆด้านบน จะได้เห็นว่าค่าแต่ละตัวมีผลต่างกันอย่างไร
แต่ก่อนกด Run Test อย่าลืมเปลี่ยนกลับเป็น `center` ด้วย

# --hints--

`#box-container` ต้องมีค่าของ property `justify-content` เป็น `center`

```js
assert($("#box-container").css("justify-content") == "center");
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
