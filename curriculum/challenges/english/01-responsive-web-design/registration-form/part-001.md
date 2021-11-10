---
id: 60eebd07ea685b0e777b5583
title: Part 1
challengeType: 0
dashedName: part-1
---

# --description--

ยินดีต้อนรับสู่โปรเจคสร้างแบบฟอร์มรับสมัคร! 
จงเริ่มโดยการเพิ่ม `!DOCTYPE html` declaration ที่ด้านบนของa document เพื่อที่ browser จะได้รู้ว่ามันกำลังอ่าน document ประเภทไหนอยู่

# --hints--

โค้ดของคุณควรใส่ `DOCTYPE` reference.

```js
assert(code.match(/<!DOCTYPE/gi));
```

You should include a space after the `DOCTYPE` reference.

```js
assert(code.match(/<!DOCTYPE\s+/gi));
```

You should define the document type to be `html`.

```js
assert(code.match(/html/gi));
```

You should close the `DOCTYPE` declaration with a `>` after the type.

```js
assert(code.match(/html\s*>/gi));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--
```
