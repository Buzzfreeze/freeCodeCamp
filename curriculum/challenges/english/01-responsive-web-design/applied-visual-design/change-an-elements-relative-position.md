---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

CSS จะทำเหมือนกับ HTML element แต่ละตัวเป็นกล่อง ๆ หนึ่ง ซึ่งปกติแล้วเราจะเรียกมันว่า <dfn>CSS Box Model</dfn>
Block-level items จะขึ้นบรรทัดใหม่โดยอัติโนมัติ (คิดถึง headings, paragraphs, และ divs) ในขณะที่ inline items จะอยู่ระหว่าง content ที่ล้อมรอบมัน (เช่น images หรือ spans)
layout เริ่มต้นของ element ในรูปแบบนี้จะเรียกว่า <dfn>normal flow</dfn> ของ document, แต่ CSS ได้มีการใช้ position property เพื่อเขียนทับมัน

เมื่อตำแหน่งของ element ถูกำหนดให้เป็น `relative`, มันจะทำให้คุณสามารถระบุวิธีที่ CSS ควรจะย้ายมันโดย *relative* กับตำแหน่งปัจจุบนของมันใน normal flow ของหน้าเว็บ
มันทำงานคู่กับ CSS offset properties ขแง `left` หรือ `right`, และ `top` หรือ `bottom`
พวกมันจะบอกจำนวน pixels, percentages, หรือ ems เพื่อที่จะย้าย item ออกจากตำแหน่งที่มันเคยถูกวางไว้
ตัวอย่างต่อไปนี้เป็นการย้ายพารากราฟไปออกจาก 10 pixel จากด้านล่างของตำแหน่งเดิม:

```css
p {
  position: relative;
  bottom: 10px;
}
```

การเปลี่ยนจำแหน่งของ element ไปเป็น relative ไม่ได้ย้ายมันออกจาก normal flow - element อื่นที่อยู่รอบ ๆ มันยังคงมีพฤติกรรมเหมือนกับตอนที่ item นั้นยังอยู่ที่ตำแหน่งเดิมของมัน

**Note:** การจัดตำแหน่งทำให้คุณมีความยืดหยุ่นและอำนาจที่จะจัดการกับ visual layout ของหน้าเว็บ
มันดีที่จะจำไว้ว่าไม่ว่า element จะอยู่ตรงไหน, HTML markup ที่ทำให้มันเป็นแบบนั้นควรจะเป็นระเบียบและ make sense เมื่ออ่านจากบนลงล่าง
สิ่งนี้คือวิธีที่ผู้พิการทางการมองเห็นเข้าถึง content ของคุณ

# --instructions--

จงเปลี่ยน `position` ของ `h2` ให้เป็น `relative`
และจงใช้ CSS offset เพื่อย้ายมันไป 15 pixel จากด้านบนของตำแหน่งเดิมของมัน
สังเกตว่ามันไม่กระทบกับตำแหน่งของ h1 และ p element ที่อยู่รอบ ๆ มัน

# --hints--

`h2` element ควรมี `position` property อันหนึ่งที่กำหนดค่าให้เป็น `relative`

```js
assert($('h2').css('position') == 'relative');
```

Your code should use a CSS offset to relatively position the `h2` 15px away from the `top` of where it normally sits.

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
