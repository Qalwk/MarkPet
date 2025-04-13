import { useState } from 'react'
import viteLogo from '/vite.svg'
import '@/styles/App.css'
import { Button } from '@shared/ui/button'
import { Calendar } from "@shared/ui/calendar"
import AreaCharts from '@widgets/ui/AreaCharts'
import BiaxialBarChart from '@widgets/ui/BiaxialBarChart'

const DashboardPage = () => {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant="outline">Кнопка цувапгывтгшщп</Button>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <AreaCharts/>
        <BiaxialBarChart/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default DashboardPage
