---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

คุณสามารถ <dfn>decrement</dfn> หรือลบ 1 ให้กับตัวแปรได้อย่างง่ายๆ โดยใช้ `--` operator

```js
i--;
```

ด้านบนนี้เทียบเท่ากับ

```js
i = i - 1;
```

**หมายเหตุ:** ทั้งบรรทัดจะกลายเป็น `i--;` ไม่จำเป็นต้องมีเครื่องหมายเท่ากับ

# --instructions--

จงปรับแก้โค้ดโดยนำ `--` operator มาใช้กับ `myVar`


# --hints--

`myVar` ควรเท่ากับ `10`

```js
assert(myVar === 10);
```

`myVar = myVar - 1;` ควรถูกเปลี่ยน

```js
assert(
  /var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code)
);
```

คุณควรใช้ตัวดำเนินการ `--` operator กับ `myVar`

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(/var myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;
```

# --solutions--

```js
var myVar = 11;
myVar--;
```
