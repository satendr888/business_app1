import "./Video.css";
import React, { useState, useEffect, useRef } from "react";
import Imgv from "../assets/video 1.png";

const VideoCarousel = () => {
  const itemsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: "https://www.youtube.com/watch?v=ZaWQql80sg8",
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://www.youtube.com/watch?v=ZaWQql80sg8",
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://www.youtube.com/watch?v=ZaWQql80sg8",
      credit: "Video by cottonbro from Pexels",
    },
  ];

  // Function to scroll each section into view
  const scrollToItem = (index) => {
    if (itemsRef.current[index]) {
      itemsRef.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Auto-scroll using useEffect
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % videoProperties.length;
      // setCurrentIndex(nextIndex);
      // scrollToItem(nextIndex);
    }, 3000); // Adjust interval (3000 ms = 3 seconds) as needed

    return () => clearInterval(scrollInterval);
  }, [currentIndex, videoProperties.length]);

  return (
    <div className="Vid">
      {videoProperties.map((video, idx) => (
        <div
          className="Vids"
          key={video.id}
          ref={(el) => (itemsRef.current[idx] = el)}
        >
          <div className="text">
            <span style={{ fontWeight: "500",fontSize:"3.5vw", marginRight:"3.9vw" }}>
              अपनी बस <b>बिजनेस</b> को <b>डिजिटल</b> बनाएं और{" "}
            </span>
            <span style={{ fontWeight: "bold", color: "blueviolet", fontSize:"3.5vw",marginRight:"3.9vw" }}>
              पूरा बिजनेस मोबाइल पर कंट्रोल करें
            </span>
            
          <button className="btn11">
        <span className="spimg">  <img  style={{width:"8vw"}} src={Imgv} alt="" />   विडियो में देखें कैसे </span>
      </button>
          </div>
          {/* <div className="vidp">
            <video width="100%" height="100%" controls autoPlay loop muted>
              <source src={video.src} />
            </video>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
