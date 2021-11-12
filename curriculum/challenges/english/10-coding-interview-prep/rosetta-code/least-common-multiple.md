---
id: 5a23c84252665b21eecc7edf
title: Least common multiple
challengeType: 5
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

ตัวคูณร่วมน้อยของ 12 และ 18 คือ 36 เนื่องจาก 12 เป็นตัวประกอบ (12 × 3 = 36) และ 18 เป็นตัวประกอบ (18 × 2 = 36) และไม่มีจำนวนเต็มบวกที่น้อยกว่า 36 ที่มีตัวประกอบทั้งสอง . เป็นกรณีพิเศษถ้าอย่างใดอย่างหนึ่ง *m* หรือ *n* 
เป็นศูนย์ จากนั้นตัวคูณร่วมน้อยจะเป็นศูนย์ วิธีหนึ่งในการคำนวณตัวคูณร่วมน้อยคือการวนซ้ำตัวคูณทั้งหมดของ *m*, จนกว่าคุณจะพบอันที่เป็นพหุคูณของ *n*. หากมี *gcd* สำหรับ [greatest common divisor](<https://rosettacode.org/wiki/greatest common divisor>), สูตรคำนวณ *lcm*. ( \\operatorname{lcm}(m, n) = \\frac{|m \\times n|}{\\operatorname{gcd}(m, n)} )

# --instructions--

คำนวณผลคูณร่วมน้อยของอาร์เรย์ของจำนวนเต็ม ให้ *m* และ *n* ตัวคูณร่วมน้อยคือจำนวนเต็มบวกที่เล็กที่สุดที่มีทั้ง *m* และ *n* เป็นfactor

# --hints--

`LCM` ควรเป็น function.

```js
assert(typeof LCM == 'function');
```

`LCM([2, 4, 8])` ควร return number.

```js
assert(typeof LCM([2, 4, 8]) == 'number');
```

`LCM([2, 4, 8])` ควร return `8`.

```js
assert.equal(LCM([2, 4, 8]), 8);
```

`LCM([4, 8, 12])` ควร return `24`.

```js
assert.equal(LCM([4, 8, 12]), 24);
```

`LCM([3, 4, 5, 12, 40])` ควร return `120`.

```js
assert.equal(LCM([3, 4, 5, 12, 40]), 120);
```

`LCM([11, 33, 90])` ควร return `990`.

```js
assert.equal(LCM([11, 33, 90]), 990);
```

`LCM([-50, 25, -45, -18, 90, 447])` ควร return `67050`.

```js
assert.equal(LCM([-50, 25, -45, -18, 90, 447]), 67050);
```

# --seed--

## --seed-contents--

```js
function LCM(A) {

}
```

# --solutions--

```js
function LCM(A) {
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a = Math.abs(c * A[i]) / (a + b);
  }
  return a;
}
```
