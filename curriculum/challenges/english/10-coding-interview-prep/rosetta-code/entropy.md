---
id: 599d15309e88c813a40baf58
title: Entropy
challengeType: 5
forumTopicId: 302254
dashedName: entropy
---

# --description--

คำนวน Shannon entropy H ของสตริงที่ระบุ

จากตัวแปรสุ่ม $X$ ที่เป็นสตริงของ $N$ "สัญลักษณ์" (อักขระทั้งหมด) ซึ่งประกอบด้วยอักขระที่แตกต่างกัน $n$ (n=2 สำหรับไบนารี) Shannon entropy ของ X ในหน่วยบิต/สัญลักษณ์คือ

$H_2(X) = -\\sum\_{i=1}^n \\frac{count_i}{N} \\log_2 \\left(\\frac{count_i}{N}\\right)$

เมื่อ $count_i$ คือการนับตัวอักษร $n_i$.

# --hints--

`entropy` ต้องเป็นฟังก์ชัน

```js
assert(typeof entropy === 'function');
```

`entropy("0")` ต้องคืนค่าเป็น `0`

```js
assert.equal(entropy('0'), 0);
```

`entropy("01")` ต้องคืนค่าเป็น `1`

```js
assert.equal(entropy('01'), 1);
```

`entropy("0123")` ต้องคืนค่าเป็น `2`

```js
assert.equal(entropy('0123'), 2);
```

`entropy("01234567")` ต้องคืนค่าเป็น `3`

```js
assert.equal(entropy('01234567'), 3);
```

`entropy("0123456789abcdef")` ต้องคืนค่าเป็น `4`

```js
assert.equal(entropy('0123456789abcdef'), 4);
```

`entropy("1223334444")` ต้องคืนค่าเป็น `1.8464393446710154`

```js
assert.equal(entropy('1223334444'), 1.8464393446710154);
```

# --seed--

## --seed-contents--

```js
function entropy(s) {

}
```

# --solutions--

```js
function entropy(s) {
    // Create a dictionary of character frequencies and iterate over it.
  function process(s, evaluator) {
    let h = Object.create(null),
      k;
    s.split('').forEach(c => {
      h[c] && h[c]++ || (h[c] = 1); });
    if (evaluator) for (k in h) evaluator(k, h[k]);
    return h;
  }
    // Measure the entropy of a string in bits per symbol.

  let sum = 0,
    len = s.length;
  process(s, (k, f) => {
    const p = f / len;
    sum -= p * Math.log(p) / Math.log(2);
  });
  return sum;
}
```
