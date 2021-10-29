---
id: bd7157d8c242eddfaeb5bd13
title: Build a Markdown Previewer
challengeType: 3
forumTopicId: 301372
dashedName: build-a-markdown-previewer
---

# --description--

**Objective:** ลองทำแอป [CodePen.io](https://codepen.io) app that is ให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/GrZVVO>

ลองดู [user stories](https://en.wikipedia.org/wiki/User_story) ข้างล่าง และทำให้ระบบ Test ทังหมด run ผ่าน โดยสามารถออกแบบหน้าตาแอปตามสไตล์ของคุณเองได้เลย

คุณสามารถใช้ HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux และ jQuery รวมกันได้ในการทำโปรเจคนี้ เนื่องจากบทเรียนนี้คือบทเรียนเกี่ยวกับ frontend framework คุณจึงควรนำ frontend framework มาใช้งานด้วย (อย่าง React เป็นต้น) ไม่แนะนำให้ใช้ภาษาหรือเทคโนโลยีอื่นๆ นอกจากที่ให้ไว้ข้างบน เราจะช่วยแก้ไขหรือช่วยเหลือหากเกิดบักหรือปัญหาจากภาษาที่แนะนำข้างต้นเท่านั้น 

**User Story #1:** จะต้องมี element `textarea` ที่มีไอดี `id="editor"`

**User Story #2:** จะต้องมี element ที่มีไอดี `id="preview"`

**User Story #3:** เมื่อฉันพิมพ์ข้อความไปใน element `#editor` ส่วนของ `#preview` element จะอัปเดตเนื้อหาพร้อมกับขณะเดียวกันกับที่ฉันพิมพ์ เพื่อนำเนื้อหานั้นไปแสดง

**User Story #4:** เมื่อฉันป้อน markdown ที่มาจาก Github ไปยัง `#editor` element ข้อความนั้นจะถูกแสดงเป็น HTML ใน `#preview` element ในขณะที่ฉันพิมพ์ (คำแนะนำ: คุณไม่จำเป็นต้องแยก markdown ต่างๆ ด้วยตัวเอง สามารถ import library ที่ maked เรียบร้อยแล้วได้ที่ <https://cdnjs.com/libraries/marked>)

**User Story #5:** ในการโหลดครั้งแรกของแอป markdown previewer นี้ ข้อความเริ่มต้นในส่วนของ `#editor` จะต้องมีตัว markdown ที่ถูกต้องที่แสดงถึง element ต่อไปนี้อย่างน้อย 1 element ดังนี้: header (ขนาดเท่า H1), sub header (ขนาดเท่า h2), link, inline code, code block, list item, blockquote, image และ bolded text

**User Story #6:** ในการโหลดครั้งแรกของแอป markdown previewer markdown เริ่มต้นที่อยู่ในส่วนของ `#editor` ต้องแสดงผลเป็น HTTML ในส่วน `#preview` element

**Optional Bonus (you do not need to make this test pass):** แอป markdown previewer จะแปลงการขึ้นบรรทัดใหม่ และแสดงผลของมันเป็น tag `br` (ตัวแบ่งบรรทัด)

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้</a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ลิงก์ CND นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
