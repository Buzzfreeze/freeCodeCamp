---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 5
forumTopicId: 302320
dashedName: soundex
---

# --description--

Soundex เป็นalgorithmธึมสำหรับสร้างindexสำหรับคำตามการออกเสียง เป้าหมายคือการเข้ารหัสคำพ้องเสียงกับการแสดงเดียวกันเพื่อให้สามารถจับคู่ได้แม้ว่าจะมีการสะกดต่างกันเล็กน้อย (จาก [บทความ WP](https://en.wikipedia.org/wiki/soundex)) มีปัญหาสำคัญในการใช้งานหลายอย่างที่เกี่ยวข้องกับการแยกพยัญชนะสองตัวที่มีรหัส soundex เดียวกัน! ตาม [กฎอย่างเป็นทางการ](https://www.archives.gov/research/census/soundex.html) ดังนั้นตรวจสอบเช่น ถ้า **Ashcraft** ถูก code เป็น **A-261**.

<ul>
  <li>If a vowel (A, E, I, O, U) separates two consonants that have the same soundex code, the consonant to the right of the vowel is coded. Tymczak is coded as T-522 (T, 5 for the M, 2 for the C, Z ignored (see "Side-by-Side" rule above), 2 for the K). Since the vowel "A" separates the Z and K, the K is coded.</li>
  <li>If "H" or "W" separate two consonants that have the same soundex code, the consonant to the right of the vowel is not coded. Example: Ashcraft is coded A-261 (A, 2 for the S, C ignored, 6 for the R, 1 for the F). It is not coded A-226.</li>
</ul>

# --instructions--

เขียนฟังก์ชันที่รับstringเป็นพารามิเตอร์และส่งกลับstringที่เข้ารหัส

# --hints--

`soundex` ควรเป็น function.

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` ควร return string.

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` ควร return `"S532"`.

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` ควร return `"E251"`.

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` ควร return `"S532"`.

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` ควร return `"E251"`.

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` ควร return `"E460"`.

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` ควร return `"G200"`.

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` ควร return `"H416"`.

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` ควร return `"K530"`.

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` ควร return `"L300"`.

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` ควร return `"L222"`.

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
