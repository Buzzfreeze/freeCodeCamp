---
id: 5a24c314108439a4d4036183
title: Use Advanced JavaScript in React Render Method
challengeType: 6
forumTopicId: 301415
dashedName: use-advanced-javascript-in-react-render-method
---

# --description--

ในแบบทดสอบครั้งก่อน คุณได้เรียนรู้วิธีใส่โค้ด JavaScript ลงในโค้ด JSX โดยใช้วงเล็บปีกกา `{ }` สำหรับงานต่างๆ เช่น การเข้าถึง props การส่ง props การเข้าถึง state การแทรก comment ในโค้ดของคุณ และล่าสุดการจัดตกแต่งสไตล์ components ของคุณ นี่เป็นกรณีการใช้งานทั่วไปทั้งหมดในการใส่ JavaScript ใน JSX แต่ไม่ใช่วิธีเดียวที่คุณสามารถใช้โค้ด JavaScript ใน React components ของคุณได้

คุณยังสามารถเขียน JavaScript ได้โดยตรงใน`render` methods ก่อนคำสั่ง `return` ***โดยไม่ต้อง*** เขียนเข้าไปในวงเล็บปีกกา เนื่องจากมันยังไม่อยู่ในโค้ด JSX เมื่อคุณต้องการใช้ตัวแปรภายหลังในโค้ด JSX *ภายใน* คำสั่ง `return` คุณถึงจะเขียนชื่อตัวแปรไว้ในวงเล็บปีกกา

# --instructions--

ในโค้ดที่ให้มา `render` method มี array ที่ประกอบด้วย 20 วลีเพื่อเป็นคำตอบที่พบในของเล่นคลาสสิก Magic Eight Ball ช่วงทศวรรษ 1980 ให้ click event ของปุ่มถูกผูกไว้ `ask` method ดังนั้นทุกครั้งที่มีการคลิกปุ่ม จะมีการสร้างตัวเลขสุ่มและจัดเก็บเป็น `randomIndex` ใน state ในบรรทัดที่ 52 ให้ลบสตริง `change me!` และกำหนด const `answer` ใหม่เพื่อให้โค้ดของคุณสุ่มเข้าถึงดัชนีต่างๆ ของ `possibleAnswers` array ในทุกครั้งที่ component เดต สุดท้ายใส่ค่า const `answer` ลงในแท็ก `p`

# --hints--

`MagicEightBall` component ควรมีและเรนเดอร์ยังเพจ

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall)).find('MagicEightBall')
    .length,
  1
);
```

Child แรกของ `MagicEightBall` ควรเป็น `input` element

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(0)
    .name(),
  'input'
);
```

Child ที่สามของ `MagicEightBall` ควรเป็น `button` element

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MagicEightBall))
    .children()
    .childAt(2)
    .name(),
  'button'
);
```

State ของ `MagicEightBall` ควรเริ่มด้วย property ของ `userInput` และ property ของ `randomIndex` ที่ตั้ง value ไว้เป็น string ว่าง


```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).state('randomIndex') ===
    '' &&
    Enzyme.mount(React.createElement(MagicEightBall)).state('userInput') === ''
);
```

When `MagicEightBall` is first mounted to the DOM, it should return an empty `p` element.

```js
assert(
  Enzyme.mount(React.createElement(MagicEightBall)).find('p').length === 1 &&
    Enzyme.mount(React.createElement(MagicEightBall)).find('p').text() === ''
);
```

เมื่อข้อความถูกพิมพ์ลงไปใน `input` element และ มีการคลิกปุ่ม `MagicEightBall` component ควรจะต้อง return `p` element ที่มี element ที่สุ่มมาจาก `possibleAnswers` array

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
    const answer = 'change me!'; // Change this line
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
          {/* Change code below this line */}

          {/* Change code above this line */}
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
