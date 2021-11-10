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

tag พวกนี้ได้มีการให้โครงสร้างที่อธิบายได้ด้วยตัวมันเอง ซึ่งช่วยให้โค้ดของคุณอ่านได้เข้าใจง่ายมากขึ้น และมันยังช่วยให้ Search Engine Optimization (SEO) ทำงานได้ดีขึ้นด้วย รวมถึงยังช่วยในเรื่องของความสามารถในการเข้าถึง
`main` HTML5 tag จะช่วยให้ search engines และนักพัฒนาคนอื่นเจอเนื้อหาหลักที่อยู่ในหน้าเว็บของคุณ

ตัวอย่างการใช้ `main` element ที่มี child element 2 อยู่ข้างใน:

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Note:** แท็กใหม่ ๆ ของHTML5 และประโยชนืของพวกมันนั้นจะถูกกล่าวถึงใน Applied Accessibility section

# --instructions--

จงเพิ่ม `p` element อันที่สองที่ตามด้วย kitty ipsum text ดังต่อไปนี้: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

หลังจากนั้น จงสร้าง `main` element และเก็บ `p` element เพิ่มสองอันไว้ใน `main` element

# --hints--

คุณควรมี 2 `p` element ที่มาพร้อมกับข้อความของ Kitty Ipsum text.

```js
assert($('p').length > 1);
```

Each of your `p` elements should have a closing tag.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Your `p` element should contain the first few words of the provided additional `kitty ipsum` text.

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

Your code should have one `main` element.

```js
assert($('main').length === 1);
```

The `main` element should have two paragraph elements as children.

```js
assert($('main').children('p').length === 2);
```

The opening `main` tag should come before the first paragraph tag.

```js
assert(code.match(/<main>\s*?<p>/g));
```

The closing `main` tag should come after the second closing paragraph tag.

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
