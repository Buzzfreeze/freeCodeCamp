---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` เป็นอีกหนึ่ง HTML5 elements ที่ช่วยเพื่อความหมายทางภาษาให้กับ markup ของคุณ
`article` เป็น sectioning element และถูกใช้เพื่อเก็บเนื้อหาที่ไม่เกี่ยวข้องหรือขึ้นกับใคร
tag อันนี้เหมาะที่จะใช้กับพวก blog entries, forum posts, และ news articles.

การกำหนดว่าเนื้อหาควรจะอยู่เดี่ยว ๆ ได้ไหม มักจะขึ้นกับดุลยพินิจของแต่ละคนแต่คุณสามารถใช้การทดสอบพื้นฐาน 2-3 อย่างเพื่อเช็คได้
จงถามตัวเองว่า ถ้าคุณลบบริบทที่อยู่รอบ ๆ ออกทุกอัน เนื้อหาอันนั้นจะยังเข้าใจได้อยู่หรือไม่ ? 
เช่นเดียวกัน สำหรับข้อความจะยังคงเนื้อหาเดิมได้หรือเปล่าถ้ามันอยู่ใน RSS feed?

จงจำไว้ว่ามีความเชื่อที่ว่าการใช้ assistive technologies พึ่งพา markup ที่เป็นระเบียนและมีความหมายทางภาษาพึ่งที่จะเข้าใจงานของคุณให้ดียิ่งขึ้น

**Note:** `section` element เป็นเรื่องใหม่สำหรับ HTML5 และมีความต่างทางด้านภาษาเพียงเล็กน้อยเมื่อเทียบกับ `article`
`article` นั้นถูกใช้สำหรับเนื้อหาที่อยู่เดี่ยว ๆ ได้ และ `section` นั้นถูกใช้เป็นจับกลุ่มเนื้อหาที่มีธีมเกี่ยวข้อกัน
พวกมันสามารถถูกใช้กับอีกตัวหนึ่งได้ตามความต้องการ ยกตัวอย่างเช่น, ถ้าให้หนังสือเล่มหนึ่งเป็น `article` แล้วแต่ละบทก็คือ `section` นั่นเอง
ส่วนในกรณีที่ไม่มีความสัมพันธ์ระหว่างกลุ่มเลยเราก็จะใช้ `div`

`<div>` - จับกลุ่มเนื้อหา
`<section>` - จับกลุ่มเนื้อหาที่เกี่ยวข้องกัน groups related content
`<article>` - จับกลุ่มตัวที่อยู่เดี่ยว ๆ ซึ่งเป็นตัวที่เก็บเนื้อหาของมันเอง

# --instructions--

Camper Cat ใช้ `article` tags เป็นล้อมรอบโพสต์ใน blog page ของเขา แต่เขาลืมที่จะใช้มันกับส่วนที่อยู่ด้านบน
จงเปลี่ยน `div` tag ให้เป็น`article` tag แทน

# --hints--

โค้ดของคุณควรมี `article` tags 3 อัน

```js
assert($('article').length == 3);
```

โค้ดของคุณไม่ควรมี `div` tag แล้ว

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```
