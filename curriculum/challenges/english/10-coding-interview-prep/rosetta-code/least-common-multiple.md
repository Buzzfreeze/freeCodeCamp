---
id: 5a23c84252665b21eecc7edf
title: Least common multiple
challengeType: 5
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

ตัวคูณร่วมน้อย (least common multiple: *lcm*) ของ 12 และ 18 คือ 36 เนื่องจาก 12 เป็นตัวประกอบ (12 × 3 = 36) และ 18 เป็นตัวประกอบ (18 × 2 = 36) และไม่มีจำนวนเต็มบวกที่น้อยกว่า 36 ที่มีตัวประกอบทั้งสองตัว

มีกรณีพิเศษคือถ้า *m* หรือ *n* เป็นศูนย์ จากนั้นตัวคูณร่วมน้อยจะเป็นศูนย์ วิธีหนึ่งในการคำนวณตัวคูณร่วมน้อยคือการวนซ้ำตัวคูณทั้งหมดของ *m*, จนกว่าคุณจะพบเลขที่เป็นพหุคูณของ *n*

ถ้าคุณรู้ค่าของ [ตัวหารร่วมมาก](<https://rosettacode.org/wiki/greatest common divisor>) (greatest common divisor: *gcd*) อยู่แล้วคุณจะคำนวณ *lcm* ได้จากสุตรนี้ (\\operatorname{lcm}(m, n) = \\frac{|m \\times n|}{\\operatorname{gcd}(m, n)})

# --instructions--

ให้หา ครน ของ array ของจำนวนเต็มที่ระบุให้ 

# --hints--

`LCM` ต้องเป็นฟังก์ชัน

```js
assert(typeof LCM == 'function');
```

`LCM([2, 4, 8])` ต้องคืนค่าเป็น number

```js
assert(typeof LCM([2, 4, 8]) == 'number');
```

`LCM([2, 4, 8])` ต้องคืนค่าเป็น `8`

```js
assert.equal(LCM([2, 4, 8]), 8);
```

`LCM([4, 8, 12])` ต้องคืนค่าเป็น `24`

```js
assert.equal(LCM([4, 8, 12]), 24);
```

`LCM([3, 4, 5, 12, 40])` ต้องคืนค่าเป็น `120`

```js
assert.equal(LCM([3, 4, 5, 12, 40]), 120);
```

`LCM([11, 33, 90])` ต้องคืนค่าเป็น `990`

```js
assert.equal(LCM([11, 33, 90]), 990);
```

`LCM([-50, 25, -45, -18, 90, 447])` ต้องคืนค่าเป็น `67050`

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
