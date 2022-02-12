---
id: 5a23c84252665b21eecc7ec2
title: Jaro distance
challengeType: 5
forumTopicId: 302292
dashedName: jaro-distance
---

# --description--

Jaro distance เป็นการวัดความคล้ายของสตริงสองตัว ยิ่ง Jaro distance สูงแปลว่ามีความคล้ายมาก โดยคะแนนจะเป็น "0" ถ้าไม่คล้ายกันเลย และเป็น "1" ถ้าเป็นสตริงที่เหมือนกัน

**คำอธิบาย**

Jaro distance \\( d_j \\) ของสตริง \\(s_1\\) และ \\(s_2\\) คือ

\\begin{align}d_j = \\begin{cases}0& & \\text{if }m=0 \\\\\\\\{\\frac {1}{3}}\\left({\\frac {m}{|s\_{1}|}}+{\\frac {m}{|s\_{2}|}}+{\\frac {m-t}{m}}\\right)& & \\text{otherwise}\\end{cases}\\end{align}

โดยที่:

<ul>
  <li>\(m\) เป็นจำนวน <i>ตัวอักษรที่เหมือนกัน (match)</i>;</li>
  <li> \(t\) เป็นครึ่งหนึ่งของจำนวนตัวอักษรที่ <i>สลับที่กัน (transposition)</i></li>
</ul>

ตัวอักษรของ \\(s_1\\) และ \\(s_2\\) ตามลำดับ จะถือว่าเป็น *match* เมื่อเป็นตัวเดียวกันและห่างกันไม่เกิน \\(\\left\\lfloor\\frac{\\ max(|s_1|,|s_2|)}{2}\\right\\rfloor-1\\)

ตัวอักษรแต่ละตัวของ \\(s_1\\) จะถูกเปรียบเทียบกับตัวอักษรที่ตรงกันทั้งหมดใน \\(s_2\\) จำนวนตัวอักษรที่ตรงกัน (แต่เรียงลำดับต่างกัน) หารด้วย 2 จะเป็นค่าของ *transpositions*

**Example**

ถ้ามีสตริงเป็น \\(s_1\\) *DWAYNE* และ \\(s_2\\) *DUANE* จะหาค่าได้จาก

<ul>
  <li>\(m = 4\)</li>
  <li>\(|s_1| = 6\)</li>
  <li>\(|s_2| = 5\)</li>
  <li>\(t = 0\)</li>
</ul>

ซึ่งจะมี Jaro score เป็น \\(d_j = \\frac{1}{3}\\left(\\frac{4}{6} + \\frac{4}{5} + \\frac{4-0}{4}\\right) = 0.822\\).

# --instructions--

ให้เขียนฟังก์ชัน a ที่รับสตริงสองตัวเป็นพารามิเตอร์ และคืนค่าเป็น Jaro distance ของสองสตริงนั้น

# --hints--

`jaro` ต้องเป็นฟังก์ชัน

```js
assert(typeof jaro == 'function');
```

`jaro("MARTHA", "MARHTA")` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof jaro('MARTHA', 'MARHTA') == 'number');
```

`jaro("MARTHA", "MARHTA")` ต้องคืนค่าเป็น `0.9444444444444445`

```js
assert.equal(jaro('MARTHA', 'MARHTA'), 0.9444444444444445);
```

`jaro("DIXON", "DICKSONX")` ต้องคืนค่าเป็น `0.7666666666666666`

```js
assert.equal(jaro('DIXON', 'DICKSONX'), 0.7666666666666666);
```

`jaro("JELLYFISH", "SMELLYFISH")` ต้องคืนค่าเป็น `0.8962962962962964`

```js
assert.equal(jaro('JELLYFISH', 'SMELLYFISH'), 0.8962962962962964);
```

`jaro("HELLOS", "CHELLO")` ต้องคืนค่าเป็น `0.888888888888889`

```js
assert.equal(jaro('HELLOS', 'CHELLO'), 0.888888888888889);
```

`jaro("ABCD", "BCDA")` ต้องคืนค่าเป็น `0.8333333333333334`

```js
assert.equal(jaro('ABCD', 'BCDA'), 0.8333333333333334);
```

# --seed--

## --seed-contents--

```js
function jaro(s, t) {

}
```

# --solutions--

```js
function jaro(s, t) {
  var s_len = s.length;
  var t_len = t.length;

  if (s_len == 0 && t_len == 0) return 1;

  var match_distance = Math.max(s_len, t_len) / 2 - 1;

  var s_matches = new Array(s_len);
  var t_matches = new Array(t_len);

  var matches = 0;
  var transpositions = 0;

  for (var i = 0; i < s_len; i++) {
    var start = Math.max(0, i - match_distance);
    var end = Math.min(i + match_distance + 1, t_len);

    for (var j = start; j < end; j++) {
      if (t_matches[j]) continue;
      if (s.charAt(i) != t.charAt(j)) continue;
      s_matches[i] = true;
      t_matches[j] = true;
      matches++;
      break;
    }
  }

  if (matches == 0) return 0;

  var k = 0;
  for (var i = 0; i < s_len; i++) {
    if (!s_matches[i]) continue;
    while (!t_matches[k]) k++;
    if (s.charAt(i) != t.charAt(k)) transpositions++;
    k++;
  }

  return ((matches / s_len) +
    (matches / t_len) +
    ((matches - transpositions / 2.0) / matches)) / 3.0;
}
```
