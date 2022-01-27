---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
forumTopicId: 16640
dashedName: add-images-to-your-website
---

# --description--

คุณสามารถใส่รูปภาพให้กับเว็บไซต์ได้โดยการใช้ `img` element และระบุค่าของ `src` เป็น URL ของรูปภาพที่เรามีไว้ให้

ลองดูตัวอย่างการใช้ `img` element:

```html
<img src="https://www.freecatphotoapp.com/your-image.jpg" />
```

จะเห็นว่า `img` element เป็นแบบ self-closing (ไม่จำเป็นต้องมีแท็กปิด)
และ `src` คือสิ่งที่เรียกว่า attribute ซึ่งเป็นส่วนที่ใช้กำหนดค่าของ element นั้น (เราจะสอนเรื่อง attribute ต่างๆในบทเรียนต่อๆไป)

ซึ่ง `img` element ทุกอันต้องมี attribute อีกตัวหนึ่งคือ `alt` โดยข้อความที่อยู่ใน `alt` จะถูกใช้โดย screen reader เพื่อเพิ่ม accessability (เมื่อคนพิการทางสายตาเข้ามาหน้าเว็บเรา screen reader จะอ่านข้อความในนี้ให้เขาฟัง เพื่อให้เขารู้ว่ารูปนี้เป็นรูปอะไร) และถ้าเบราว์เซอร์ไม่สามารถแสดงรูปภาพของคุณได้ เบราว์เซอร์จะแสดงข้อความใน `alt` ออกมาแทน

**Note:** โดยปกติแล้วถ้ารูปภาพที่เราใส่ไว้ในเว็บ เป็นรูปภาพที่เอาไว้เพื่อตกแต่งโดยไม่มีผลกับเนื้อหา เราควรปล่อยให้ `alt` attribute ว่างไว้

ข้อความใน `alt` attribute ไม่ควรมีตัวอักษรพิเศษ ยกเว้นว่าจะจำเป็นจริงๆเท่านั้น

มาเพิ่ม `alt` attribute ให้กับตัวอย่าง `img` ข้างบนกันเถอะ:

```html
<img
  src="https://www.freecatphotoapp.com/your-image.jpg"
  alt="A business cat wearing a necktie."
/>
```

# --instructions--

ให้ลองเพิ่มรูปภาพให้กับเว็บไซต์ของคุณ:

ใน `main` element ที่คุณสร้างไว้แล้ว
ให้เพิ่ม `img` element ไปหน้า `p` element

และให้ตั้งค่า `src` attribute เป็น url นี้ `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`

สุดท้าย อย่าลืมใส่ข้อความให้ `alt` attribute ของ `img` element ของคุณ

# --hints--

หน้าเว็บของคุณต้องมี image element หนึ่งอัน

```js
assert($("img").length);
```

ภาพของคุณควรมี `src` attribute ที่จะชี้ไปยังรูปน้องแมว

```js
assert(
  /^https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/relaxing-cat\.jpg$/i.test(
    $("img").attr("src")
  )
);
```

ต้องระบุข้อความใน `alt` attribute ของ image element ของคุณด้วย

```js
assert(
  $("img").attr("alt") &&
    $("img").attr("alt").length &&
    /<img\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);
```

# --seed--

## --seed-contents--

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
