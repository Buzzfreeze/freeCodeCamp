---
id: 587d7fb3367417b2b2512bfb
title: 'How to Use package.json, the Core of Any Node.js Project or npm Package'
challengeType: 2
forumTopicId: 301528
dashedName: how-to-use-package-json-the-core-of-any-node-js-project-or-npm-package
---

# --description--

การทำงานกับโจทย์ท้าทายเหล่านี้ คุณต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งต่อไปนี้:

- Clone  [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-npm/)  ในการทำโปรเจค โดยทำให้เสร็จทีละส่วน
- ใช้เว็บไซต์ [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-npm) ในการทำโปรเจคให้เสร็จสมบูรณ์
- ใช้ตัวสร้างไซต์ที่คุณเลือก ทำโปรเจคให้เสร็จสมบูรณ์ และอย่าลืมรวมไฟล์ทั้งหมดจาก GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ตรวจสอบให้แน่ใจด้วยว่า ไฟล์โปรเจคของคุณอยู่ในสถานะที่ทุกคนสามารถมองเห็นได้(public) หลังจากนั้นส่งลิงก์ URL ไว้ใน `Solution Link` หรือส่งลิงก์ซอร์สโค้ดของโปรเจคไว้ใน `GitHub Link` อีกช่องทางหนึ่งก็ได้


ไฟล์ `package.json` เป็นศูนย์กลางของโปรเจค Node.js หรือแพ็กเกจ npm มันเก็บข้อมูลเกี่ยวกับโปรเจคของคุณ คล้ายกับที่ส่วน &lt;head> ของเอกสาร HTML อธิบายเนื้อหาบนหน้าเว็บ. `package.json` จะประกอบด้วยอ็อบเจ็กต์ JSON เดียวกันกับที่เก็บข้อมูลเป็น คีย์-ค่า และมีเพียงสองฟิลด์ที่จำเป็นเท่านั้นคือ "name" และ "version" ซึ่งมันเป็นประโยชน์อย่างมากในการให้ข้อมูลเพิ่มเติมเกี่ยวกับโปรเจคของคุณกับผู้ใช้หรือผู้ดูแลในอนาคต

หากคุณดูไฟล์ tree บนโปรเจคของคุณ คุณจะพบไฟล์ package.json อยู่บนสุดของไฟล์ tree นี่คือไฟล์ที่คุณจะปรับปรุงพัฒนาในโจทย์ท้าทายครั้งต่อไป


ข้อมูลทั่วไปอย่างหนึ่งที่สำคัญไฟล์นี้คือ `author` ระบุว่าใครเป็นผู้สร้างโปรเจคและประกอบด้วยสตริงหรืออ็อบเจ็กต์ที่มีผู้ติดต่อหรือรายละเอียดอื่่นๆ แนะนำให้ใช้อ็อบเจ็กต์สำหรับโปรเจคที่ใหญ่กว่า แต่สตริงเช่นตัวอย่างต่อไปนี้จะทำสำหรับโปรเจคนี้

```json
"author": "Jane Doe",
```

# --instructions--

กรุณาเพิ่มชื่อ `author` บนโปรเจคของคุณในไฟล์ package.json ด้วย

**Note:** โปรดจำไว้ว่าในการเขียน JSON การใส่ชื่อของทุกฟิล์ดต้องมีเครื่องหมาย (") และถ้าจะแยกออกจากกันให้ใช้เครื่องหมาย (,)

# --hints--

package.json ควรที่จะมีคีย์ "author" ที่ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert(packJson.author, '"author" is missing');
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
