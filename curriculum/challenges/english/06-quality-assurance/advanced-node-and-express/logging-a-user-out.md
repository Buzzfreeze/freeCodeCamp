---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

การสร้าง logic การออกจากระบบเป็นเรื่องง่าย 
โดย route แค่ต้องทำการ unauthenticate ผู้ใช้ และ redirect ไปยังหน้าแรกของเว็บ

ใน passport การ unauthenticate ผู้ใช้ทำได้ง่ายๆ แค่เรียกใช้ `req.logout();` ก่อน redirect

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

จนถึงตอนนี้ คุณน่าจะเห็นแล้วว่า เรายังไม่ได้จัดการเลยว่าถ้าผู้ใช้พยายามจะเข้าถึงหน้าที่เรายังไม่มี (404) เราจะทำอย่างไร 
วิธีปกติในการจัดการใน Node คือการใช้ middleware ตัวต่อไปนี้ 
ให้เพิ่มโค้ดด้านล่างนี้ ไว้ใต้การประกาศ route ตัวอื่นๆทั้งหมด:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b)

# --hints--

ต้องเรียกใช้ `req.Logout` ใน route `/logout`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /req.logout/gi,
        'You should be calling req.logout() in your /logout route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

การออกจากระบบต้องทำการ redirect ไปยังหน้าหลักด้วย 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/logout').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'When a user logs out they should be redirected to the homepage'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
