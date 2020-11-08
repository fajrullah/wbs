import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import hasilLaporan from './assets/features-simple-9617c.svg';
import encryptData from './assets/features-professional-1c6d1.svg';
import tersampaikan from './assets/features-powerful-243e3.svg';

export const page3 = [
  {
    img: hasilLaporan,
    title: 'Melihat laporan',
    description: 'Whistleblower mengetahui tindak lanjut laporannya.',
  },
  {
    img: encryptData,
    title: 'Enkripsi data pelapor',
    description: 'System akan melakukan enkripsi end to end terhadap informasi dan data diri yang disampaikan.',
  },
  {
    img: tersampaikan,
    title: 'Kirim tepat',
    description: 'Hanya petugas berwenang yang dapat melihat informasi hasil enkripsi.',
  },
];
export default function Page3() {
  const children = page3.map((card, i) => (
    <Col
      key={i.toString()}
      md={8}
      xs={24}
    >
      <img src={card.img} alt="" width="100" height="100" />
      <h5>{card.title}</h5>
      <div className="detail">{card.description}</div>
    </Col>
  ));
  return (
    <OverPack component="section" className="page-wrapper page3 text-center">
      <QueueAnim
        type="bottom"
        className="page"
        leaveReverse
        key="page3"
        component={Row}
      >
        {children}
      </QueueAnim>
    </OverPack>);
}
