import React,{useState,useEffect,useCallback} from 'react'
import axios from 'axios'

function UseCallbackEx2({postId}) {
    const [post,setPost] = useState({})

    // [before]

    // const getPost = async () => {
    //     console.log('data fetching...')
    //     //데이터 요청
    //     const res = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts/${postId}`
    //         // 
    //     )
    //     setPost(res.data);
    // }

    // [after]
    // useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 postId가 변경되지 않는 한 
    // 컴포넌트는 리랜더링 되지 않음.
    //=>필요한 순간에만 api 요청을 날림

    const getPost = useCallback(async()=> {
        console.log('data fetching...')
        //데이터 요청
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        )    
    },[postId])

    //useEffect 의존성 배열에 "함수" 넣었음
    //컴포넌트가 리랜더링 -> 함수 재생성 (주소값 변경) -> getPost 재호출
    useEffect(() => {
        getPost()
    },[])

  return (
    <div>
        <h1>UseCallbackEx2</h1>
        {post.id ? post.title : '로딩중...'}
    </div>
  )
}

export default UseCallbackEx2

//useEffect: mount, unmount, delete할 때 쓴다.
//useMemo: 복잡한 로직을 통해서 구한 값을 메모이제이션에 기록을 해놓고 특정한 
//useCallback: 메모는 값을 저장하고 이 아이는 함수를 저장한다. 최적화를 위해서 쓴다. 똑같은 api 요청을 재렌더링할때마다
//요청하면 비효율적이니까. 