---
id: 60f027099a15b00485563dd2
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

จงเพิ่ม `html` tags ที่เอาไว้เปิดกับปิดข้างล่าง `DOCTYPE` เพื่อที่คุณได้จะมีที่ให้เขียนโค้ด

# --hints--

`html` element ของคุณควรอยู่ข้างล่าง `DOCTYPE` declaration.

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
// Possibly a redundant test, as browser fixes this
assert(document.querySelectorAll('html').length === 1);
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<!DOCTYPE html>

--fcc-editable-region--
```
