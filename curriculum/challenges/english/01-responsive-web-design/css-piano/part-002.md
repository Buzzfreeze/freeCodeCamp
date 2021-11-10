---
id: 612e77aba7ca691f598feb02
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

จงเพิ่ม 2 `meta` tags, อันหนึ่งเพื่อช่วยทำให้หน้าเว็บไซต์ของคุณเหมาะกับอุปกรณ์ที่เป็นโทรศัพท์เคลื่อนที่ และอีกอันเพื่อระบุ `charset` ที่หน้านี้ยอมรับ 

# --hints--

คุณควรเพิ่ม 2 `meta` elements ให้กับหน้าเว็บไซต์

```js
const meta = document.querySelector('meta');
assert.exists(meta);
```

You should have two `meta` elements.

```js
const meta = document.querySelectorAll('meta');
assert(meta?.length === 2);
```

One `meta` element should have a `name` set to `viewport`, and `content` set to `width=device-width, initial-scale=1.0`.

```js
const meta = [...document.querySelectorAll('meta')];
const target = meta?.find(m => m?.getAttribute('name') === 'viewport' && m?.getAttribute('content') === 'width=device-width, initial-scale=1.0' && !m?.getAttribute('charset'));
assert.exists(target);
```

The other `meta` element should have the `charset` attribute set to `UTF-8`.

```js
const meta = [...document.querySelectorAll('meta')];
const target = meta?.find(m => !m?.getAttribute('name') && !m?.getAttribute('content') && m?.getAttribute('charset') === 'UTF-8');
assert.exists(target);
```


# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Responsive Web Design Piano</title>
    --fcc-editable-region--

    --fcc-editable-region--
  </head>
  <body></body>
</html>
```

```css

```
