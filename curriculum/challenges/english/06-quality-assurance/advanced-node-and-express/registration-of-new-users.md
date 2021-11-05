---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--


ตอนนี้เราต้องอนุญาตให้ผู้ใช้ใหม่บนไซต์ของเราลงทะเบียนบัญชี ใน `res.render' สำหรับโฮมเพจ ให้เพิ่มตัวแปรใหม่ให้กับวัตถุที่ส่งผ่าน --`showRegistration: true` เมื่อคุณรีเฟรชหน้าของคุณ คุณควรเห็นแบบฟอร์มการลงทะเบียนที่สร้างไว้แล้วในไฟล์ `index.pug` ของคุณ! แบบฟอร์มนี้ตั้งค่าเป็น **POST** บน `/register' ดังนั้นนี่คือที่ที่เราควรตั้งค่าให้ยอมรับ **POST** และสร้างวัตถุผู้ใช้ในฐานข้อมูล

logic ของเส้นทางการลงทะเบียนควรเป็นดังนี้:  Register the new user > Authenticate the new user > Redirect to /profile

logic ของขั้นตอนที่ 1 การลงทะเบียนผู้ใช้ใหม่ควรเป็นดังนี้: สืบค้นฐานข้อมูลด้วยคำสั่ง findOne > หากผู้ใช้ถูกส่งคืน แสดงว่ามีอยู่แล้วและเปลี่ยนเส้นทางกลับไปที่หน้าแรก *หรือ* หากผู้ใช้ไม่ได้กำหนดและไม่มีข้อผิดพลาดเกิดขึ้น ให้ป้อน 'insertOne' ลงในฐานข้อมูลด้วยชื่อผู้ใช้และรหัสผ่าน และตราบใดที่ไม่มี error เกิดขึ้น ให้ call *ถัดไป* เพื่อไปยังขั้นตอนที่ 2 ตรวจสอบสิทธิ์ผู้ใช้ใหม่ ซึ่งเราได้เขียน logic ไว้แล้วในเส้นทาง POST */login* ของเรา .

```js
app.route('/register')
  .post((req, res, next) => {
    myDataBase.findOne({ username: req.body.username }, function(err, user) {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        myDataBase.insertOne({
          username: req.body.username,
          password: req.body.password
        },
          (err, doc) => {
            if (err) {
              res.redirect('/');
            } else {
              // The inserted document is held within
              // the ops property of the doc
              next(null, doc.ops[0]);
            }
          }
        )
      }
    })
  },
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
      res.redirect('/profile');
    }
  );
```

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e).

**หมายเหตุ:** จากจุดนี้เป็นต้นไป ปัญหาอาจเกิดขึ้นเกี่ยวกับการใช้เบราว์เซอร์ *ภาพซ้อนภาพ* หากกำลังใช้ IDE ออนไลน์ซึ่งมีการแสดงตัวอย่างของแอปภายในตัวแก้ไข ขอแนะนำให้เปิดการแสดงตัวอย่างนี้ในแท็บใหม่

# --hints--

คุณควรลงทะเบียน route และแสดงที่ home

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /showRegistration:( |)true/gi,
        'You should be passing the variable showRegistration as true to your render function for the homepage'
      );
      assert.match(
        data,
        /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi,
        'You should have a route accepted a post request on register that querys the db with findone and the query being username: req.body.username'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

การลงทะเบียนควรใช้งานได้

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const user = `freeCodeCampTester${Date.now()}`;
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      test(this);
    } else {
      throw new Error(`${this.status} ${this.statusText}`);
    }
  };
  xhttp.open('POST', url + '/register', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send(`username=${user}&password=${user}`);
  function test(xhttpRes) {
    const data = xhttpRes.responseText;
    assert.match(
      data,
      /Profile/gi,
      'Register should work, and redirect successfully to the profile.'
    );
  }
};
```

การเข้าสู่ระบบควรใช้งานได้

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const user = `freeCodeCampTester${Date.now()}`;
  const xhttpReg = new XMLHttpRequest();
  xhttpReg.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      login();
    } else {
      throw new Error(`${this.status} ${this.statusText}`);
    }
  };
  xhttpReg.open('POST', url + '/register', true);
  xhttpReg.setRequestHeader(
    'Content-type',
    'application/x-www-form-urlencoded'
  );
  xhttpReg.send(`username=${user}&password=${user}`);
  function login() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        test(this);
      } else {
        throw new Error(`${this.status} ${this.statusText}`);
      }
    };
    xhttp.open('POST', url + '/login', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`username=${user}&password=${user}`);
  }
  function test(xhttpRes) {
    const data = xhttpRes.responseText;
    assert.match(
      data,
      /Profile/gi,
      'Login should work if previous test was done successfully and redirect successfully to the profile.'
    );
    assert.match(
      data,
      new RegExp(user, 'g'),
      'The profile should properly display the welcome to the user logged in'
    );
  }
};
```

ออกจากระบบควรทำงาน

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/logout',
    type: 'GET',
    xhrFields: { withCredentials: true }
  }).then(
    (data) => {
      assert.match(data, /Home/gi, 'Logout should redirect to home');
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

โปรไฟล์จะไม่ทำงานอีกต่อไปหลังจากออกจากระบบ

```js
(getUserInput) =>
  $.ajax({
    url: getUserInput('url') + '/profile',
    type: 'GET',
    crossDomain: true,
    xhrFields: { withCredentials: true }
  }).then(
    (data) => {
      assert.match(
        data,
        /Home/gi,
        'Profile should redirect to home when we are logged out now again'
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
