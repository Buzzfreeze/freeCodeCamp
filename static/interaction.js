// Variables
var name = 'Sammy McGee';
var email = 'jeffbatt@gmail.com';

// Page Load Function
function pageLoaded() {
  // Connecting to LRS
  var conf = {
    endpoint: 'https://lrs.careervio.com/data/xAPI/',
    auth:
      'Basic ' +
      'MzRkMjUxMjRmMWUwYTZjOWRjMDc3ZDcxN2U1NjQyMThjYTRiYTcxMjpkMjllODdjNjhlZDRhZmFkNDFjMDg5ZWFhMjlmNTg4N2QyZGU3MzVk'
  };
  ADL.XAPIWrapper.changeConfig(conf);
}

// Sample
// 1) challengeAttend("krissada@buzzfreeze.com", "Oak", "https://learn.careervio.com/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements", "Say Hello to HTML Elements", "say-hello-to-html-elements")
// 2) challengeComplete("krissada@buzzfreeze.com", "Oak", "https://learn.careervio.com/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements", "Say Hello to HTML Elements", "say-hello-to-html-elements")
// 3) hintPass("krissada@buzzfreeze.com", "Oak", "https://learn.careervio.com/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements",  "Say Hello to HTML Elements", "say-hello-to-html-elements", "1", "Hello world must be in div")
// 4) hintFail("krissada@buzzfreeze.com", "Oak", "https://learn.careervio.com/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements",  "Say Hello to HTML Elements", "say-hello-to-html-elements", "1", "Hello world must be in div")
// 5) moduleAttend("krissada@buzzfreeze.com", "Oak", "https://learn.careervio.com/learn/responsive-web-design#responsive-web-design-principles",  "Responsive Web Design Principle" , "responsive-web-design-principle")
// 6) moduleComplete("krissada@buzzfreeze.com", "Oak", "https://learn.careervio.com/learn/responsive-web-design#responsive-web-design-principles",  "Responsive Web Design Principle" , "responsive-web-design-principle")
// 7) cerAttend("krissada@buzzfreeze.com", "Oak", "https://learn.careervio.com/learn/responsive-web-design#responsive-web-design-cert",  "cert Responsive Web Design Principle" , "cert-responsive-web-design-principle")
// 8) cerComplete("krissada@buzzfreeze.com", "Oak", "https://learn.careervio.com/learn/responsive-web-design#responsive-web-design-cert",  "cert Responsive Web Design Principle" , "cert-responsive-web-design-principle")

function challengeAttend(userEmail, userName, courseUrl, courseName, courseId) {
  var statement = {
    actor: {
      mbox: 'mailto:' + userEmail,
      name: userName,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/attended',
      display: { 'en-US': 'attended' }
    },
    object: {
      id: courseUrl,
      definition: {
        type: 'http://id.tincanapi.com/activitytype/lms/course',
        name: { 'en-US': courseName },
        extensions: {
          'https://w3id.org/learning-analytics/learning-management-system/external-id':
            courseId
        }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);
}
function challengeComplete(
  userEmail,
  userName,
  courseUrl,
  courseName,
  courseId
) {
  var statement = {
    actor: {
      mbox: 'mailto:' + userEmail,
      name: userName,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/completed',
      display: { 'en-US': 'completed' }
    },
    object: {
      id: courseUrl,
      definition: {
        type: 'http://id.tincanapi.com/activitytype/lms/course',
        name: { 'en-US': courseName },
        extensions: {
          'https://w3id.org/learning-analytics/learning-management-system/external-id':
            courseId
        }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);
}
function hintPass(
  userEmail,
  userName,
  courseUrl,
  courseName,
  courseId,
  hintId,
  hintName
) {
  var statement = {
    actor: {
      mbox: 'mailto:' + userEmail,
      name: userName,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/passed',
      display: { 'en-US': 'pass' }
    },
    object: {
      id: courseUrl + '/' + hintId,
      definition: {
        type: 'http://id.tincanapi.com/activitytype/lms/hint',
        name: { 'en-US': hintName },
        extensions: {
          'https://w3id.org/learning-analytics/learning-management-system/course-id':
            courseId,
          'https://w3id.org/learning-analytics/learning-management-system/course-name':
            courseName
        }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);
}

function hintFail(
  userEmail,
  userName,
  courseUrl,
  courseName,
  courseId,
  hintId,
  hintName
) {
  var statement = {
    actor: {
      mbox: 'mailto:' + userEmail,
      name: userName,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/failed',
      display: { 'en-US': 'failed' }
    },
    object: {
      id: courseUrl + '/' + hintId,
      definition: {
        type: 'http://id.tincanapi.com/activitytype/lms/hint',
        name: { 'en-US': hintName },
        extensions: {
          'https://w3id.org/learning-analytics/learning-management-system/course-id':
            courseId,
          'https://w3id.org/learning-analytics/learning-management-system/course-name':
            courseName
        }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);
}
function moduleAttend(userEmail, userName, moduleUrl, moduleName, moduleId) {
  var statement = {
    actor: {
      mbox: 'mailto:' + userEmail,
      name: userName,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/attended',
      display: { 'en-US': 'attended' }
    },
    object: {
      id: moduleUrl,
      definition: {
        type: 'http://id.tincanapi.com/activitytype/lms/module',
        name: { 'en-US': moduleName },
        extensions: {
          'https://w3id.org/learning-analytics/learning-management-system/external-id':
            moduleId
        }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);
}

function moduleComplete(userEmail, userName, moduleUrl, moduleName, moduleId) {
  var statement = {
    actor: {
      mbox: 'mailto:' + userEmail,
      name: userName,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/completed',
      display: { 'en-US': 'completed' }
    },
    object: {
      id: moduleUrl,
      definition: {
        type: 'http://id.tincanapi.com/activitytype/lms/module',
        name: { 'en-US': moduleName },
        extensions: {
          'https://w3id.org/learning-analytics/learning-management-system/external-id':
            moduleId
        }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);
}

function cerAttend(userEmail, userName, cerUrl, cerName, cerId) {
  var statement = {
    actor: {
      mbox: 'mailto:' + userEmail,
      name: userName,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/attended',
      display: { 'en-US': 'attended' }
    },
    object: {
      id: cerUrl,
      definition: {
        type: 'http://id.tincanapi.com/activitytype/lms/cert',
        name: { 'en-US': cerName },
        extensions: {
          'https://w3id.org/learning-analytics/learning-management-system/external-id':
            cerId
        }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);
}

function cerComplete(userEmail, userName, cerUrl, cerName, cerId) {
  var statement = {
    actor: {
      mbox: 'mailto:' + userEmail,
      name: userName,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/completed',
      display: { 'en-US': 'completed' }
    },
    object: {
      id: cerUrl,
      definition: {
        type: 'http://id.tincanapi.com/activitytype/lms/cert',
        name: { 'en-US': cerName },
        extensions: {
          'https://w3id.org/learning-analytics/learning-management-system/external-id':
            cerId
        }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);
}
// Button click
function sendStatement() {
  var statement = {
    actor: {
      mbox: 'mailto:' + email,
      name: name,
      objectType: 'Agent'
    },
    verb: {
      id: 'http://adlnet.gov/expapi/verbs/interacted',
      display: { 'en-US': 'interacted' }
    },
    object: {
      id: 'http://learningdojo.net/xapi/simple_button',
      definition: {
        name: { 'en-US': 'Simple button example' },
        description: { 'en-US': 'Simple button example xAPI Button' }
      },
      objectType: 'Activity'
    }
  };

  ADL.XAPIWrapper.sendStatement(statement);

  // Alert message
  alert('Statement has been sent!');
}

// On Blur Events
function saveName() {
  name = document.getElementById('nameEntered').value;
  console.log(name);
}

function saveEmail() {
  email = document.getElementById('userEmail').value;
  console.log(email);
}

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}
