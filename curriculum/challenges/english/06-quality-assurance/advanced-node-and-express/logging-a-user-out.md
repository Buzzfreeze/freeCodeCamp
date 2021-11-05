---
id: 58965611f9fc0f352b528e6c
title: Logging a User Out
challengeType: 2
forumTopicId: 301560
dashedName: logging-a-user-out
---

# --description--

การสร้าง logic การออกจากระบบเป็นเรื่องง่าย route ควรยกเลิกการตรวจสอบสิทธิ์ผู้ใช้และเปลี่ยนเส้นทางไปยังโฮมเพจแทนการแสดงมุมมองใดๆ

ใน passport การยกเลิกการตรวจสอบสิทธิ์ผู้ใช้ทำได้ง่ายเพียงแค่เรียก `req.logout();` ก่อนเปลี่ยนเส้นทาง

```js
app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});
```

อาจสังเกตเห็นว่าเราไม่ได้จัดการหน้าที่หายไป (404) วิธีทั่วไปในการจัดการสิ่งนี้ใน Node คือการใช้มิดเดิลแวร์ต่อไปนี้ไว้ข้างหน้าและเพิ่มสิ่งนี้หลังจากเส้นทางอื่น ๆ ทั้งหมด:

```js
app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
});
```

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้  [here](https://gist.github.com/camperbot/c3eeb8a3ebf855e021fd0c044095a23b).

# --hints--

`req.Logout` should be called in your `/logout` route.

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

Logout ออกจากระบบควรเปลี่ยนเส้นทางไปยังโฮมเพจ 

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
