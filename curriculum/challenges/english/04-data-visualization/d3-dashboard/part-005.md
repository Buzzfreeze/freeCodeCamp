---
id: 5d8a4cfbe6b6180ed9a1c9e2
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

การเพิ่ม container สำหรับ dashboard ทำได้โดยการเพิ่ม `div` element ใน body ที่มี class ของ `dashboard` ด้วย
จากนั้นเราจะสามารถเพิ่ม dashboard elements ให้กับ div นี้ได้

# --hints--

test-text

```js
assert($('div.dashboard').length === 1);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">
  </head>

  <body>

  
  </body>
</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">

    
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```
