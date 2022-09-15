import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onChangeMinute = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  };
  const onChangeHours = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };

  return (
    <>
      <div>
        <input
          value={minutes}
          onChange={onChangeMinute}
          type="number"
          placeholder="Hours"
        />
        <input
          value={hours}
          onChange={onChangeHours}
          type="number"
          placeholder="Minutes"
        />
      </div>
    </>
  );
}

export default App;
