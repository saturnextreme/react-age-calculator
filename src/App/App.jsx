import { useState } from 'react'
import './App.scss'
import { AgeCalculator } from './age'

let st = ['form-name', 'form-name-error'];

const App = () => {
  const [curDay, setCurDay] = useState({
    curDate: '',
    curMonth: '',
    curYear: ''
  })
  const [reqDay, setReqDay] = useState({
    date: '--',
    month: '--',
    year: '--'
  })

  const [style, setStyle] = useState(st[0])

  const handleChange = (e) => {
    setCurDay({...curDay, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    if (curDay.curYear <= date.getFullYear() && curDay.curDate <= 31 && curDay.curMonth <= 12) {
      const result = AgeCalculator(curDay.curDate, curDay.curMonth, curDay.curYear);
      setReqDay({
        date: result[0] || '--',
        month: result[1] || '--',
        year: result[2] || '--'
      })
    }
    else {
      setStyle(st[1]);
      setReqDay({
        date: '--',
        month: '--',
        year: '--'
      })
    }
    setCurDay({
      curDate: '',
      curMonth: '',
      curYear: ''
    });
  }

  return (
    <div className='frame' onSubmit={handleSubmit}>
      <div className='wrapper'>
        <form className='form'>
          <div className='form-row'>
            <div className='form-component'>
              <label htmlFor='date' className='form-label'>DAY</label>
              <input 
              type='number'
              className={style} 
              name='curDate' 
              id='date'
              placeholder='DD'
              value={curDay.curDate}
              onChange={handleChange}
               />
            </div>
            <div className='form-component'>
              <label htmlFor='month' className='form-label'>MONTH</label>
              <input
              type='number' 
              className={style}
              name='curMonth' 
              id='month'
              placeholder='MM'
              value={curDay.curMonth}
              onChange={handleChange}
                />
            </div>
            <div className='form-component'>
              <label htmlFor='year' className='form-label'>YEAR</label>
              <input 
              type='number' 
              className={style}
              name='curYear' 
              id='year' 
              placeholder='YYYY'
              value={curDay.curYear}
              onChange={handleChange}
                />
            </div>
          </div>
          <button type='submit' className='submit'>
              <img src="icon-arrow.svg" alt="submit" className="submit-image" />
            </button>
        </form>
        <div className='result'>
          <div className='result-comp'>
            <span className='val'>{reqDay.year} </span>
            <h2 className="defined">&nbsp; Years</h2>
          </div>
          <div className='result-comp'>
            <span className='val'>{reqDay.month} </span>
            <h2 className="defined">&nbsp; Month</h2>
          </div>
          <div className='result-comp'>
            <span className='val'>{reqDay.date} </span>
            <h2 className="defined">&nbsp; Days</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
