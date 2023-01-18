import { Habit } from './components/Habit'

export function App() {
  return (
    <div className='bg-gray-900 h-screen w-screen'>
      <Habit completed={3} />
    </div>
  )
}
