import { deposit, withdraw } from "./store/moneySlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App2() {
  const [amount, setAmount] = useState("");
  const balance = useSelector((state) => state.money);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(deposit(amount));
    setAmount("");
  };

  const handleWithdraw = () => {
    dispatch(withdraw(amount));
    setAmount("");
  };
  return (
    <>
      <h1>코딩온 은행</h1>
      <h2>잔액: {balance}</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdraw}>출금</button>
    </>
  );
}

export default App2;
