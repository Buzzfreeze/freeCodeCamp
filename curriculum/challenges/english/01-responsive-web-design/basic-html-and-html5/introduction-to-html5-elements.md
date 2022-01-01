---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

HTML5 ได้มีการใช้ HTML tag ที่มันมีความหมายมากขึ้น นั่นรวมถึง `main`, `header`, `footer`, `nav`, `video`, `article`, `section` และอื่น ๆ
tag พวกนี้ทำให้โครงสร้างที่อธิบายได้ด้วยตัวมันเอง ซึ่งช่วยให้โค้ดของคุณอ่านได้เข้าใจง่ายมากขึ้น และมันยังช่วยให้ Search Engine Optimization (SEO) ทำงานได้ดีขึ้นด้วย รวมถึงยังช่วยในเรื่องของความสามารถในการเข้าถึง (accessability)
`main` HTML5 tag จะช่วยให้ search engines และนักพัฒนาคนอื่นเจอเนื้อหาหลักที่อยู่ในหน้าเว็บของคุณ

ตัวอย่างการใช้ `main` element ที่มี child element 2 อันอยู่ข้างใน:

```html
<main>
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Note:** แท็กใหม่ ๆ ของ HTML5 และประโยชน์ของพวกมันนั้นจะถูกกล่าวถึงใน Applied Accessibility section

# --instructions--

จงเพิ่ม `p` element อันหนึ่งที่เก็บ kitty ipsum text ดังต่อไปนี้: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

หลังจากนั้น จงสร้าง `main` element และเก็บ `p` element เพียงสองอันไว้ใน `main` element

# --hints--

คุณควรมี 2 `p` element ที่มาพร้อมกับข้อความของ Kitty Ipsum text.

```js
assert($('p').length > 1);
```

`p` element แต่ละอันควรจะมีแท็กปิด

```js
assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length);
```

`p` element ควรเก็บข้อความช่วงแรกของ `kitty ipsum` ซึ่งเขียนไว้แล้วที่ด้านบน

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

คุณควรมี `main` element แค่อันเดียว

```js
assert($('main').length === 1);
```

`main` element ควรมี paragraph element 2 อัน children ของมัน

```js
assert($('main').children('p').length === 2);
```

แท็กเปิดของ `main` ควรมาก่อน paragraph tag อันแรก

```js
assert(code.match(/<main>\s*?<p>/g));
```

แท็กปิดของ `main` ควรมาหลังจากแท็กปิดของ paragraph ที่สอง

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>
  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball
  run catnip eat the grass sniff.
</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot,
    hairball run catnip eat the grass sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur
    catnip scratched.
  </p>
</main>
```
