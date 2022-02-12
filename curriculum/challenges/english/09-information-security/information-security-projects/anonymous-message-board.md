---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

ลองสร้างแอปแบบ full stack โดยใช้ JavaScript โดยให้แอปมีฟังก์ชันเหมือนกับ: <https://anonymous-message-board.freecodecamp.rocks/>

เนื่องจาก API ราคาหุ้นที่เชื่อถือได้ทั้งหมดต้องใช้ API Key เราจึงสร้างวิธีแก้ปัญหาชั่วคราว โดยให้ใช้ [Link นี้](https://stock-price-checker-proxy.freecodecamp.rocks/) เพื่อดึงข้อมูลราคาหุ้นโดยที่ไม่ต้องลงทะเบียนคีย์ของคุณเอง

ให้วิธีทำแบบฝึกหัดในบทเรียนนี้ โดยเลือกจากวิธีด้านล่างนี้:

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-messageboard/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ source code ของโปรเจคคุณมาในช่อง `GitHub Link` ด้วยก็ได้

# --instructions--

1. ในไฟล์ `.env` ให้ตั้งค่า `NODE_ENV` ให้เป็น `test` (โดยต้องไม่ใส่เครื่องหมายคำพูด) เมื่อต้องการทดสอบ และเก็บค่า connection string ของ MongoDB ใน `DB` 
2. แนะนำให้สร้าง controllers/handlers และ handle routing ใน `routes/api.js`
3. ให้เพิ่มฟีเจอร์ด้านความปลอดภัยต่างๆ ในไฟล์ `server.js`

เขียน test ข้างล่างนี้ใน `tests/2_functional-tests.js`:

- สร้าง thread ใหม่: ส่ง POST request ไปยัง `/api/threads/{board}`
- ดู 10 thread ล่าสุดโดยแต่ละ thread มี reply 3 ครั้ง: ส่ง GET request ไปยัง `/api/threads/{board}`
- ลบ thread โดยใช้พาสเวิร์ดผิด: ส่ง DELETE request ไปยัง `/api/threads/{board}` โดย `delete_password` ผิด
- ลบ thread โดยใช้พาสเวิร์ดที่ถูกต้อง: ส่ง DELETE request ไปยัง `/api/threads/{board}` โดย `delete_password` ถูก
- รายงาน thread: ส่ง PUT request ไปยัง `/api/threads/{board}`
- สร้าง reply ใหม่: ส่ง POST request ไปยัง `/api/replies/{board}`
- ดู thread เดียวพร้อมกับ reply ทั้งหมด: ส่ง GET request ไปยัง `/api/replies/{board}`
- ลบ reply โดยใช้พาสเวิร์ดผิด: ส่ง DELETE request ไปยัง `/api/replies/{board}` โดย `delete_password` ผิด
- ลบ reply โดยใช้พาสเวิร์ดที่ถูกต้อง: ส่ง DELETE request ไปยัง `/api/replies/{board}` โดย `delete_password` ถูก
- รายงาน reply: ส่ง PUT request ไปยัง `/api/replies/{board}`

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

อนุญาตให้โหลดเว็บไซต์ของคุณใน iFrame บนหน้าเว็บของคุณเองเท่านั้น

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

ไม่อนุญาตให้ดึงข้อมูล DNS ล่วงหน้า

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

ต้องตั้งค่า referrer-policy เป็น `same-origin`

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

ต้องส่ง POST request ไปยัง `/api/threads/{board}` ได้ โดยส่งไปพร้อมกับ form data ที่มีฟิลด์ `text` และ `delete_password` ซึ่งข้อมูลที่ถูกเซฟจะต้องมีรายละเอียด (อย่างน้อย) ตามนี้ `_id`, `text`, `created_on`(วัน&เวลา), `bumped_on`(วัน&เวลา, ค่าเริ่มต้นเป็นค่าเดียวกับ `created_on`), `reported` (boolean), `delete_password`, และ `replies` (array)

```js
async (getUserInput) => {
  const date = new Date();
  const text = `fcc_test_${date}`;
  const deletePassword = 'delete_me';
  const data = { text, delete_password: deletePassword };
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(url + '/api/threads/fcc_test');
    const parsed = await checkData.json();
    try {
      assert.equal(parsed[0].text, text);
      assert.isNotNull(parsed[0]._id);
      assert.equal(new Date(parsed[0].created_on).toDateString(), date.toDateString());
      assert.equal(parsed[0].bumped_on, parsed[0].created_on);
      assert.isArray(parsed[0].replies);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

ต้องส่ง POST request ไปยัง `/api/replies/{board}` ได้ โดยส่งไปพร้อมกับ form data ที่มีฟิลด์ `text`, `delete_password`, และ `thread_id` โดยจะไปอัปเดท `bumped_on` ให้เป็นค่าของวันที่ตอบกลับ thread นี้ และใน array `replies` ของ thread ค่าของ object reply ที่จะถูกเซฟจะต้องมี property (อย่างน้อย) ดังนี้ `_id`, `text`, `created_on`, `delete_password`, และ `reported`

```js

```

ต้องส่ง GET request ไปยัง `/api/threads/{board}` ได้ โดยค่าที่คืนมาจะเป็น array ของ thread 10 ตัว ที่มีค่า `bumped_on` ใหม่ที่สุด พร้อมแสดง reply 3 ตัวล่าสุดของแต่ละ thread ในส่วนของ `reported` และ `delete_password` จะไม่ถูกส่งไปยังฝั่ง client

```js

```

ต้องส่ง GET request ไปยัง `/api/replies/{board}?thread_id={thread_id}` ได้ โดยค่าที่คืนมาจะเป็น thread นั้นพร้อม reply ทั้งหมดของ thread นั้น ในส่วนของ `reported` และ `delete_password` จะไม่ถูกส่งไปยังฝั่ง client

```js

```

ต้องส่ง DELETE request ไปยัง `/api/threads/{board}` ได้ โดยส่งค่า `thread_id` และ `delete_password` ไปเพื่อลบ thread  โดยค่าที่คืนมาจะเป็น string `incorrect password` หรือ `success` 

```js

```

ต้องส่ง DELETE request ไปยัง `/api/replies/{board}` ได้ โดยส่งค่า `thread_id`, `reply_id`, และ `delete_password` ไป โดยค่าที่คืนมาจะเป็น string `incorrect password` หรือ `success` ถ้าเป็น success แล้ว ข้อความของ `reply_id` จะเปลี่ยนเป็น `[deleted]`

```js

```

ต้องส่ง PUT request ไปยัง `/api/threads/{board}` ได้ โดยส่งค่า `thread_id` ไป โดยค่าที่คืนมาจะเป็น string `success` และค่า `reported ` ของ `thread_id` นั้นจะถูกเปลี่ยนเป็น `true`

```js

```

ต้องส่ง PUT request ไปยัง `/api/replies/{board}` ได้ โดยส่งค่า `thread_id` และ `reply_id` ไป โดยค่าที่คืนมาจะเป็น string `success` และค่า `report` ของ `reply_id` นั้นจะถูกเปลี่ยนเป็น `true`

```js

```

การทดสอบฟังก์ชันทั้งหมด 10 รายการจะต้องเสร็จสมบูรณ์และ test ผ่าน

```js

```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
