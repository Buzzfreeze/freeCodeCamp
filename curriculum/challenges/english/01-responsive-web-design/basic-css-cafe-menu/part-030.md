---
id: 5f35e5c4321f818cdc4bed30
title: Part 30
challengeType: 0
dashedName: part-30
---

# --description--

ตอนนี้มันดูดีเลย ถึงเวลาที่จะเริ่มเพิ่มรายการในเมนูแล้
จงเพิ่ม `article` element เปล่าด้านล่าง `Coffee` heading
สิ่งนี้จะเก็บรสชาติและราคาของกาแฟแต่ละประเภทของคุณ

# --hints--

Yคุณควรมีแท็กเปิด `<article>` อันหนึ่ง

```js
assert(code.match(/<article>/i));
```

You should have a closing `</article>` tag.

```js
assert(code.match(/<\/article>/i));
```

You should not change the existing `h2` element.

```js
assert($('h2').length === 1);
```

Your `article` element should come after your `h2` element.

```js
const article = $('article')[0];
assert(article.previousElementSibling.tagName === 'H2');
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
--fcc-editable-region--
          <h2>Coffee</h2>
--fcc-editable-region--
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
  background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
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

