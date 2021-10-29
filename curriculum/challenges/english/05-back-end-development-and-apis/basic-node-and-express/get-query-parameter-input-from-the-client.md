---
id: 587d7fb2367417b2b2512bf6
title: Get Query Parameter Input from the Client
challengeType: 2
forumTopicId: 301512
dashedName: get-query-parameter-input-from-the-client
---

# --description--

อีกวิธีหนึ่งในการรับอินพุตจากลูกค้าคือ การเข้ารหัสข้อมูลหลังจากเข้าเส้นทาง route แล้ว โดยใช้สตริงการสืบค้น(Query string) สตริงการสืบค้นมักถูกคั่นด้วยเครื่องหมายคำถาม (?) และรวมถึงคู่ของ field=value ซึ่งแต่ละคู่คั่นด้วยเครื่องหมายแอนด์หรือแอมเบอร์สแตน (&) การส่งแบบเร่งด่วนสามารถแยกวิเคราะห์ข้อมูลจากสตริงการสืบค้นได้ และสามารถเติมออบเจ็กต์ `req.query` ได้อีกด้วย แต่ว่ามีอักขระบางตัว เช่น เปอร์เซ็นต์ (%) จะไม่สามารถอยู่ใน URL ได้ และนอกจากนี้ต้องเข้ารหัสในรูปแบบอื่นก่อนถึงจะสามารถใช้อักขระนั้นได้ แต่ว่า ถ้าหากคุณใช้ API จาก JavaScript นั้น คุณสามารถใช้วิธีแบบเฉพาะเพื่อเข้ารหัส/ถอดรหัสอักขระเหล่านี้ได้ เช่น

<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&#x26;bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

การสร้างจุดปลายทาง API ที่เชื่อมต่อ `GET /name` จะตอบกลับด้วยแฟ้มข้อมูลของ JSON โดยใช้โครงสร้าง `{ name: 'firstname lastname'}` และในการเข้ารหัสใน Query string ด้วยพารามิเตอร์ชื่อและนามสกุล จะใช้โครงสร้าง `?first=firstname&last=lastname`


**Note:** ในแบบฝึกหัดต่อไปนี้ คุณจะได้รับข้อมูลจากคำขอของ POST ที่เส้นทางเดียวกัน `/name ` ถ้าคุณต้องการ คุณสามารถใช้วิธี `app.route(path).get(handler).post(handler)` ได้เช่นกัน ซึ่งซินแทค(syntax)นี้ช่วยให้คุณสามารถเชื่อมโยงกับตัวจัดการเวิร์บ(verb)ที่แตกต่างกันบนเส้นทางเดียวกันได้ และยังสามารถประหยัดพื้นที่ในการพิมพ์ได้เล็กน้อยและโค้ดที่สะอาดมากขึ้น

# --hints--

การทดสอบที่ 1 : จุดปลายทาง API ของคุณต้องตอบด้วยชื่อที่ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?first=Mick&last=Jagger').then(
    (data) => {
      assert.equal(
        data.name,
        'Mick Jagger',
        'Test 1: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

การทดสอบรอบที่ 2 : จุดปลายทาง API ของคุณต้องตอบด้วยชื่อที่ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/name?last=Richards&first=Keith').then(
    (data) => {
      assert.equal(
        data.name,
        'Keith Richards',
        'Test 2: "GET /name" route does not behave as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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
