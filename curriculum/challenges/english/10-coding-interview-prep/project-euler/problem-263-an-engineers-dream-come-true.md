---
id: 5900f4741000cf542c50ff86
title: 'Problem 263: An engineers'' dream come true'
challengeType: 5
forumTopicId: 301912
dashedName: problem-263-an-engineers-dream-come-true
---

# --description--

พิจารณาเลข 6  
ตัวหารของ 6 คือ: 1,2,3 และ 6

ทุกตัวเลขตั้งแต่ 1 ถึงและรวมถึง 6 สามารถเขียนเป็นผลรวมของตัวหารที่แตกต่างกันของ 6 ได้:

$1 = 1$, $2 = 2$, $3 = 1 + 2$, $4 = 1 + 3$, $5 = 2 + 3$, $6 = 6$

จำนวน $n$ จะถูกเรียกว่าเป็น practical number ถ้าทุกจำนวนตั้งแต่ 1 ถึงและรวมถึง $n$ สามารถแสดงเป็นผลรวมของตัวหารไม่ซ้ำกันของ $n$

คู่จำนวนเฉพาะที่ต่อเนื่องกันซึ่งมีความแตกต่างเป็นหกเรียกว่า sexy pair (เนื่องจาก "sex" เป็นคำภาษาละตินที่แปลว่า "หก") sexy pair คู่แรกคือ (23, 29)

เราอาจพบ triple-pair ในบางครั้ง ซึ่งหมายถึ sexy prime pair สามคู่ติดต่อกัน โดยที่สมาชิกตัวที่สองของแต่ละคู่จะเป็นสมาชิกตัวแรกของคู่ต่อไป

เราจะเรียกหมายเลข $n$ ว่าเป็น engineers’ paradise ถ้า

- ($n - 9$, $n - 3$), ($n - 3$, $n + 3$), ($n + 3$, $n + 9$) สร้างคู่สามคู่ และ
- ตัวเลข $n - 8$, $n - 4$, $n$, $n + 4$ และ $n + 8$ เป็น practical number

หาผลรวมของสี่ตัวแรก engineers’ paradise

# --hints--

`engineersDreamComeTrue()` ต้องคืนค่าเป็น `2039506520`

```js
assert.strictEqual(engineersDreamComeTrue(), 2039506520);
```

# --seed--

## --seed-contents--

```js
function engineersDreamComeTrue() {

  return true;
}

engineersDreamComeTrue();
```

# --solutions--

```js
// solution required
```
