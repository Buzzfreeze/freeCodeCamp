---
id: 5a24c314108439a4d4036183
title: Use Advanced JavaScript in React Render Method
challengeType: 6
forumTopicId: 301415
dashedName: use-advanced-javascript-in-react-render-method
---

# --description--

ในแบบทดสอบที่ผ่านๆมา คุณได้เรียนวิธีใส่โค้ด JavaScript ลงใน JSX โดยใช้วงเล็บปีกกา `{ }` เช่น การเข้าถึง props, การส่ง props, การเข้าถึง state, การแทรก comment ในโค้ดของคุณ, และล่าสุดการใช้ style ใน component ของคุณ 
นี่เป็นวิธีปกติในการใช้ JavaScript ใน JSX แต่ก็ยังมีวิธีอื่นในการใช้ JavaScript ใน React components ของคุณได้

คุณเขียน JavaScript ได้โดยตรงใน method `render` ก่อนคำสั่ง `return` ***โดยไม่ต้อง*** เขียนไว้ในวงเล็บปีกกา เพราะว่าโค้ดส่วนนี้ยังไม่ใช่ JSX 
เมื่อคุณต้องการใช้ตัวแปรในโค้ด JSX *ภายใน* คำสั่ง `return` คุณถึงจะต้องเขียนชื่อตัวแปรไว้ในวงเล็บปีกกา

# --instructions--

ในโค้ดที่ให้มา method `render` มี array ที่ประกอบด้วย string 20 ตัว ที่ใช้ในของเล่นโบราณชื่อ Magic Eight Ball ช่วงทศวรรษ 1980 (ลอง google ดู คุณน่าจะเคยเห็นของเล่นนี้ในหนัง) 
ตอนนี้ click event ของปุ่มถูกผูกไว้กับ method `ask` ดังนั้นทุกครั้งที่มีการคลิกปุ่ม จะมีการสุ่มตัวเลขและจัดเก็บเป็น `randomIndex` ใน state 
ในบรรทัดที่ 52 ให้คุณลบ string `change me!` ออก และกำหนดค่าของ const `answer` ใหม่ เพื่อให้ทุกครั้งที่ component อัปเดท โค้ดของคุณจะไปดึง string จาก array `possibleAnswers` ตาม index ที่สุ่มได้ 
และสุดท้ายให้แสดงค่าของ const `answer` ในแท็ก `p`

# --hints--

ต้องมี component `MagicEightBall` และต้องเรนเดอร์ได้

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall)).find('MagicEightBall')
    .length,
  1
);
```

child ตัวแรกของ `MagicEightBall` ต้องเป็น `input`

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(0)
    .name(),
  'input'
);
```

child ตัวที่สามของ `MagicEightBall` ต้องเป็น `button`

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(2)
    .name(),
  'button'
);
```

state เริ่มต้นของ `MagicEightBall` ต้องมี property `userInput` และ  `randomIndex` ที่มีค่าเป็น string ว่าง


```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).state('randomIndex') ===
    '' &&
    Enzyme.mount(React.createElement(MagicEightBall)).state('userInput') === ''
);
```

ในตอนแรกที่ `MagicEightBall` ถูกเรนเดอร์ไปยัง DOM ในแท็ก `p` ต้องไม่มีอะไรอยู่เลย

```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).find('p').length === 1 &&
    Enzyme.mount(React.createElement(MagicEightBall)).find('p').text() === ''
);
```

เมื่อพิมพ์ข้อความลงไปใน `input` แล้วก็คลิกปุ่ม จะต้องทำให้ component `MagicEightBall` เรนเดอร์แท็ก `p` ที่แสดง string ที่สุ่มมาจาก array `possibleAnswers`

```js
(() => {
  const comp = Enzyme.mount(React.createElement(MagicEightBall));
  const simulate = () => {
    comp.find('input').simulate('change', { target: { value: 'test?' } });
    comp.find('button').simulate('click');
  };
  const result = () => comp.find('p').text();
  const _1 = () => {
    simulate();
    return result();
  };
  const _2 = () => {
    simulate();
    return result();
  };
  const _3 = () => {
    simulate();
    return result();
  };
  const _4 = () => {
    simulate();
    return result();
  };
  const _5 = () => {
    simulate();
    return result();
  };
  const _6 = () => {
    simulate();
    return result();
  };
  const _7 = () => {
    simulate();
    return result();
  };
  const _8 = () => {
    simulate();
    return result();
  };
  const _9 = () => {
    simulate();
    return result();
  };
  const _10 = () => {
    simulate();
    return result();
  };
  const _1_val = _1();
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  const _5_val = _5();
  const _6_val = _6();
  const _7_val = _7();
  const _8_val = _8();
  const _9_val = _9();
  const _10_val = _10();
  const actualAnswers = [
    _1_val,
    _2_val,
    _3_val,
    _4_val,
    _5_val,
    _6_val,
    _7_val,
    _8_val,
    _9_val,
    _10_val
  ];
  const hasIndex = actualAnswers.filter(
    (answer, i) => possibleAnswers.indexOf(answer) !== -1
  );
  const notAllEqual = new Set(actualAnswers);
  assert(notAllEqual.size > 1 && hasIndex.length === 10);
})();
```

# --seed--

## --after-user-code--

```jsx
var possibleAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
  'Most likely'
];
ReactDOM.render(<MagicEightBall />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = 'change me!'; // แก้ไขโค้ดบรรทัดนี้
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* แก้ไขโค้ดใต้บรรทัดนี้ */}

          {/* แก้ไขโค้ดเหนือบรรทัดนี้ */}
        </p>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful',
      'Most likely'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
}
```
