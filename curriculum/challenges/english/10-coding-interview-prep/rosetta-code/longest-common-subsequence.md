---
id: 5e6dd1278e6ca105cde40ea9
title: Longest common subsequence
challengeType: 5
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

**longest common subsequence** (หรือ [**LCS**](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem)) ของกลุ่ม A และ B คือกลุ่มขององค์ประกอบที่ยาวที่สุดจาก A และ B ที่เหมือนกันระหว่างสองกลุ่มและอยู่ในลำดับเดียวกันในแต่ละกลุ่ม ตัวอย่างเช่น ลำดับ "1234" และ "1224533324" มี LCS เป็น "1234":

***1234***

***12***245***3***332***4***

สำหรับตัวอย่างstring ให้พิจารณาลำดับ "thisisatest" และ "testing123testing" LCS จะเป็น "tsitest":

***t***hi***si***sa***test***

***t***e***s***t***i***ng123***test***ing.

รหัสของคุณต้องจัดการกับstringเท่านั้น

สำหรับข้อมูลเพิ่มเติมเกี่ยวกับปัญหานี้ โปรดดูที่ [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem).

# --instructions--

เขียนฟังก์ชันที่คำนึงถึงขนาดตัวพิมพ์ที่ส่งคืน LCS ของสองstring คุณไม่จำเป็นต้องแสดง LCS หลายรายการ

# --hints--

`lcs` ควรเป็น function.

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` ควร return string.

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` ควร return `"tsitest"`.

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` ควร return `"ADH"`.

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` ควร return `"GTAB"`.

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` ควร return `"BDCB"`.

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` ควร return `"ABAD"`.

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
