---
id: 5900f4f11000cf542c510003
title: 'Problem 387: Harshad Numbers'
challengeType: 5
forumTopicId: 302051
dashedName: problem-387-harshad-numbers
---

# --description--

ตัวเลข Harshad หรือ Niven คือตัวเลขที่หารด้วยผลรวมของตัวเลขลงตัว

201 เป็นจำนวน Harshad เนื่องจากหารด้วย 3 ลงตัว (ผลรวมของตัวเลข)

เมื่อเราตัดหลักสุดท้ายของ 201 เราจะได้ 20 ซึ่งเป็นเลข Harshad 

เมื่อเราตัดตัวเลขสุดท้ายของ 20 เราจะได้ 2 ซึ่งเป็นเลข Harshad ด้วย

ให้เลข Harshad ที่เมื่อตัดเลขทางด้านขวาก็ยังจะเป็นเลข Harshad อยู่ว่าเป็น right truncatable Harshad

อีกทั้ง

$\frac{201}{3} = 67$ เป็นจำนวนเฉพสะ

และให้เลข Harshad ที่เมื่อหารด้วยผลรวมแล้วกลายเป็นจำนวนเฉพาะว่า strong Harshad

คราวนี้ ลองดู 2011 ซึ่งเป็นจำนวนเฉพาะ  
เมื่อเราตัดเลขหลักสุดท้ายออก เราจะได้ 201 ซึ่งเป็นตัวเลข right truncatable Harshad เราจะเรียกเลขนี้ว่าเป็น "strong, right truncatable Harshad prime"

ผลรวมของ "strong, right truncatable Harshad prime" ที่น้อยกว่า 10000 คือ 90619

หาผลรวมของ "strong, right truncatable Harshad prime" ที่น้อยกว่า ${10}^{14}$

# --hints--

`harshadNumbers()` ต้องคืนค่าเป็น `696067597313468`

```js
assert.strictEqual(harshadNumbers(), 696067597313468);
```

# --seed--

## --seed-contents--

```js
function harshadNumbers() {

  return true;
}

harshadNumbers();
```

# --solutions--

```js
// solution required
```
