---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
challengeType: 2
forumTopicId: 301515
dashedName: meet-the-node-console
---

# --description--

ในการทำแบบทดสอบนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีด้านล่างนี้ ให้เลือก 1 วิธีที่เหมาะกับคุณที่สุด:


- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-express/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-express)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ`

สิ่งสำคัญในระหว่างที่เขียนโค้ดคือ คุณจะต้องรูปว่าโปรแกรมของคุณทำอะไรอยู่

Node ก็เป็น JavaScript ตัวหนึ่งเหมือนกัน เพราะฉะนั้นก็จะแลดงข้อมูลบน console ได้เหมือนกับการใช้ JavaScript บน client 
การใช้ Node จะแสดงข้อมูลที่คุณ log ออกมาบน terminal
ถ้าคุณใช้ Replit แล้ว terminal จะเป็นหน้าต่างทางด้านขวา

เราขอแนะนำให้เปิด terminal ไว้ตลอดเวลาเขียนโค้ด เพราะการ log ข้อมูลออกมาบน terminal จะทำให้คุณเห็นว่าเกิดข้อผิดพลาดตรงไหนบ้าง

# --instructions--

แก้ไขไฟล์ `myApp.js` เพื่อ log "Hello World" ลงในคอนโซล

# --hints--

ต้องแสดงคำว่า `"Hello World"` ในคอนโซล

```js

(getUserInput) =>
  $.get(getUserInput('url') + '/_api/hello-console').then(
    (data) => {
      assert.isTrue(data.passed, '"Hello World" is not in the server console');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
  
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
