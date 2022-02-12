---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 5
forumTopicId: 302320
dashedName: soundex
---

# --description--

Soundex เป็นอัลกอริทึมสำหรับสร้าง index สำหรับคำตามการออกเสียง เป้าหมายคือการเข้ารหัสคำพ้องเสียงกับการแสดงเดียวกันเพื่อให้สามารถจับคู่ได้แม้ว่าจะมีการสะกดต่างกันเล็กน้อย (จาก [บทความ WP](https://en.wikipedia.org/wiki/soundex)) มีปัญหาสำคัญในการใช้งานหลายอย่างที่เกี่ยวข้องกับการแยกพยัญชนะสองตัวที่มีรหัส soundex เดียวกัน! ตาม [กฎอย่างเป็นทางการ](https://www.archives.gov/research/census/soundex.html) ดังนั้นตรวจสอบ เช่นถ้า **Ashcraft** ถูก code เป็น **A-261**

<ul>
  <li>ถ้าสระ (A, E, I, O, U) คั่นกลางระหว่างพยัญชนะที่มี soundex code เดียวกัน จะเป็น code พยัญชนะทางด้านขวา เช่น Tymczak จะเปลงเป็น T-522 (T, 5 แทนที่ M, 2 แทนที่ C, ไม่สนใจ Z (ลองดูกฏเรื่อง "Side-by-Side" ด้านบน), 2 แทนที่ K) เมื่อสระ "A" คั่นกลางระหว่าง Z และ K จะทำให้ K นั้นเป็น code</li>
  <li>ถ้า "H" หรือ "W" คั่นกลางระหว่างพยัญชนะสองตัวที่มี soundex code เดียวกัน พยัญชนะทางด้านขวาต้องไม่เป็น code เช่น: Ashcraft จะแปลงเป็น A-261 (A, 2 แทนที่ S, ไม่สนใจ C, 6 แทนที่ R, 1 แทนที่ F) ไม่ใช่ A-226</li>
</ul>

# --instructions--

เขียนฟังก์ชันที่รับสตริงเป็นพารามิเตอร์และคือค่าเป็นสตริงที่แปลงแล้ว

# --hints--

`soundex` ต้องเป็นฟังก์ชัน

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` ต้องคืนค่าเป็นสตริง

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` ต้องคืนค่าเป็น `"S532"`

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` ต้องคืนค่าเป็น `"E251"`

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` ต้องคืนค่าเป็น `"S532"`

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` ต้องคืนค่าเป็น `"E251"`

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` ต้องคืนค่าเป็น `"E460"`

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` ต้องคืนค่าเป็น `"G200"`

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` ต้องคืนค่าเป็น `"H416"`

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` ต้องคืนค่าเป็น `"K530"`

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` ต้องคืนค่าเป็น `"L300"`

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` ต้องคืนค่าเป็น `"L222"`

```js
assert.equal(soundex('Lukasiewicz'), 'L222');
```

# --seed--

## --seed-contents--

```js
function soundex(s) {

}
```

# --solutions--

```js
function soundex(s) {
  var a = s.toLowerCase().split('');
  var f = a.shift(),
    r = '',
    codes = {
      a: '',
      e: '',
      i: '',
      o: '',
      u: '',
      b: 1,
      f: 1,
      p: 1,
      v: 1,
      c: 2,
      g: 2,
      j: 2,
      k: 2,
      q: 2,
      s: 2,
      x: 2,
      z: 2,
      d: 3,
      t: 3,
      l: 4,
      m: 5,
      n: 5,
      r: 6
    };
  r =
    f +
    a
      .map(function(v, i, a) {
        return codes[v];
      })
      .filter(function(v, i, a) {
        return i === 0 ? v !== codes[f] : v !== a[i - 1];
      })
      .join('');

  return (r + '000').slice(0, 4).toUpperCase();
}
```
