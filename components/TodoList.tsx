// Framer motion
import { FC, Suspense } from "react";
import TodoItem from "@/components/TodoItem";
// import loadFeatures from "@/utils/features"

import prisma from "@/lib/prismaClient";

const fetchData = async () => {
  try {
    return await prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        task: true,
      },
    });
  } catch (err) {
    console.log(err);
    return (err as { message: string }).message;
  }
};

const TodoList = async () => {
  const todosData = await fetchData();
  return (
    <Suspense fallback="loading">
      {typeof todosData !== "string" ? (
        <TodoItem todosData={todosData} />
      ) : (
        <p>Something Went Wrong</p>
      )}
    </Suspense>
  );
};

export default TodoList;
