---
id: 5d822fd413a79914d39e98ca
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

จงเพิ่มแท็กเปิดและปิดของ `html` ด้านล่าง `DOCTYPE` เพื่อที่คุณจะได้สามารถเขียนโค้ดของคุณได้

# --hints--

`html` element ของคุณควรอยู่ข้างล่าง`DOCTYPE` declaration.

```js
assert(code.match(/(?<!<html\s*>)<!DOCTYPE\s+html\s*>/gi));
```

Your `html` element should have an opening tag.

```js
assert(code.match(/<html\s*>/gi));
```

Your `html` element should have a closing tag.

```js
assert(code.match(/<\/html\s*>/));
```

Your `html` tags should be in the correct order.

```js
assert(code.match(/<html\s*>\s*<\/html\s*>/));
```

You should only have one `html` element.

```js
assert(document.querySelectorAll('html').length === 1);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
--fcc-editable-region--

--fcc-editable-region--

```
