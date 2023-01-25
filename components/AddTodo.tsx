'use client'
const AddTodo = () => {
    return (
        <>
            {/* Input */}
            <div className=' flex absolute bottom-10 left-0 w-full  px-6 lg:px-12 space-x-4'>
                <input className="rounded-full focus:ring-2  ring-primary duration-300 py-2.5 px-6 bg-white focus:outline-none w-full flex-1 shrink" placeholder='Write here' />
                <button className='bg-gradient-to-tr from-primary to-secondary h-12 w-12 p-1 flex-none  
      rounded-full flex justify-center items-center hover:scale-105 duration-300'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.79092 10.5H9.31365M7.95342 2.20023L16.708 6.77204C20.6352 8.82295 20.6352 12.177 16.708 14.228L7.95342 18.7998C2.06251 21.8761 -0.3409 19.3552 2.60455 13.2132L3.49433 11.3652C3.71933 10.8952 3.71933 10.1155 3.49433 9.64545L2.60455 7.78682C-0.3409 1.64477 2.07274 -0.876138 7.95342 2.20023Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default AddTodo