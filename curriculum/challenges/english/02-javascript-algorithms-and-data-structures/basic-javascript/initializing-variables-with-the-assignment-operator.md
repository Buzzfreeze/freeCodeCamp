---
id: 56533eb9ac21ba0edf2244a9
title: Initializing Variables with the Assignment Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWJ4Bfb'
forumTopicId: 301171
dashedName: initializing-variables-with-the-assignment-operator
---

# --description--

การกำหนดค่าเริ่มต้นให้กับตัวแปร คือการกำหนดค่าของตัวแปรในบรรทัดเดียวกันกับการประกาศตัวแปร

```js
var myVar = 0;
```

สร้างตัวแปรใหม่ชื่อ `myVar` และกำหนดค่าเริ่มต้นเป็น `0`

# --instructions--

จงสร้างตัวแปร `a` ด้วย `var` และกำหนดค่าเริ่มต้นเป็น `9`

# --hints--

คุณควรประกาศตัวแปร `a` มีค่าเริ่มต้นเป็น `9`

```js
assert(/var\s+a\s*=\s*9(\s*;?\s*)$/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof a !== 'undefined') {(function(a){return "a = " + a;})(a);} else { (function() {return 'a is undefined';})(); }
```

## --seed-contents--

```js

```

# --solutions--

```js
var a = 9;
```
