import { useRef, useState } from "react";

import videoFile from "../../assets/video2.mp4";
import profileImg from "../../assets/profile.jpg";
import musicIcon from "../../assets/music.png";
import muteIcon from "../../assets/mute.svg";
import soundIcon from "../../assets/sound1.svg";

const MainPart = () => {
    const videoRef = useRef(null);

    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isFollowing, setIsFollowing] = useState(false);

    const toggleSound = () => {
        setIsMuted((prev) => !prev);
    };

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying((prev) => !prev);
    };

    return (
        <div className="relative h-screen">
            <video
                ref={videoRef}
                src={videoFile}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onClick={togglePlay}
                className="h-full w-full rounded-3xl object-cover p-4 cursor-pointer"
            />

            {/* Sound Button */}
            <button
                onClick={toggleSound}
                className="absolute bottom-9 right-7 rounded-full bg-gray-800 p-2 hover:bg-gray-700 transition"
            >
                <img
                    src={isMuted ? muteIcon : soundIcon}
                    alt={isMuted ? "Unmute video" : "Mute video"}
                    className="w-5 invert"
                />
            </button>

            {/* Reel Information */}
            <div className="absolute bottom-12 left-8 text-white">

                <div className="flex items-start gap-3">

                    <img
                        src={profileImg}
                        alt="Profile"
                        className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>

                        <h3 className="font-semibold text-sm">
                            profile_name
                        </h3>

                        <div className="flex items-center mt-1">

                            <img
                                src={musicIcon}
                                alt="Music"
                                className="w-3 invert"
                            />

                            <div className="ml-2 w-24 overflow-hidden">

                                <span className="inline-block whitespace-nowrap text-xs animate-marquee">
                                    Love me like you do
                                </span>

                            </div>

                        </div>

                    </div>

                    <button
                        onClick={() => setIsFollowing((prev) => !prev)}
                        className="rounded-lg border px-3 py-1 text-xs font-bold hover:bg-white hover:text-black transition"
                    >
                        {isFollowing ? "Following" : "Follow"}
                    </button>

                </div>

                <p className="mt-4 w-60 overflow-hidden h-5 text-sm font-medium line-clamp-3">
                    Special adventure to Islet Tindhólmur with a group of teenagers from
                    the US. They loved the islet—such a special place to experience
                    without any people around.
                </p>

            </div>
        </div>
    );
};

export default MainPart;