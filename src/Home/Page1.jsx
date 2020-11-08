import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import G6 from './assets/g6-b4554.svg'
import G2 from './assets/g2-c94ef.svg'
import F2 from './assets/f2-d360c.svg'
import jump from 'jump.js'
export const page1 = [
  {
    img: G6,
    onClick: () => jump('.page4'),
    title: 'Laporkan Dugaan',
    description: ' : form isian keterangan dengan ini anda sebagai whistleblower Kota Bekasi.',
  },
  {
    img: G2,
    title: 'Lihat Laporan',
    onClick: () => jump('.page4'),
    description: ' : anda berhak mengetahui tindak lanjut pengaduan anda, hak anda sebagai saksi dan pelapor akan dilindungi.',
  },
  {
    img: F2,
    title: 'Hubungi Kami',
    onClick: () => jump('.page5'),
    description: ' : dengan ini kami siap membantu anda.',
  },
];
export default function Page1() {
  const children = page1.map((card, i) => (
    <Col className="card-wrapper" key={i.toString()} md={8} xs={24}>
      <a className="card" onClick={card.onClick}>
        <h3>{card.title}</h3>
        <img src={card.img} alt="" className="card-img-top" />
        <div className="card-body">
          <span className="title">{card.title}</span>
          <span className="description text-secondary">{card.description}</span>
        </div>
      </a>
    </Col>
  ))
  return (
    <section className="page-wrapper page1">
      <QueueAnim
        component={Row}
        type="bottom"
        className="page row text-center"
        delay={500}
      >
        {children}
      </QueueAnim>
    </section>);
}
