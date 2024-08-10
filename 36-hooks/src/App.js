import Faq from "./components/Faq";
import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemoEx from "./components/UseMemoEx";
import UseReducerEx from "./components/UseReducerEx";
import useTitle from "./hooks/useTitle";



function App() {
  useTitle("React hooks 학습중")
  return (
   <>
    <UseMemoEx/>
    <hr/>
    <UseCallbackEx/>
    <hr/>
    <UseCallbackEx2 postId={8}/>
    <UseReducerEx/>
    <Faq/>
   </>
  );
}

export default App;
