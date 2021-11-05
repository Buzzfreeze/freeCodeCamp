---
id: 5900f5361000cf542c510049
title: 'Problem 458: Permutations of Project'
challengeType: 5
forumTopicId: 302132
dashedName: problem-458-permutations-of-project
---

# --description--

พิจารณาตัวอักษร $A$ ที่สร้างจากตัวอักษรของคำว่า `project`: $A = \\{c, e, j, o, p, r, t\\}$

ให้ $T(n)$ เป็นจำนวนstringที่มีความยาว $n$ ซึ่งประกอบด้วยตัวอักษรจาก $A$ ที่ไม่มีstringย่อยที่เป็นหนึ่งในการเปลี่ยนแปลง 5040 ของ `project`.

$T(7) = 7^7 - 7! = 818\\,503$.

หา  $T({10}^{12})$. มีคำตอบ 9 หลัก

# --hints--

`permutationsOfProject()` ควร return `423341841`.

```js
assert.strictEqual(permutationsOfProject(), 423341841);
```

# --seed--

## --seed-contents--

```js
function permutationsOfProject() {

  return true;
}

permutationsOfProject();
```

# --solutions--

```js
// solution required
```
