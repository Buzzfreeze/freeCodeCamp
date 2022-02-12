---
id: 587d824a367417b2b2512c43
title: Personal Library
challengeType: 4
forumTopicId: 301571
dashedName: personal-library
---

# --description--

ให้สร้างแอปแบบ full stack โดยใช้ JavaScript ที่ทำงานคล้ายกับเว็บไซต์นี้ <https://personal-library.freecodecamp.rocks/>  
ในการทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-library/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-library)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ของ source code เข้าไปใน `GitHub Link` ด้วยก็ได้

# --instructions--

1. ให้เพิ่ม connection string ของ MongoDB ไว้ใน `.env` โดยไม่มีเครื่องหมายคำพูด โดยเก็บเป็นตัวแปร `DB`
     ตัวอย่าง: `DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2. ในไฟล์ `.env` ของคุณ ให้ตั้งค่า `NODE_ENV` เป็น `test` โดยไม่มีเครื่องหมายคำพูด
3. ต้องสร้าง route ทั้งหมดภายใน `routes/api.js`
4. จะต้องสร้างการทดสอบการทำงานทั้งหมดใน `tests/2_functional-tests.js` 

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา

```js
(getUserInput) => {
  assert(
    !/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

สามารถส่ง <b>POST</b> request ไปที่ `/api/books` ได้ โดยระบุ `title` เป็น form data เพื่อเพิ่มหนังสือในฐานข้อมูล โดยค่าที่คืนกลับมาจะเป็น object ที่มี `title` และ unique `_id` เป็น key หลัก ถ้าไม่ระบุ `title` ใน request โดยค่าที่คืนกลับมาจะเป็น string `missing required field title`

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

สามารถส่ง <b>GET</b> request ไปที่ `/api/books` ได้ โดยค่าที่คืนกลับมาจะเป็น JSON ที่แสดงถึงหนังสือทั้งหมด โดย JSON ที่คืนกลับมาจะเป็น array ของ object โดยแต่ละ object (หนังสือ) จะมี property `title`, `_id` และ `commentcount`

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

สามารถส่ง <b>GET</b> request ไปที่ `/api/books/{_id}` เพื่อดึง object หนังสือ ที่มี property `title`, `_id` และ array `comments` (array จะว่าง หากไม่มีความคิดเห็น) หากไม่พบหนังสือ ให้ส่งคืน string `no book exists`

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

สามารถส่ง <b>POST</b> request ที่มี `comment` เป็น form data ไปที่ `/api/books/{_id}` ได้ โดยจะไปเพิ่ม comment ของหนังสือ การตอบกลับจะเป็น object หนังสือที่คล้ายกับ <b>GET</b> request `/api/books/{_id}` ในการทดสอบก่อนหน้านี้ หากไม่มี `comment` อยู่ใน request ให้คืนค่าเป็น string `missing required field comment` หากไม่พบหนังสือ ให้คืนค่าเป็น string `no book exists`

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

สามารถส่ง <b>DELETE</b> request ไปที่ `/api/books/{_id}` เพื่อลบหนังสือออกจาก collection ได้ ถ้าลบสำเร็จ จะคืนค่าเป็น string `delete successful` ถ้าไม่พบหนังสือ ให้คืนค่าเป็น string `no book exists`

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

สามารถส่ง <b>DELETE</b> request ไปที่ `/api/books` เพื่อลบหนังสือทั้งหมดในฐานข้อมูลได้ ถ้าสำเร็จ ให้คืนค่าเป็น string `'complete delete successful`  

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

functional test ทั้งหมด 10 รายการต้องเสร็จสมบูรณ์และผ่าน 

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
