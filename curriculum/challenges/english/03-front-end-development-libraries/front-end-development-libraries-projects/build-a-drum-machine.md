---
id: 587d7dbc367417b2b2512bae
title: Build a Drum Machine
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/MJyNMd>

ลองดู [User Story](https://en.wikipedia.org/wiki/User_story) ข้างล่าง แล้วเขียนโค้ดตาม User Story นี้ โดยจะแต่งหน้าตาของแอปในส่วนที่ไม่ได้ระบุได้ตามที่ชอบเลย

จะใช้เครื่องมือไหนในการเขียนโปรเจคนี้ก็ได้ ไม่ว่าจะเป็น HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux หรือ jQuery 
เนื่องจากบทเรียนนี้เกี่ยวกับ frontend framework คุณจึงควรนำ frontend framework มาใช้งานด้วย (อย่าง React เป็นต้น) ไม่แนะนำให้ใช้ภาษาหรือเทคโนโลยีอื่นๆ นอกจากที่ให้ไว้ข้างบน เราจะช่วยแก้ไขหรือช่วยเหลือหากเกิดบัคหรือปัญหาจากภาษาที่แนะนำข้างต้นเท่านั้น 

**User Story #1:** ฉันเห็น container ชั้นนอกสุดที่มี id เป็น `"drum-machine"` ที่ครอบ element ทุกตัวไว้ในนี้

**User Story #2:** ฉันเห็นว่าใน `#drum-machine` มี element ที่มี id เป็น `"display"`

**User Story #3:** ฉันเห็นว่าใน `#drum-machine` มี element ที่ปุ่ม drum pad ทั้งหมด 9 ปุ่ม ซึ่งทุกอันมี class ขื่อ `drum-pad` และแต่ละ drum pad นี้จะมี id เป็นของตัวเองที่ใช้เพื่อระบุคลิปเสียงที่ drum pad นั้นๆถูกตั้งค่าให้เล่น และบน drum pad ก็จะมีตัวอักษรที่ถ้ากดปุ่มบน keyboard ตามตัวอักษรนั้น drum pad นั้นก็จะถูกเล่น คือ `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C` ตัวอักษรบน drum pad ต้องเรียงตามลำดับนี้เท่านั้น

**User Story #4:** ภายใน `.drum-pad` แต่ละอัน จะต้องมี HTML5 `audio` element ที่ระบุ `src` ไปยังคลิปเสียง ให้มีชื่อ class ชื่อ `clip` และ ไอดีสอดคล้องกับข้อความภายในของ element `.drum-pad` (เช่น `id="Q"`, `id="W"`, `id="E"` เป็นต้น)

**User Story #5:** เมื่อฉันคลิกที่ element `.drum-pad` คลิปเสียงที่อยู่ใน element `audio` ซึ่งเป็น element ลูกของ `.drum-pad` จะถูกเล่น

**User Story #6:** เมื่อฉันกดคีย์บนแป้นพิมพ์ที่ตรงกับ `.drum-pad` แต่ละอัน คลิปเสียงที่อยู่ใน element `audio` ซึ่งเป็น element ลูกของ `.drum-pad` จะถูกเล่น (เช่น กดแป้นพิมพ์ตัว `Q` จะต้องเล่นเสียงที่อยู่ใน drum pad ที่มี string `Q` อยู่  หรือ เมื่อกดแป้นพิมพ์ตัว `W` จะต้องเล่นเสียงที่อยู่ใน drum pad ที่มี string `W` อยู่ เป็นต้น).

**User Story #7:** การคลิกหรือกดคีย์บอร์ดที่ตรงกับ `.drum-pad` แล้ว drum pad ทำงาน จะต้องแสดงข้อความของคลิปเสียงนั้นใน element ที่มี id เป็น `#display` (ข้อความของคลิปเสียงแต่ละอันจะต้องไม่ซ้ำกัน)

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้</a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
