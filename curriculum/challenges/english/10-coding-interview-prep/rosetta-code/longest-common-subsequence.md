---
id: 5e6dd1278e6ca105cde40ea9
title: Longest common subsequence
challengeType: 5
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

**longest common subsequence** (หรือ [**LCS**](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem)) ของกลุ่ม A และ B คือกลุ่มของ element ที่ยาวที่สุดจาก A และ B ที่เหมือนกันระหว่างสองกลุ่มและอยู่ในลำดับเดียวกันในแต่ละกลุ่ม ตัวอย่างเช่น ลำดับ "1234" และ "1224533324" มี LCS เป็น "1234":

***1234***

***12***245***3***332***4***

สำหรับตัวอย่างstring ให้พิจารณาลำดับ "thisisatest" และ "testing123testing" LCS จะเป็น "tsitest":

***t***hi***si***sa***test***

***t***e***s***t***i***ng123***test***ing.

ให้เขียนโค้ดที่จัดการกับสตริงเท่านั้น

ลองอ่านข้อมูลเพิ่มเติมได้ที่ [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)

# --instructions--

ให้เขียนฟังก์ชันที่คืนค่าเป็น LCS ของทั้งสองสตริง โดยให้เป็น case-sensitive ด้วย

# --hints--

`lcs` ต้องเป็นฟังก์ชัน

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` ต้องคืนค่าเป็น string

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` ต้องคืนค่าเป็น `"tsitest"`

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` ต้องคืนค่าเป็น `"ADH"`

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` ต้องคืนค่าเป็น `"GTAB"`

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` ต้องคืนค่าเป็น `"BDCB"`

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` ต้องคืนค่าเป็น `"ABAD"`

```js
assert.equal(lcs('ABAZDC', 'BACBAD'), 'ABAD');
```

# --seed--

## --seed-contents--

```js
function lcs(a, b) {

}
```

# --solutions--

```js
function lcs(a, b) {
  var aSub = a.substr(0, a.length - 1);
  var bSub = b.substr(0, b.length - 1);

  if (a.length === 0 || b.length === 0) {
    return '';
  } else if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
    return lcs(aSub, bSub) + a.charAt(a.length - 1);
  } else {
    var x = lcs(a, bSub);
    var y = lcs(aSub, b);
    return (x.length > y.length) ? x : y;
  }
}
```
