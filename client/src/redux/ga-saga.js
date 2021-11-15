import { takeEvery, call, all } from 'redux-saga/effects';
import ga from '../analytics';

const GaTypes = { event: ga.event, page: ga.pageview, modal: ga.modalview };

function* callGaType({ payload: { type, data } }) {
  var LEARN_URL = 'https://learn.careervio.com';
  var EMAIL_PREFIX = '@temp.com';
  console.log('GA1 ' + type);
  console.log('--');
  console.log(data);
  console.log('--');
  var jwt = window.getCookie('jwt_access_token');
  var json = window.parseJwt(jwt);
  var userId = json.accessToken.userId;
  // GA1 page data /
  // GA1 page data /learn/responsive-web-design/
  //
  if (type === 'page') {
    var arr = data.split('/');
    // show cer page
    if (arr.length === 4 || arr.length === 3) {
      var cerName = arr[2];
      window.cerAttend(
        userId + EMAIL_PREFIX,
        userId,
        LEARN_URL + data,
        cerName,
        cerName
      );
    } else if (arr.length === 5) {
      // show challenge page
      var moduleName = arr[3];
      var challengeName = arr[4];
      window.challengeAttend(
        userId + EMAIL_PREFIX,
        userId,
        LEARN_URL + data,
        challengeName,
        challengeName
      );
      window.moduleAttend(
        userId + EMAIL_PREFIX,
        userId,
        LEARN_URL + data,
        moduleName,
        moduleName
      );
    }
  }

  yield call(GaTypes[type], data);
}

export function* createGaSaga(types) {
  yield all([takeEvery(types.executeGA, callGaType)]);
}
