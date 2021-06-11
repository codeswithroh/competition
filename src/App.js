import "./App.css";
import React, { useState } from "react";
function App() {
  const [slider, setSlider] = useState(false);
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);
  const [hover, setHover] = useState(false);

  const handleNext= (e) => {
    e.preventDefault();
    setColor(true);
    setSlider(true);
    setColor1(false);
  }
  const handlePrev= (e) => {
    e.preventDefault();
    setColor(false);
    setSlider(false);
    setColor1(true);
  }
  return (
    <div className='App'>
      <div className='nav'>
        <nav>
          <div className='logo'></div>
          <div className='intra'>
            <p>INTRA'21</p>
          </div>
          <div className='cu-brain'>
            <p>CUrBrain</p>
          </div>
        </nav>
      </div>
      {/* main heading */}
      <div className='geekonix'>
        <div style={{ width: "1em", height: "0.1em", background: "red" }}></div>
        <div
          style={{ width: "0.1em", height: "1.5em", background: "red" }}
        ></div>
        <div style={{ color: "red", fontSize: "2rem" }}>G</div>
        <div style={{ color: "white", fontSize: "2rem" }}>E</div>
        <div style={{ color: "white", fontSize: "2rem" }}>E</div>
        <div style={{ color: "red", fontSize: "2rem" }}>K</div>
        <div style={{ color: "red", fontSize: "2rem" }}>O</div>
        <div style={{ color: "red", fontSize: "2rem" }}>N</div>
        <div style={{ color: "red", fontSize: "2rem" }}>I</div>
        <div style={{ color: "white", fontSize: "2rem" }}>X</div>
        <div
          style={{ width: "0.1em", height: "1.5em", background: "red" }}
        ></div>
        <div style={{ width: "1em", height: "0.1em", background: "red" }}></div>
      </div>
      {/* body */}
      <div className='body'>
        <div className='body_description'>
          <h2>Workshops, Seminars and Talks</h2>
          <p>
            Geekonix conducts workshops related to in-trend technical topics
            such as robotics, coding, photography, and many more in college.
            Seminars focussing on higher studies, alternative career paths and
            opportunities are organized frequently. The college students get to
            experience inspirational talks with various eminent personalities
            from time to time.
          </p>
        </div>
        <div className='divider'></div>
        <div className='body_description'>
          <h2>Technical Events</h2>
          <p>
            EDGE - the brainchild of Geekonix and the second-largest tech fest
            in Eastern India, is organized by Geekonix with 48+ enthralling
            events with an unimaginable prize pool. For the students of our
            college to be able to savour EDGE with more tenacity and thrill,
            Geekonix organizes INTRA college tech fest exclusively for the
            college students.
          </p>
        </div>
        <div className='divider'></div>
        <div className='body_description'>
          <h2>Fun Events</h2>
          <p>
            The 3 days of EDGE are made more enjoyable, with FUN EVENTS like
            Paint Ball, Laser Tag, Red Bull Pong, Body Zorbing, Flip the Bottle
            and selfie competitions. After a day of intense competition and
            events, it helps the participants to relieve themselves and enjoy
            the moments. Winners get goodies and gift vouchers.
          </p>
        </div>
      </div>
      {/* slideshow */}
      {slider ? (
        <div className='slideshow'>
          <div className='slide slide3' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          {hover?<h2 style={{position:'absolute',bottom:'0',color:'white',backgroundColor:'rgba(160, 32, 27, 0.521)',padding:'0.5em 2em',borderRadius:'10px'}}>Flawless</h2>:null}
          </div>
          <div className='slide slide4' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          {hover?<h2 style={{position:'absolute',bottom:'0',color:'white',backgroundColor:'rgba(160, 32, 27, 0.521)',padding:'0.5em 2em',borderRadius:'10px'}}>CryptoQuest</h2>:null}
          </div>
        </div>
      ) : (
        <div className='slideshow'>
          <div className='slide slide1' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            {hover?<h2 style={{position:'absolute',bottom:'0',color:'white',backgroundColor:'rgba(160, 32, 27, 0.521)',padding:'0.5em 2em',borderRadius:'10px'}}>Web Development</h2>:null}
          </div>
          <div className='slide slide2' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          {hover?<h2 style={{position:'absolute',bottom:'0',color:'white',backgroundColor:'rgba(160, 32, 27, 0.521)',padding:'0.5em 2em',borderRadius:'10px'}}>Bug Hunt</h2>:null}
          </div>
        </div>
      )}
      <div className='slideshow-button'>
        <div className={color1?'prev_clicked':'prev'} onClick={(e) => handlePrev(e)}></div>
        <div className={color?'next_clicked':'next'} onClick={(e) => handleNext(e)}></div>
      </div>
    </div>
  );
}

export default App;
