---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

การใช้ social authentication จะมีหลักการประมาณนี้:

1. ผู้ใช้คลิกปุ่มหรือลิงก์เพื่อ route ไปยังลิงก์ที่ใช้ authenticate โดยใช้ strategy ที่เราเลือก (เช่น GitHub)
2. route นั้นจะเรียกใช้ `passport.authenticate('github')` ซึ่งจะ redirect ผู้ใช้ไปยัง GitHub
3. ในหน้าของ GitHub ที่เรา redirect ผู้ใช้ไป Github จะให้ผู้ใช้เข้าสู่ระบบ หรือถ้าเข้าสู่ระบบแล้ว Github จะขอให้ผู้ใช้อนุมัติให้แอพของเราเข้าถึงโปรไฟล์ได้
4. จากนั้นผู้ใช้จะถูกส่งกลับไปยังแอปของเราที่ callback URL ที่เราระบุ พร้อมกับส่งค่าของโปรไฟล์มาด้วย ถ้าผู้ใช้อนุมัติ
5. ตอนนี้ผู้ใช้ถูก authenticate แล้ว และแอปต้องตรวจสอบว่ามีผู้ใช้นี้ในแอปของเราหรือยัง ถ้ายังให้เก็บค่าโปรไฟล์ลงฐานข้อมูล

ในการใช้ strategy ของ OAuth อย่างน้อยคุณจะต้องมี *Client ID* และ *Client Secret* ซึ่งจะใช้ตรวจสอบว่า request นี้มาจากไหน และ request นี้ถูกต้องหรือไม่ 
โดยค่าสองตัวนี้เราจะได้มาจากเว็บที่เราจะใช้ในการ authenticate เช่น GitHub ซึ่งค่าสองตัวนี้จะเป็นของแอปของคุณเท่านั้น -- **ค่าสองตัวนี้ห้ามหลุดเด็ดขาด** และห้ามอัปโหลดไปยังที่ที่คนอื่นเข้าถึงได้ และห้ามเขียนไปในโค้ดเลย 
ปกติค่านี้จะเก็บไว้ในไฟล์ `.env` ซึ่งจะเข้าถึงได้โดยใช้วิธีนี้ `process.env.GITHUB_CLIENT_ID` 
ในแบบฝึกหัดนี้ เราจะให้คุณใช้ GitHub strategy

การขอ *Client ID และ Secret* จาก GitHub 
ในการขอ *Client ID* และ *Client Secret* จาก Github ทำได้โดยการไปที่ 'settings' -> 'developer settings' -> '[OAuth Apps](https://github.com/settings/developers)' 
และคลิก 'Register a new application' ตั้งชื่อแอป กรอกลิงก์ไปหน้าแรกของ Replit (**ไม่ใช่ url ของโค้ด**) และสุดท้าย ในส่วน 'Authorization callback URL' ให้กรอก URL เดียวกันกับหน้าแรก แต่เพิ่ม `/auth/github/callback` ต่อท้ายไปด้วย  
route นี้จะเป็น route ที่ผู้ใช้จะถูก redirect ไปหลังจากการ authenticate บน GitHub เสร็จแล้ว 
และให้เก็บค่า `'GITHUB_CLIENT_ID'` และ `'GITHUB_CLIENT_SECRET'` ไว้ในไฟล์ `.env`

ในไฟล์ "routes.js" ให้เพิ่ม "showSocialAuth: true" ในเส้นทางของหน้าแรก ต่อจาก "showRegistration: true" 

ตอนนี้ให้สร้าง 2 endpoint ที่รับ GET request คือ `/auth/github` และ `/auth/github/callback` 

ตัวแรกต้องเรียกใช้ passport เพื่อตรวจสอบสิทธิ์ "github"  
และตัวแรกต้องเรียกใช้ passport เพื่อตรวจสอบสิทธิ์ `'github'` ซึ่งถ้าล้มเหลวให้เปลี่ยนเส้นทางไปที่ `/` จากนั้น แต่ถ้าสำเร็จให้เปลี่ยนเส้นทางไปที่ `/profile' (คล้ายกับ project ที่แล้วของเรา)

โค้ดที่จะใช้ใน route `/auth/github/callback` จะคล้ายๆกับโค้ดส่วนเข้าสู่ระบบ:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

ให้ส่ง URL ของเว็บคุณมาเมื่อทำเสร็จแล้ว ถ้าพบข้อผิดพลาด ให้ลองดูตัวอย่าง project ที่เสร็จสิ้นแล้วได้ [ที่นี่](https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e)

# --hints--

route `/auth/github` ต้องถูกต้อง

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
          data.replace(/\s/g, ''),
          /passport.authenticate.*?github/g,
          'Route auth/github should only call passport.authenticate with github'
        );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

route `/auth/github/callback` ต้องถูกต้อง

```js
async (getUserInput) => {
  try {
    const res = await fetch(getUserInput('url') + '/_api/routes.js');
    if (res.ok) {
      const data = await res.text();
      assert.match(
        data.replace(/\s/g, ''),
        /failureRedirect:("|')\/\1/g,
        'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home'
      );
    } else {
      throw new Error(res.statusText);
    }
    const res2 = await fetch(getUserInput('url') + '/_api/app-stack');
    if (res2.ok) {
      const data2 = JSON.parse(await res2.json());
      const dataLayer = data2.find(layer => layer?.route?.path === '/auth/github/callback');
      assert.deepInclude(dataLayer?.route, { methods: {get: true}, path: "/auth/github/callback"});
      assert.deepInclude(dataLayer?.route?.stack?.[0], {method: "get", name: "authenticate"});
    } else {
      throw new Error(res2.statusText);
    }
  } catch (err) {
    throw new Error(err);
  }
}
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
