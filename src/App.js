import React from "react";
import './App.css';
import profilePicture from './image/profile-img.jpg';
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
        <div className='profile'>
          <img src={profilePicture} alt='profile' id='profile_img' />
          <img src={hover} alt='profile' id='profile_img' className='hover' />
          <a href={twitter} id='twitter'>
            Odumosu oluwafemi
          </a>
          <h1 className='hidden' id='slack'>
          Odumosu oluwafemi
          </h1>a
        </div>
        <div className='share'>
          <img src={share} alt='share' className='share_icon' />
          <img src={option} alt='option' className='option_icon' />
        </div>
  </header>
      <main className='container'>
        <div className='buttons'>
          <a href={twitter} id='twitter'>
            Twitter Link
          </a>
          <a href={zuriBtn} id='btn__zuri'>
            Zuri Team
          </a>
          <a href={zuriBooks} id='books'>
            Zuri Books
          </a>
          <a href={zuriBooks} id='book__python'>
            Python Books
          </a>
          <a href={pitch} id='pitch'>
            Background Check for Coders
          </a>
          <a href={zuriDesign} id='book__design'>
            Design Books
          </a>
        </div>
        <div className='icons'>
          <img src={slack} alt='slack' />
          <img src={github} alt='github' />
        </div>
      </main>
      <footer>
        <img src={zuri} alt='zuri logo' />
        <small>Hng /Zuri Intership 2022</small>
        <img src={I4G} alt='I4G logo' />
      </footer>
    </>
  );
}

export default App;