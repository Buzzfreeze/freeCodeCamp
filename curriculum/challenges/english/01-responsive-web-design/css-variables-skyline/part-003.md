---
id: 5d822fd413a79914d39e98cb
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

ตอนไป จงเพิ่มแท็กเปิดและปิดของ `head` และ `body` ภายใน `html` element.

# --hints--

คุณควรมีแท็กเปิดของ `head` 

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
assert(document.querySelector('head').nextElementSibling.localName === 'body');
```

The `head` element should be within the `html` element.

```js
assert([...document.querySelector('html').children].some(x => x.localName === 'head'));
```

The `body` element should be within the `html` element.

```js
assert([...document.querySelector('html').children].some(x => x.localName === 'body'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
--fcc-editable-region--
<html>
  
</html>
--fcc-editable-region--

```

