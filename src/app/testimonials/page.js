'use client'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Testimonials(){
   return(
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
            <OwlCarousel className='owl-theme' loop margin={10} nav>
                <div class='item'>
                    <h4>1</h4>
                </div>
                <div class='item'>
                    <h4>2</h4>
                </div>
                <div class='item'>
                    <h4>3</h4>
                </div>
                <div class='item'>
                    <h4>4</h4>
                </div>
                <div class='item'>
                    <h4>5</h4>
                </div>
                <div class='item'>
                    <h4>6</h4>
                </div>
                <div class='item'>
                    <h4>7</h4>
                </div>
            </OwlCarousel>;
            </div>
          </div>
        </div>
      </div>
    </>
   )
}