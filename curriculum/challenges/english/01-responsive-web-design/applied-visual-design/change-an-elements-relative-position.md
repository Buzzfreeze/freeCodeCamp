---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

CSS จะทำเหมือนกับ HTML element แต่ละตัวเป็นกล่อง ๆ (Block-level) หนึ่ง ซึ่งปกติแล้วเราจะเรียกมันว่า <dfn>CSS Box Model</dfn>
Block-level items จะขึ้นบรรทัดใหม่โดยอัตโนมัติ (คิดถึง headings, paragraphs, และ divs) ในขณะที่ inline items จะอยู่ระหว่าง content ที่ล้อมรอบมัน (เช่น images หรือ spans)
layout เริ่มต้นของ element ในรูปแบบนี้จะเรียกว่า <dfn>normal flow</dfn> ของ document
แต่ CSS ได้มีการใช้ position property เพื่อเขียนทับ (overwrite) normal flow ในหลาย ๆ ครั้ง

เมื่อตำแหน่งของ element ถูกกำหนดให้เป็น `relative` มันจะทำให้คุณสามารถระบุวิธีที่ CSS ควรจะย้ายมันโดย _อิง_ กับตำแหน่งปัจจุบันของมันใน normal flow ของหน้าเว็บ
มันทำงานควบคู่กับ CSS offset properties อย่าง `left` หรือ `right`, และ `top` หรือ `bottom`
พวกมันจะบอกจำนวน pixels, percentages (%), หรือ ems เพื่อที่จะย้าย item จากตำแหน่งที่มันเคยถูกวางไว้
ตัวอย่างต่อไปนี้เป็นการย้าย (position) พารากราฟให้ห่างจากด้านล่าง (bottom) ของตำแหน่งเดิมของมัน 10 pixel :

```css
p {
  position: relative;
  bottom: 10px;
}
```

การเปลี่ยนตำแหน่งของ element ไปเป็น relative ไม่ได้ย้ายมันออกจาก normal flow เพราะ element อื่นที่อยู่รอบ ๆ มันยังคงมีพฤติกรรมเหมือนกับตอนที่ item นั้นยังอยู่ที่ตำแหน่งเดิมของมัน

**Note:** การจัดตำแหน่งทำให้คุณมีความยืดหยุ่นและอำนาจที่จะจัดการกับ visual layout ของหน้าเว็บ
คุณควรจำไว้ว่า ไม่ว่า element จะอยู่ตรงไหน, HTML markup ที่ทำให้มันเป็นแบบนั้นควรจะเป็นระเบียบและ make sense (เข้าใจ) เมื่ออ่านจากบนลงล่าง
สิ่งนี้ยังทำให้ผู้พิการทางการมองเห็นใช้เพื่อเข้าถึง content ของคุณได้อีกด้วย

# --instructions--

จงเปลี่ยน `position` ของ `h2` ให้เป็น `relative`
และจงใช้ CSS offset เพื่อย้ายมันให้ห่างจากด้านบนของตำแหน่งเดิมของมัน 15 pixel
สังเกตว่ามันไม่กระทบกับตำแหน่งของ h1 และ p element ที่อยู่รอบ ๆ มัน

# --hints--

`h2` element ควรมี `position` property อันหนึ่งที่กำหนดค่าให้เป็น `relative`

```js
assert($('h2').css('position') == 'relative');
```

คุณควรใช้ CSS offset เพื่อกำหนดตำแหน่งใหม่ให้ `h2` โดยอิงจากตำแหน่งเดิมซึ่งมันควรจะห่างจาก `top` ของตำแหน่งเดิมของมัน 15 pixel

```js
assert($('h2').css('top') == '15px');
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
