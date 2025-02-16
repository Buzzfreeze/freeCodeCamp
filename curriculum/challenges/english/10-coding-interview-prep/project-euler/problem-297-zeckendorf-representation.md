---
id: 5900f4951000cf542c50ffa8
title: 'Problem 297: Zeckendorf Representation'
challengeType: 5
forumTopicId: 301949
dashedName: problem-297-zeckendorf-representation
---

# --description--

ค่าใหม่แต่ละค่าในลำดับ Fibonacci ถูกสร้างขึ้นโดยการบวกค่าสองค่าก่อนหน้า

ถ้าเริ่มต้นด้วย 1 และ 2 แล้ว 10 ค่าแรกจะเป็น: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

จำนวนเต็มบวกทุกจำนวนสามารถเขียนได้ในรูปผลรวมของพจน์ที่ไม่ต่อเนื่องกันของลำดับ Fibonacci ได้  
ตัวอย่างเช่น 100 = 3 + 8 + 89

ผลรวมดังกล่าวเรียกว่า Zeckendorf แทนตัวเลข

สำหรับจำนวนเต็มใดๆ $n>0$ ให้ $z(n)$ เป็นจำนวนพจน์ในการแทนค่า Zeckendorf ของ $n$

ดังนั้น $z(5) = 1$, $z(14) = 2$, $z(100) = 3$ เป็นต้น

นอกจากนี้ สำหรับ $0 &lt; n &lt; {10}^6$, $\sum z(n) = 7\\,894\\,453

หา $\sum z(n)$ ถ้า $0 &lt; n &lt; {10}^{17}$

# --hints--

`zeckendorfRepresentation()` ต้องคืนค่าเป็น `2252639041804718000`

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
