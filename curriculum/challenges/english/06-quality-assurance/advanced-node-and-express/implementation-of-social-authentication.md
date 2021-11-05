---
id: 589a69f5f9fc0f352b528e70
title: Implementation of Social Authentication
challengeType: 2
forumTopicId: 301559
dashedName: implementation-of-social-authentication
---

# --description--

เส้นทางพื้นฐานของการตรวจสอบสิทธิ์ประเภทนี้จะตามมาในแอป:


1. ผู้ใช้คลิกปุ่มหรือลิงก์เพื่อส่งไปยังเส้นทางของเราเพื่อตรวจสอบสิทธิ์โดยใช้กลยุทธ์เฉพาะ (เช่น GitHub)
2. เส้นทางเรียก `passport.authenticate('github')` ซึ่งเปลี่ยนเส้นทางไปยัง GitHub
3. หน้าที่ผู้ใช้ไปถึงบน GitHub อนุญาตให้ผู้ใช้เข้าสู่ระบบหากยังไม่ได้ทำ จากนั้นจะขอให้ผู้ใช้อนุมัติการเข้าถึงโปรไฟล์จากแอพของเรา
4. จากนั้นผู้ใช้จะถูกส่งกลับไปยังแอปของเราที่ URL โทรกลับที่ระบุพร้อมกับโปรไฟล์หากได้รับการอนุมัติ
5. ตอนนี้ผู้ใช้ได้รับการตรวจสอบสิทธิ์แล้ว และแอปควรตรวจสอบว่าเป็นโปรไฟล์ที่ส่งคืนหรือไม่ หรือบันทึกไว้ในฐานข้อมูลของคุณหากไม่ใช่

กลยุทธ์กับ OAuth กำหนดให้คุณต้องมี *Client ID* และ *Client Secret* เป็นอย่างน้อย ซึ่งเป็นวิธีการสำหรับบริการในการตรวจสอบว่าคำขอตรวจสอบสิทธิ์นั้นมาจากใครและคำขอนั้นถูกต้องหรือไม่ สิ่งเหล่านี้ได้มาจากไซต์พยายามใช้การรับรองความถูกต้องด้วย เช่น GitHub และมีความเฉพาะสำหรับแอป -- ** ไม่ควรแชร์** และไม่ควรอัปโหลดไปยังที่เก็บสาธารณะหรือเขียนโดยตรงใน รหัส. แนวทางปฏิบัติทั่วไปคือการใส่ไว้ในไฟล์ `.env' และอ้างอิงดังนี้: `process.env.GITHUB_CLIENT_ID` สำหรับความท้าทายนี้ เราจะใช้กลยุทธ์ GitHub

การรับ *Client ID and Secret* จาก GitHub ทำได้ในการตั้งค่าโปรไฟล์บัญชีของคุณภายใต้ 'developer settings' จากนั้น '[แอปพลิเคชัน OAuth](https://github.com/settings/developers)' คลิก 'Register a new application' ตั้งชื่อแอป วาง URL ไปยังหน้าแรกของ Replit (**ไม่ใช่ url ของรหัสโครงการ**) และสุดท้าย สำหรับ url การ callback ให้วาง URL เดียวกันกับหน้าแรก แต่มี เพิ่ม `/auth/github/callback' นี่คือที่ที่ผู้ใช้จะถูกเปลี่ยนเส้นทางให้เราจัดการหลังจากตรวจสอบสิทธิ์บน GitHub บันทึกข้อมูลที่ส่งคืนเป็น `'GITHUB_CLIENT_ID'` และ `'GITHUB_CLIENT_SECRET'` ในไฟล์ `.env`

ในไฟล์ "routes.js" ให้เพิ่ม "showSocialAuth: true" ในเส้นทางของหน้าแรก ต่อจาก "showRegistration: true" ตอนนี้ สร้าง 2 เส้นทางที่ยอมรับคำขอ GET: `/auth/github` และ `/auth/github/callback` อันดับแรกควรเรียกหนังสือเดินทางเพื่อตรวจสอบสิทธิ์ "github" เท่านั้น ประการที่สอง ควรเรียก passport เพื่อตรวจสอบสิทธิ์ `'github'` โดยล้มเหลวในการเปลี่ยนเส้นทางไปที่ `/` จากนั้นหากเปลี่ยนเส้นทางไปที่ `/profile' ได้สำเร็จ (คล้ายกับ project ที่แล้วของเรา)

ตัวอย่างของ `/auth/github/callback` ควรมีลักษณะอย่างไร คล้ายกับที่เราจัดการกับการเข้าสู่ระบบปกติ:

```js
app.route('/login')
  .post(passport.authenticate('local', { failureRedirect: '/' }), (req,res) => {
    res.redirect('/profile');
  });
```

ส่งเพจของผู้เรียน เมื่อคิดว่าทำถูกต้องแล้ว หากพบข้อผิดพลาด สามารถตรวจสอบ project ที่เสร็จสิ้นได้ [here](https://gist.github.com/camperbot/1f7f6f76adb178680246989612bea21e).

# --hints--

Route `/auth/github` ควรถูกต้อง

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

Route `/auth/github/callback` ควรถูกต้อง

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
