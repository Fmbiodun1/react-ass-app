import React from "react";
import './App.css';
import profilePicture from './image/img.jpg';
import share from './image/_Avatar share button.png';
import option from './image/mobile_Avatar share button.png';
import github from './image/gitHubLogo.png';
import I4G from './image/i4gLogo.png';
import zuri from './image/logo.36d2d48a.png';
import slack from './image/slacklogo.png';
import hover from './image/hover.png';

function App() {
  const twitter = 'https://twitter.com/fmbiodun';
  const zuriBtn = 'https://training.zuri.team/';
  const zuriBooks = 'http://books.zuri.team/';
  const pitch = 'https://background.zuri.team/';
  const zuriDesign = 'https://books.zuri.team/design-rules';

  return (
    <>
  <header>
        <section className='profile'>
          <img src={profilePicture} alt='profile' id='profile_img' className="shape" />
          <img src={hover} alt='profile' id='profile_img' className='hover' />
          <a href={twitter} id='twitter' >@fmbiodun</a>
          <h1 className='hidden' id='slack'>fmbiodun</h1>
        </section>
        <div className='share'>
          <img src={share} alt='share' className='share_icon' />
          <img src={option} alt='option' className='option_icon' />
        </div>

  </header>
      <main className='container'>
        <article className='buttons'>
          <a href={zuriBtn} id='btn__zuri'>Zuri Team</a>
          <a href={zuriBooks} id='books'>Books by Zuri</a>
          <a href={zuriBooks} id='book__python'>Books on Python</a>
          <a href={pitch} id='pitch'>Check for Coders</a>
          <a href={zuriDesign} id='book__design'>Free design book</a>
        </article>
        <div className="spa">
        </div>
        <div className='icons'>
          <img src={slack} alt='slack' />
          <img src={github} alt='github' />
        </div>
      </main>
      <footer>
        <img src={zuri} alt='zuri logo' className="zur" />
        <small><b>HNG Internship 9 Frontend Task 1 2022</b></small>
        <img src={I4G} alt='I4G logo' className="sty" />
      </footer>
    </>
  );
}

export default App;