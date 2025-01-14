---
id: 58966a17f9fc0f352b528e6d
title: Registration of New Users
challengeType: 2
forumTopicId: 301561
dashedName: registration-of-new-users
---

# --description--


ถึงเวลาที่เราจะทำให้ผู้ใช้ลงทะเบียนได้แล้ว 
ใน `res.render` ของหน้าแรก (`/`) ให้เพิ่มค่า `showRegistration: true` ให้กับ object ที่คืนค่าออกไป  
คราวนี้เมื่อคุณรีเฟรชหน้า คุณควรเห็น form ที่ใช้ลงทะเบียนที่เราสร้างไว้ให้แล้วในไฟล์ `index.pug` 
แบบฟอร์มนี้ถูกตั้งค่าส่ง **POST** request ไปยัง `/register` 
ดังนั้นเราต้องสร้าง route ที่รับ **POST** request ตัวนี้ เพื่อเพิ่มผู้ใช้ใหม่ลงในฐานข้อมูล

logic ของ route ในการลงทะเบียนควรเป็นดังนี้:  
`ลงทะเบียนผู้ใช้` > `ตรวจสอบสิทธิ์ผู้ใช้ใหม่` > `Redirect ไปยังหน้า /profile`

logic ของขั้นตอนที่ 1 การลงทะเบียนผู้ใช้ควรเป็นดังนี้:
ค้นหาข้อมูลในฐานข้อมูลด้วยคำสั่ง findOne > 
ถ้าเจอข้อมูลผู้ใช้ แสดงว่ามีผู้ใช้นี้อยู่แล้ว และ redirect กลับไปที่หน้าแรก 
ถ้าไม่เจอข้อมูลผู้ใช้ และไม่มีข้อผิดพลาดเกิดขึ้น 
ให้ทำการ 'insertOne' เพื่อเพิ่มข้อมูลผู้ใช้และรหัสผ่านลงในฐานข้อมูล  
ถ้ามาถึงขั้นนี้และยังไม่เกิดข้อผิดพลาดขึ้น ให้เรียกใช้ `next()` เพื่อไปยังขั้นตอนที่ 2 คือการ `ตรวจสอบสิทธิ์ผู้ใช้ใหม่` ที่เราได้เขียน logic ไว้แล้วใน route `POST /login`

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
              // document ที่ถูกเพิ่มลงในฐานข้อมูล
              // ถูกเก็บไว้ใน property ops ของ doc
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

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/b230a5b3bbc89b1fa0ce32a2aa7b083e)

**หมายเหตุ:** จากจุดนี้เป็นต้นไป ปัญหาอาจเกิดขึ้นถ้าใช้เบราว์เซอร์แบบ *picture-in-picture* 
ถ้าตอนนี้คุณใช้ IDE ออนไลน์ ที่แสดงตัวอย่างแอปในหน้าเดียวกับโค้ด ขอแนะนำให้เปิดการแสดงตัวอย่างนี้ในแท็บหรือหน้าต่างใหม่

# --hints--

ต้องมี route register ที่รับ POST request และหน้าหลักต้องแสดง form สำหรับลงทะเบียน

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

การลงทะเบียนต้องใช้งานได้

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

การเข้าสู่ระบบต้องใช้งานได้

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

การออกจากระบบต้องใช้งานได้

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

ต้องเข้าหน้าโปรไฟล์ไม่ได้เมื่อออกจากระบบแล้ว

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
