---
id: 5900f4081000cf542c50ff1a
title: 'Problem 155: Counting Capacitor Circuits'
challengeType: 5
forumTopicId: 301786
dashedName: problem-155-counting-capacitor-circuits
---

# --description--

วงจรไฟฟ้าใช้เฉพาะตัวเก็บประจุที่มีค่า C เท่ากันเท่านั้น

ตัวเก็บประจุสามารถเชื่อมต่อแบบอนุกรมหรือขนานกันเพื่อสร้างยูนิตย่อย ซึ่งสามารถต่อแบบอนุกรมหรือขนานกับตัวเก็บประจุอื่นๆ หรือยูนิตย่อยอื่นๆ เพื่อสร้างยูนิตย่อยที่ใหญ่ขึ้น และต่อเนื่องไปจนถึงวงจรสุดท้าย

ด้วยขั้นตอนง่ายๆแบบนี้ และตัวเก็บประจุที่เหมือนกันมากถึง n ตัว เราสามารถสร้างวงจรที่มีช่วงของความจุรวมที่แตกต่างกันได้ ตัวอย่างเช่น การใช้ตัวเก็บประจุสูงสุด $n = 3$ ตัวละ $60 μF$ เราสามารถรับค่าความจุรวมที่แตกต่างกัน 7 ค่าต่อไปนี้:

<img class="img-responsive center-block" alt="example circuits having up to three capacitors, each of 60 μF" src="https://cdn.freecodecamp.org/curriculum/project-euler/counting-capacitor-circuits.gif" style="background-color: white; padding: 10px;">

ถ้าเราใช $D(n)$ เป็นจำนวนของค่าความจุรวมที่แตกต่างกันที่เราสามารถรับได้ เมื่อใช้ตัวเก็บประจุที่มีมูลค่าเท่ากันถึง $n$ ตัว และใช้ขั้นตอนง่าย ๆ ที่อธิบายข้างต้น เราจะได้ $D(1) = 1, D (2) = 3, D(3)=7, \ldots$

ให้หา $D(18)$

Reminder: 
เมื่อเชื่อมต่อตัวเก็บประจุ $C_1$, $C_2$ ฯลฯ แบบขนาน ความจุรวมคือ $C_T = C_1 + C_2 + \cdots$ ในขณะที่ถ้าชื่อมต่อเป็นอนุกรม ความจุรวมจะเป็น $\frac{1}{ C_T} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$

# --hints--

`capacitanceValues()` ต้องคืนค่าเป็น `3857447`

```js
assert.strictEqual(capacitanceValues(), 3857447);
```

# --seed--

## --seed-contents--

```js
function capacitanceValues() {

  return true;
}

capacitanceValues();
```

# --solutions--

```js
// solution required
```
