---
id: 587d7db6367417b2b2512b9b
title: Find Characters with Lazy Matching
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

ในเรื่อง regular expressions <dfn>greedy</dfn> match ค้นหาส่วนของ string ที่ยาวที่สุดที่ตรงกับ regex pattern แล้วคืนค่าเป็นส่วนของ string นั้น ส่วน <dfn>lazy</dfn> match เป็นการค้นหาส่วนของ string ที่สั้นที่สุดที่ตรงกับ regex pattern

คุณสามารถกำหนด regex `/t[a-z]*i/` ให้กับ string `"titanic"` โดย regex นี้มี pattern ที่เริ่มต้นด้วย `t` ลงท้ายด้วย `i` และมีตัวอักษรบางตัวอยู่ระหว่าง `t` กับ `i`

Regular expressions มีค่าเริ่มต้นเป็น greedy ดังนั้นการ match ควรคืนค่าเป็น `["titani"]` เนื่องจากเป็นการค้นหา substring ที่ยาวที่สุดที่ตรงกับ pattern

อย่างไรก็ตาม คุณสามารถใช้ตัวอักษร `?` เพื่อเปลี่ยนให้เป็น lazy matching โดยเมื่อใช้ regex `/t[a-z]*?i/` กับ string `"titanic"` ก็จะคืนค่าเป็น `["ti"]`

**Note:** ควรหลีกเลี่ยงการวิเคราะห์ HTML ด้วย regular expressions แต่การทำ pattern matching กับ HTML string ด้วย regular expressions สามารถทำได้

# --instructions--

จงปรับแก้ regex `/<.*>/` ให้คืนค่า HTML tag `<h1>` ไม่ใช่ค่า `"<h1>Winter is coming</h1>"` หากยังจำได้ wildcard `.` ใน regular expression สามารถ match ตัวอักษรอะไรก็ได้

# --hints--

ตัวแปร `result` ควรเป็น array ที่มี `<h1>`

```js
assert(result[0] == '<h1>');
```

`myRegex` ควรใช้ lazy matching

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` ไม่ควรรวม string `h1`

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```
