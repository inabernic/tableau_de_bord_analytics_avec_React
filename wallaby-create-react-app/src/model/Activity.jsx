export class Activity {

  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
  toString(){
   return this.userId;
  }
}