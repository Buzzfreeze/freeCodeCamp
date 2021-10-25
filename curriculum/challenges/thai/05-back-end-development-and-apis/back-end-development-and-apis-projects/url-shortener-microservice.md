---
id: bd7158d8c443edefaeb5bd0e
title: URL Shortener Microservice
challengeType: 4
forumTopicId: 301509
dashedName: url-shortener-microservice
---

# --description--

สร้างแอพแบบ full stack ด้วย JavaScript ที่ทำงานคล้ายกับเว็บไซต์ <https://url-shortener-microservice.freecodecamp.rocks/>  การทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

-   Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-urlshortener/)  ในการทำโปรเจค โดยทำให้เสร็จทีละส่วน
-   ใช้เว็บไซต์ [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-project-urlshortener) ในการทำโปรเจคให้เสร็จสมบูรณ์
-   ใช้ตัวสร้างไซต์ที่คุณเลือก ทำโปรเจคให้เสร็จสมบูรณ์ และอย่าลืมรวมไฟล์ทั้งหมดจาก GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ตรวจสอบให้แน่ใจด้วยว่า ไฟล์โปรเจคของคุณอยู่ในสถานะที่ทุกคนสามารถมองเห็นได้(public) หลังจากนั้นส่งลิงก์ URL ไว้ใน `Solution Link` หรือส่งลิงก์ซอร์สโค้ดของโปรเจคไว้ใน `GitHub Link` อีกช่องทางหนึ่งก็ได้


# --instructions--

**HINT:** อย่าลืมใช้มิดเดิลแวร์(middleware) ในการแยกวิเคราะห์เนื้อหาเพื่อจัดการกับคำขอของ POST และคุณควรจะใช้ฟังก์ชัน `dns.lookup(host, cb)` จากคอร์โมดูล (core module) เพื่อยืนยัน URL ที่ส่งมา

# --hints--

คุณควรที่จะให้แหล่งโปรเจคของคุณ ไม่ใช่ตัวอย่างจาก URL

```js
(getUserInput) => {
  assert(
    !/.*\/url-shortener-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

คุณสามารถโพสต์ URL ที่ `/api/shorturl` และรับการตอบสนอง(response)ของ JSON ด้วยคุณสมบัติ `original_url` และ `short_url` , นี่คือตัวอย่าง `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (res.ok) {
    const { short_url, original_url } = await res.json();
    assert.isNotNull(short_url);
    assert.strictEqual(original_url, `${url}/?v=${urlVariable}`);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

ถ้าคุณไปสู่คำสั่ง `/api/shorturl/<short_url>` คุณจะถูกเปลี่ยนเส้นทางไปยัง URL หลัก

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const urlVariable = Date.now();
  const fullUrl = `${url}/?v=${urlVariable}`
  let shortenedUrlVariable;
  const postResponse = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${fullUrl}`
  });
  if (postResponse.ok) {
    const { short_url } = await postResponse.json();
    shortenedUrlVariable = short_url;
  } else {
    throw new Error(`${postResponse.status} ${postResponse.statusText}`);
  }
  const getResponse = await fetch(
    url + '/api/shorturl/' + shortenedUrlVariable
  );
  if (getResponse) {
    const { redirected, url } = getResponse;
    assert.isTrue(redirected);
    assert.strictEqual(url,fullUrl);
  } else {
    throw new Error(`${getResponse.status} ${getResponse.statusText}`);
  }
};
```

ถ้าคุณใส่ URL ที่ไม่ถูกต้องหรือไม่เป็นไปตามรูปแบบของ `http://www.example.com` JSON จะตอบกลับมาว่า  `{ error: 'invalid url' }`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/shorturl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=ftp:/john-doe.org`
  });
  if (res.ok) {
    const { error } = await res.json();
    assert.isNotNull(error);
    assert.strictEqual(error.toLowerCase(), 'invalid url');
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
