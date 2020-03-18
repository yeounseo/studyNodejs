var M = {
    v: 'v',
    f: function () {
        console.log(this.v);
    }
}

// mpart.js의 기능들 중에서 M이 가리키는 객체를 모듈 밖에서 사용 할 수 있도록 exports하겠다라는, 약속된 명령 
module.exports = M;