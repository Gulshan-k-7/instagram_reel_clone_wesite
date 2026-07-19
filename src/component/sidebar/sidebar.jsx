import homeIcon from "../../assets/home.png";
import reelIcon from "../../assets/reel.png";
import messageIcon from "../../assets/massege.png";
import searchIcon from "../../assets/search.png";
import exploreIcon from "../../assets/explore.png";
import notificationIcon from "../../assets/notification.png";
import plusIcon from "../../assets/plus.png";
import profileIcon from "../../assets/profile.jpg";
import moreIcon from "../../assets/more.png";
import metaIcon from "../../assets/meta.png";
import instagramLogo from "../../assets/instagram.png";

const menuItems = [
    {
        id: 1,
        name: "Home",
        icon: homeIcon,
    },
    {
        id: 2,
        name: "Reels",
        icon: reelIcon,
    },
    {
        id: 3,
        name: "Messages",
        icon: messageIcon,
    },
    {
        id: 4,
        name: "Search",
        icon: searchIcon,
    },
    {
        id: 5,
        name: "Explore",
        icon: exploreIcon,
    },
    {
        id: 6,
        name: "Notifications",
        icon: notificationIcon,
    },
    {
        id: 7,
        name: "Create",
        icon: plusIcon,
    },
    {
        id: 8,
        name: "Profile",
        icon: profileIcon,
        rounded: true,
    },
    {
        id: 9,
        name: "More",
        icon: moreIcon,
    },
    {
        id: 10,
        name: "Also from Meta",
        icon: metaIcon,
    },
];

const Sidebar = () => {
    return (
        <aside className="group h-screen w-16 overflow-hidden text-white transition-all duration-300 hover:w-56">

            {/* Logo */}
            <div className="mx-2 mt-5 ">
                <button className="rounded-lg p- hover:bg-gray-700">
                    <img
                        src={instagramLogo}
                        alt="Instagram"
                        className="w-12"
                    />
                </button>
            </div>

            {/* Menu */}
            <nav className="flex flex-col gap-2">

                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className="mx-2 flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-gray-700"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className={`w-6 ${item.rounded ? "rounded-full" : "invert"
                                }`}
                        />

                        <span className="whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {item.name}
                        </span>

                    </button>
                ))}

            </nav>
        </aside>
    );
};

export default Sidebar;