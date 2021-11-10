---
id: 614ccc21ea91ef1736b9b578
title: Part 1
challengeType: 0
dashedName: part-1
---

# --description--

ยินดีต้อนรับเข้าสู่ส่วนแรกของ the Accessibility Quiz หลังจากที่คุณได้กลายเป็น developer ที่คุ้นเคยกับการเขียน HTML และ  CSS เราก็ได้สอนคุณให้รู้จักกับ basic boilerplate หรือเทมเพลตสำหรับการเริ่มต้นทำเว็บไซต์หรือแอพลิเคชั่น.

เริ่ม accessibility journey ด้วยการใส่ `lang` attribute ไปใน `html` element ของคุณ การทำอย่างนี้จะช่วยให้ screen readers สามารถระบุภาษาที่ใช้ใน page นั้น ๆ ได้
# --hints--

คุณควรมี `lang` attribute 1 อันใน `html` element. _Hint: สามารถใช้ `en` สำหรับภาษาอังกฤษ

```js
assert.match(code, /<html\s+lang=('|")[\w\-]+?\1\s*>/i);
// TODO: This should/could be fixed in the builder.js
// assert.notThrow(Intl.getCanonicalLocales(document.querySelector('html').lang));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
--fcc-editable-region--
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>

  </body>
</html>
--fcc-editable-region--

```

```css
body {
	background: #f5f6f7;
	color: #1b1b32;
	font-family: Helvetica;
	margin: 0;
}
```
