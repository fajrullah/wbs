import React from 'react';
import { Button } from 'antd';
import jump from 'jump.js'
import BEKASIKOTA from './assets/bekasikotaTransparant.png'
export default function Header(props) {
  return (
    <header {...props}>
      <a className="logo-wrapper" onClick={() => jump('.page4')}>
        <img key="user" className="user" src={BEKASIKOTA} alt="" width="70" height="60" />
        <span><font style={{ 
              "color": "#7c795d"
            }}>KOTA BEKASI</font>
        </span>
      </a>
      <div className="button">
        <Button>Masuk</Button>
      </div>
    </header>
  );
}
