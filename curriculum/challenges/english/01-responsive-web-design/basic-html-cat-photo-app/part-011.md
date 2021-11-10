---
id: 5ddbd81294d8ddc1510a8e56
title: Part 11
challengeType: 0
dashedName: part-11
---

# --description--

ข้อความที่ลิงค์จะต้องอยู่ระหว่างแท็กเปิดและปิดของ anchor (`a`) element
ยกตัวอย่างเช่น `<a href="https://www.freecodecamp.org">click here to go to freeCodeCamp.org</a>` จะเชื่อมกับข้อความ `click here to go to freeCodeCamp.org`.

จงเพิ่มข้อความ anchor `cat photos` ให้กับ the anchor element
นี่จะกลายเป็นข้อความที่ถูฏลิงค์

# --hints--

anchor (`a`) element ควรมีแท็กเปิด โดยแท็กเปิดจะมี syntax ดังนี้: `<elementName>`.

```js
assert(document.querySelector('a'));
```

Your anchor (`a`) element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/a\>/));
```

Your anchor (`a`) element's text should be `cat photos`. Make sure to put the link text between the anchor (`a`) element's opening tag and closing tag.

```js
assert(
  document.querySelector('a').innerText.toLowerCase().replace(/\s+/g, ' ') ===
    'cat photos'
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
--fcc-editable-region--
      <a href="https://freecatphotoapp.com"></a>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

