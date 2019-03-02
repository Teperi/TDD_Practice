/*
1. 질문의 결과 - 계좌 생성
let account = new Account()

if (account === null) {
    console.err("계좌 생성 실패")
} else {
    console.log("성공")
}
*/

/* 
1. 응답 - 에러 잡기
class Account {}

let account = new Account()

if (account === undefined) {
    console.error("계좌 생성 실패")
} else {
    console.log(account)
    console.log("성공")
}
*/

/*
1. 정제 - 코드 정제 및 Todo list 정리 & Jest 적용
이후 작업부터는 쭉 진행함
class Account {}

module.exports = Account;
*/

class Account {
    constructor(balance) {
        this.balance = balance;
    }
}

module.exports = Account;