---
id: 61862b10712669613753c201
title: Part 1
challengeType: 2 # เป็น form แล้ว สามารถ Validate ได้ด้วย 
forumTopicId: 28
dashedName: fill-in-the-main-questionaire-1
---

# --description--

**Objective:** Build a [CodePen.io](https://codepen.io) app that is functionally similar to this: <https://codepen.io/freeCodeCamp/full/zNqgVx>.

Fulfill the below [user stories](https://en.wikipedia.org/wiki/User_story) and get all of the tests to pass. Give it your own personal style.

You can use HTML, JavaScript, and CSS to complete this project. Plain CSS is recommended because that is what the lessons have covered so far and you should get some practice with plain CSS. You can use Bootstrap or SASS if you choose. Additional technologies (just for example jQuery, React, Angular, or Vue) are not recommended for this project, and using them is at your own risk. Other projects will give you a chance to work with different technology stacks like React. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

**User Story #1:** My tribute page should have an element with a corresponding `id="main"`, which contains all other elements.

**User Story #2:** I should see an element with a corresponding `id="title"`, which contains a string (i.e. text) that describes the subject of the tribute page (e.g. "Dr. Norman Borlaug").

**User Story #3:** I should see a `div` element with a corresponding `id="img-div"`.

**User Story #4:** Within the `img-div` element, I should see an `img` element with a corresponding `id="image"`.

**User Story #5:** Within the `img-div` element, I should see an element with a corresponding `id="img-caption"` that contains textual content describing the image shown in `img-div`.

**User Story #6:** I should see an element with a corresponding `id="tribute-info"`, which contains textual content describing the subject of the tribute page.

**User Story #7:** I should see an `a` element with a corresponding `id="tribute-link"`, which links to an outside site that contains additional information about the subject of the tribute page. HINT: You must give your element an attribute of `target` and set it to `_blank` in order for your link to open in a new tab (i.e. `target="_blank"`).

**User Story #8:** The `img` element should responsively resize, relative to the width of its parent element, without exceeding its original size.

**User Story #9:** The `img` element should be centered within its parent element.

You can build your project by <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>using this CodePen template</a> and clicking `Save` to create your own pen. Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

Once you're done, submit the URL to your working project with all its tests passing.

# --hints--

ทำแบบสอบถามที่ [เว็บนี้](https://front.careervio.com) 

```js

// console.log('test' + document.getElementById("solution").solution)

```

หลังจากทำแบบสอบถามที่ [เว็บนี้](https://front.careervio.com) แล้ว Login ด้วย Account CareerVio (ถ้ายังไม่มีสามารถสมัครได้ที่หน้าเว็บเลย) แล้วนำเอา Email ที่ใช้ในการสมัคร account CareerVio มากรอกที่ช่องว่าง จากนั้นระบบจะตรวจสอบโดยอัตโนมัติว่าตรวจเจอแบบสอบถามของ Email ของท่านหรือไม่ ถ้าเจอระบบจะให้ผ่าน

```js
(getUserInput) => 
    fetch("https://back.careervio.com/graphql", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         
        },
        body: JSON.stringify({
  "query": `query{surveyResults(where:{email:"${getUserInput('url')}"}){id email}}`
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
