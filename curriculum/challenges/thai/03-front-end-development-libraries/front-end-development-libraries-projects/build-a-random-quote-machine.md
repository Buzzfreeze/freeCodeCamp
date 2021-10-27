---
id: bd7158d8c442eddfaeb5bd13
title: Build a Random Quote Machine
challengeType: 3
forumTopicId: 301374
dashedName: build-a-random-quote-machine
---

# --description--

**Objective:** ลองทำแอป [CodePen.io](https://codepen.io) app that is ให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/qRZeGZ>.

ลองดู [user stories](https://en.wikipedia.org/wiki/User_story) ข้างล่าง และทำให้ระบบ Test ทังหมด run ผ่าน โดยสามารถออกแบบหน้าตาแอปตามสไตล์ของคุณเองได้เลย

คุณสามารถใช้ HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux และ jQuery รวมกันได้ในการทำโปรเจคนี้ เนื่องจากบทเรียนนี้คือบทเรียนเกี่ยวกับ frontend framework คุณจึงควรนำ frontend framework มาใช้งานด้วย (อย่าง React เป็นต้น) ไม่แนะนำให้ใช้ภาษาหรือเทคโนโลยีอื่นๆ นอกจากที่ให้ไว้ข้างบน เราจะช่วยแก้ไขหรือช่วยเหลือหากเกิดบักหรือปัญหาจากภาษาที่แนะนำข้างต้นเท่านั้น 

**User Story #1:** จะต้องมี element ที่เป็นกรอบที่มีไอดี `id="quote-box"`

**User Story #2:** ภายใน `#quote-box` จะต้องมี element ที่มีไอดี `id="text"`

**User Story #3:** ภายใน `#quote-box จะต้องมี element ที่มีไอดี `id="author"`

**User Story #4:** ภายใน `#quote-box` จะต้องมี
 element ที่สามารถคลิกได้และมีไอดี `id="new-quote"`

**User Story #5:** ภายใน `#quote-box`จะต้องมี `a` ที่สามารถคลิกได้และมีไอดี `id="tweet-quote"`

**User Story #6:** ในการโหลดครั้งแรก แอป quote machine จะแสดง quote แบบสุ่มภายใน element ที่มีไอดี `id="text"`

**User Story #7:** ในการโหลดครั้งแรก แอป quote machine จะแสดงผู้แต่ง quote ที่มาจากการสุ่มภายใน element ที่มีไอดี `id="author"`

**User Story #8:** เมื่อคลิกที่ปุ่ม `#new-quote` แอป quote machine จะดึง quote ใหม่และแสดง quote นั้นใน `#text` element

**User Story #9:** แอป quote machine ควรที่จะดึงชื่อผู้แต่ง quote ใหม่มาเมื่อปุ่ม `#new-quote` ถูกคลิก และแสดงผลใน `#author` element

**User Story #10:** ฉันสามารถทวีต quote ในขณะนั้นโดยการคลิกที่ปุ่ม `a` element ที่มีไอดี `#tweet-quote`  ซึ่ง `a` element จะต้องลิงก์ไปยัง `"twitter.com/intent/tweet"` ใน `href` attribute เพื่อที่จะทวีต quote ได้

**User Story #11:** ตัว element กรอบที่มีไอดี `#quote-box` จะต้องอยู่ตรงกลางในแนวนอน  โปรดทำการทดสอบด้วยระดับการซูมของเบราว์เซอร์ที่ 100% และขยายหน้าให้ใหญ่สุด

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้</a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ลิงก์ CND นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

**Note:** หากทวีตของคุณไม่โหลด อาจะเป็นเพราะ Twitter ไม่อนุญาตให้โหลดลิงก์ใน iframe ลองใช้ attribute `target="_blank"` หรือ `target="_top"` ใน `#tweet-quote` element อย่าลืมเซฟงานของคุณก่อนที่จะใช้ `target="_top"` เพราะมันจะโหลดทวีตในแท็บปัจจุบัน

# --solutions--

```js
// solution required
```
