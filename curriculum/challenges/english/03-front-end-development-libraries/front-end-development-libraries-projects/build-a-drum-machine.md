---
id: 587d7dbc367417b2b2512bae
title: Build a Drum Machine
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**Objective:** ลองทำแอป [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/MJyNMd>

ลองดู [user stories](https://en.wikipedia.org/wiki/User_story) ข้างล่าง และทำให้ระบบ Test ทังหมด run ผ่าน โดยสามารถออกแบบหน้าตาแอปตามสไตล์ของคุณเองได้เลย

คุณสามารถใช้ HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux และ jQuery รวมกันได้ในการทำโปรเจคนี้ เนื่องจากบทเรียนนี้คือบทเรียนเกี่ยวกับ frontend framework คุณจึงควรนำ frontend framework มาใช้งานด้วย (อย่าง React เป็นต้น) ไม่แนะนำให้ใช้ภาษาหรือเทคโนโลยีอื่นๆ นอกจากที่ให้ไว้ข้างบน เราจะช่วยแก้ไขหรือช่วยเหลือหากเกิดบักหรือปัญหาจากภาษาที่แนะนำข้างต้นเท่านั้น 

**User Story #1:** จะต้องมี container ชั้นนอกสุดที่มีไอดี `id="drum-machine"` ที่ครอบ element ทุกอย่างไว้ในนี้

**User Story #2:** ภายใน `#drum-machine` จะต้องมี element ที่มีไอดี `id="display"`.

**User Story #3:** ภายใน `#drum-machine` จะต้องมี element ที่เป็นสำหรับปุ่ม drum pad  9 element ซึ่งทุกอันที่ class ขื่อว่า `drum-pad` และแต่ละ drum pad element นี้จะมีไอดีเฉพาะเพื่อการระบุคลิปเสียงที่ drum pad นั้นๆ ได้ถูกตั้งค่าให้เล่น และมีตัวอักษรบน pad ที่สอดคล้องกับปุ่มอักษรของ keyboard ที่ใช้ในการกดคือ: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C` ตามลำดับนี้เท่านั้น

**User Story #4:** ภายใน `.drum-pad` แต่ละอัน จะต้องมี HTML5 `audio` element ที่ระบุ `src` ไปยังคลิปเสียง ให้มีชื่อ class ชื่อ `clip` และ ไอดีสอดคล้องกับข้อความภายในของ element `.drum-pad` (เช่น `id="Q"`, `id="W"`, `id="E"` เป็นต้น)

**User Story #5:** เมื่อฉันคลิกที่ element `.drum-pad` คลิปเสียงที่อยู่ใน element `audio` ซึ่งเป็น element ลูกของ `.drum-pad` จะถูกเล่น

**User Story #6:** เมื่อฉันกดคีย์บนแป้นพิมพ์ที่ตรงกับ `.drum-pad` แต่ละอัน คลิปเสียงที่อยู่ใน element `audio` ซึ่งเป็น element ลูกของ `.drum-pad` จะถูกเล่น (เช่น กดแป้นพิมพ์ตัว `Q` จะต้องเล่นเสียงที่อยู่ใน drum pad ที่มี string `Q` อยู่  หรือ เมื่อกดแป้นพิมพ์ตัว `W` จะต้องเล่นเสียงที่อยู่ใน drum pad ที่มี string `W` อยู่ เป็นต้น).

**User Story #7:** เมื่อ `.drum-pad` ใดๆ ถูกทำให้ทำงาน จะทำให้ข้อความ string ที่เกี่ยวข้องกับคลิปเสียงนั้นถูกแสดงภายใน element ที่มีไอดี `#display` (ข้อความ string แต่ละอันจะต้องไม่ซ้ำกัน)

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้ </a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ลิงก์ CND นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
