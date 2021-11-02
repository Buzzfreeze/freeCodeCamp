---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

ลองสร้างแอป full stack จาก JavaScript ที่มีฟังก์ชันเหมือนกับ: <https://anonymous-message-board.freecodecamp.rocks/>

ในการทำโปรเจคนี้จะทำให้คุณเขียนโค้ด ที่มี method ต่างๆ ด้านล่างนี้: 

- Clone [Github repo นี้](https://github.com/freeCodeCamp/boilerplate-project-messageboard/) แล้วนำมาใช้กับโปรเจคของคุณบนเครื่องของคุณเอง
- ให้ใช้ [โปรเจค  Replit starter ของเรา](https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard)  กับโปรเจคนี้
- ใช้ตัวสร้างเว็บไซต์ที่คุณต้องการในการทำโปรเจคนี้ อย่าลืมรวมไฟล์ทั้งหมดจาด Github repo ของเราลงไปด้วย

เมื่อทำโปรเจคนี้เสร็จแล้ว ให้อัปโหลดงานเดโมที่ใช้งานได้ไปบนโฮสต์ที่ไหนก็ได้ที่เป็น public หลังจากนั้นส่ง URL นั้นมาในช่อง `Solution Link` และคุณสามารถส่งลิงก์ source code ของโปรเจคคุณมาในช่อง `GitHub Link` ด้วยหรือไม่ก็ได้

# --instructions--

1. ตั้งค่า `NODE_ENV` เพื่อทดสอบโดยไม่ใส่เครื่องหมายคำพูด เมื่อพร้อมที่จะเขียนการทดสอบและ DB ไปยังสตริงการเชื่อมต่อฐานข้อมูลของคุณ (ใน `.env`)
2. แนะนำให้สร้าง controllers/handlers และ handle routing ใน `routes/api.js`
3. คุณสามารถเพิ่มฟีเจอร์ด้านความปลอดภัยต่างๆ ในไฟล์ `server.js`

เขียน test ต่างๆ ด้านล่างนี้ ใน `tests/2_functional-tests.js`

- สร้าง thread ใหม่คือ: ใช้ POST ที่เรียกไปยัง `/api/threads/{board}`
- สามารถดู 10  thread ล่าสุดโดยมีการตอบกลับ 3 ครั้งในแต่ละ thread : ใช้ GET เรียกไปที่ `/api/threads/{board}`
- ลบ thread ด้วยพาสเวิร์ดที่ไม่ถูกต้อง: ใช้ DELETE เรียกไปยัง `/api/threads/{board}` กับ `delete_password` ที่ไม่ถูกต้อง
- ลบ thread ด้วยพาสเวิร์ดที่ถูกต้อง: ใช้ DELETE เรียกไปยัง `/api/threads/{board}` กับ `delete_password` ที่ถูกต้อง
- รายงาน thread : ใช้ PUT เรียกไปยัง `/api/threads/{board}`
- สร้าง reply ใหม่: ใช้ POST เรียกไปยัง `/api/replies/{board}`
- ดู thread เดียวพร้อมกับ reply ทั้งหมด: ใช้ GET เรียกไปยัง `/api/replies/{board}`
- ลบ reply ด้วยพาสเวิร์ดที่ไม่ถูกต้อง: ใช้ DELETE เรียกไปยัง `/api/replies/{board}` กับ `delete_password` ที่ไม่ถูกต้อง
- ลบ reply ด้วยพาสเวิร์ดที่ถูกต้อง: ใช้ DELETE เรียกไปยัง `/api/replies/{board}` กับ `delete_password` ที่ถูกต้อง
- รายงาน reply: ใช้ PUT เรียกไปยัง `/api/replies/{board}`

# --hints--

คุณสามารถสร้างโปรเจ็คของคุณเองได้โดยไม่ต้องใช้ URL ตัวอย่าง

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

อนุญาตให้โหลดเว็บไซต์ของคุณใน iFrame บนหน้าเพจของคุณเองเท่านั้น

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

อนุญาตให้ไซต์ของคุณส่ง referrer สำหรับหน้าเพจของคุณเองเท่านั้น

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

คุณสามารถส่ง POST request ไปยัง `/api/threads/{board}` พร้อมกับข้อมูลของฟอร์มที่มี `text` และ `delete_password` ซึ่งข้อมูลที่ถูกเซฟจะต้องมีรายละเอียดอย่างน้อย ดังนี้ `_id`, `text`, `created_on`(วัน & เวลา), `bumped_on`(วัน & เวลา, เริ่มต้นพร้อมกับ `created_on`), `reported` (boolean), `delete_password`, & `replies` (array)

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

คุณสามารถส่ง POST request ไปยัง `/api/replies/{board}` พร้อมกับข้อมูลของฟอร์มที่มี `text`, `delete_password`, และ `thread_id` สิ่งเหล่านี้จะไปอัปเดตข้อมูลวันที่ `bumped_on` ให้กับ วันของ comment ต่างๆ ใน `replies` array ของ thread  object ที่จะถูกเซฟจะต้องมี property อย่างน้อย ดังนี้ `_id`, `text`, `created_on`, `delete_password`, และ `reported`

```js

```

คุณสามารถส่ง GET request ไปยัง `/api/threads/{board}` สิ่งที่ return มาจะเป็น array ของ thread ที่มีข้อมูลอัปเดตเข้ามาล่าสุดพร้อมแสดง 3 reply ล่าสุดของแต่ละ thread นั้นทั้งหมด 10  thread  ในส่วนของ `reported` และ `delete_password` จะไม่ถูกส่งไปยังฝั่ง client

```js

```

คุณสามารถส่ง GET request ไปยัง `/api/replies/{board}?thread_id={thread_id}` ซึ่ง return จะเป็น thread นั้นพร้อม reply ของมันทั้งหมดด้วย และยังไม่รวมส่วนที่เหมือนกันของ test ก่อนหน้านี้จากฝั่ง client

```js

```

คุณสามารถส่ง DELETE request ไปยัง `/api/threads/{board}` และส่งผ่าน `thread_id` และ `delete_password` เพื่อลบ thread  ซึ่งจะ return สตริง `incorrect password` หรือ `success`

```js

```

คุณสามารถส่ง DELETE request ไปยัง `/api/replies/{board}` ส่งผ่าน `thread_id`, `reply_id`, และ `delete_password` ซึ่งจะ return สตริง `incorrect password` หรือ `success` ถ้าเป็น success แล้ว ข้อความของ `reply_id` จะเปลี่ยนเป็น `[deleted]`

```js

```

คุณสามารถส่ง PUT request ไปยัง `/api/threads/{board}` ส่งผ่าน `thread_id` ซึ่งจะ return สตริง `success` ค่าของ `report` ของ `thread_id จะถูกเปลี่ยนเป็น `true`

```js

```

คุณสามารถส่ง PUT request ไปยัง `/api/replies/{board}` ส่งผ่าน `thread_id` และ `reply_id` ซึ่งจะ return สตริง `success` `success` ค่าของ `report` ของ `reply_id จะถูกเปลี่ยนเป็น `true`

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
