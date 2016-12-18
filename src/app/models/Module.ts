export class UserPrinciple{
  username: string;
  password: string;
  constructor(username:string, password:string){
    this.username  = username;this.password = password;
  }
}
export class ControlBoardInput{
  slotNo: number;
  turnCnt: number;
  inputDesc: string
  constructor(slotNum:number, testCnt:number){
    this.slotNo = slotNum; this.turnCnt = testCnt;this.inputDesc=""
  }
}
export class ControlBoardIO{
  slotNum: string;
  ioInstuction: string;
  constructor(slotNum:string, ioInstuction:string){
    this.slotNum = slotNum; this.ioInstuction = ioInstuction;
  }
}
