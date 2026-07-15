import React, { useRef, useState } from "react";
import video from "../../assets/video2.mp4";

function Mainpart() {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);
    const [playing, setPlaying] = useState(true);
    const [isFollowing, setFollowing] = useState(true);

    const toggleSound = () => {
        const video = videoRef.current;

        video.muted = !video.muted;

        setMuted(video.muted);


        video.play();
    };
    const togglePlay = () => {
        const video = videoRef.current;
        if (playing) {
            video.pause();
            setPlaying(false);
        }
        else {
            video.play();
            setPlaying(true);
        }
    };
    const handdelclick = () => {
        togglePlay();
        // toggleSound();


    };

    return (
        <>
            <div className=" relative">
                <video
                    ref={videoRef}
                    src={video}
                    loop
                    autoPlay
                    muted={muted}
                    playsInline
                    onClick={handdelclick}
                    className="h-screen w-full object-cover p-4 rounded-3xl"
                />
                <button
                    onClick={toggleSound}
                    className="absolute bottom-9 right-7 w-7 bg-gray-800 hover:bg-gray-700 rounded-full p-1.5 cursor-pointer"
                >
                    <img className="invert " src={muted ? "src/assets/mute.svg" : "src/assets/sound1.svg"} alt="" />
                </button>

                <div className=" absolute  left-8 bottom-12">
                    <div className="flex ">
                        <div className="w-8 pt-1 ">
                            <img src="src/assets/profile.jpg" alt="" className="rounded-full" />
                        </div>
                        <div className="pl-3 flex flex-col pt-0.5 text-white font-semibold text-sm ">
                            <span className="p-0 ">profile_name</span>
                            <div className="flex items-center">
                                <img
                                    className="invert"
                                    src="src/assets/music.png"
                                    alt=""
                                    width={11}
                                />

                                <div className="w-20 overflow-hidden ml-1.5">
                                    <span className="inline-block animate-marquee whitespace-nowrap text-xs">
                                        Love-me-like-you-do
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setFollowing(!isFollowing)} className="text-white font-bold border-1 rounded-lg m-3 p-2 pt-1 pb-1 mt-0  text-xs cursor-pointer">{isFollowing ? "Following" : "Follow"}</button>
                    </div>
                    <div className="text-white overflow-hidden w-58 whitespace-nowrap text-sm font-semibold ">
                        Special adventure to Islet Tindhólmur with a group of teenagers from the US. They loved the islet—such a special place to experience without any people around. On </div>
                </div>


            </div>
        </>
    );
}

export default Mainpart;