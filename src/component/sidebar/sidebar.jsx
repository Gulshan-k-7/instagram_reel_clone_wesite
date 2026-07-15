import React from 'react'

const menu = [

    {
        name: "home",
        icon: <img src="src/assets/home.png" alt="img" className='w-6 invert  ' />
    },
    {
        name: "reel",
        icon: <img src="src/assets/reel.png" alt="img" className='w-6 invert  ' />
    },
    {
        name: "messeges",
        icon: <img src="src/assets/massege.png" alt="img" className='w-6 invert  ' />
    },
    {
        name: "search",
        icon: <img src="src/assets/search.png" alt="img" className='w-6 invert  ' />
    },
    {
        name: "explore",
        icon: <img src="src/assets/explore.png" alt="img" className='w-6 invert  ' />
    },
    {
        name: "notification",
        icon: <img src="src/assets/notification.png" alt="img" className='w-6 invert  ' />
    },
    {
        name: "create",
        icon: <img src="src/assets/plus.png" alt="img" className='w-6 invert  ' />
    },
    {
        name: "profile",
        icon: <img src="src/assets/profile.jpg" alt="img" className='w-6 invert  ' />
    },
    {
        name: "more",
        icon: <img src="src/assets/more.png" alt="img" className='w-6 invert  ' />
    },
    {
        name: "also from meta",
        icon: <img src="src/assets/meta.png" alt="img" className='w-6 invert  ' />
    }
]

const Sidebar = () => {
    return (
        <div className='group w-16 hover:w-56 h-screen  text-white  duration-300 overflow-hidden'>
            <div className='flex flex-col gap-2 mt-5'>


                <div className=" ml-2 w-fit p-2 rounded-lg hover:bg-gray-700">
                    <img
                        src="/src/assets/inst.png"
                        alt="img"
                        className="w-9"
                    />
                </div>

                {menu.map((item, index) => (
                    <div key={index} className='flex items-center gap-4 p-3 mx-2 rounded-lg hover:bg-gray-700 cursor-pointer'>
                        <span className='text-2xl min-w-8'>
                            {item.icon}
                        </span>

                        <span className='className=" opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap "'>
                            {item.name}
                        </span>


                    </div>

                ))}
            </div>

        </div>
    )
}

export default Sidebar