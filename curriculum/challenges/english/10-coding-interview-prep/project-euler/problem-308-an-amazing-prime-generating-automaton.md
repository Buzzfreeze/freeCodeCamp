---
id: 5900f4a11000cf542c50ffb3
title: 'Problem 308: An amazing Prime-generating Automaton'
challengeType: 5
forumTopicId: 301962
dashedName: problem-308-an-amazing-prime-generating-automaton
---

# --description--

โปรแกรมที่เขียนด้วยภาษาโปรแกรม Fractran ประกอบด้วยรายการเศษส่วน

สถานะภายในของเครื่องเสมือน Fractran เป็นจำนวนเต็มบวก ซึ่งตั้งค่าเริ่มต้นเป็นค่าเริ่มต้น การวนซ้ำของโปรแกรม Fractran แต่ละครั้งจะคูณจำนวนเต็มสถานะด้วยเศษส่วนแรกในรายการซึ่งจะทำให้มันเป็นจำนวนเต็ม

เช่น หนึ่งในโปรแกรม Fractran ที่ John Horton Conway เขียนสำหรับการสร้างจำนวนเฉพาะประกอบด้วยเศษส่วน 14 ตัวต่อไปนี้:

$$\frac{17}{91}, \frac{78}{85}, \frac{19}{51}, \frac{23}{38}, \frac{29}{33}, \frac{77}{29}, \frac{95}{23}, \frac{77}{19}, \frac{1}{17}, \frac{11}{13}, \frac{13}{11}, \frac{15}{2}, \frac{1}{7}, \frac{55}{1}$$

เริ่มต้นด้วยส่ง 2 เข้าไป การวนซ้ำต่อเนื่องของโปรแกรมจะสร้างลำดับ:

$$15, 825, 725, 1925, 2275, 425, \ldots, 68, \mathbf{4}, 30, \ldots, 136, \mathbf{8}, 60, \ldots, 544, \mathbf{32}, 240, \ldots$$

ค่ากำลังสองที่ปรากฏในลำดับนี้คือ $2^2, 2^3, 2^5, \ldots$

แสดงว่ากำลังทั้งหมดของ 2 ในลำดับนี้มีเลขชี้กำลังเฉพาะ และจำนวนเฉพาะทั้งหมดปรากฏเป็นเลขชี้กำลังของ 2 ตามลำดับที่ถูกต้อง!

หากมีคนใช้โปรแกรม Fractran ด้านบนเพื่อแก้ปัญหา Project Euler Problem 7 (ค้นหาไพรม์ ${10001}^{\text{st}}$ ไพรม์) จะต้องทำซ้ำกี่ครั้งจนกว่าโปรแกรมจะสร้างจำนวนเฉพาะตัวที่ $2^{10001}$

# --hints--

`primeGeneratingAutomation()` ต้องคืนค่าเป็น `1539669807660924`

```js
assert.strictEqual(primeGeneratingAutomation(), 1539669807660924);
```

# --seed--

## --seed-contents--

```js
function primeGeneratingAutomation() {

  return true;
}

primeGeneratingAutomation();
```

# --solutions--

```js
// solution required
```
