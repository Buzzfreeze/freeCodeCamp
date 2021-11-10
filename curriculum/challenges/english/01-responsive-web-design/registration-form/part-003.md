---
id: 60f027c87bc98f050395c139
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

ต่อไป จงเพิ่มส่วนเปิดและปิดของ `head` และ `body` tags ภายใน`html` element.

# --hints--

คุณควรมี `head` tag แบบเปิด

```js
assert(code.match(/<head\s*>/i));
```

You should have a closing `head` tag.

```js
assert(code.match(/<\/head\s*>/i));
```

You should have an opening `body` tag.

```js
assert(code.match(/<body\s*>/i));
```

You should have a closing `body` tag.

```js
assert(code.match(/<\/body\s*>/i));
```

The `head` and `body` elements should be siblings.

```js
assert(document.querySelector('head')?.nextElementSibling.localName === 'body');
```

The `head` element should be within the `html` element.

```js
assert([...document.querySelector('html')?.children].some(x => x?.localName === 'head'));
```

The `body` element should be within the `html` element.

```js
assert([...document.querySelector('html')?.children].some(x => x?.localName === 'body'));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<!DOCTYPE html>
<html>

</html>
--fcc-editable-region--
```
