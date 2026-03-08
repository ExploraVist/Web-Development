import React from 'react';
import { Camera, ScanLine, MessageCircle } from 'lucide-react';
import SectionBlock from './SectionBlock';
import deviceBeltImg from '../../imgs/device_belt.jpg';
import deviceHeldImg from '../../imgs/device_held.jpg';
import deviceLanyardImg from '../../imgs/device_lanyard.jpg';
import appExploreImg from '../../imgs/app-explore.png';
import appGalleryImg from '../../imgs/app-gallery.png';
import appNotesImg from '../../imgs/app-notes-new.png';
import '../../styles/home/HomeProduct.css';

const glanceFeatures = [
  { icon: Camera, label: 'Capture moments' },
  { icon: ScanLine, label: 'Describe scenes' },
  { icon: MessageCircle, label: 'Ask questions' },
];

const HomeProduct = () => (
  <SectionBlock eyebrow="Our product" className="home-product" id="product">
    {/* Glance — hardware */}
    <div className="section-sub-block home-product-glance">
      <h3 className="section-sub-title">ExploraVist Wearable</h3>
      <p className="section-sub-subtitle">Our wearable hardware—camera, speaker, and microphone.</p>
      <p className="section-sub-text">
        Simple by design: just a camera, speaker, and microphone. Attach it to any pair of glasses or wear it on your favorite lanyard.
      </p>

      <ul className="home-product-icons" role="list">
        {glanceFeatures.map(({ icon: Icon, label }) => (
          <li key={label} className="home-product-icon-item" role="listitem">
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <div className="home-product-glasses-gallery">
        <img src={deviceBeltImg} alt="ExploraVist device clipped to a belt" className="home-product-glasses-img" />
        <img src={deviceHeldImg} alt="ExploraVist device held in hand" className="home-product-glasses-img" />
        <img src={deviceLanyardImg} alt="ExploraVist device worn on a lanyard" className="home-product-glasses-img" />
      </div>
    </div>

    {/* ExploraVist App */}
    <div className="section-sub-block home-product-app">
      <h3 className="section-sub-title">ExploraVist App</h3>
      <p className="section-sub-subtitle">Your hub for everything you capture.</p>
      <p className="section-sub-text">
        Pair Glance with the app to keep your photos and descriptions in one place—searchable, with face recognition and real-time spoken descriptions.
      </p>

      <div className="home-product-screenshots-wrap">
        <div className="home-product-screenshots">
          <img src={appExploreImg} alt="Explore mode—live scene capture with AI description" className="home-product-screenshot" />
          <img src={appGalleryImg} alt="Gallery—search and browse your photos" className="home-product-screenshot" />
          <img src={appNotesImg} alt="Notes—quick voice memos on the go" className="home-product-screenshot" />
        </div>
      </div>
    </div>
  </SectionBlock>
);

export default HomeProduct;
