---
id: bd7158d8c442eddfaeb5bd13
title: Build a Random Quote Machine
challengeType: 3
forumTopicId: 301374
dashedName: build-a-random-quote-machine
---

# --description--

**Objective:** ให้เขียนแอปใน [CodePen.io](https://codepen.io)  โดยให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/qRZeGZ>.

ให้ลองดู [User Story](https://en.wikipedia.org/wiki/User_story) ข้างล่าง แล้วเขียนโค้ดตาม User Story นี้ โดยจะแต่งหน้าตาของแอปในส่วนที่ไม่ได้ระบุได้ตามที่ชอบเลย
(User Story จะเหมือนกับการที่ผู้ใช้ อธิบายสิ่งที่เขาเห็นบนแอปของเราออกมาเป็นภาษาพูด)

จะใช้เครื่องมือไหนในการเขียนโปรเจคนี้ก็ได้ ไม่ว่าจะเป็น HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux หรือ jQuery 
เนื่องจากบทเรียนนี้เกี่ยวกับ frontend framework คุณจึงควรนำ frontend framework มาใช้งานด้วย (อย่าง React เป็นต้น) ไม่แนะนำให้ใช้ภาษาหรือเทคโนโลยีอื่นๆ นอกจากที่ให้ไว้ข้างบน เราจะช่วยแก้ไขหรือช่วยเหลือหากเกิดบัคหรือปัญหาจากภาษาที่แนะนำข้างต้นเท่านั้น 

**User Story #1:** ฉันเห็น element ที่มี `id="quote-box"` ครอบ element อื่นอยู่

**User Story #2:** ฉันเห็น element ที่มี `id="text"` ใน `#quote-box`

**User Story #3:** ฉันเห็น element ที่มี `id="author"` ใน `#quote-box`

**User Story #4:**  ฉันเห็น element ที่คลิกได้และมี `id="new-quote"` ใน `#quote-box`

**User Story #5:** ฉันเห็นแท็ก `a` ที่คลิกได้และมี `id="tweet-quote"` ใน `#quote-box`

**User Story #6:** ตอนที่เปิดหน้าขึ้นมาครั้งแรก แอป quote machine จะแสดงข้อความแบบสุ่มใน element ที่มี `id="text"`

**User Story #7:** ตอนที่เปิดหน้าขึ้นมาครั้งแรก แอป quote machine จะแสดงชื่อของผู้เขียนข้อความที่มาจากการสุ่มภายใน element ที่มี `id="author"`

**User Story #8:** เมื่อคลิกที่ปุ่ม `#new-quote` แอป quote machine จะดึงข้อความใหม่มา และแสดงข้อความนั้นใน element `#text` 

**User Story #9:** แอป quote machine จะดึงชื่อของผู้เขียนข้อความมาใหม่ เมื่อคลิกปุ่ม `#new-quote` และแสดงชื่อผู้เขียนใน element `#author` 

**User Story #10:** ฉันสามารถทวีต quote ที่แสดงอยู่ได้โดยการคลิก element `a` ที่มีไอดีเป็น `tweet-quote` ซึ่ง element `a` จะต้องมี attribute `href` ที่ลิงก์ไปยัง `"twitter.com/intent/tweet"` เพื่อที่จะทวีตข้อความได้

**User Story #11:** ตัว element ที่มี id เป็น `#quote-box` ที่ครอบตัวอื่นอยู่ จะต้องอยู่ตรงกลางในแนวนอน  ให้ทดสอบว่าอยู่กลางจริงหรือเปล่า ด้วยการปรับระดับการซูมของเบราว์เซอร์เป็น 100% และขยายหน้าให้ใหญ่สุด

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้</a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

**Note:** หากทวีตของคุณไม่โหลด อาจะเป็นเพราะ Twitter ไม่อนุญาตให้โหลดลิงก์ใน iframe ลองใช้ attribute `target="_blank"` หรือ `target="_top"` ใน element `#tweet-quote` อย่าลืมเซฟงานของคุณก่อนที่จะใช้ `target="_top"` เพราะวิธีนี้จะโหลดทวีตในแท็บปัจจุบัน

# --solutions--

```js
// solution required
```
