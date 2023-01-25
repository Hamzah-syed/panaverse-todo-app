"use client";
// Framer motion
// import { LazyMotion, m } from "framer-motion"
import { FC, useEffect, useState, useTransition } from "react";
import { Reorder } from "framer-motion";
import { ITodo } from "@/lib/prismaClient";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

// import loadFeatures from "@/utils/features"

const TodoItem: FC<{
  todosData: ITodo[];
}> = ({ todosData }) => {
  const [items, setItems] = useState(todosData);
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setItems(todosData)
  }, [todosData])
  const handleReorder = (e: any) => {
    // console.log(e)
    setItems(e);
  };
  const isMutating = isPending || isDeleting
  // Handle Delete
  const handleDelete = async (id: number) => {
    setIsDeleting(true)
    try {
      const res = await fetch("/api/delete-todo", {
        method: "DELETE",
        body: JSON.stringify({ id })
      })
      if (!res.ok) {
        console.log(res.body)
        throw new Error(res.statusText)
      } else {
        startTransition(() => {
          router.refresh()
        })
        toast.success("Todo deleted")
      }
    } catch (error) {
      toast.error((error as { message: string }).message)
    }
    setIsDeleting(false)
  }
  return (
    <Reorder.Group
      values={items}
      onReorder={handleReorder}
      className="flex px-4 flex-col gap-y-3 mt-8 overflow-y-auto h-[72%] 
        scrollbar-thumb-primary  scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded"
    >
      {items.map((todo, i) => (
        <Reorder.Item
          value={todo}
          // onDragEnd={(e) => console.log(e)}
          onMouseDown={() => setIsDragging(todo.id)}
          onMouseUp={() => setIsDragging(null)}
          key={todo.id}
          className={`rounded-lg bg-white py-2.5 flex justify-between items-center  px-3 left-0 cursor-pointer
                    ${isDragging === todo.id
              ? " shadow-2xl"
              : "relative  w-full"
            }
      
                    `}
        >
          <div className="flex space-x-5 items-center">
            <div className="h-3 w-3 focus:bg-red-300 flex-none bg-primary rounded-full"></div>
            <p className="text-lg text-slate-800 font-normal">{todo.task}</p>
          </div>
          {todosData.length > 3 &&
            <button className="group" disabled={isMutating} onClick={() => handleDelete(todo.id)}>
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6    hover:scale-110 duration-300 
                ${isMutating ? "text-slate-400" : "text-red-600"}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          }
        </Reorder.Item>
      ))}
      <ToastContainer />
    </Reorder.Group>
  );
};

export default TodoItem;
