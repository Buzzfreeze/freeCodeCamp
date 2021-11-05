---
id: 5900f3ef1000cf542c50ff01
title: 'Problem 129: Repunit divisibility'
challengeType: 5
forumTopicId: 301756
dashedName: problem-129-repunit-divisibility
---

# --description--

จำนวนที่ประกอบด้วยจำนวนทั้งหมดเรียกว่าการทำซ้ำ เราจะกำหนด $R(k)$ ให้เป็นหน่วยของความยาว $k$; ตัวอย่างเช่น $R(6) = 111111$

เนื่องจาก $n$ เป็นจำนวนเต็มบวกและ $GCD(n, 10) = 1$ จึงสามารถแสดงว่ามีค่าอยู่เสมอ $k$ ซึ่ง $R(k)$ หารด้วย $n$ ลงตัว และให้ $A(n)$ เป็นมูลค่าที่น้อยที่สุดของ $k$; ตัวอย่างเช่น $A(7) = 6$ และ $A(41) = 5$

ค่าที่น้อยที่สุดของ $n$ ซึ่ง $A(n)$ มีค่ามากกว่าสิบอันดับแรกคือ 17

หาค่าที่น้อยที่สุดของ $n$ ที่ $A(n)$ มีค่าเกินหนึ่งล้าน

# --hints--

`repunitDivisibility()` ควร return `1000023`.

```js
assert.strictEqual(repunitDivisibility(), 1000023);
```

# --seed--

## --seed-contents--

```js
function repunitDivisibility() {

  return true;
}

repunitDivisibility();
```

# --solutions--

```js
// solution required
```
