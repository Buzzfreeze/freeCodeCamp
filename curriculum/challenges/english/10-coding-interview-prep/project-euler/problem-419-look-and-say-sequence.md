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

ลองพูดเลขพวกนี้เป็นภาษาอังกฤษ :

1 คือ 'one one' $→ 11$

11 คือ 'two ones' $→ 21$

21 คือ 'one two and one one' $→ 1211$

1211 คือ 'one one, one two and two ones' $→ 111221$

111221 คือ 'three ones, two twos and one one' $→ 312211$

...

กำหนดให้ $A(n)$, $B(n)$ และ $C(n)$ เป็นเลขหนึ่ง สอง และสามในองค์ประกอบที่ $n$ ของลำดับตามลำดับ 

จะได้ว่า $A(40) = 31\\,254$, $B(40) = 20\\,259$ และ $C(40) = 11\\,625$

ให้หา $A(n)$, $B(n)$ และ $C(n)$ เมื่อ $n = {10}^{12}$ โดยให้นำคำตอบไป mod กับ $2^{30}$ เป็นสตริงและแบ่งค่า $A$, $B$ และ $C$ ออกโดยใช้คอมม่า 

เช่น ถ้า $n = 40$ คำตอบจะเป็น `31254,20259,11625`

# --hints--

`lookAndSaySequence()` ต้องคืนค่าเป็น

```js
assert(typeof lookAndSaySequence() === 'string');
```


`lookAndSaySequence()` ต้องคืนค่าเป็น `998567458,1046245404,43363922`

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
