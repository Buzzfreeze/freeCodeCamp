---
id: 56533eb9ac21ba0edf2244ae
title: Finding a Remainder in JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

<dfn>remainder</dfn> operator `%` ให้ผลลัพธ์เป็นเศษที่เหลือจากการหารของเลขสองตัว

**Example**

<blockquote>5 % 2 = 1 because<br>Math.floor(5 / 2) = 2 (Quotient)<br>2 * 2 = 4<br>5 - 4 = 1 (Remainder)</blockquote>

**Usage**  

# - ในทางคณิตศาสตร์ สามารถตรวจสอบตัวเลขว่าเป็นเลขคู่หรือเลขคี่ โดยการเช็คเศษที่เหลือจากการหารด้วย `2`

# - <blockquote>17 % 2 = 1 (17 เป็นเลขคี่)<br>48 % 2 = 0 (48 เป็นเลขคู่)</blockquote>

**Note:** The <dfn>remainder</dfn> operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

# - **หมายเหตุ:**  <dfn>remainder</dfn> operator บางครั้งถูกมองว่าเป็น modulus operator แต่จริงๆ แล้วไม่ใช่ มันคล้าย modulus แต่ผลที่ได้มักไม่ถูกต้องเมื่อทำงานกับเลขติดลบ

# --instructions--

จงกำหนด `remainder` ให้มีค่าเท่ากับ remainder ของ `11` หารด้วย `3` โดยใช้ <dfn>remainder</dfn> (`%`) operator

# --hints--

ตัวแปร `remainder` ควรกำหนดเริ่มต้น

```js
assert(/var\s+?remainder/.test(code));
```

ค่าของ `remainder` ควรเป็น `2`

```js
assert(remainder === 2);
```

คุณควรใช้โอเปอเรเตอร์ `%` operator

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
// Only change code below this line

var remainder;
```

# --solutions--

```js
var remainder =  11 % 3;
```
