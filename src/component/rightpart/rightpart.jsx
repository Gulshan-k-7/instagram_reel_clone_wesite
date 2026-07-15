import React from 'react'


const menu = [
    {
        id: 1,
        name: "like",
        icon: <img src="src/assets/notification.png" alt="like" className='w-6 invert' />
    },
    {
        id: 2,
        name: "comments",
        icon: <img src="src/assets/comments.png" alt="commments" className='w-5 invert' />
    },
    {
        id: 3,
        name: "repost",
        icon: <img src="src/assets/repost.png" alt="" className='w-5 invert' />
    },

    {
        id: 4,
        name: "share",
        icon: <img src="src/assets/massege.png" alt="" className='w-5 invert' />
    },
    {
        id: 5,
        name: "shave",
        icon: <img src="src/assets/save.png" alt="" className='w-4 invert' />
    },
    {
        id: 6,
        name: "more",
        icon: <img src="src/assets/dot.png" alt="" className='w-4 invert' />
    }
]


function handleClick(id) {
  switch (id) {
    case 1:
      alert("Home");
      break;
0
    case 2:
      alert("Search");
      break;

    case 3:
      alert("Notifications");
      break;

    case 4:
      alert("Profile");
      break;

    default:
      console.log("Unknown icon");
  }
}


const Rightpart = () => {
    return (
        <><div className='flex'>

            <div className="pt-53">
                {menu.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className="flex items-center gap-4 p-2 mx-2 pt-8 cursor-pointer"
                    >
                        <span className="hover:scale-110 transition-transform duration-200">
                            {item.icon}
                        </span>
                    </div>
                ))}
            </div>
            <div className='absolute right-10 bottom-82 p-3.5 rounded-full  w-14 ' style={{ backgroundColor: "rgb(33, 35, 40)" }} >
                <img className=' invert ' src="src/assets/arrow.png" alt="" />
            </div>
            <div className='absolute rotate-180 right-10 bottom-64 p-3.5 rounded-full  w-14 ' style={{ backgroundColor: "rgb(33, 35, 40)" }} >
                <img className=' invert ' src="src/assets/arrow.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default Rightpart