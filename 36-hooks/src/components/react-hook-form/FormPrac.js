import { useForm } from 'react-hook-form';

export default function FormPrac() {
    const {
        register, // input 할당, value 변경 감지.
        handleSubmit, // form submit 시 호출.
        formState: { errors }, // 폼 상태 객체
        watch, // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm();  

        // func A 용
        const onValid = (data) => {
            console.log('onValid >>>>> ', data); // {username: '안녕'}
        };
    
        // func B 용
        const onInValid = (err) => {
            console.log('onInValid >>>>> ', err);
        };

  return (
    <div>
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            <input
                        type="text"
                        placeholder="name"
                        // register 함수
                        {...register('name', {
                            required: '이름은 필수 항목입니다',
                        })}
                    />
            <br/>        

            <input
                        type="number"
                        placeholder="age"
                        {...register('age', {
                            validate: value => 
                                value > 0 || '나이는 0보다 커야 합니다'
                        })}
                /> 
            <br/>    

            <button type="submit">Submit</button>           
        </form>

    </div>
  )
}
