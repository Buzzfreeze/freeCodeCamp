---
id: 5900f5411000cf542c510053
title: 'Problem 469: Empty chairs'
challengeType: 5
forumTopicId: 302144
dashedName: problem-469-empty-chairs
---

# --description--

ในห้องหนึ่งมีเก้าอี้ $N$ วางไว้รอบโต๊ะกลม

อัศวินเข้ามาในห้องทีละคนและสุ่มเลือกเก้าอี้ว่างที่มีอยู่

เพื่อให้มีพื้นที่ข้อศอกเพียงพอ อัศวินจะทิ้งเก้าอี้ว่างไว้อย่างน้อยหนึ่งตัวระหว่างกัน

เมื่อไม่มีเก้าอี้ที่เหมาะสมเหลืออยู่ จะมีการกำหนดเศษเก้าอี้ว่าง $C$ นอกจากนี้เรายังกำหนด $E(N)$ เป็นมูลค่าที่คาดไว้ของ $C$

เราสามารถยืนยันได้ว่า $E(4) = \frac{1}{2}$ และ $E(6) = \frac{5}{9}$

หา $E({10}^{18})$. ให้คำตอบของคุณปัดเศษทศนิยมสิบสี่ตำแหน่งในรูปแบบ 0.abcdefghijklmn
# --hints--

`emptyChairs()` ควร return `0.56766764161831`.

```js
assert.strictEqual(emptyChairs(), 0.56766764161831);
```

# --seed--

## --seed-contents--

```js
function emptyChairs() {

  return true;
}

emptyChairs();
```

# --solutions--

```js
// solution required
```
