---
id: bd7158d8c442eddfaeb5bd0f
title: Build a 25 + 5 Clock
challengeType: 3
forumTopicId: 301373
dashedName: build-a-25--5-clock
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/XpKrrW>

ลองดู [User Story](https://en.wikipedia.org/wiki/User_story) ข้างล่าง แล้วเขียนโค้ดตาม User Story นี้ โดยจะแต่งหน้าตาของแอปในส่วนที่ไม่ได้ระบุได้ตามที่ชอบเลย

จะใช้เครื่องมือไหนในการเขียนโปรเจคนี้ก็ได้ ไม่ว่าจะเป็น HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux หรือ jQuery 
เนื่องจากบทเรียนนี้เกี่ยวกับ frontend framework คุณจึงควรนำ frontend framework มาใช้งานด้วย (อย่าง React เป็นต้น) ไม่แนะนำให้ใช้ภาษาหรือเทคโนโลยีอื่นๆ นอกจากที่ให้ไว้ข้างบน เราจะช่วยแก้ไขหรือช่วยเหลือหากเกิดบัคหรือปัญหาจากภาษาที่แนะนำข้างต้นเท่านั้น 

**User Story #1:** จะต้องมี element ที่มี id เป็น `"break-label"` และมี string อยู่ข้างใน (เช่น "Break Length")

**User Story #2:** จะต้องมี element ที่มี id เป็น `"session-label"` และมี string อยู่ข้างใน (เช่น "Session Length").

**User Story #3:** จะต้องมี element ที่คลิกได้ 2 ตัวโดยมี id เป็น `"break-decrement"` และ `"session-decrement"` ตามลำดับ

**User Story #4:** จะต้องมี element ที่คลิกได้ 2 ตัวโดยมี id เป็น `"break-increment"` และ `"session-increment"` ตามลำดับ

**User Story #5:** จะต้องมี element ที่มี id เป็น `"break-length"` โดยมีค่าเริ่มต้น (ตอนโหลดครั้งแรก) เป็น 5

**User Story #6:** จะต้องมี element ที่มี id เป็น `"session-length"` โดยมีค่าเริ่มต้นเป็น 25

**User Story #7:** จะต้องมี element ที่มี id เป็น `"timer-label"` ที่มี string ที่สื่อว่า Session เริ่มต้นแล้ว (เช่น "Session")

**User Story #8:** จะต้องมี element ที่มี id เป็น `"time-left"` หมายเหตุ: ค่าใน field นี้จะต้องแสดงในรูปแบบ `mm:ss` เสมอไม่ว่าเวลาจะเดินหรือหยุดอยู่ (เช่น 25:00)

**User Story #9:** จะต้องมี element ที่สามารถคลิกได้ที่มี id เป็น `"start_stop"`.

**User Story #10:** จะต้องมี element ที่สามารถคลิกได้ที่มี id เป็น `"reset"`.

**User Story #11:** เมื่อฉันคลิก element ที่มี id เป็น `reset` แล้ว ตัวจับเวลาที่กำลังทำงานอยู่ทุกตัวจะต้องหยุด ค่าที่อยู่ใน `id="break-length"` จะต้องกลับไปเป็น 5 ค่าที่อยู่ใน `id="session-length"` จะต้องกลับไปเป็น 25 และ element ที่มี id เป็น `"time-left"` จะต้องกลับไปเป็นค่าเริ่มต้น

**User Story #12:** เมื่อฉันคลิก element ที่มี id เป็น `break-decrement` จะทำให้ค่าที่อยู่ใน `id="break-length"` ลดลงไป 1 พร้อมกับแสดงผลค่าล่าสุดให้เห็นด้วย

**User Story #13:** เมื่อฉันคลิก element ที่มี id เป็น `break-increment` จะทำให้ค่าที่อยู่ใน `id="break-length"` เพิ่มขึ้นมา 1 พร้อมกับแสดงผลค่าล่าสุดให้เห็นด้วย

**User Story #14:** เมื่อฉันคลิก element ที่มี id เป็น `session-decrement` จะทำให้ค่าที่อยู่ใน `id="session-length"` ลดลงไป 1 พร้อมกับแสดงผลค่าล่าสุดให้เห็นด้วย

**User Story #15:** เมื่อฉันคลิก element ที่มี id เป็น `session-increment` จะทำให้ค่าที่อยู่ใน `id="session-length"` เพิ่มขึ้นมา 1 พร้อมกับแสดงผลค่าล่าสุดให้เห็นด้วย

**User Story #16:** ฉันไม่สามารถตั้งค่า session หรือ break length ให้ &lt;= 0 ได้

**User Story #17:** ฉันไม่สามารถตั้งค่า session หรือ break length ให้ > 60 ได้

**User Story #18:** เมื่อฉันคลิก element ที่มี `id="start_stop"` ครั้งแรกนั้น ตัวจับเวลาควรจะต้องเริ่มนับเวลาจากค่าปัจจุบันที่แสดงผลอยู่ใน `id="session-length"` ถึงแม้ว่าค่าดังกล่าวจะถูกทำให้เพิ่มขึ้นหรือลดลงไปจากค่าตั้งต้นที่ 25

**User Story #19:** เมื่อตัวจับเวลาทำงานอยู่ แล้ว element ที่มี id เป็น `time-left` จะต้องแสดงค่าเวลาที่เหลือในรูปแบบ `mm:ss` (ต้องลดลงทีละ 1 วินาที และอัปเดตค่าที่เปลี่ยนแปลงไปทุกๆ 1000ms)

**User Story #20:** เมื่อตัวจับเวลากำลังทำงาน และฉันคลิกไปที่ element ที่มีไอดี `id="start_stop"` การนับเวลาถอยหลังจะหยุดทำงาน

**User Story #21:** เมื่อตัวจับเวลาหยุดทำงาน และฉันคลิกไปที่ element ที่มี id เป็น `id="start_stop"` การนับเวลาถอยหลังจะทำงานต่อจากเวลาหยุดไว้เลย

**User Story #22:** เมื่อการนับเวลาถอยหลังของ session ถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) แล้วเมื่อเริ่มการจับเวลาใหม่ element ที่มี id เป็น `timer-label` จะต้องแสดง string ที่บอกว่าช่วงเวลาพักได้เริ่มขึ้นแล้ว

**User Story #23:** เมื่อการนับเวลาถอยหลังของช่วง session ถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) การนับเวลาถอยหลังในช่วงพักจะเริ่มต้นขึ้น และเริ่มนับถอยหลังจากเวลาที่แสดงอยู่ใน element ที่มี id เป็น `id="break-length"`

**User Story #24:** เมื่อการนับเวลาถอยหลังของช่วงพักถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) แล้วเมื่อเริ่มการจับเวลาใหม่นั้น element ที่มี id เป็น `timer-label` จะต้องแสดง string ที่บอกว่าช่วงเวลา session ได้เริ่มขึ้นแล้ว

**User Story #25:** เมื่อการนับเวลาถอยหลังของช่วงพักถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) การนับเวลาถอยหลังของ session จะเริ่มต้นขึ้น และเริ่มนับถอยหลังจากเวลาที่แสดงอยู่ใน element ที่มี id เป็น `id="session-length"`

**User Story #26:** เมื่อการนับเวลาถอยหลังถึงเลข 0  (หมายเหตุ: ตัวนับเวลาจะต้องแสดงเป็น 00:00) แอปจะต้องเล่นเสียงที่ทำให้รู้ว่าเวลาหมดแล้ว ซึ่งก็คือการทำให้แท็ก `audio` ของ HTML5 ทำงาน และแท็กนี้ต้องมี id เป็น `"beep"`

**User Story #27:** element `audio` ที่มี id เป็น `"beep"` ต้องใช้เสียงที่มีความยาวอย่างน้อย 1 วินาที

**User Story #28:** ถ้า element ที่มี id เป็น `reset` ถูกคลิก แล้ว element `audio` ที่มี id เป็น `beep` จะต้องหยุดเล่น และกลับไปเริ่มต้นใหม่

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้</a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
