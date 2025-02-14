---
id: 5900f4591000cf542c50ff6b
title: 'Problem 236: Luxury Hampers'
challengeType: 5
forumTopicId: 301881
dashedName: problem-236-luxury-hampers
---

# --description--
ซัพพลายเออร์ 'A' และ 'B' จัดหาผลิตภัณฑ์สำหรับตลาดกระเช้าสินค้าหรูหราจำนวนดังต่อไปนี้:
|       Product      | 'A'  | 'B'  |
|--------------------|------|------|
|    Beluga Caviar   | 5248 | 640  |
|    Christmas Cake  | 1312 | 1888 |
|    Gammon Joint    | 2624 | 3776 |
|    Vintage Port    | 5760 | 3776 |
| Champagne Truffles | 3936 | 5664 |

แม้ว่าซัพพลายเออร์จะพยายามอย่างมากในการจัดส่งสินค้าของตนในสภาพที่สมบูรณ์ แต่ก็มีการเน่าเสียบางอย่างอย่างหลีกเลี่ยงไม่ได้ นั่นคือ สินค้าเสียหาย

ซัพพลายเออร์เปรียบเทียบประสิทธิภาพของพวกเขาโดยใช้สถิติสองประเภท:

- อัตราการเน่าเสียต่อผลิตภัณฑ์ห้ารายการสำหรับซัพพลายเออร์แต่ละรายจะเท่ากับจำนวนผลิตภัณฑ์ที่ไม่ดีหารด้วยจำนวนผลิตภัณฑ์ที่จัดหา สำหรับแต่ละผลิตภัณฑ์ห้ารายการในทางกลับกัน
- อัตราการเน่าเสียโดยรวมสำหรับซัพพลายเออร์แต่ละรายจะเท่ากับจำนวนสินค้าที่เสียหายทั้งหมด หารด้วยจำนวนผลิตภัณฑ์ทั้งหมดที่ซัพพลายเออร์จัดหาให้

ที่น่าแปลกใจก็คือ ซัพพลายเออร์พบว่าอัตราการเน่าเสียต่อผลิตภัณฑ์แต่ละอย่างในห้าอัตรานั้นแย่กว่า (สูงกว่า) สำหรับ 'B' มากกว่าสำหรับ 'A' ด้วยปัจจัยเดียวกัน (อัตราส่วนของอัตราการเน่าเสีย), $m > 1$; และยังขัดแย้งกัน อัตราการเน่าเสียโดยรวมสำหรับ 'A' นั้นแย่กว่าสำหรับ 'B' ด้วย $m$ ด้วย

มี 35 $m > 1$ ซึ่งผลลัพธ์ที่น่าประหลาดใจนี้อาจเกิดขึ้นได้ ค่าที่น้อยที่สุดคือ $\frac{1476}{1475}$

ค่าสูงสุดที่เป็นไปได้ของ $m$ คือเท่าใด ให้ตอบเป็นสตริงแบบ เศษส่วนอย่างต่ำ ในรูป "u/v"

# --hints--

`luxuryHampers()` ต้องคืนค่าเป็นสตริง

```js
assert(typeof luxuryHampers() === 'string');
```

`luxuryHampers()` ต้องคืนค่าเป็นสตริง `123/59`

```js
assert.strictEqual(luxuryHampers(), '123/59');
```

# --seed--

## --seed-contents--

```js
function luxuryHampers() {

  return true;
}

luxuryHampers();
```

# --solutions--

```js
// solution required
```
