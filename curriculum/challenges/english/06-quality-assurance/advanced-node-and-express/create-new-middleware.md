---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

ตอนนี้ ผู้ใช้ทุกคนสามารถไปที่ `/profile' ไม่ว่าพวกเขาจะตรวจสอบสิทธิ์หรือไม่ โดยพิมพ์ URL เราต้องการป้องกันสิ่งนี้ โดยตรวจสอบว่าผู้ใช้ได้รับการตรวจสอบสิทธิ์ก่อนหรือไม่ก่อนที่จะ render หน้าโปรไฟล์ อันนี้เป็นตัวอย่างที่สมบูรณ์แบบในการสร้างมิดเดิลแวร์

challenge นี้ คือการสร้างฟังก์ชันมิดเดิลแวร์ `ensureAuthenticated(req, res, next)` ซึ่งจะตรวจสอบว่าผู้ใช้ได้รับการตรวจสอบสิทธิ์โดยการเรียกวิธี `isAuthenticated' ของ passport ใน `request' ซึ่งจะตรวจสอบว่า `req.user ` ถูกกำหนด หากเป็นเช่นนั้น ควรจะเรียก `next()` ไม่เช่นนั้น เราสามารถตอบกลับคำขอด้วยการเปลี่ยนเส้นทางไปยังหน้าแรกของเราเพื่อเข้าสู่ระบบ การใช้งานมิดเดิลแวร์นี้คือ: 

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

ตอนนี้เพิ่ม *ensureAuthenticated* เป็นมิดเดิลแวร์ในคำขอสำหรับหน้าโปรไฟล์ก่อนอาร์กิวเมนต์ของคำขอรับที่มีฟังก์ชันที่แสดงหน้า

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959).

# --hints--

มิดเดิลแวร์ ensureAuthenticated ควรนำไปใช้และใน  /profile route ของเรา 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /ensureAuthenticated[^]*req.isAuthenticated/gi,
        'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'
      );
      assert.match(
        data,
        /profile[^]*get[^]*ensureAuthenticated/gi,
        'Your ensureAuthenticated middleware should be attached to the /profile route'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

รับคำขอไปยัง /profile ควรเปลี่ยนเส้นทางไปยัง / เนื่องจากเราไม่ได้รับการรับรองความถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/profile').then(
    (data) => {
      assert.match(
        data,
        /Home page/gi,
        'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in'
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
