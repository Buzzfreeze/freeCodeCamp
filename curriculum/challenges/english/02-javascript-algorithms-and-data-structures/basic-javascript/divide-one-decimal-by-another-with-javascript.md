---
id: bd7993c9ca9feddfaeb7bdef
title: Divide One Decimal by Another with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZe9AW'
forumTopicId: 18255
dashedName: divide-one-decimal-by-another-with-javascript
---

# --description--

ตอนนี้ลองหารเลขทศนิยมนึงด้วยเลขทศนิยมอีกตัวนึง

# --instructions--

จงเปลี่ยน `0.0` เพื่อให้ `quotient` ได้ผลลัพธ์เท่ากับ `2.2`


# --hints--

ตัวแปร `quotient` ควรเท่ากับ `2.2`

```js
assert(quotient === 2.2);
```

คุณควรใช้เครื่องหมาย `/` เพื่อหาร 4.4 ด้วย 2 

```js
assert(/4\.40*\s*\/\s*2\.*0*/.test(code));
```

ตัวแปร quotient ควรกำหนดค่าเพียงครั้งเดียว

```js
assert(code.match(/quotient/g).length === 1);
```

# --seed--

## --after-user-code--

```js
(function(y){return 'quotient = '+y;})(quotient);
```

## --seed-contents--

```js
var quotient = 0.0 / 2.0; // Change this line
```

# --solutions--

```js
var quotient = 4.4 / 2.0;
```
