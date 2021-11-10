---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

คุณสามารถ <dfn>increment</dfn> หรือบวก 1 ให้กับตัวแปรได้อย่างง่ายๆ โดยใช้ `++` operator

```js
i++;
```

ด้านบนนี้เทียบเท่ากับ

```js
i = i + 1;
```

**หมายเหตุ:** ทั้งบรรทัดจะกลายเป็น `i++;` ไม่จำเป็นต้องมีเครื่องหมายเท่ากับ

# --instructions--

จงปรับแก้โค้ดโดยนำ `++` operator มาใช้กับ `myVar`

# --hints--

`myVar` ควรเท่ากับ `88`

```js
assert(myVar === 88);
```

คุณไม่ควรใช้ assignment operator

```js
assert(
  /var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code)
);
```

คุณควรใช้ `++` operator

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(/var myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

# --solutions--

```js
var myVar = 87;
myVar++;
```
