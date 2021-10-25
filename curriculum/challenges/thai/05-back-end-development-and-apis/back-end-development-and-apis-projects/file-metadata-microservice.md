---
id: bd7158d8c443edefaeb5bd0f
title: File Metadata Microservice
challengeType: 4
forumTopicId: 301506
dashedName: file-metadata-microservice
---

# --description--

สร้างแอพแบบ full stack ด้วย JavaScript ที่ทำงานคล้ายกับเว็บไซต์ <https://file-metadata-microservice.freecodecamp.rocks/>  การทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-filemetadata/)  ในการทำโปรเจค โดยทำให้เสร็จทีละส่วน
- ใช้เว็บไซต์ [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-project-filemetadata) ในการทำโปรเจคให้เสร็จสมบูรณ์
- ใช้ตัวสร้างไซต์ที่คุณเลือก ทำโปรเจคให้เสร็จสมบูรณ์ และอย่าลืมรวมไฟล์ทั้งหมดจาก GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ตรวจสอบให้แน่ใจด้วยว่า ไฟล์โปรเจคของคุณอยู่ในสถานะที่ทุกคนสามารถมองเห็นได้(public) หลังจากนั้นส่งลิงก์ URL ไว้ใน `Solution Link` หรือส่งลิงก์ซอร์สโค้ดของโปรเจคไว้ใน `GitHub Link` อีกช่องทางหนึ่งก็ได้

# --instructions--

**HINT:** คุณสามารถใช้  `multer` npm ในการอัพโหลดไฟล์

# --hints--

คุณควรที่จะให้แหล่งโปรเจคของคุณ ไม่ใช่ตัวอย่างจาก URL

```js
(getUserInput) => {
  assert(
    !/.*\/file-metadata-microservice\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

คุณสามารถส่งแบบฟอร์มที่มีการอัปโหลดไฟล์

```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[type="file"]'));
};
```

แบบฟอร์มที่ใส่ค่าในฟิล์ด ต้องมีแอตทริบิวต์ `name` เพื่อที่จะตั้งค่า `upfile`


```js
async (getUserInput) => {
  const site = await fetch(getUserInput('url'));
  const data = await site.text();
  const doc = new DOMParser().parseFromString(data, 'text/html');
  assert(doc.querySelector('input[name="upfile"]'));
};
```

เมื่อคุณส่งไฟล์แล้ว คุณจะได้รับไฟล์ประเภท `name`, `type`, และ `size` เป็นไบต์ภายในการตอบกลับ(respond) ของ JSON

```js
async (getUserInput) => {
  const formData = new FormData();
  const fileData = await fetch(
    'https://cdn.freecodecamp.org/weather-icons/01d.png'
  );
  const file = await fileData.blob();
  formData.append('upfile', file, 'icon');
  const data = await fetch(getUserInput('url') + '/api/fileanalyse', {
    method: 'POST',
    body: formData
  });
  const parsed = await data.json();
  assert.property(parsed, 'size');
  assert.equal(parsed.name, 'icon');
  assert.equal(parsed.type, 'image/png');
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
