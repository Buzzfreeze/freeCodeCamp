---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: "https://scrimba.com/c/cM9P4t2"
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

ในแบบฝึกหัดที่แล้ว คุณได้รู้แล้วว่าคุณควรระบุ attribute `alt` ให้กับแท็ก `img` เสมอ
แต่บางครั้ง รูปของเราก็มีคำอธิบายอยู่แล้ว หรือบางครั้งรูปนั้นก็เป็นรูปที่ใช้ตกแต่ง โดยไม่ได้มีความสำคัญต่อเนื้อหา
ในกรณีนี้ข้อความใน `alt` อาจไม่จำเป็น

ถึงแม้ว่าเราจะอธิบายภาพของเราไปแล้วในเนื้อหา หรือว่าภาพนั้นเป็นภาพที่ใช้ตกแต่งเฉยๆ แท็ก `img` ก็ยังจำเป็นต้องมี attribute `alt` อยู่ดี แต่ในกรณีนี้ เราจะให้มีค่าเป็น string ว่างได้
ลองดูตัวอย่าง:

```html
<img src="visualDecoration.jpeg" alt="" />
```

ซึ่งโดยปกติ ภาพพื้นหลังจะเอาไว้ใช้แค่เพื่อการตกแต่งอยู่แล้ว
แต่ส่วนใหญ่ เราจะใช้ CSS เพื่อกำหนดภาพพื้นหลัง ซึ่งจะทำให้ไม่ต้องระบุ `alt` อยู่แล้ว

**Note:** สำหรับรูปที่มีคำอธิบายรูปอยู่แล้ว คุณก็ควรใส่ข้อความใน `alt` อยู่ดี เพราะว่าการใส่ `alt` จะช่วยให้ search engine จัดกลุ่มเนื้อหาของรูปภาพได้

# --instructions--

ตอนนี้นาย Camper Cat ได้เขียนโครงของโค้ดไว้แล้ว โดยเขาต้องการเอารูปดาบซามูไรมาคั่นข้อความ
ให้เพิ่ม attribute `alt` ให้กับแท็ก `img` และกำหนดค่าของ `alt` เป็น string ว่าง (จะเห็นว่า `src` ของรูปในแบบฝึกหัดนี้ไม่ได้ลิงก์ไปที่ไฟล์จริง เพราะฉะนั้นถ้ารูปดาบไม่ขึ้นก็ไม่เป็นไร)

# --hints--

แท็ก `img` ของคุณต้องมี attribute `alt`

```js
assert(!($("img").attr("alt") == undefined));
```

attribute `alt` ต้องมีค่าเป็น string ว่าง

```js
assert($("img").attr("alt") == "");
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" />

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="" />

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```
