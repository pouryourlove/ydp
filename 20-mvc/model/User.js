// (임시) db에서 유저 한명의 정보를 읽어오는 함수 가정

exports.getDbUser = () => {
    return {
        realId : 'helloworld',
        realPw : 'qwer1234*',
        name: '홍길동',
        age: 20,
    }
}

// db에서 읽어왔다고 가정하고 컨트롤러 연결