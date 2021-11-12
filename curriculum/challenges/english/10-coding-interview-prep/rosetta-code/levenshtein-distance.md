---
id: 5e4ce2eaac708cc68c1df260
title: Levenshtein distance
challengeType: 5
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--


ในทฤษฎีสารสนเทศและวิทยาการคอมพิวเตอร์ **Levenshtein distance** เป็น [metric](<https://en.wikipedia.org/wiki/string metric>) 
สำหรับวัดปริมาณความแตกต่างระหว่างสองลำดับ (i.e. an [edit distance](<https://en.wikipedia.org/wiki/edit distance>)). ระยะห่าง Levenshtein ระหว่างสองstringถูกกำหนดให้เป็นจำนวนการแก้ไขขั้นต่ำที่จำเป็นในการแปลงstringหนึ่งเป็นstringอื่น โดยการดำเนินการแก้ไขที่อนุญาตคือการแทรก การลบ หรือการแทนที่อักขระตัวเดียว

เช่น:

ระยะทาง Levenshtein ระหว่าง "**kitten**"และ "**sitting**" คือ 3
เนื่องจากการแก้ไขสามรายการต่อไปนี้เปลี่ยนเป็นการแก้ไขอื่น และไม่มีวิธีการแก้ไขน้อยกว่าสามรายการ:

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    (substitution of 'k' with 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (substitution of 'e' with 'i')</li>
  <li>sittin   sittin<strong>g</strong>    (insert 'g' at the end).</li>
</ul>

*The Levenshtein distance between "**rosettacode**", "**raisethysword**" is **8**.*

*The distance between two strings is same as that when both strings are reversed.*

# --instructions--

เขียนฟังก์ชันที่ส่งคืนระยะห่าง Levenshtein ระหว่างสองstringที่กำหนดเป็นพารามิเตอร์

# --hints--

`levenshtein` ควรเป็น function.

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` ควร return number.

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` ควร return `1`.

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` ควร return `2`.

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` ควร return `3`.

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` ควร return `2`.

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` ควร return `8`.

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` ควร return `8`.

```js
assert.equal(levenshtein('mississippi', 'swiss miss'), 8);
```

# --seed--

## --seed-contents--

```js
function levenshtein(a, b) {

}
```

# --solutions--

```js
function levenshtein(a, b) {
  var t = [], u, i, j, m = a.length, n = b.length;
  if (!m) { return n; }
  if (!n) { return m; }
  for (j = 0; j <= n; j++) { t[j] = j; }
  for (i = 1; i <= m; i++) {
    for (u = [i], j = 1; j <= n; j++) {
      u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
    } t = u;
  } return u[n];
}
```
