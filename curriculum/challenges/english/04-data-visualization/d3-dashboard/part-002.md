---
id: 5d8a4cfbe6b6180ed9a1c9df
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

เพิ่ม opening และ closing `html`, `head` และ `body` tags ข้างล่าง doctype

# --hints--

test-text

```js
assert(
  /<!DOCTYPE\s+html\s*>\s*<html\s*>\s*<head\s*>\s*<\/head\s*>\s*<body\s*>\s*<\/body\s*>\s*<\/html\s*>/gi.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
  </head>

  <body>
  </body>
</html>
```
