import {useState} from 'react'
import uuid from 'react-uuid'
import Watch from './Watch'

interface Clock {
  id: string;}

export default function WorldClock() {
  const [name, setName] = useState('')
  const [timeout, setTimeout] = useState(0)
  const [clock, setClock] = useState<Clock[]>([])

  const addClock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setName(name);
    setTimeout(timeout);
    const newClock =
      <div>{name}
        <Watch props={timeout} />
      </div>
    setClock(prevClock => [...prevClock, { id: uuid(), ...newClock }]);

    console.log(clock)
    setName('');
    setTimeout(0);
  }

  const result = clock.map((e) => {
    return (
      <div  key={e.id}>
        <div>{e}</div>
        <button onClick={() => {
          setClock(
            clock.filter(a =>
              a.id !== e.id
            )
          );
        }}>
          x
        </button>
      </div>)
  }
  )

  return (
    <div>
      <form onSubmit={addClock}>
        <label htmlFor="name">Название</label>
        <input type="text" name="name" id="" value={name} onChange={event => setName(event.target.value)} />
        <label htmlFor="time">Временная зона</label>
        <input type="number" name='time' value={timeout} onChange={event => setTimeout(event.target.valueAsNumber)} />
        <button >Добавить</button>
      </form>
      {result}
    </div>
  )
}
