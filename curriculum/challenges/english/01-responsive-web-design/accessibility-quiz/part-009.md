---
id: 6140827cff96e906bd38fc2b
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

ตามที่ถูกเขียนไว้ใน [freeCodeCamp Style Guide](https://design-style-guide.freecodecamp.org/) โลโก้ควรจะคงอัตราส่วนไว้ที่ `35:4` และมี padding รอบ ๆ ข้อความ

ขั้นแรก เปลี่ยน `background-color` ให้มีค่าเท่ากับ `#0a0a23` เพื่อที่คุณได้เห็นโลโก้อย่างชัดเจน 
หลังจากนั้น ใช้ `aspect-ratio` property เพื่อตั้งค่าของอัตราส่วนตามต้องการ
สุดท้าย เพิ่ม `padding` ขนาด `0.4rem` รอบ ๆ

# --hints--

คุณควรกำหนดค่า `background-color` ของ `#logo` เป็น `#0a0a23`

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('#logo')?.backgroundColor, 'rgb(10, 10, 35)');
```

Yคุณควรใช้ `aspect-ratio` property.

```js
assert.notEmpty(new __helpers.CSSHelp(document).getStyle('#logo')?.aspectRatio);
```

คุณไม่ควรใช้ `height` property.

```js
assert.isEmpty(new __helpers.CSSHelp(document).getStyle('#logo')?.height);
```

คุณไม่ควรเปลี่ยน `width` property.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('#logo')?.width, 'max(100px, 18vw)');
```

คุณควรกำหนดให้ `img` มี `aspect-ratio` เท่ากับ `35 / 4`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('#logo')?.aspectRatio, '35 / 4');
```

คุณควรกำหนดให้ `img` มี `padding` เท่ากับ `0.4rem`.

```js
assert.equal(new __helpers.CSSHelp(document).getStyle('#logo')?.padding, '0.4rem');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
    <title>freeCodeCamp: Accessibility Quiz</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <img id="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg">
      <h1>HTML/CSS Quiz</h1>
      <nav></nav>
    </header>
    <main></main>
  </body>
</html>

```

```css
body {
	background: #f5f6f7;
	color: #1b1b32;
	font-family: Helvetica;
	margin: 0;
}

--fcc-editable-region--
#logo {
  width: max(100px, 18vw);

}
--fcc-editable-region--

```
