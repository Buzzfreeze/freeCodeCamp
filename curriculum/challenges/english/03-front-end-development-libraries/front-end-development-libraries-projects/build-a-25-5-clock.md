---
id: bd7158d8c442eddfaeb5bd0f
title: Build a 25 + 5 Clock
challengeType: 3
forumTopicId: 301373
dashedName: build-a-25--5-clock
---

# --description--

**Objective:** ลองทำแอป [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/XpKrrW>

ลองดู [user stories](https://en.wikipedia.org/wiki/User_story) ข้างล่าง และทำให้ระบบ Test ทังหมด run ผ่าน โดยสามารถออกแบบหน้าตาแอปตามสไตล์ของคุณเองได้เลย

คุณสามารถใช้ HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux และ jQuery รวมกันได้ในการทำโปรเจคนี้ เนื่องจากบทเรียนนี้คือบทเรียนเกี่ยวกับ frontend framework คุณจึงควรนำ frontend framework มาใช้งานด้วย (อย่าง React เป็นต้น) ไม่แนะนำให้ใช้ภาษาหรือเทคโนโลยีอื่นๆ นอกจากที่ให้ไว้ข้างบน เราจะช่วยแก้ไขหรือช่วยเหลือหากเกิดบักหรือปัญหาจากภาษาที่แนะนำข้างต้นเท่านั้น 

**User Story #1:** จะต้องมี element ที่มี `id="break-label"` และมี string (เช่น "Break Length")

**User Story #2:** จะต้องมี element ที่มี `id="session-label"` และมี string (เช่น "Session Length").

**User Story #3:** จะต้องมี element ที่สามารถคลิกได้ 2 element ที่มี ไอดี: `id="break-decrement"` และ `id="session-decrement"` ตามลำดับ

**User Story #4:** จะต้องมี element ที่สามารถคลิกได้ 2 element ที่มี ไอดี: `id="break-increment"` และ `id="session-increment"` ตามลำดับ

**User Story #5:** จะต้องมี element ที่มีไอดี `id="break-length"` โดยมีค่าเริ่มต้น (ตอนโหลด) จะแสดงค่าเป็น 5

**User Story #6:** จะต้องมี element ที่มีไอดี `id="session-length"`โดยมีค่าเริ่มต้นจะแสดงค่าเป็น 25

**User Story #7:** จะต้องมี element ที่มีไอดี `id="timer-label"` ที่มี string ระบุว่า session is initialized (เช่น "Session")

**User Story #8:** จะต้องมี element ที่มีไอดี `id="time-left"` หมายเหตุ: ค่าใน field นี้จะต้องแสดงในรูปแบบ `mm:ss` เสมอไม่ว่าเวลาจะเดินหรือหยุดอยู่ (เช่น 25:00)

**User Story #9:** จะต้องมี element ที่สามารถคลิกได้ที่มีไอดี `id="start_stop"`.

**User Story #10:** จะต้องมี element ที่สามารถคลิกได้ที่มีไอดี `id="reset"`.

**User Story #11:** เมื่อฉันคลิก element ที่มีไอดีว่า `reset` แล้ว ตัวจับเวลาที่กำลังทำงานอยู่ทุกตัวจะต้องหยุด ค่าที่อยู่ใน `id="break-length"` จะต้องกลับไปที่ 5 ค่าที่อยู่ใน `id="session-length"` ต้องกลับไปที่ 25 และ element ที่มี `id="time-left"` จะต้องรีเซ็ตไปที่จุดเดิม

**User Story #12:** เมื่อฉันคลิก element ที่มีไอดี `break-decrement` จะทำให้ค่าที่อยู่ใน `id="break-length"` ลดลงไป 1 พร้อมกับแสดงผลค่าล่าสุดให้เห็นด้วย

**User Story #13:** เมื่อฉันคลิก element ที่มีไอดี `break-increment` จะทำให้ค่าที่อยู่ใน `id="break-length"` เพิ่มขึ้นมา 1 พร้อมกับแสดงผลค่าล่าสุดให้เห็นด้วย

**User Story #14:** เมื่อฉันคลิก element ที่มีไอดี `session-decrement` จะทำให้ค่าที่อยู่ใน` `id="session-length"` ลดลงไป 1 พร้อมกับแสดงผลค่าล่าสุดให้เห็นด้วย

**User Story #15:** เมื่อฉันคลิก element ที่มีไอดี `session-increment` จะทำให้ค่าที่อยู่ใน` `id="session-length"` เพิ่มขึ้นมา 1 พร้อมกับแสดงผลค่าล่าสุดให้เห็นด้วย

**User Story #16:** ฉันไม่สามารถตั้งค่า session หรือ breal length ที่ &lt;= 0 ได้

**User Story #17:** ฉันไม่สามารถตั้งค่า session หรือ breal length ที่ > 60

**User Story #18:** เมื่อฉันคลิก element ที่มี `id="start_stop"` ครั้งแรกนั้น ตัวจับเวลาควรจะต้องเริ่มนับเวลาจากค่าปัจจุบันที่แสดงผลอยู่ใน `id="session-length"` ถึงแม้ว่าค่าดังกล่าวจะถูกทำให้เพิ่มขึ้นหรือลดลงไปจากค่าตั้งต้นที่ 25

**User Story #19:** เมื่อตัวจับเวลากำลังทำงานและ element ที่มีไอดี `time-left` จะต้องแสดงค่าเวลาที่เหลือในรูปแบบ `mm:ss` (ลดลงไปด้วยค่าของ 1 และอัปเดตค่าที่เปลี่ยนแปลงไปทุกๆ 1000ms)

**User Story #20:** เมื่อตัวจับเวลากำลังทำงาน และฉันคลิกไปที่ element ที่มีไอดี `id="start_stop"` การนับเวลาถอยหลังจะหยุดทำงาน

**User Story #21:** เมื่อตัวจับเวลาหยุดทำงาน และฉันคลิกไปที่ element ที่มีไอดี `id="start_stop"` การนับเวลาถอยหลังจะเริ่มทำงานต่อเนื่องจากก่อนหน้าที่ได้หยุดการทำงานไว้

**User Story #22:** เมื่อการนับเวลาถอยหลังของช่วง session ถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) แล้วเมื่อเริ่มการจับเวลาใหม่นั้น element ที่มีไอดี `timer-label` จะต้องแสดง string ที่บอกว่าช่วงเวลา break ได้เริ่มขึ้นแล้ว

**User Story #23:** เมื่อการนับเวลาถอยหลังของช่วง session ถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) การนับเวลาถอยหลังในช่วง break จะเริ่มต้นขึ้น และเริ่มนับถอยหลังจากเวลาที่แสดงอยู่ใน element ที่มีไอดี `id="break-length"`

**User Story #24:** เมื่อการนับเวลาถอยหลังของช่วง break ถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) แล้วเมื่อเริ่มการจับเวลาใหม่นั้น element ที่มีไอดี `timer-label` จะต้องแสดง string ที่บอกว่าช่วงเวลา session ได้เริ่มขึ้นแล้ว

**User Story #25:** เมื่อการนับเวลาถอยหลังของช่วง break ถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) การนับเวลาถอยหลังในช่วง session จะเริ่มต้นขึ้น และเริ่มนับถอยหลังจากเวลาที่แสดงอยู่ใน element ที่มีไอดี `id="session-length"`

**User Story #26:** เมื่อการนับเวลาถอยหลังถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) แอปจะต้องเล่นเสียงที่ทำให้รู้ว่าเวลาหมดแล้ว ซึ่งก็คือการทำให้ tag `audio` ของ HTML5 ทำงาน และ tag นี้ให้กำหนดไอดีว่า `id="beep"`

**User Story #27:** element เสียงที่มีไอดี `id="beep"` ต้องมีความยาวเสียงอย่างน้อย 1 วินาทีหรือยาวกว่านั้น

**User Story #28:** element เสียงที่มีไอดี `beep` จะต้องหยุดเล่นและย้อนกลับไปยังจุดเริ่มต้นเมื่อคลิก element ที่มีไอดี `reset`

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้ </a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ลิงก์ CND นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
