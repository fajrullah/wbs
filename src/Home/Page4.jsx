import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import leftPad from './assets/comments-leftpad-abd23.svg';
import patentLaw from './assets/28507.jpg';
import whistleBlower from './assets/54792.jpg';
export const page4 = [
  {
    name: '',
    profile: '',
    avatar: whistleBlower,
    comment: 'Whistleblower adalah seseorang yang melaporkan perbuatan dugaan tindakan korupsi yang terjadi di Kota Bekasi, baik itu Pegawai Negeri Sipil, Calon Pegawai Negeri Sipil dan pegawai lainnya yang bekerja di Kota Bekasi.',
  },
  {
    name: '',
    profile: '',
    avatar: patentLaw,
    comment: 'Whistleblower mendapatkan hak perlindungan serta berhak mengetahui tindak lanjut pengaduan. Hak perlindungan berupa kerahasiaan identitas, mendapat perlindungan dari tindakan administratif kepegawaian, perlindungan atas hak-hak saksi dan pelapor sebagaimana diatur dalam ketentuan peraturan perundang-undangan.',
  },
];
export default function Page4(props) {
  const children = page4.map((item, i) => (
    <QueueAnim type="bottom" key={i.toString()}>
      <img key="user" className="user" src={item.avatar} alt="" />
      <div key="comment" className="comment">
        {!props.isMobile && <img src={leftPad} alt="" />}
        <span >{item.comment}</span>
      </div>
      <h4 key="name">{item.name}</h4>
      <p key="pro">{item.profile}</p>
    </QueueAnim>
  ));
  return (
    <OverPack component="section" className="page-wrapper page4">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="a"
      >
        <div id="page4" key="1" className="carousel-wrapper">
          <Carousel effect={props.isMobile ? 'scrollx' : 'fade'}>
            {children}
          </Carousel>
        </div>
      </QueueAnim>
    </OverPack>
  );
}

Page4.propTypes = {
  isMobile: PropTypes.bool,
};
