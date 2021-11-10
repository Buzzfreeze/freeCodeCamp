---
id: 5dfa371beacea3f48c6300af
title: Part 18
challengeType: 0
dashedName: part-18
---

# --description--

เมื่อคุณเพิ่ม heading element ที่มีความสำคัญน้อยกว่าในหน้าเว็บไซต์ มันเป็นการบอกหลาย ๆ ว่าคุณกำลังจะเริ่มสร้าง subsection อันใหม่

ต่อจาก `h2` element อันสุดท้ายของ `section` element อันที่สอง จงเพิ่ม `h3` element ที่เขียนว่า `Things cats love:`

# --hints--

`section` element อันที่สองดูเหมือนจะขาดหรือไม่มีทั้งแท็กเปิดหรือแท็กปิด

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

There should be an `h3` element right above the second `section` element's closing tag.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

The `h3` element right above the second `section` element's closing tag should have the text `Things cats love:`. Make sure to include the colon at the end of the text.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

There should be an `h2` element with the text `Cat Lists` above the last `h3` element that is nested in the last `section` element'. You may have accidentally deleted the `h2` element.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>
      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```

