var instance = null;
class user {
  userData = {
    udata: {
      cname: " ",
      date: "",
      uno: "SXFP-CHYK-ONI6-S89U",
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
