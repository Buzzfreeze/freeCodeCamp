---
id: cf1111c1c11feddfaeb4bdef
title: Subtract One Number from Another with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
forumTopicId: 18314
dashedName: subtract-one-number-from-another-with-javascript
---

# --description--

เราสามารถลบตัวเลขออกจากอีกตัวเลขได้เช่นกัน  
JavaScript ใช้เครื่องหมาย `-` สำหรับการลบ

**Example**

```js
myVar = 12 - 6;
```

ตัวแปร `myVar` จะมีค่าเท่ากับ `6`

# --instructions--

จงเปลี่ยน `0` เพื่อให้ตัวแปร `difference` มีค่าเป็น `12`

# --hints--

ตัวแปร `difference` ควรมีค่าเท่ากับ 12

```js
assert(difference === 12);
```

คุณควรนำ 45 มาลบด้วยตัวเลขอีกตัวหนึ่ง

```js
assert(/difference=45-33;?/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'difference = '+z;})(difference);
```

## --seed-contents--

```js
var difference = 45 - 0;
```

# --solutions--

```js
var difference = 45 - 33;
```
