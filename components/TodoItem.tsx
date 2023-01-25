"use client"
// Framer motion
// import { LazyMotion, m } from "framer-motion"
import { FC, useState } from "react"
import { Reorder } from "framer-motion"
import { ITodo } from '@/lib/prismaClient';
// import loadFeatures from "@/utils/features"



const TodoItem: FC<{
    todosData: ITodo[]
}> = ({ todosData }) => {
    const [items, setItems] = useState(todosData);
    const [isDragging, setIsDragging] = useState<number | null>(null);

    const handleReorder = (e: any) => {
        // console.log(e)
        setItems(e)
    }
    return (
        <Reorder.Group values={items} onReorder={handleReorder} className='flex px-4 flex-col gap-y-3 mt-8 overflow-y-auto h-[72%] 
        scrollbar-thumb-perimary  scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded'>


            {items.map((todo, i) => (
                <Reorder.Item
                    value={todo}
                    onDragEnd={(e) => console.log(e)}
                    onMouseDown={() => setIsDragging(todo.id)}
                    onMouseUp={() => setIsDragging(null)}
                    key={todo.id}
                    className={`rounded-lg bg-white py-2.5 flex items-center space-x-5 px-3 left-0 cursor-pointer
                    ${isDragging === todo.id ? " shadow-2xl" : "relative  w-full"}
      
                    `
                    }>
                    <div className='h-3 w-3 focus:bg-red-300 flex-none bg-primary rounded-full'></div>
                    <p className='text-lg text-slate-800 font-normal'>{todo.task}</p>
                </Reorder.Item>

            ))}

        </Reorder.Group>

    )
}

export default TodoItem