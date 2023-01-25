// Framer motion
import { FC, Suspense } from "react";
import TodoItem from "@/components/TodoItem"
// import loadFeatures from "@/utils/features"

import prisma from '@/lib/prismaClient';

const fetchData = async () => {
    return await prisma.todo.findMany({
        orderBy: {
            sort_number: "desc",
        },
        select: {
            id: true,
            task: true,
            sort_number: true,
        }
    })
}




const TodoList = async () => {
    const todosData = await fetchData()

    return (
        <Suspense fallback="loading">
            <TodoItem todosData={todosData} />
        </Suspense>
    )
}

export default TodoList