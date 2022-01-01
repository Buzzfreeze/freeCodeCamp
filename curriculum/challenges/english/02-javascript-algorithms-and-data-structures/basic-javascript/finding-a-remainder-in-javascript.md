---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

เครื่องหมาย <dfn>หารเอาเศษ</dfn> `%` ใช้สำหรับการหาเศษที่เหลือจากการหารเลข

**ตัวอย่าง**

<blockquote>5 % 2 = 1 เพราะว่า<br>Math.floor(5 / 2) = 2 (ผลหาร)<br>2 * 2 = 4<br>5 - 4 = 1 (เศษ)</blockquote>

**การใช้งาน**  

ในทางคณิตศาสตร์ สามารถตรวจสอบตัวเลขว่าเป็นเลขคู่หรือเลขคี่ โดยการดูเศษที่เหลือจากการหารด้วย `2`

<blockquote>17 % 2 = 1 (17 เป็นเลขคี่)<br>48 % 2 = 0 (48 เป็นเลขคู่)</blockquote>

**หมายเหตุ:**  เครื่องหมาย <dfn>หารเอาเศษ</dfn> บางครั้งถูกมองว่าเป็นการคำนวณ modulus แต่จริงๆ แล้วไม่ใช่ โดยการหารเอาเศษนั้นคล้าย modulus แต่ผลที่ได้มักไม่ถูกต้องเมื่อคำนวณเลขติดลบ

# --instructions--

จงกำหนดตัวแปร `remainder` ให้มีค่าเท่ากับเศษของการหาร `11` ด้วย `3` โดยใช้เครื่องหมาย <dfn>หารเอาเศษ</dfn> (`%`)

# --hints--

ควรกำหนดค่าเริ่มต้นของตัวแปร `remainder`

```js
assert(/var\s+?remainder/.test(code));
```

ตัวแปร `remainder` ควรมีค่าเป็น `2`

```js
assert(remainder === 2);
```

คุณควรใช้เครื่องหมาย `%`

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

var remainder;
```

# --solutions--

```js
var remainder =  11 % 3;
```
