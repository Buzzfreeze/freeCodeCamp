---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cBkZGpt7"
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

HTML5 มีแท็ก HTML ที่อธิบายหน้าที่ของแต่ละแท็กได้ชัดเจนมากขึ้น
เช่น `main`, `header`, `footer`, `nav`, `video`, `article`, `section` ฯลฯ

แท็กพวกนี้จะมีหน้าที่ตามชื่อของแท็กเลย ซึ่งจะช่วยให้โค้ดของคุณอ่านได้เข้าใจง่ายมากขึ้น และยังช่วยให้ Search Engine Optimization (SEO) ทำงานได้ดีขึ้นอีกด้วย
และก็ยังเพิ่ม accessability ของเว็บอีกด้วย
(accessability คือการที่เบราว์เซอร์จะช่วยให้คนบางกลุ่มใช้หน้าเว็บได้ง่ายขึ้น เช่น การทำให้คนตาบอดสามารถใช้เว็บของเราได้โดยใช้ screen reader)

HTML5 มีแท็กชื่อ `main` ซึ่งจะช่วยให้ search engine และนักพัฒนาคนอื่นรู้ว่าเนื้อหาหลักของเว็บคุณอยู่ตรงไหน

ลองดูตัวอย่างการใช้ `main` ที่มี child element 2 อันอยู่ข้างใน
(child element คือ element ที่ซ้อนอยู่ใน element อื่น โดย element ตัวที่อยู่ข้างนอกจะเรียกว่า parent element):

```html
<main>
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Note:** เราจะสอนเรื่องแท็กใหม่ๆ ของ HTML5 และประโยชน์ของแท็กนั้นในบทเรียนเรื่อง Applied Accessibility

# --instructions--

ให้เพิ่ม `p` element อีกอันหนึ่ง โดยมีข้อความข้างในเป็น kitty ipsum ตัวนี้: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

หลังจากนั้นให้สร้าง `main` element ครอบ `p` element ทั้งสองตัว

# --hints--

คุณควรมี `p` element 2 ตัว โดยมีข้อความข้างในเป็นข้อความของ Kitty Ipsum

```js
assert($("p").length > 1);
```

`p` element ทั้งสองตัวต้องมีแท็กปิด

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

`p` element ต้องมีข้อความข้างในเป็น `kitty ipsum` ที่เราให้ไว้ด้านบน

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($("p").text()));
```

ต้องมี `main` element แค่อันเดียว

```js
assert($("main").length === 1);
```

ใน `main` element ต้องมี `p` element 2 อันเป็น child

```js
assert($("main").children("p").length === 2);
```

แท็กเปิดของ `main` ต้องอยู่ก่อนแท็ก `p` อันแรก

```js
assert(code.match(/<main>\s*?<p>/g));
```

แท็กปิดของ `main` ต้องอยู่หลังแท็กปิดของ `p` อันที่สอง

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>
  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack
  your ankles chase the red dot, hairball run catnip eat the grass sniff.
</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere
    rip the couch sleep in the sink fluffy fur catnip scratched.
  </p>
</main>
```
