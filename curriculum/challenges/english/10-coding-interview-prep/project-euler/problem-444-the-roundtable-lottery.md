---
id: 5900f52a1000cf542c51003b
title: 'Problem 444: The Roundtable Lottery'
challengeType: 5
forumTopicId: 302116
dashedName: problem-444-the-roundtable-lottery
---

# --description--

กลุ่มคน $p$ คน ตัดสินใจนั่งลงที่โต๊ะกลม และเล่นเกมซื้อขายลอตเตอรี แต่ละคนเริ่มต้นด้วยตั๋วลอตเตอรียังไม่ได้เปิดแบบสุ่ม  

ตั๋วแต่ละใบ เมื่อขูดแล้ว จะเผยให้เห็นรางวัลตั้งแต่ £1 ถึง £$p$ โดยไม่มีตั๋วสองใบที่เหมือนกัน 

เป้าหมายของเกมคือให้แต่ละคนเพิ่มเงินรางวัลตั๋วของเขาให้สูงสุดเมื่อออกจากเกม

บุคคลทั่วไปได้รับเลือกให้เป็นผู้เล่นคนแรก เมื่อเดินไปรอบๆ โต๊ะ ผู้เล่นแต่ละคนมีทางเลือกอย่างใดอย่างหนึ่งจากสองตัวเลือกเท่านั้น:

1. ผู้เล่นสามารถขูดตั๋วของเขาและเปิดเผยมูลค่าของตั๋ว ให้กับทุกคนที่โต๊ะ
2. ผู้เล่นสามารถแลกเปลี่ยนตั๋วที่ไม่ได้ขูดของเขา กับตั๋วที่มีขูดแล้วของผู้เล่นคนก่อนได้ จากนั้นออกจากเกมด้วยตั๋วนั้น จากนั้นผู้เล่นคนก่อนก็ขูดตั๋วที่ได้มาใหม่ และเปิดให้เห็นรางวัลของตั๋วต่อทุกคนที่โต๊ะ

เกมจะจบลงเมื่อตั๋วทั้งหมดถูกขูดแล้ว ผู้เล่นทุกคนที่ยังคงอยู่ที่โต๊ะจะต้องออกไปพร้อมกับตั๋วที่ถืออยู่ในปัจจุบัน

สมมติว่าผู้เล่นแต่ละคนใช้กลยุทธ์ที่เหมาะสมที่สุดเพื่อเพิ่มมูลค่าที่คาดหวังจากการชนะตั๋วของเขา

ให้ $E(p)$ แทนจำนวนผู้เล่นที่คาดว่าจะเหลืออยู่ที่โต๊ะ เมื่อเกมจบลง ในเกมที่ประกอบด้วยผู้เล่น $p$ คน (เช่น $E(111) = 5.2912$ เมื่อปัดเศษเป็น 5 หลักนัยสำคัญ)

ให้ $S_1(N) = \displaystyle\sum_{p = 1}^N E(p)$

ให้ $S_k(N) = \displaystyle\sum_{p = 1}^N S_{k - 1}(p)$ สำหรับ $k > 1$

ให้หา $S_{20}({10}^{14})$ และเขียนคำตอบเป็นสตริงในรูปแบบสัญกรณ์วิทยาศาสตร์ ที่ปัดเศษขึ้นเป็นสิบหลักนัยสำคัญ 

ใช้ตัวพิมพ์เล็ก `e` เพื่อแยก mantissa และเลขชี้กำลัง 

ตัวอย่างเช่น คำตอบสำหรับ $S_3(100)$ จะเป็น `5.983679014e5`

# --hints--

`roundtableLottery()` ต้องคืนค่าเป็นสตริง

```js
assert(typeof roundtableLottery() === 'string');
```

`roundtableLottery()` ต้องคืนค่าเป็นสตริง `1.200856722e263`

```js
assert.strictEqual(roundtableLottery(), '1.200856722e263');
```

# --seed--

## --seed-contents--

```js
function roundtableLottery() {

  return true;
}

roundtableLottery();
```

# --solutions--

```js
// solution required
```
