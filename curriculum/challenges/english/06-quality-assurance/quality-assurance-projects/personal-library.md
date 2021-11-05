---
id: 587d824a367417b2b2512c43
title: Personal Library
challengeType: 4
forumTopicId: 301571
dashedName: personal-library
---

# --description--

สร้างแอพ full stack JavaScript ซึ่งมีฟังก์ชันการทำงานคล้าย link นี้ : <https://personal-library.freecodecamp.rocks/>  ทำงานใน project นี้ เขียน code โดยใช้วิธีใดวิธีหนึ่งต่อไปนี้: 

- ทำการ clone repo [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-project-library) เพื่อสร้าง project ในนั้นให้สำเร็จ
- ใช้  project เริ่มต้นจาก [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-library) เพื่อสร้าง project ให้สำเร็จ
- ใช้ site builder ที่ผู้เรียนเลือก เพื่อสร้าง project ให้เสร็จ อย่าลืมรวมไฟล์ทั้งหมดจาก repo GitHub 

เมื่อผู้เรียนทำเสร็จแล้ว ตรวจสอบให้แน่ใจว่าตัว Demo ของ project ของคุณตั้งค่า Host เป็น Public จากนั้นส่ง URL ไปที่ช่อง `Solution Link` หรือส่งลิงก์ไปยัง source code ของ project ผู้เรียน ตรง `GitHub Link`

# --instructions--

1. เพิ่ม string การเชื่อมต่อ MongoDB ไปที่ `.env' โดยไม่มีเครื่องหมายคำพูดเป็น `DB`
     ตัวอย่าง: `DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2. ในไฟล์ ".env" ของคุณ ให้ตั้งค่า "NODE_ENV" เป็น "ทดสอบ" โดยไม่มีเครื่องหมายคำพูด
3. ต้องสร้าง route ทั้งหมดภายใน `routes/api.js`
4. จะต้องสร้างการทดสอบการทำงานทั้งหมดใน `tests/2_functional-tests.js` 

# --hints--

ผู้เรียนสามารถจัดหา project ของผู้เรียนเองได้ โดยไม่ใช้ URL ตัวอย่าง 

```js
(getUserInput) => {
  assert(
    !/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

ผู้เรียนสามารถส่งคำขอ <b>POST</b> request ไปที่ `/api/books` โดยมี `title' เป็นส่วนหนึ่งของข้อมูลในแบบฟอร์มเพื่อ add หนังสือ การ response จะเป็น object ที่มี `title` และ "_id" ที่ไม่ซ้ำกันเป็น key หลัก หากไม่มี `title`อยู่ในคำขอ การ response ส่งคืนควรเป็น string `missing required field title`

```js
async (getUserInput) => {
  try {
    let data1 = await $.post(getUserInput('url') + '/api/books', {
      title: 'Faux Book 1'
    });
    assert.isObject(data1);
    assert.property(data1, 'title');
    assert.equal(data1.title, 'Faux Book 1');
    assert.property(data1, '_id');
    let data2 = await $.post(getUserInput('url') + '/api/books');
    assert.isString(data2);
    assert.equal(data2, 'missing required field title');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ผู้เรียนสามารถส่งคำขอ <b>GET</b> request ไปที่ `/api/books` และรับ JSON ที่แสดงถึงหนังสือทั้งหมดได้ โดย JSON จะ response เป็น array ของ object โดยแต่ละ object (หนังสือ) ประกอบด้วย`title`, `_id` และ `commentcount`

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let a = $.post(url, { title: 'Faux Book A' });
    let b = $.post(url, { title: 'Faux Book B' });
    let c = $.post(url, { title: 'Faux Book C' });
    await Promise.all([a, b, c]).then(async () => {
      let data = await $.get(url);
      assert.isArray(data);
      assert.isAtLeast(data.length, 3);
      data.forEach((book) => {
        assert.isObject(book);
        assert.property(book, 'title');
        assert.isString(book.title);
        assert.property(book, '_id');
        assert.property(book, 'commentcount');
        assert.isNumber(book.commentcount);
      });
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};

```

ผู้เรียนสามารถส่งคำขอ <b>GET</b> request ไปที่ `/api/books/{_id}` เพื่อดึงobject เดี่ยวของหนังสือที่มีคุณสมบัติ array ประกอบด้วย `title', `_id` และ `comments`  ( array จะว่าง หากไม่มีความคิดเห็น) หากไม่พบหนังสือ ให้ส่งคืน string `no book exists`

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let noBook = await $.get(url + '/5f665eb46e296f6b9b6a504d');
    assert.isString(noBook);
    assert.equal(noBook, 'no book exists');
    let sampleBook = await $.post(url, { title: 'Faux Book Alpha' });
    assert.isObject(sampleBook);
    let bookId = sampleBook._id;
    let bookQuery = await $.get(url + '/' + bookId);
    assert.isObject(bookQuery);
    assert.property(bookQuery, 'title');
    assert.equal(bookQuery.title, 'Faux Book Alpha');
    assert.property(bookQuery, 'comments');
    assert.isArray(bookQuery.comments);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ผู้เรียนสามารถส่งคำขอ <b>POST</b> ที่มี `comment`เป็นข้อมูลเนื้อหาของแบบฟอร์มไปที่ `/api/books/{_id}` เพื่อเพิ่มความคิดเห็นในหนังสือ การตอบกลับจะเป็น object หนังสือที่คล้ายกับคำขอ <b>GET</b> `/api/books/{_id}` ในการทดสอบก่อนหน้านี้ หากไม่มี `comment` อยู่ในคำขอ ให้ส่งคืน string `missing required field comment`หากไม่พบหนังสือ ให้ส่งคืน string`no book exists`

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let commentTarget = await $.post(url, { title: 'Notable Book' });
    assert.isObject(commentTarget);
    let bookId = commentTarget._id;
    let bookCom1 = await $.post(url + '/' + bookId, {
      comment: 'This book is fab!'
    });
    let bookCom2 = await $.post(url + '/' + bookId, {
      comment: 'I did not care for it'
    });
    assert.isObject(bookCom2);
    assert.property(bookCom2, '_id');
    assert.property(bookCom2, 'title');
    assert.property(bookCom2, 'comments');
    assert.lengthOf(bookCom2.comments, 2);
    bookCom2.comments.forEach((comment) => {
      assert.isString(comment);
      assert.oneOf(comment, ['This book is fab!', 'I did not care for it']);
    });
    let commentErr = await $.post(url + '/' + bookId);
    assert.isString(commentErr);
    assert.equal(commentErr, 'missing required field comment');
    let failingComment = await $.post(url + '/5f665eb46e296f6b9b6a504d', {
      comment: 'Never Seen Comment'
    });
    assert.isString(failingComment);
    assert.equal(failingComment, 'no book exists');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ผู้เรียนสามารถส่งคำขอ <b>DELETE</b> request ไปที่ `/api/books/{_id}` เพื่อลบหนังสือออกจากคอลเลกชั่น หากสำเร็จ การ response ที่ส่งคืนจะเป็น string `delete successful`หากไม่พบหนังสือ ให้ส่งคืน string `no book exists`

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let deleteTarget = await $.post(url, { title: 'Deletable Book' });
    assert.isObject(deleteTarget);
    let bookId = deleteTarget._id;
    let doDelete = await $.ajax({ url: url + '/' + bookId, type: 'DELETE' });
    assert.isString(doDelete);
    assert.equal(doDelete, 'delete successful');
    let failingDelete = await $.ajax({
      url: url + '/5f665eb46e296f6b9b6a504d',
      type: 'DELETE'
    });
    assert.isString(failingDelete);
    assert.equal(failingDelete, 'no book exists');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ผู้เรียนสามารถส่งคำขอ <b>DELETE</b> request ไปที่ `/api/books` เพื่อลบหนังสือทั้งหมดในฐานข้อมูล หากสำเร็จ การ response ที่ส่งคืนจะเป็น string `'complete delete successful`  

```js
async (getUserInput) => {
  try {
    const deleteAll = await $.ajax({
      url: getUserInput('url') + '/api/books',
      type: 'DELETE'
    });
    assert.isString(deleteAll);
    assert.equal(deleteAll, 'complete delete successful');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

การทดสอบการใช้งาน (functional tests) ทั้งหมด 10 รายการเสร็จสมบูรณ์และผ่าน 

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    assert.isAtLeast(getTests.length, 10, 'At least 10 tests passed');
    getTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
