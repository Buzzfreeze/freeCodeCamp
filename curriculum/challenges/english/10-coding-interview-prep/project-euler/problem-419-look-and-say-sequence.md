---
id: 5900f5101000cf542c510022
title: 'Problem 419: Look and say sequence'
challengeType: 5
forumTopicId: 302088
dashedName: problem-419-look-and-say-sequence
---

# --description--

ลำดับการมองและพูดคือ 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...

ลำดับเริ่มต้นด้วย 1 และสมาชิกอื่น ๆ ทั้งหมดได้มาจากการอธิบายสมาชิกก่อนหน้าในรูปของตัวเลขที่ต่อเนื่องกัน

ช่วยทำสิ่งนี้ออกมาดัง ๆ :

1 คือ 'หนึ่งเดียว' $→ 11$

11 คือ 'สองคน' $→ 21$

21 คือ 'หนึ่งสองและหนึ่ง' $→ 1211$

1211 คือ 'หนึ่ง หนึ่ง สอง และสอง' $→ 111221$

111221 คือ 'สามตัว สองสอง และหนึ่ง' $→ 312211$

...

กำหนด $A(n)$, $B(n)$ และ $C(n)$ เป็นจำนวนหนึ่ง สอง และสามในองค์ประกอบ $n$'th ของลำดับตามลำดับ สามารถตรวจสอบได้ว่า $A(40) = 31\\,254$, $B(40) = 20\\,259$ and $C(40) = 11\\,625$

ค้นหา $A(n)$, $B(n)$ และ $C(n)$ สำหรับ $n = {10}^{12}$ ป้อนค่า modulo $2^{30}$ เป็นสตริงและแยกค่าของคุณสำหรับ $A$, $B$ และ $C$ ด้วยเครื่องหมายจุลภาค เช่น. สำหรับ $n = 40$ คำตอบจะเป็น `31254,20259,11625`

# --hints--

`lookAndSaySequence()` ควร return string.

```js
assert(typeof lookAndSaySequence() === 'string');
```


`lookAndSaySequence()` ควร return string `998567458,1046245404,43363922`.

```js
assert.strictEqual(lookAndSaySequence(), '998567458,1046245404,43363922');
```

# --seed--

## --seed-contents--

```js
function lookAndSaySequence() {

  return true;
}

lookAndSaySequence();
```

# --solutions--

```js
// solution required
```
