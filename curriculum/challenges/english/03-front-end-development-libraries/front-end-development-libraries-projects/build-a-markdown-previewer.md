---
id: bd7157d8c242eddfaeb5bd13
title: Build a Markdown Previewer
challengeType: 3
forumTopicId: 301372
dashedName: build-a-markdown-previewer
---

# --description--

**Objective:** ลองทำแอป [CodePen.io](https://codepen.io) โดยให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/GrZVVO>

ลองดู [User Story](https://en.wikipedia.org/wiki/User_story) ข้างล่าง แล้วเขียนโค้ดตาม User Story นี้ โดยจะแต่งหน้าตาของแอปในส่วนที่ไม่ได้ระบุได้ตามที่ชอบเลย

จะใช้เครื่องมือไหนในการเขียนโปรเจคนี้ก็ได้ ไม่ว่าจะเป็น HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux หรือ jQuery 
เนื่องจากบทเรียนนี้เกี่ยวกับ frontend framework คุณจึงควรนำ frontend framework มาใช้งานด้วย (อย่าง React เป็นต้น) ไม่แนะนำให้ใช้ภาษาหรือเทคโนโลยีอื่นๆ นอกจากที่ให้ไว้ข้างบน เราจะช่วยแก้ไขหรือช่วยเหลือหากเกิดบัคหรือปัญหาจากภาษาที่แนะนำข้างต้นเท่านั้น 

**User Story #1:** ฉันเห็น element `textarea` ที่มี id เป็น `"editor"`

**User Story #2:** ฉันเห็น element ที่มี id เป็น `"preview"`

**User Story #3:** เมื่อฉันพิมพ์ข้อความไปใน element `#editor` แล้ว element `#preview` จะแสดงข้อความที่ฉันกำลังพิมพ์อยู่

**User Story #4:** เมื่อฉันป้อน markdown แบบ GitHub ลงใน element `#editor` ข้อความนั้นจะถูกแสดงเป็น HTML ใน element `#preview` (คำแนะนำ: คุณไม่จำเป็นต้องแยก markdown ต่างๆ ด้วยตัวเอง สามารถใช้ library Marked ได้เลย <https://cdnjs.com/libraries/marked>)

**User Story #5:** ในตอนที่เปิดแอป markdown previewer นี้ขึ้นมาครั้งแรก ใน `#editor` จะต้องมีข้อความเริ่มต้นเป็น markdown ที่มี element นี้อย่างน้อย 1 ตัว: header (ขนาด H1), sub header (ขนาด h2), link, inline code, code block, list item, blockquote, image และ bolded text

**User Story #6:** ในตอนที่เปิดแอป markdown previewer นี้ขึ้นมาครั้งแรก markdown เริ่มต้นที่อยู่ใน `#editor` ต้องแสดงผลเป็น HTTML ใน element `#preview`

**โบนัส (ไม่ต้องให้เทสนี้ผ่านก็ได้):** แอป markdown previewer จะแปลงการขึ้นบรรทัดใหม่ เป็นแท็ก `br` (ตัวแบ่งบรรทัด)

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้</a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
