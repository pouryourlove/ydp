console.log('!')

function uploadThumbnail(){
    //formdata 객체
    //: 폼 전송할 때, 멀티미디어 파일을 비동기로 제출하고 싶다면 ...formData 객체를 이용
    const formData = new FormData();
    

    //폼 요소를 선택
    const fileInput = document.querySelector('#thumbnail');
    console.dir(fileInput);
    console.dir(fileInput.files);

    //formData에 추가
    formData.append('thumbnail', fileInput.files[0]);
    //console.log(formData); //formData는 특수한 형태의 객체이기 때문에 쉽게 출력이 안된다.

    //서버로 요청 보내기
    axios({
        method: 'POST',
        url: '/dynamicFile',
        data: formData,
        //key
        headers: {
            'Content-Type': 'multipart/form-data', 
        }
    }).then(function(res){
        //서버의 req.file을 클라이언트의 res 변수가 받음
        console.log(res);
        console.log(res.data.path);// 이미지 주소

        //img태그의 src 속성값에 이미지 주소
        document.querySelector('img').src = `/${res.data.path}`;

        //img태그에 thumbnail 클래스명 부여
        document.querySelector('img').classList.add('thumbnail')
    })




}