---
id: 5900f4a71000cf542c50ffb9
title: 'Problem 314: The Mouse on the Moon'
challengeType: 5
forumTopicId: 301970
dashedName: problem-314-the-mouse-on-the-moon
---

# --description--

ดวงจันทร์ถูกเปิดขึ้น และสามารถจองที่ดินได้ฟรี แต่คุณต้องสร้างกำแพงรอบๆ ดินแดนที่คุณจอง  

การสร้างกำแพงบนดวงจันทร์นั้นมีราคาแพง ทุกประเทศได้รับการจัดสรรพื้นที่สี่เหลี่ยมจัตุรัส 500 ม. คูณ 500 ม. แต่จะมีเฉพาะพื้นที่ที่มีกำแพงล้อมรอบเท่านั้น 

ได้วางเสา 251001 เสารอบพื้นที่สี่เหลี่ยมที่มีระยะห่าง 1 เมตร ผนังต้องเป็นเส้นตรงที่มาบรรจบกัน แต่ละเส้นวิ่งจากเสาหนึ่งไปอีกเสาหนึ่ง

แน่นอนว่าประเทศที่ใหญ่กว่าได้สร้างกำแพงขนาด 2,000 ม. ซึ่งล้อมรอบพื้นที่ $\text{m}^2$ ทั้งหมด 250,000 $\text{m}^2$ ดัชชีแห่งแกรนด์เฟนวิกมีงบประมาณจำกัด และขอให้คุณ (โปรแกรมเมอร์หลวงของพวกเขา) คำนวณว่ารูปร่างใดจะได้ค่าสูงสุด $\frac{\text{enclosed-area}}{\text{wall-length}}$ อัตราส่วน

คุณได้ทำการคำนวณเบื้องต้นบนกระดาษแผ่นหนึ่งแล้ว สำหรับกำแพง 2,000 เมตรที่ล้อมรอบพื้นที่ $\text{m}^2$ $\frac{\text{enclosed-area}}{\text{wall-length}}$ คือ 125

แม้ว่าจะไม่ได้รับอนุญาต แต่เพื่อให้เกิดความคิดว่าสิ่งนี้ดีกว่าไหม: หากคุณวางวงกลมในพื้นที่สี่เหลี่ยมจัตุรัสโดยสัมผัสทั้งสี่ด้าน พื้นที่จะเท่ากับ $π \times {250}^2 \text{m}^2 $ และเส้นรอบรูปจะเป็น $π \times 500 \text{m}$ ดังนั้นอัตราส่วน $\frac{\text{enclosed-area}}{\text{wall-length}}$ ก็จะเท่ากับ 125

อย่างไรก็ตาม หากคุณตัดออกจากสี่เหลี่ยมจัตุรัสสี่รูปสามเหลี่ยมที่มีด้าน 75 ม. 75 ม. และ $75\sqrt{2}$ ม. พื้นที่ทั้งหมดจะกลายเป็น 238750 $\text{m}^2$ และเส้นรอบรูปจะกลายเป็น $1400 + 300\sqrt {2}$ ม. ดังนั้นจึงทำให้อัตราส่วน $\frac{\text{enclosed-area}}{\text{wall-length}}$ เท่ากับ 130.87 ซึ่งดีกว่าอย่างมาก

<img class="img-responsive center-block" alt="picture showing difference in encosed-area between circle and square with cut off four triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/the-mouse-on-the-moon.gif" style="background-color: white; padding: 10px;">

ให้หาอัตราส่วน $\frac{\text{enclosed-area}}{\text{wall-length}}$ สูงสุด ให้ตอบเป็นทศนิยม 8 ตำแหน่ง

# --hints--

`theMouseOnTheMoon()` ต้องคืนค่าเป็น `132.52756426`

```js
assert.strictEqual(theMouseOnTheMoon(), 132.52756426);
```

# --seed--

## --seed-contents--

```js
function theMouseOnTheMoon() {

  return true;
}

theMouseOnTheMoon();
```

# --solutions--

```js
// solution required
```
