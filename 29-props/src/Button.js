// props.children
// 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 작성한 문자열
// 문자열, 숫자, jsx, 배열 등 다양한 형태.

import './Button.css'
import PropTypes from 'prop-types'

function Button(props) {
  console.log('button props >>>' , props);
  const {link, children} = props;
  return (
    <>
     <a href={link}>
        <button className="Button">{children}</button>
     </a>
    </>
    
  )
}

Button.defaultProps = {
    children: '네이버',
    link: 'http://www.naver.com'
}

Button.PropTypes = {
    children: PropTypes.string,
    link: PropTypes.string
}

export default Button