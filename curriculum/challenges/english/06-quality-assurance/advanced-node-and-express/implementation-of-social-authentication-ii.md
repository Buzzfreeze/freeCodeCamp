---
id: 589a69f5f9fc0f352b528e71
title: Implementation of Social Authentication II
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

ส่วนสุดท้ายของการตั้งค่าการ authenticate โดยใช้ GitHub ตือการสร้าง strategy
คุณจะต้องเพิ่ม dependency ของ `passport-github@~1.1.0` ให้กับโปรเจ็กต์ และทำการ require ใน `auth.js` โดยใช้โค้ดนี้: `const GitHubStrategy = require('passport-github').Strategy;` 
อย่าลืมเรียกใช้และกำหนดค่า `dotenv` ด้วย เพื่อให้ใช้ `process.env` ได้

ในการตั้งค่า GitHub strategy คุณจะต้องสร้าง instance ของ `GitHubStrategy` และส่งไปให้ Passport 
ซึ่งในการสร้าง instance ของ `GitHubStrategy` จะต้องส่ง argument ไปสองตัว 2 คือ object (ที่มี `clientID`, `clientSecret` และ `callbackURL`) และฟังก์ชันที่จะเรียกใช้เมื่อผู้ใช้ได้รับการ authenticate เรียบร้อยแล้ว ฟังก์ชันนี้จะเป็นตัวกำหนดว่าเป็นผู้ใช้รายใหม่หรือไม่ และจะเก็บข้อมูลอะไรของผู้ใช้ลงฐานข้อมูล 

strategy ทั่วๆไปจะทำตามนี้ แต่บาง strategy จะต้องให้เราเก็บข้อมูลบางอย่างเพิ่ม ให้ไปดูใน GitHub README ของ strategy นั้นๆว่าต้องทำอย่างไร 
เช่น ถ้าใช้ Google ต้องกำหนด *scope* ด้วยว่าแอปของคุณจะเข้าถึงข้อมูลอะไรของผู้ใช้ได้บ้าง และต้องขอให้ผู้ใช้อนุมัติการเข้าถึงข้อมูลนั้น 

strategy ที่เราใช้อยู่มีวิธีใช้เขียนไว้ [ที่นี่](https://github.com/jaredhanson/passport-github/) แต่เราจะสอนคุณเรื่องนี้ทั้งหมดบนเว็บของเรานี่แหละ!

strategy ใหม่ของคุณควรมีลักษณะดังนี้:

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*ใส่ callback url ตัวเดียวกับที่ระบุไปใน Github ที่นี่*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    // ใช้ฐานข้อมูล และเรียก callback โดยส่ง userobject ไปด้วยที่นี่
  }
));
```

พอมาถึงตรงนี้การ authenticate ของคุณก็จะยังไม่เสร็จ เพราะว่ายังไม่ได้ใช้งานฐานข้อมูล และ callback 
แต่ถ้าลองรันโค้ด ก็จะต้องเห็น profile GitHub ใน console แล้ว

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6)

# --hints--

ต้องใช้ dependency passport-github

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'passport-github',
        'Your project should list "passport-github" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ต้องทำการ require passport-github

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /require.*("|')passport-github("|')/gi,
        'You should have required passport-github'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

ต้องตั้งค่า GitHub strategy ให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/auth.js').then(
    (data) => {
      assert.match(
        data,
        /passport\.use.*new GitHubStrategy/gis,
        'Passport should use a new GitHubStrategy'
      );
      assert.match(
        data,
        /callbackURL:\s*("|').*("|')/gi,
        'You should have a callbackURL'
      );
      assert.match(
        data,
        /process\.env(\.GITHUB_CLIENT_SECRET|\[(?<q>"|')GITHUB_CLIENT_SECRET\k<q>\])/g,
        'You should use process.env.GITHUB_CLIENT_SECRET'
      );
      assert.match(
        data,
        /process\.env(\.GITHUB_CLIENT_ID|\[(?<q>"|')GITHUB_CLIENT_ID\k<q>\])/g,
        'You should use process.env.GITHUB_CLIENT_ID'
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
