import { useState, useEffect } from 'react'

export default function Watch({props}:any) {
  const [time, setTime] = useState(() => new Date)

  const clockFace = {
    backgroundColor: 'white',
    borderRadius: '50%',
    border: 'black 1px solid',
    height: '100px',
    marginBottom: '0.5rem',
    position: 'relative',
    width: '100px'
  }
  const transFormHours = (((time.getHours()+props) % 12) * 60 + time.getMinutes()) * 0.5;
  const transFormMinutes = (time.getMinutes() * 60 + time.getSeconds()) * 0.1;
  const transFormSeconds = (time.getSeconds()) * 6;

  const Arrows = [{
    id: '1',
    backgroundColor: 'black',
    borderRadius: '2.5px',
    height: '30px',
    left: 'calc(50% - 1.5px)',
    position: 'absolute',
    top: '25px',
    width: '4px',
    transformOrigin: 'center calc(100% - 5px)',
    transform: 'rotateZ(' + transFormHours + 'deg)',
  }
    , {
    id: '2',
    backgroundColor: 'black',
    borderRadius: '2.5px',
    height: '45px',
    left: 'calc(50% - 0.5px)',
    position: 'absolute',
    top: '10px',
    width: '3px',
    transformOrigin: 'center calc(100% - 5px)',
    transform: 'rotateZ(' + transFormMinutes + 'deg)',

  }
    , {
    id: '3',
    backgroundColor: 'black',
    borderRadius: '2.5px',
    height: '45px',
    left: 'calc(50% - 0.5px)',
    position: 'absolute',
    top: '10px',
    width: '1px',
    transformOrigin: 'center calc(100% - 5px)',
    transform: 'rotateZ(' + transFormSeconds + 'deg)'
  }]

    const newClock =
        <div style={clockFace} >
          <div>{Arrows.map((e) => {
            return (
              <div key={e.id}>
                <div style={e} >
                </div>
              </div>)
          })}</div>
        </div>

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      if (now.getSeconds() !== time.getSeconds()) {
        setTime(now)
      }
    }, 250)

    return () => clearInterval(interval)
  }, [time])

  return (
newClock

  )
}
