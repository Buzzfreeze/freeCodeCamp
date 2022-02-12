---
id: 5900f3ee1000cf542c50ff00
title: 'Problem 130: Composites with prime repunit property'
challengeType: 5
forumTopicId: 301758
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

จำนวนที่ประกอบด้วยหนึ่งทั้งหมดเรียกว่า repunit  
เรากำหนด $R(k)$ ให้เป็น repunit ที่ยาว $k$; ตัวอย่างเช่น $R(6) = 111111$

เนื่องจาก $n$ เป็นจำนวนเต็มบวกและ $GCD(n, 10) = 1$ จึงสามารถแสดงว่ามีค่าอยู่เสมอ $k$ ซึ่ง $R(k)$ หารด้วย $n$ ลงตัว และให้ $A(n)$ เป็นมูลค่าที่น้อยที่สุดของ $k$; ตัวอย่างเช่น $A(7) = 6$ และ $A(41) = 5$

คุณจะได้รับสำหรับจำนวนเฉพาะทั้งหมด $p > 5$ ซึ่ง $p − 1$ หารด้วย $A(p)$ ลงตัว ตัวอย่างเช่น เมื่อ $p = 41, A(41) = 5$ และ 40 หารด้วย 5 ลงตัว

อย่างไรก็ตาม มีค่าที่หายากซึ่งสิ่งนี้ก็เป็นจริงเช่นกัน ตัวอย่างห้าตัวอย่างแรกคือ 91, 259, 451, 481 และ 703

จงหาผลรวมของค่า 25 ค่าแรกของ $n$ โดยที่ $GCD(n, 10) = 1$ และ $n − 1$ หารด้วย $A(n)$ ลงตัว

# --hints--

`compositeRepunit()` ต้องคืนค่าเป็น `149253`

```js
assert.strictEqual(compositeRepunit(), 149253);
```

# --seed--

## --seed-contents--

```js
function compositeRepunit() {

  return true;
}

compositeRepunit();
```

# --solutions--

```js
// solution required
```
