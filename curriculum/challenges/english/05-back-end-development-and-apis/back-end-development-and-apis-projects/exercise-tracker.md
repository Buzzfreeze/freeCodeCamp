---
id: 5a8b073d06fa14fcfde687aa
title: Exercise Tracker
challengeType: 4
forumTopicId: 301505
dashedName: exercise-tracker
---

# --description--

ให้สร้างแอปแบบ full stack โดยใช้ JavaScript ที่ทำงานคล้ายกับเว็บไซต์นี้ <https://exercise-tracker.freecodecamp.rocks/>  
ในการทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-exercisetracker)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ของ source code เข้าไปใน `GitHub Link` ด้วยก็ได้

# --instructions--

response ของ API ที่คุณเขียนต้องมีโครงสร้างตามนี้

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

**Hint:** เราแนะให้ใช้ method `toDateString` ของ `Date` API ในการเก็บค่าลง property `date` เพราะว่า string ที่ได้จะแน่นอนกว่า

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(
    !/.*\/exercise-tracker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

เมื่อส่ง `POST` request ไปที่ `/api/users` โดยมี form data `username` เพื่อสร้างผู้ใช้ใหม่ได้

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

เมื่อส่ง request ไปยัง `POST /api/users` โดยมี form data `username` จะต้องได้ response เป็น object ที่มี property ชื่อ `username` และ `_id`

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

เมื่อส่ง `GET` request ไปที่ `/api/users` ต้องได้ชื่อผู้ใช้ทั้งหมดกลับมา

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

เมื่อส่ง `GET` request ไปที่ `/api/users` ต้องได้ค่าที่คืนมาเป็น array

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

ข้อมูลทุกตัวใน array ที่ได้จาก `GET /api/users` จะต้องเป็น object ที่มี property `username` และ `_id` ของผู้ใช้

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

ต้องส่ง `POST` request ไปที่ `/api/users/:_id/exercises` ได้ ถ้าใช้ form data `description`, `duration` และ `date` (`date` จะส่งหรือไม่ส่งก็ได้ ถ้าไม่ส่งระบบจะใช้วันที่ปัจจุบัน)

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

response ที่ได้จาก `POST /api/users/:_id/exercises` ต้องเป็น object `User` ที่เพิ่มฟิลด์ exercise เข้าไป

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

เมื่อส่ง `GET` request ไปที่ `/api/users/:_id/logs` ต้องได้ค่าที่คืนมาเป็น ข้อมูลการออกกำลังการของผู้ใช้คนนี้ในรูปแบบ `Log`

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

เมื่อส่ง `GET` request ไปที่ `/api/users/:_id/logs` จะต้องได้ค่าที่คืนมาเป็น object `User` ที่มี property `count` ซึ่งเป็นจำนวนของ exercise ของผู้ใช้รายนั้น

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

เมื่อส่ง `GET` request ไปที่ `/api/users/:id/logs` จะต้องได้ค่าที่คืนมาเป็น object `User` ที่มี property `log` ที่เป็น array โดยมีค่าของ exercise ทั้งหมดของผู้ใช้คนนั้น

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

ข้อมูลทุกตัวใน array `log` ที่ได้จาก `GET /api/users/:id/logs` จะต้องเป็น object ที่มี property ชื่อ `description`, `duration`, และ `date`

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

property `description` ของทุก object ใน array `log` ที่ได้จาก `GET /api/users/:id/logs` ต้องเป็น string

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

property `duration` ของทุก object ใน array `log` ที่ได้จาก `GET /api/users/:id/logs` ต้องเป็นตัวเลข

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

property `date` ของทุก object ใน array `log` ที่ได้จาก `GET /api/users/:id/logs` ต้องเป็น string ที่ได้จากการใช้ method `dateString` ของ `Date` API

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

เมื่อเพิ่ม parameter `from`, `to` และ `limit` ไปในการส่ง `GET` request ไปที่ `/api/users/:_id/logs` จะต้องคืนค่าเป็น log ของผู้ใช้คนนั้น ตามเงื่อนไขที่ระบุ โดย `from` และ `to` จะเป็นวันที่ในรูปแบบ `yyyy-mm-dd` และ `limit` จะเป็นตัวเลขของจำนวน log ที่จะส่งกลับ

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
