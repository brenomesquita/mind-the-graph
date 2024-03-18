import React from 'react';
import appPicture from './img/head-02.png';
import logo from './img/logo_mindthegraph.png';
import graphical from './img/graphical.png';
import scientific from './img/scientific.png';
import slide from './img/slide.png';
import learnMoreImage from './img/bt_learnmore.png';
import icoDrag from './img/ico_drag.png';
import icoPremade from './img/ico_premade.png';
import icoPlatform from './img/ico_platform.png';
import icoOdemand from './img/ico_odemand.png';
import icoMultiple from './img/ico_multiple.png';
import icoShare from './img/ico_share.png';
import './styles/global.css';

function App() {
  return (
    <div>
      <div className='header-content'>
        <header>
          <div className='nav-bar'>
            <img src={logo} alt="logo" className='logo-img'/>
            <button className='sign-up-header-btn'>Sign up free</button>
            <button className='login-header-btn'>Login</button>
            <button className='basic-header-btn'>Jobs</button>
            <button className='basic-header-btn'>Blogs</button>
            <button className='basic-header-btn'>Pricing</button>
            <button className='basic-header-btn'>Templates</button>
          </div>
          <div className="content-wrapper">
            <div className="text-wrapper">
              <h1 className='text-header'>Discover all possibilities of using this powerful tool and create science figures, posters and infographics.</h1>
              <button className='start-header-btn'>Start creating now</button>
            </div>
            <img src={appPicture} alt="appPicture" className='header-img'/>
          </div>
        </header>
      </div>

      <div className='page-content'>
        <h1 className="page-title">Visualize what Mind the Graph can do for you</h1>
        <div className="page-content-items">
          <div className="page-content-item">
            <img src={graphical} alt="graphical" className='logo-img'/>
            <div>
              <h1 className='page-subtitle'>Graphical Abstracts and Infographics</h1>
              <span className='page-span'>Improve your papers’ impact and visibility through quality visual communication</span>
            </div>
            <button className='learn-more-btn'>
              <img src={learnMoreImage} alt="Learn More" style={{ width: '114px', height: '19px' }} />
            </button>
          </div>
          <div className="page-content-item">
            <img src={scientific} alt="scientific" className='logo-img'/>
            <div>
              <h1 className='page-subtitle'>Scientific Poster in a few clicks</h1>
              <span className='page-span'>Add visual impact to your posters with scientific illustrations and graphics</span>
            </div>
            <button className='learn-more-btn'>
              <img src={learnMoreImage} alt="Learn More" style={{ width: '114px', height: '19px' }} />
            </button>
          </div>
          <div className="page-content-item">
            <img src={slide} alt="slide" className='logo-img'/>
            <div>
              <h1 className='page-subtitle'>Make better Slide Presentation</h1>
              <span className='page-span'>Transform your lectures, meetings and classes into high-impact visual experiences</span>
            </div>
            <button className='learn-more-btn'>
              <img src={learnMoreImage} alt="Learn More" style={{ width: '114px', height: '19px' }} />
            </button>
          </div>
        </div>
      </div>

      <div className="purple-background">
        <h1 className="centered-content">Create effective science figures in minutes</h1>
        <span className="centered-content">We built Mind the Graph for simplicity. The platform is easy to use and just about anybody can use it to create great infographics and presentations - from beginners to professionals, individuals to groups and small labs to large organisations</span>
        <div className="image-grid">
          <div>
            <img src={icoDrag} alt="icoDrag" className='img-content'/>
            <h3>Drag and Drop</h3>
            <span>Easily select and manage illustrations, text and templates</span>
          </div>
          <div>
            <img src={icoPremade} alt="icoPremade" className='img-content'/>
            <h3>Pre-Made Resources</h3>
            <span>Don’t waste time! Use our templates and just customize colours, text etc</span>
          </div>
          <div>
            <img src={icoPlatform} alt="icoPlatform" className='img-content'/>
            <h3>Online Platform</h3>
            <span>Access your creations at any time and from anywhere</span>
          </div>
          <div>
            <img src={icoOdemand} alt="icoOdemand" className='img-content'/>
            <h3>On-demand Illustrations</h3>
            <span>Don’t find exactly what you need? We will design it for you!</span>
          </div>
          <div>
            <img src={icoMultiple} alt="icoMultiple" className='img-content'/>
            <h3>Multiple Sizing Options</h3>
            <span>Ready-to-go templates in all popular sizes</span>
          </div>
          <div>
            <img src={icoShare} alt="icoShare" className='img-content'/>
            <h3>Share creations</h3>
            <span>Share your creations with your team or other users</span>
          </div>
        </div>
        <button className='image-grid-button'>EXPLORE MIND THE GRAPH</button>
      </div>
    </div>
  );
}

export default App;
