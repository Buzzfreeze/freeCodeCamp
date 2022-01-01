---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

คุณสามารถใส่รูปภาพให้กับเว็บไซต์ของเราได้โดยการใช้ `img` element และให้มันไปที่ URL ของรูปภาพที่กำหนดไว้โดยการใช้ `src` attribute

นี่คือตัวอย่างการสร้าง `img` element:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" />
```

จำไว้ว่า `img` elements เป็นประเภท self-closing (ไม่จำเป็นต้องมีแท็กปิด)

`img` element ทุกอันต้องมี `alt` attribute อันหนึ่ง
ตัวอักษรที่อยู่ข้างใน `alt` attribute จะถูกใช้โดย screen reader เพื่อเพิ่มความสามารถในการเข้าถึง (accessability) และถูกแสดงผลออกมาถ้าหน้าจอหรือระบบไม่สามารถโหลดรูปภาพได้

**Note:** ถ้ารูปภาพนั้นถูกใช้เพื่อการตกแต่งเพียงเท่านั้น การปล่อยให้ `alt` attribute ว่างไว้

หากเป็นไปได้ `alt` attribute ไม่ควรจะเก็บตัวอักษรพิเศษเอาไว้ ยกเว้นว่ามันจะจำเป็นจริง ๆ

มาเพิ่ม `alt` attribute ให้กับตัวอย่าง `img` ข้างบนกันเถอะ:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" alt="A business cat wearing a necktie." />
```

# --instructions--

มาลองเพิ่มรูปภาพให้กับเว็บไซต์ของเรากันเถอะ:

ภายใน `main` element ที่สร้างเตรียมไว้แล้ว
จงแทรก `img` element ไปข้างหน้า `p` elements ที่มีอยู่ก่อน

ในตอนนี้ จงกำหนดให้ `src` attribute อ้างอิงไปที่ url `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`

สุดท้าย อย่าลืมที่จะกำหนดให้ `img` element ของคุณมี `alt` attribute ที่มาพร้อมกับข้อความที่เหมาะสม

# --hints--

หน้าเว็บไซต์ของคุณควรมี image element หนึ่งอัน

```js
assert($('img').length);
```

ภาพของคุณควรมี `src` attribute หนึ่งอันที่จะอ้างอิงไปยังรูปลูกแมว

```js
assert(/^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test($('img').attr('src')));
```

`alt` attribute ของ image element ของคุณไม่ควรจะว่างเปล่า

```js
assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<img\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(__helpers.removeWhiteSpace(code)),
);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>
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
