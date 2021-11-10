---
id: 60a3e3396c7b40068ad6996a
title: Part 1
challengeType: 0
dashedName: part-1
---

# --description--

สำหรับตอนนี้ คุณควรจำคุ้นเคยเก็บ element พื้นฐานที่ HTML page ควรจะมีแล้ว

จง Set up โค้ดของคุณด้วย `DOCTYPE` declaration, `html` element 1 อัน, `head` element 1 อัน, และ `body` element อีก 1 อัน

# --hints--

คุณควรมี `<!DOCTYPE html>` declaration.

```js
assert(code.match(/<!DOCTYPE html>/i));
```

Your code should have an `html` element.

```js
assert(document.querySelectorAll('html').length === 1);
```

Your code should have a `head` element within the `html` element.

```js
assert(document.querySelectorAll('head').length === 1);
```

Your code should have a `body` element within the `html` element.

```js
assert(document.querySelectorAll('body').length === 1);
```

Your `head` element should come before your `body` element.

```js
assert(document.querySelector('body').previousElementSibling.tagName === 'HEAD');
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--

```
