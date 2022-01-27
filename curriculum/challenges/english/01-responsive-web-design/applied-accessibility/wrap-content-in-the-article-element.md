---
id: 587d774e367417b2b2512aa0
title: Wrap Content in the article Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cPp79S3"
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` เป็น element ของ HTML5 อีกตัวหนึ่ง ที่จะช่วยให้โค้ดคุณอ่านรู้เรื่องมากขึ้น
โดย `article` เป็น element ที่ใช้แบ่งส่วนของเนื้อหา และถูกใช้เพื่อเก็บเนื้อหาที่ไม่เกี่ยวข้องกับเนื้อหาส่วนอื่น หรือเนื้อหาที่อยู่เดี่ยวๆได้
แท็กนี้เหมาะที่จะใช้กับพวก บล็อค ฟอรั่ม และเว็บข่าว

การดูว่าเนื้อหาไหนเป็นเนื้อหาที่อยู่เดี่ยวๆได้นั้น จะขึ้นอยู่กับแต่ละคนเลย แต่คุณสามารถใช้เงื่อนไขเล็กๆน้อยๆเพื่อดูได้

ให้ลองดูว่า ถ้าลบเนื้อหาที่อยู่รอบๆออกทุกอัน เนื้อหานั้นๆจะยังเข้าใจได้อยู่หรือไม่?
ถ้ายังเข้าใจได้ ก็แปลว่าเนื้อหานั้นไม่ได้เกี่ยวข้องกับเนื้อหาอื่นในหน้าเดียวกัน

อย่าลืมว่า เว็บของคุณต้องมีโค้ดที่เป็นระเบียบ และใช้แท็กให้ถูกต้อง เพื่อที่จะให้คนที่ใช้ assistive technology ใช้งานเว็บของคุณได้

**Note:** `section` เป็นแท็กใหม่ของ HTML5 ที่จะสื่อความหมายต่างจาก `article` เล็กน้อย
โดย `article` จะใช้สำหรับเนื้อหาที่อยู่เดี่ยวๆได้ และ `section` จะใช้เพื่อจัดกลุ่มเนื้อหาที่มีความเกี่ยวข้องกัน
โดยทั้งสองแท็กนี้ก็สามารถใช้ร่วมกันได้ด้วย เช่น
ถ้าให้หนังสือเล่มหนึ่งเป็น `article` แล้วแต่ละบทก็คือ `section` นั่นเอง
ส่วนในกรณีที่ไม่มีความสัมพันธ์ระหว่างกลุ่มของเนื้อหาเลย เราก็จะใช้ `div` แทน

`<div>` - ใช้จับกลุ่มเนื้อหา

`<section>` - ใช้จับกลุ่มเนื้อหาที่เกี่ยวข้องกัน

`<article>` - ใช้จับกลุ่มเนื้อหาที่อยู่เดี่ยวๆได้

# --instructions--

คราวนี้ นาย Camper Cat ใช้แท็ก `article` ครอบโพสต์ในบล็อคของเขา แต่เขาลืมที่จะใช้แท็กนี้กับเนื้อหาด้านบน
ให้เปลี่ยนแท็ก `div` เป็นแท็ก `article` แทน

# --hints--

โค้ดของคุณต้องมีแท็ก `article` 3 อัน

```js
assert($("article").length == 3);
```

โค้ดของคุณต้องไม่มีแท็ก `div` แล้ว

```js
assert($("div").length == 0);
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>
      The internet is littered with varying opinions on nutritional paradigms,
      from catnip paleo to hairball cleanses. But let's turn our attention to an
      often overlooked fitness fuel, and examine the protein-carb-NOM trifecta
      that is lasagna...
    </p>
  </div>

  <img src="samuraiSwords.jpeg" alt="" />

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>
      Felines the world over have been waging war on the most persistent of
      foes. This red nemesis combines both cunning stealth and lightning speed.
      But chin up, fellow fighters, our time for victory may soon be near...
    </p>
  </article>

  <img src="samuraiSwords.jpeg" alt="" />

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>
      Chuck Norris is widely regarded as the premier martial artist on the
      planet, and it's a complete coincidence anyone who disagrees with this
      fact mysteriously disappears soon after. But the real question is, is he a
      cat person?...
    </p>
  </article>
</main>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>
      The internet is littered with varying opinions on nutritional paradigms,
      from catnip paleo to hairball cleanses. But let's turn our attention to an
      often overlooked fitness fuel, and examine the protein-carb-NOM trifecta
      that is lasagna...
    </p>
  </article>

  <img src="samuraiSwords.jpeg" alt="" />

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>
      Felines the world over have been waging war on the most persistent of
      foes. This red nemesis combines both cunning stealth and lightning speed.
      But chin up, fellow fighters, our time for victory may soon be near...
    </p>
  </article>

  <img src="samuraiSwords.jpeg" alt="" />

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>
      Chuck Norris is widely regarded as the premier martial artist on the
      planet, and it's a complete coincidence anyone who disagrees with this
      fact mysteriously disappears soon after. But the real question is, is he a
      cat person?...
    </p>
  </article>
</main>
```
