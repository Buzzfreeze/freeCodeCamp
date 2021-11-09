---
id: 61862b10712669613753c201
title: ทำแบบสอบถามเพื่อเตรียมพร้อมสำหรับการจัดกลุ่มในอนาคต
challengeType: 2 # เป็น form แล้ว สามารถ Validate ได้ด้วย 
forumTopicId: 28
dashedName: fill-in-the-main-questionaire-1
---

# --description--

**จุดมุ่งหมาย:** เนื่องจากเราเป็น Project ที่มีผู้มาเรียนเป็นจำนวนมาก และเราจะเป็นต้องมีช่วงนึงหลังจากเดือนที่ 2 ที่ต้องทำ Project เป็นกลุ่ม เราจึงต้องการเก็บข้อมูลที่มีส่วนสำคัญในการทำให้เราสามารถจัดกลุ่มของท่านได้อย่างมีประสิทธิภาพ จึงขอให้ท่านทำตามขั้นตอนดังต่อไปนี้ 

1) ทำแบบสอบถามที่ [เว็บนี้](https://front.careervio.com) ด้วยการ Login ด้วย Account CareerVio (ถ้ายังไม่มีสามารถสมัครได้ที่หน้าเว็บเลย)
2) หลังจากทำแบบสอบถามที่ [เว็บนี้](https://front.careervio.com) เสร็จแล้วให้นำเอา Email ที่ใช้ในการสมัคร account CareerVio มากรอกที่ช่องว่าง
3) จากนั้นระบบจะตรวจสอบโดยอัตโนมัติว่าตรวจเจอแบบสอบถามของ Email ของท่านหรือไม่ ถ้าเจอระบบจะให้ผ่าน

# --hints--

ทำแบบสอบถามที่ [เว็บนี้](https://front.careervio.com) ด้วยการ Login ด้วย Account CareerVio (ถ้ายังไม่มีสามารถสมัครได้ที่หน้าเว็บเลย)

```js

// console.log('test' + document.getElementById("solution").solution)

```

หลังจากทำแบบสอบถามที่ [เว็บนี้](https://front.careervio.com) เสร็จแล้วให้นำเอา Email ที่ใช้ในการสมัคร account CareerVio มากรอกที่ช่องว่าง จากนั้นระบบจะตรวจสอบโดยอัตโนมัติว่าตรวจเจอแบบสอบถามของ Email ของท่านหรือไม่ ถ้าเจอระบบจะให้ผ่าน

```js
(getUserInput) => 
    fetch("https://back.careervio.com/graphql", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         
        },
        body: JSON.stringify({
  "query": `query{surveyResults(where:{survey: 1,email:"${getUserInput('url')}"}){id email}}`
})})
        .then(res => {
          if (res.status !== 200) {
            console.log(res);
            throw new Error(`Error in pot: ${res.status}`);
          }
          return res;
        })
        .then(res => res.json())
        .then(res => {
          if(res.data.surveyResults.length === 0){
              console.log("ไม่เจอ Email ของคุณในระบบ กรุณาลองใหม่อีกครั้ง");
          }
          assert.equal( true, res.data.surveyResults.length >0 );
        });
   
```

# --solutions--

```html
// solution required
```
