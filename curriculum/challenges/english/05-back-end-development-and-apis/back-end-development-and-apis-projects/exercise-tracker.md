---
id: 5a8b073d06fa14fcfde687aa
title: Exercise Tracker
challengeType: 4
forumTopicId: 301505
dashedName: exercise-tracker
---

# --description--

สร้างแอพแบบ full stack ด้วย JavaScript ที่ทำงานคล้ายกับเว็บไซต์ <https://exercise-tracker.freecodecamp.rocks/>  การทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- clone  [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/)  ในการทำโปรเจค โดยทำให้เสร็จทีละส่วน
- ใช้เว็บไซต์ [Replit starter project ของพวกเรา](https://replit.com/github/freeCodeCamp/boilerplate-project-exercisetracker) ในการทำโปรเจคให้เสร็จสมบูรณ์
- ใช้ตัวสร้างไซต์ที่คุณเลือก ทำโปรเจคให้เสร็จสมบูรณ์ และอย่าลืมรวมไฟล์ทั้งหมดจาก GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ตรวจสอบให้แน่ใจด้วยว่า ไฟล์โปรเจคของคุณอยู่ในสถานะที่ทุกคนสามารถมองเห็นได้(public) หลังจากนั้นส่งลิงก์ URL ไว้ใน `Solution Link` หรือส่งลิงก์ซอร์สโค้ดของโปรเจคไว้ใน `GitHub Link` อีกช่องทางหนึ่งก็ได้

# --instructions--

คำตอบ(responses) ของคุณควรที่จะมีโครงสร้างตามต่อไปนี้

Exercise:

```js
{
  username: "fcc_test"
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
```

User:

```js
{
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
```

Log:

```js
{
  username: "fcc_test",
  count: 1,
  _id: "5fb5853f734231456ccb3b05",
  log: [{
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
  }]
}
```

**Hint:** สำหรับคุณสมบัติ `date` , และวิธี `toDateString` ของ  `Date` API สามารถใช้เป็นผลลัพธ์หรือคำตอบที่คาดหวังได้

# --hints--

คุณควรที่จะให้แหล่งโปรเจคของคุณ ไม่ใช่ตัวอย่างจาก URL

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(
    !/.*\/exercise-tracker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

คุณสามารถใช้ `POST` ไปที่ `/api/users` พร้อมกับข้อมูลแบบฟอร์ม `username` เพื่อสร้างยูเซอร์(USER)ใหม่

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  });
  assert.isTrue(res.ok);
  if(!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  };
};
```

คำตอบที่ตอบกลับจาก `POST /api/users` ด้วยรูปแบบข้อมูล `username` จะเป็นวัตถุ(object)ที่มีคุณสมบัติ `username` และ `_id`

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    assert.exists(_id);
    assert.exists(username);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

คุณสามารถสร้างคำสั่ง `GET` ที่`/api/users` เพื่อรับรายชื่อผู้ใช้(user)ทั้งหมด

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users');
  assert.isTrue(res.ok);
  if(!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  };
};
```

คำสั่ง `GET` ที่ `/api/users` ในการคืนค่าอาร์เรย์(array)

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users');
  if(res.ok){
    const users = await res.json();
    assert.isArray(users);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

แต่ละเอเลเมนท์ในอาร์เรย์จะส่งคืนจาก `GET /api/users` จะเป็นอ็อบเจ็กต์ตามตัวอักษรที่มี `username` และ  `_id` ของผู้ใช้

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users');
  if(res.ok){
    const users = await res.json();
    const user = users[0];
    assert.exists(user);
    assert.exists(user.username);
    assert.exists(user._id);
    assert.isString(user.username);
    assert.isString(user._id);
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

คุณสามารถใช้ `POST` เป็น `/api/users/:_id/exercises` ด้วยรูปแบบข้อมูล `description`, `duration` หรือจะใช้ `date`  ในกรณีที่ไม่ได้ระบุวันที่ ระบบจะใช้วันที่ปัจจุบัน 

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: 'Mon Jan 01 1990'
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}&date=1990-01-01`
    });
  assert.isTrue(addRes.ok);
  if(!addRes.ok) {
    throw new Error(`${addRes.status} ${addRes.statusText}`)
  };
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

คำตอบที่ตอบกลับจาก `POST /api/users/:_id/exercises` จะเป็นออบเจ็กต์ของผู้ใช้กับเพิ่ม exercise ฟิลด์

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: 'Mon Jan 01 1990'
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}&date=1990-01-01`
    });
    if (addRes.ok) {
      const actual = await addRes.json();
      assert.deepEqual(actual, expected);
      assert.isString(actual.description);
      assert.isNumber(actual.duration);
      assert.isString(actual.date);
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

คุณสามารถสร้างคำสั่ง `GET` ที่ `/api/users/:_id/logs` เพื่อดึงบันทึก exercise ทั้งหมดของผู้ใช้

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if (addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
    assert.isTrue(logRes.ok);
    if(!logRes.ok) {
      throw new Error(`${logRes.status} ${logRes.statusText}`)
    };
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

คำขอที่ส่งไปยังบันทึกของผู้ใช้ `GET /api/users/:_id/logs` จะคืนค่าออบเจ็กต์ของผู้ใช้ โดยมีคุณสมบัติ `count` แทนจำนวน exercise ที่เป็นของผู้ใช้รายนั้น

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if (addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if (logRes.ok) {
        const { count } = await logRes.json();
        assert(count);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

คำสั่ง `GET` ที่ `/api/users/:id/logs` จะคืนค่าอ็อบเจ็กต์ของผู้ใช้ในรูปแบบของอาร์เรย์ `log` โดยจะเป็น exercise ทั้งหมดที่เพิ่มเข้ามา

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  })
  if(res.ok){
    const {_id, username} = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok){
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok) {
        const {log} = await logRes.json();
        assert.isArray(log);
        assert.equal(1, log.length);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`)
  };
};
```

สมาชิกแต่ละตัวในอาร์เรย์ `log` ที่ส่งคืนจาก `GET /api/users/:id/logs` จะเป็นอ็อบเจ็กต์ที่อยู่ในรูปแบบของคุณสมบัติ `description`, `duration`, และ `date`

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + `/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  });
  if(res.ok) {
    const {_id, username} = await res.json();
     const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok) {
        const {log} = await logRes.json();
        const exercise = log[0];
        assert.exists(exercise);
        assert.exists(exercise.description);
        assert.exists(exercise.duration);
        assert.exists(exercise.date);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      };
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`)
  };
};
```

คุณสมบัติ `description` ของอ็อบเจ็กต์ใดๆ ในอาร์เรย์ `log` ที่ส่งคืนจาก `GET /api/users/:id/logs` ควรจะเป็นค่าสตริง(string)

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=fcc_test_${Date.now()}`.substr(0,29)
  });
  if(res.ok) {
    const {_id, username} = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok){
        const {log} = await logRes.json();
        const exercise = log[0];
        assert.isString(exercise.description);
        assert.equal(exercise.description, expected.description);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

คุณสมบัติ `duration` ของอ็อบเจ็กต์ใดๆ ของอาร์เรย์ `log` ที่ส่งคืนจาก `GET /api/users/:id/logs` ควรจะเป็นค่าตัวเลข

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=fcc_test_${Date.now()}`.substr(0,29)
  });
  if(res.ok) {
    const {_id, username} = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok){
        const {log} = await logRes.json();
        const exercise = log[0];
        assert.isNumber(exercise.duration);
        assert.equal(exercise.duration, expected.duration);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

คุณสมบัติ `date` ของอ็อบเจ็กต์ใดๆ ในอาร์เรย์ `log` ที่ส่งคืนจาก `GET /api/users/:id/logs` ควรเป็นสตริง(string).. โดยใช้รูปแบบ `dateString` ของ `Date` API

```js
async(getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=fcc_test_${Date.now()}`.substr(0,29)
  });
  if(res.ok) {
    const {_id, username} = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `description=${expected.description}&duration=${expected.duration}`
    });
    if(addRes.ok) {
      const logRes = await fetch(url + `/api/users/${_id}/logs`);
      if(logRes.ok){
        const {log} = await logRes.json();
        const exercise = log[0];
        assert.isString(exercise.date);
        assert.equal(exercise.date, expected.date);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
    } else {
      throw new Error(`${addRes.status} ${addRes.statusText}`);
    };
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  };
};
```

คุณสามารถเพิ่มพารามิเตอร์ `from`, `to` และ `limit` ที่คำสั่ง `GET /api/users/:_id/logs` เพื่อดึงบันทึกส่วนหนึ่งของผู้ใช้ โดย `from` และ `to` จะเป็นวันที่ในรูปแบบ `yyyy-mm-dd` และ `limit` จะเป็นตัวเลขของจำนวนบันทึกที่จะส่งกลับ

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=fcc_test_${Date.now()}`.substr(0, 29)
  });
  if (res.ok) {
    const { _id, username } = await res.json();
    const expected = {
      username,
      description: 'test',
      duration: 60,
      _id,
      date: new Date().toDateString()
    };
    const addExerciseRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}&date=1990-01-01`
    });
    const addExerciseTwoRes = await fetch(url + `/api/users/${_id}/exercises`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `description=${expected.description}&duration=${expected.duration}&date=1990-01-02`
    });
    if (addExerciseRes.ok && addExerciseTwoRes.ok) {
      const logRes = await fetch(
        url + `/api/users/${_id}/logs?from=1989-12-31&to=1990-01-03`
      );
      if (logRes.ok) {
        const { log } = await logRes.json();
        assert.isArray(log);
        assert.equal(2, log.length);
      } else {
        throw new Error(`${logRes.status} ${logRes.statusText}`);
      }
      const limitRes = await fetch(
        url + `/api/users/${_id}/logs?limit=1`
      );
      if (limitRes.ok) {
        const { log } = await limitRes.json();
        assert.isArray(log);
        assert.equal(1, log.length);
      } else {
        throw new Error(`${limitRes.status} ${limitRes.statusText}`);
      }
    } else {
      throw new Error(`${res.status} ${res.statusText}`);
    }
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
