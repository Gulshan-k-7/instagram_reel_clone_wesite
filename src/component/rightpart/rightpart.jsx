import { useState } from "react";

import notification from "../../assets/notification.png";
import redHeart from "../../assets/redHeart.jpg";
import comments from "../../assets/comments.png";
import repost from "../../assets/repost.png";
import message from "../../assets/massege.png";
import save from "../../assets/save.png";
import more from "../../assets/dot.png";
import arrow from "../../assets/arrow.png";

const RightPart = () => {
    const [liked, setLiked] = useState(false);

    const menu = [
        {
            id: 1,
            name: "Like",
            icon: liked ? redHeart : notification,
            width: "w-6",
            invert: !liked,
            onClick: () => setLiked(prev => !prev),
        },
        {
            id: 2,
            name: "Comments",
            icon: comments,
            width: "w-5",
            invert: true,
        },
        {
            id: 3,
            name: "Repost",
            icon: repost,
            width: "w-5",
            invert: true,
        },
        {
            id: 4,
            name: "Share",
            icon: message,
            width: "w-5",
            invert: true,
        },
        {
            id: 5,
            name: "Save",
            icon: save,
            width: "w-4",
            invert: true,
        },
        {
            id: 6,
            name: "More",
            icon: more,
            width: "w-4",
            invert: true,
        },
    ];

    return (
        <div className="flex">
            <div className="pt-53">
                {menu.map(item => (
                    <button
                        key={item.id}
                        onClick={item.onClick}
                        className="flex items-center justify-center p-2 mx-2 pt-8 transition-transform duration-200 hover:scale-110"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className={`${item.width} ${item.invert ? "invert" : ""}`}
                        />
                    </button>
                ))}
            </div>

            <button className="absolute right-10 bottom-82 w-14 rounded-full bg-[#212328] p-3.5">
                <img src={arrow} alt="Previous" className="invert" />
            </button>

            <button className="absolute right-10 bottom-64 w-14 rounded-full bg-[#212328] p-3.5 rotate-180">
                <img src={arrow} alt="Next" className="invert" />
            </button>
        </div>
    );
};

export default RightPart;