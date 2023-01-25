// Components
import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'



export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className='w-full h-screen bg-gradient-to-tr from-secondary to-primary justify-center px-4 flex items-center'>
      {/* Mobile */}
      <div className='rounded-3xl px-2 relative  w-full max-w-md min-w-[280px] h-[520px] -mt-16
     shadow-2xl bg-gradient-to-tr from-white/30 to-white/20    backdropFilter'>
        {/* Todos */}
        {/* @ts-expect-error Server Component */}
        <TodoList />
        {/* Input */}
        <AddTodo />
        {/* Mobile bottom bar */}
        <div className='h-1 min-w-[150px] w-4/12 rounded-full  bg-slate-900 absolute bottom-4 left-[50%] -translate-x-[50%]'></div>
      </div>
    </div>
  )
}
