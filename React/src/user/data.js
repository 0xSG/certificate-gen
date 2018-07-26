var instance = null;
class user {
  userData = {
    udata: {
      cname: "IMAGE PROCESSING",
      date: "26-07-2018",
      uno: "GERFFDSFDSGDasdklfj34a",
      name: "SURYA GANGARAJ K"
    },
    pageCode: "1"
  };
  constructor() {
    if (!instance) {
      instance = this;
    } else return instance;
  }
}

export default user;
