---
id: 5e4ce2eaac708cc68c1df260
title: Levenshtein distance
challengeType: 5
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--


**Levenshtein distance** เป็น [metric](<https://en.wikipedia.org/wiki/string metric>) 
สำหรับวัดปริมาณความแตกต่างระหว่างสอง sequence (เช่น [edit distance](<https://en.wikipedia.org/wiki/edit distance>)) 

โดย Levenshtein distance ของสตริงสองตัวจะเป็นจำนวนครั้งที่ต้องแก้ไขสตริง เพื่อเปลี่ยนให้สร้างสองตัวนั้นมีค่าเหมือนกัน โดยการดำเนินการแก้ไขที่ทำได้คือการแทรก การลบ หรือการแทนที่ตัวอักษรตัวเดียว

เช่น:

Levenshtein distance ของ "**kitten**"และ "**sitting**" คือ 3
การแก้ไขที่ต่ำที่สุดที่จะทำให้สตริงสองตัวนี้เหมือนกันได้มี 3 ขั้นตอน ดังนี้:

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    (แทนที่ 'k' ด้วย 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (แทนที่ 'e' ด้วย 'i')</li>
  <li>sittin   sittin<strong>g</strong>    (แทรก 'g' ต่อท้าย)</li>
</ul>

*Levenshtein distance ของ "**rosettacode**", "**raisethysword**" คือ **8***


# --instructions--

ให้เขียนฟังก์ชันที่รับค่าเป็นสตริงและคืนค่าเป็น Levenshtein distance ของสองสตริงนั้น

# --hints--

`levenshtein` ต้องเป็นฟังก์ชัน

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` ต้องคืนค่าเป็น number

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` ต้องคืนค่าเป็น `1`

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` ต้องคืนค่าเป็น `2`

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` ต้องคืนค่าเป็น `3`

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` ต้องคืนค่าเป็น `2`

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` ต้องคืนค่าเป็น `8`

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` ต้องคืนค่าเป็น `8`

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
