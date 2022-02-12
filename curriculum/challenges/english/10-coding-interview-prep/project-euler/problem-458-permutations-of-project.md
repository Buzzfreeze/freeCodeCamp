---
id: 5900f5361000cf542c510049
title: 'Problem 458: Permutations of Project'
challengeType: 5
forumTopicId: 302132
dashedName: problem-458-permutations-of-project
---

# --description--

พิจารณาตัวอักษร $A$ ที่สร้างจากตัวอักษรของคำว่า `project`: $A = \\{c, e, j, o, p, r, t\\}$

ให้ $T(n)$ เป็นจำนวนสตริงที่มีความยาว $n$ ซึ่งประกอบด้วยตัวอักษรจาก $A$ ที่ไม่มีสตริงย่อยที่เป็นหนึ่งในการขยับตัวอักษรทั้ง 5040 แบบของ `project`

$T(7) = 7^7 - 7! = 818\\,503$.

หา $T({10}^{12})$ โดยให้ตอบเป็นเลขเก้าหลักสุดท้าย

# --hints--

`permutationsOfProject()` ต้องคืนค่าเป็น `423341841`

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
