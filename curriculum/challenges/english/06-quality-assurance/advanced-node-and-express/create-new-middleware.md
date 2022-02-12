---
id: 5895f70df9fc0f352b528e6a
title: Create New Middleware
challengeType: 2
forumTopicId: 301551
dashedName: create-new-middleware
---

# --description--

ตอนนี้ ผู้ใช้ทุกคนสามารถไปที่ `/profile` ได้โดยพิมพ์ URL ไม่ว่าเขาจะ authenticate หรือไม่ก็ตาม  
เราต้องป้องกันไม่ให้เกิดเรื่องแบบนี้ขึ้น โดยใช้การตรวจสอบว่าผู้ใช้ authenticate หรือยัง ก่อนที่จะแสดงหน้าโปรไฟล์ ตัวอย่างนี้เป็นตัวอย่างที่ดีมาก ในการบอกว่าเมื่อไหร่ที่เราควรจะสร้าง middleware

ในแบบทดสอบนี้ เราจะให้คุณสร้าง middleware function `ensureAuthenticated(req, res, next)` ซึ่งจะตรวจสอบว่าผู้ใช้ได้รับการตรวจสอบสิทธิ์โดยการเรียกใช้ method `isAuthenticated` ของ passport ใน `request` ซึ่งจะตรวจสอบว่ามีค่าของ `req.user` หรือไม่ ถ้ามีต้องเรียกใช้ `next()` ถ้าไม่มี ให้ทำการ redirect ไปยังหน้า /login 

middleware ตัวนี้จะถูกใช้แบบนี้: 

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
```

ส่วนการเพิ่ม middleware *ensureAuthenticated* ใน route 	`/profile` จะใช้วิธีนี้:

```js
app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render(process.cwd() + '/views/pug/profile');
 });
```

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/ae49b8778cab87e93284a91343da0959)

# --hints--

ต้องใช้ middleware `ensureAuthenticated` กับ route `/profile` ของเรา 

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

การส่ง GET request ไปยัง /profile ต้องถูก redirect ไปที่ / เพราะยังไม่ได้ทำการ authenticate

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
