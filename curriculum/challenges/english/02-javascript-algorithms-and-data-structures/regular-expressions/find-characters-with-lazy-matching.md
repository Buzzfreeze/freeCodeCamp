---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

ในเรื่อง regular expression เราจะมีคำว่า <dfn>greedy</dfn> match ซึ่งแปลว่าการหาส่วนของ string ที่ยาวที่สุดที่ตรงกับ pattern ที่เราระบุ แล้วคืนค่าเป็นส่วนของ string นั้น กับคำว่า <dfn>lazy</dfn> match ซึ่งเป็นการค้นหาส่วนของ string ที่สั้นที่สุดที่ตรงกับ pattern ที่เราระบุ

ลองดู regex `/t[a-z]*i/` ซึ่ง pattern นี้จะหาส่วนของ string ที่ขึ้นต้นด้วย `t` ลงท้ายด้วย `i` และมีตัวอักษรอะไรก็ได้ (ตังแต่ `a` ถึง `z`) อยู่ระหว่าง 2 ตัวนั้น 

ถ้าเราใช้ regex นี้กับ string `"titanic"` จะเป็นการใช้แบบ greedy ทำให้ค่าที่ match คืนค่ากลับมาเป็น `["titani"]` เพราะว่าเป็นส่วนของ string ที่ยาวที่สุดที่ตรงกับ pattern

ถ้าเราเติม `?` ให้กับ regex จะเปลี่ยนให้เป็นการหาแบบ lazy matching คราวนี้พอเราใช้ regex `/t[a-z]*?i/` กับ string `"titanic"` เราจะได้ค่าเป็น `["ti"]` แทน

**Note:** เราไม่ควร parse HTML โดยใช้ regular expression แต่จะค้นหา pattern ใน string ที่เป็น HTML ได้

# --instructions--

ให้แก้ regex `/<.*>/` ให้ได้ค่า `result` เป็น HTML tag `<h1>` แทนที่จะเป็น `"<h1>Winter is coming</h1>"` ถ้ายังจำได้เราจะมีการใช้ wildcard `.` ใน regex เพื่อ match ตัวอักษรอะไรก็ได้ด้วย

# --hints--

ตัวแปร `result` ต้องมีค่าเป็น array ที่มี string `<h1>`

```js
assert(result[0] == '<h1>');
```

ต้องใช้ lazy matching ใน `myRegex`

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

ต้องไม่มีคำว่า `h1` ใน `myRegex` 

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // แก้บรรทัดนี้
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // แก้บรรทัดนี้
let result = text.match(myRegex);
```
