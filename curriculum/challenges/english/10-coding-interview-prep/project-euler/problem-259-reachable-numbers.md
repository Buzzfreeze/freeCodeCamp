---
id: 5900f4701000cf542c50ff82
title: 'Problem 259: Reachable Numbers'
challengeType: 5
forumTopicId: 301907
dashedName: problem-259-reachable-numbers
---

# --description--

จำนวนเต็มบวกจะเรียกว่าสามารถ "เข้าถึงได้" ถ้าเป็นผลมาจากนิพจน์เลขคณิตที่ปฏิบัติตามกฎต่อไปนี้:

- ใช้ตัวเลข 1 ถึง 9 ตามลำดับ และใช้อย่างละตัว
- ตัวเลขที่ต่อเนื่องกันสามารถใช้ต่อกันได้ (เช่น ใช้ตัวเลข 2, 3 และ 4 เพื่อให้ได้ตัวเลข 234)
- อนุญาตให้ทำการบวก การลบ การคูณ และการหาร เท่านั้น
- การดำเนินการแต่ละครั้งสามารถใช้ได้กี่ครั้งก็ได้ หรือไม่ใช้เลยก็ได้
- ไม่อนุญาตให้ใช้ Unary minus
- ใช้วงเล็บ จำนวนเท่าใดก็ได้เพื่อกำหนดลำดับการดำเนินการ

เช่น 42 จะ "เข้าถึงได้" เนื่องจาก $\frac{1}{23} \times ((4 \times 5) - 6) \times (78 - 9) = 42$

ผลรวมของจำนวนเต็มบวกที่เข้าถึงได้ทั้งหมดเป็นเท่าใด

# --hints--

`reachableNumbers()` ต้องคืนค่าเป็น `20101196798`

```js
assert.strictEqual(reachableNumbers(), 20101196798);
```

# --seed--

## --seed-contents--

```js
function reachableNumbers() {

  return true;
}

reachableNumbers();
```

# --solutions--

```js
// solution required
```
