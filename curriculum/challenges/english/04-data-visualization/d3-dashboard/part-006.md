---
id: 5d8a4cfbe6b6180ed9a1c9e3
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

ที่ stylesheet ที่ได้ทำการ link ก่อนหน้าในส่วนข้างบนของ file ตรงส่วน `body` ใน HTML document ให้เพิ่ม `background-color` เป็น `#ccc`

# --hints--

test-text

```js
const body = code.match(/body\s*{[\s\S]+?[^}]}/g)[0];
assert(/background-color\s*:\s*#ccc\s*(;|})/gi.test(body));
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```

## --seed-contents--

```html
<style>


</style>
```

# --solutions--

```html
<style>
body {
  background-color: #ccc;
}
</style>
```
