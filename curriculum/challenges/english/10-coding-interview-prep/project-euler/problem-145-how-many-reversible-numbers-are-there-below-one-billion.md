---
id: 5900f3fd1000cf542c50ff10
title: 'Problem 145: How many reversible numbers are there below one-billion?'
challengeType: 5
forumTopicId: 301774
dashedName: problem-145-how-many-reversible-numbers-are-there-below-one-billion
---

# --description--

จำนวนเต็มบวก $n$ มีคุณสมบัติที่ผลรวม [ $n + reverse(n)$ ] ประกอบด้วยเลขคี่ (ทศนิยม) ทั้งหมด เช่น $36 + 63 = 99$ และ $409 + 904 = 1313$ เราจะเรียกเลขพวกนี้ว่า reversible number  
ดังนั้น 36, 63, 409 และ 904 จึงเป็น reversible number ได้  
ไม่อนุญาตให้ใช้เลขศูนย์นำหน้าใน $n$ หรือ $reverse(n)$

มี reversible number ทั้งหมด 120 ตัวที่ต่ำกว่าหนึ่งพัน

ให้หาจำนวน reversible number ทั้งหมดที่ต่ำกว่าหนึ่งพันล้าน (${10}^9$)

# --hints--

`reversibleNumbers()` ต้องคืนค่าเป็น `608720`

```js
assert.strictEqual(reversibleNumbers(), 608720);
```

# --seed--

## --seed-contents--

```js
function reversibleNumbers() {

  return true;
}

reversibleNumbers();
```

# --solutions--

```js
// solution required
```
