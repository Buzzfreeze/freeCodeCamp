---
id: 589a69f5f9fc0f352b528e71
title: Implementation of Social Authentication II
challengeType: 2
forumTopicId: 301557
dashedName: implementation-of-social-authentication-ii
---

# --description--

ส่วนสุดท้ายของการตั้งค่าการรับรองความถูกต้อง GitHub ของคุณคือการสร้างกลยุทธ์เอง จะต้องเพิ่ม dependency ของ `passport-github@~1.1.0` ให้กับโปรเจ็กต์ และต้องมีใน `auth.js` ของคุณเป็น `GithubStrategy` ดังนี้: `const GitHubStrategy = require('passport-github').Strategy;` อย่าลืมกำหนดและกำหนดค่า `dotenv เพื่อใช้ตัวแปรสภาพแวดล้อม

ในการตั้งค่ากลยุทธ์ GitHub คุณต้องบอกให้ Passport ใช้ "GitHubStrategy" ที่สร้างอินสแตนซ์ ซึ่งยอมรับ 2 อาร์กิวเมนต์: object (ประกอบด้วย "clientID", "clientSecret" และ "callbackURL") และฟังก์ชันที่จะเรียกเมื่อ ผู้ใช้ได้รับการพิสูจน์ตัวตนเรียบร้อยแล้ว ซึ่งจะเป็นตัวกำหนดว่าเป็นผู้ใช้รายใหม่หรือไม่ และฟิลด์ใดที่จะบันทึกในขั้นต้นในวัตถุฐานข้อมูลของผู้ใช้ นี่เป็นเรื่องปกติในหลาย ๆ กลยุทธ์ แต่บางคนอาจต้องการข้อมูลเพิ่มเติมตามที่ระบุไว้ใน GitHub README ของกลยุทธ์เฉพาะนั้น ตัวอย่างเช่น Google ต้องมี *ขอบเขต* ซึ่งกำหนดว่าคำขอของคุณ ต้องการให้ส่งคืนข้อมูลประเภทใด และขอให้ผู้ใช้อนุมัติการเข้าถึงดังกล่าว กลยุทธ์ปัจจุบันที่เรากำลังดำเนินการได้อธิบายการใช้งานที่นี่ [here](https://github.com/jaredhanson/passport-github/) แต่เรากำลังทำทั้งหมดบน freeCodeCamp !

กลยุทธ์ใหม่ของคุณควรมีลักษณะดังนี้:

```js
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: /*INSERT CALLBACK URL ENTERED INTO GITHUB HERE*/
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    //Database logic here with callback containing our user object
  }
));
```

การรับรองความถูกต้องยังไม่สำเร็จ และจริง ๆ แล้วจะทำให้เกิดข้อผิดพลาดโดยไม่มี logic ฐานข้อมูลและ callback แต่ควรบันทึกโปรไฟล์ GitHub ของผู้เรียนไปที่ console หากต้องการลอง! 

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/ff3a1166684c1b184709ac0bee30dee6).

# --hints--

passport-github dependency ควรเพิ่ม

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

passport-github ต้องใช้

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

GitHub strategy should be setup correctly thus far.

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
