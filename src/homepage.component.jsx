import React from 'react';
import './homepage.style.scss';

const Homepage = () => (
   <div className="homepage">
       <div className="directory-menu">
           <div className="menu-item">
               <div className="content">
                   <h2 className="title">HATS</h2>
                   <span className="subtitle">SHOP NOW</span>
               </div>  
           </div>
           <div className="menu-item">
               <div className="content">
                   <h2 className="title">JACKETS</h2>
                   <span className="subtitle">SHOP NOW</span>
               </div>  
           </div>
           <div className="menu-item">
               <div className="content">
                   <h2 className="title">SNEAKERS</h2>
                   <span className="subtitle">SHOP NOW</span>
               </div>  
           </div>
           <div className="menu-item">
               <div className="content">
                   <h2 className="title">WOMENS</h2>
                   <span className="subtitle">SHOP NOW</span>
               </div>  
           </div>
           <div className="menu-item">
               <div className="content">
                   <h2 className="title">MENS</h2>
                   <span className="subtitle">SHOP NOW</span>
               </div>  
           </div>
       </div>
   </div>
);

export default Homepage;