---
id: 5900f3df1000cf542c50fef1
title: 'Problem 115: Counting block combinations II'
challengeType: 5
forumTopicId: 301741
dashedName: problem-115-counting-block-combinations-ii
---

# --description--

แถวที่ยาว `n` หน่วยมีบล็อกสีแดงที่ยาวอย่างน้อย `m` หน่วย คั่นด้วยบล็อคสีดำอย่างน้อยหนึ่งอัน

ให้ฟังก์ชันการนับจำนวน $F(m, n)$ แทนจำนวนวิธีที่สามารถใส่บล็อคในแถวได้

เช่น $F(3, 29) = 673135$ และ $F(3, 30) = 1089155$

แปลว่า ถ้า m = 3 จะมี n = 30 เป็นค่าที่น้อยที่สุดที่จะทำให้จำนวนวิธีเกินหนึ่งล้าน


ในทำนองเดียวกัน ถ้า m = 10 ก็สามารถตรวจสอบได้ว่า $F(10, 56) = 880711$ และ $F(10, 57) = 1148904$ ดังนั้น n = 57 เป็นค่าที่น้อยที่สุดที่จะทำให้จำนวนวิธีเกินหนึ่งล้าน

ถ้า m = 50 ให้หาค่าที่น้อยที่สุดของ `n` ที่จะทำให้จำนวนวิธีเกินหนึ่งล้าน

**Note:** โจทย์นี้เป็นโจทย์ 114 เวอร์ชั่นที่ยากขึ้น

# --hints--

`countingBlockTwo()` ต้องคืนค่าเป็น `168`

```js
assert.strictEqual(countingBlockTwo(), 168);
```

# --seed--

## --seed-contents--

```js
function countingBlockTwo() {

  return true;
}

countingBlockTwo();
```

# --solutions--

```js
// solution required
```
