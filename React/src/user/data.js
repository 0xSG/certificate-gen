var instance = null;
class user {
  userData = { password: "", email: "", pageCode: "1" };
  constructor() {
    if (!instance) {
      instance = this;
    } else return instance;
  }
}

export default user;
