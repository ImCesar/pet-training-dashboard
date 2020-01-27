export default (state, action) => {
  switch (action.type) {
    case "initCustomers": {
      return { ...state, ...action.customer };
    }
    case "setName": {
      return { ...state, name: action.name };
    }
    case "setNickname": {
      return { ...state, nickname: action.nickname };
    }
    case "setAge": {
      return { ...state, age: action.age };
    }
    case "setSex": {
      return { ...state, sex: action.sex };
    }
    case "setEnrollment": {
      return { ...state, enrollment: action.enrollment };
    }
    default: {
      return state;
    }
  }
};
