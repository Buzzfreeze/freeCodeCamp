---
id: 5f35e5c44359872a137bd98f
title: Part 29
challengeType: 0
dashedName: part-29
---

# --description--

เนื่องจากสินค้าหลังของคาเฟ่คือกาแฟ คุณควรใช้รูปของเมล็ดกาแฟเป็นภาพพื้นหลังของหน้านี้

จงลบคอมเมนต์และ content ภายใน `body` type selector
ตอนนี้ จงเพิ่ม `background-image` property และกำหนดให้มันมีค่าเป็น `url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg)`.

# --hints--

คุณควรเอาคำสั่งคอมเมนต์ออกจาก `background-color` property.

```js
assert(!code.match(/\/\*\s*background-color:\s*burlywood;?\s*\*\//i))
```

Your `body` selector should not have any comments.

```js
assert(!code.match(/body\s*{\s*\/\*/i));
```

You should set the `background-image` property to `url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg)`.

```js
const hasBackground = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['background-image'] === `url("https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg")`)
assert(hasBackground)
```

Your `body` element should have the coffee beans background image.

```js
const bodyBackground = new __helpers.CSSHelp(document).getStyle('body')?.getPropertyValue('background-image');
console.log(bodyBackground);
assert(bodyBackground === `url("https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg")`);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Camper Cafe Menu</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="menu">
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
          <h2>Coffee</h2>
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
--fcc-editable-region--
  /*
  background-color: burlywood;
  */
--fcc-editable-region--
}

h1, h2, p {
  text-align: center;
}

.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
```

