import React from 'react';

import { IUiElement } from '../../_lib/types';
import Image from '../../components/Image';

const UiElement = (props: IUiElement) => {
  const { style, image, opacity } = props;

  switch (style) {
    case 'wave':
      return (
        <div key={props._key} className="relative z-10 bg-transparent" style={{ marginTop: '-20.1%' }}>
          <svg viewBox="0 0 1440 320" style={{ position: 'absolute', top: 0, left: 0 }}>
            <path
              fill="transparent"
              d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg viewBox="0 0 1440 320" style={{ position: 'relative', zIndex: 1 }}>
            <path fill="var(--bg-color)" d="M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,229.3C672,235,768,213,864,186.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      );
      

    case 'solid-left':
      return (
        <div key={props._key} className="-z-10 h-0">
          <div className=" bg-bg-dark dark:bg-bg-light my-16 h-80 w-full sm:my-24"></div>
        </div>
      );
    case 'transparent-overlap':
      return (
        <div key={props._key} className="relative">
          <div className="absolute bottom-0 left-0 z-40 w-full bg-transparent">
            <svg viewBox="0 0 1440 317">
              <path
                fillOpacity="0.4"
                d="M0,224L360,288L720,192L1080,288L1440,128L1440,320L1080,320L720,320L360,320L0,320Z"></path>
              <svg viewBox="0 0 1440 190" className="absolute left-0 top-0">
                <path
                  fill="var(--accent-color)"
                  fillOpacity="1"
                  d="M0,256L360,224L720,128L1080,192L1440,192L1440,320L1080,320L720,320L360,320L0,320Z"></path>
              </svg>
            </svg>
          </div>
        </div>
      );
    case 'image-divider':
      return (
        <div key={props._key} className="-z-10 h-0">
          <div className=" bg-bg-light dark:bg-bg-dark my-16 h-80 w-full sm:my-24">
            {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default UiElement;
