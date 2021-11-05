---
id: 5900f4951000cf542c50ffa8
title: 'Problem 297: Zeckendorf Representation'
challengeType: 5
forumTopicId: 301949
dashedName: problem-297-zeckendorf-representation
---

# --description--

คำศัพท์ใหม่แต่ละคำในลำดับFibonucciถูกสร้างขึ้นโดยการเพิ่มคำศัพท์สองคำก่อนหน้า

เริ่มต้นด้วย 1 และ 2 10 เทอมแรกจะเป็น: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

จำนวนเต็มบวกทุกจำนวนสามารถเขียนได้อย่างเฉพาะเจาะจงเป็นผลรวมของพจน์ที่ไม่ต่อเนื่องกันของลำดับFibonucci ตัวอย่างเช่น 100 = 3 + 8 + 89

ผลรวมดังกล่าวเรียกว่า Zeckendorf แทนตัวเลข

สำหรับจำนวนเต็มใดๆ $n>0$ ให้ $z(n)$ เป็นจำนวนพจน์ในการแทนค่า Zeckendorf ของ $n$

ดังนั้น $z(5) = 1$, $z(14) = 2$, $z(100) = 3$ เป็นต้น

นอกจากนี้ สำหรับ $0 &lt; น &lt; {10}^6$, $\sum z(n) = 7\\,894\\,453$.

หา $\sum z(n)$ สำหรับ $0 &lt; น &lt; {10}^{17}$.

# --hints--

`zeckendorfRepresentation()` should return `2252639041804718000`.

```js
assert.strictEqual(zeckendorfRepresentation(), 2252639041804718000);
```

# --seed--

## --seed-contents--

```js
function zeckendorfRepresentation() {

  return true;
}

zeckendorfRepresentation();
```

# --solutions--

```js
// solution required
```
