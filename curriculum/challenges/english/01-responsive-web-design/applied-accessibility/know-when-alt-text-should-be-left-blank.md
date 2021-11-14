---
id: 587d774c367417b2b2512a9d
title: Know When Alt Text Should be Left Blank
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

ในแบบฝึกหัดที่แล้ว, คุณได้เรียนรู้ว่าการใช้ `alt` attribute เมื่อใช้ `img` tags มันเป็นหลักการพื้นฐาน 
อย่างไรก็ตาม บางทีรูปมาพร้อมกับ caption ที่อธิบายพวกมันได้เรียบน้อย หรือบางครั้งรูปนั้นก็ถูกใช้เพื่อการตกแต่งเท่านั้น
ในกรณีนี้ข้อความ `alt` อาจจะซ้ำซ้อนหรือไม่จำเป็น

เมื่อภาพหนึ่งถูกอธิบายด้วยเนื้อหาที่เป็นข้อความไปแล้วหรือไม่มีความสำคัญอะไรกับหน้านั้น ๆ, `img` ก็ยังจำเป็นต้องมี `alt` attribute แต่เราสามารถตั้งค่าให้มันเป็น string เปล่าได้ นี่คือตัวอย่าง:

```html
<img src="visualDecoration.jpeg" alt="">
```

ภาพพื้นหลังมันจะเอาไว้ใช้เพื่อการตกแต่งเท่านั้นอยู่แล้ว

**Note:** สำหรับรูปภาพที่มี caption, คุณอาจจะอยากใส่ข้อความ  `alt` เนื่องจากมันช่วยให้ search engines จัดกลุ่มเนื้อหาของรูปภาพ

# --instructions--

Camper Cat ได้โค้ดโครงของเพจสำหรับเป็นพาร์ทสำหรับบล็อกในเว็บไซต์ของเขา เขาตั้งใจจะเพิ่ม visual break ระหว่าง 2 บทความด้วยรูปภาพเพื่อการตกแต่งที่เป็นรูปดาบซามูไร
จงเพิ่ม `alt` attribute ให้กับ `img` tag และกำหนดค่า string เปล่า ๆ ให้มัน (จำไว้ว่า `src` ของรูป ๆ นั้นไม่ได้เชื่อมไปที่ไฟล์จริง ๆ ไม่ต้องกังวลหากไม่มีดาบซามูไรขึ้นบนจอ)

# --hints--

`img` tag ของคุณควรมี `alt` attribute

```js
assert(!($('img').attr('alt') == undefined));
```

`alt` attribute ควรถูกกำหนดให้เก็บ string เปล่า

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

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

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```
