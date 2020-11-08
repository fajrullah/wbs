import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import { Element } from 'rc-scroll-anim';
import BannerImage from './BannerImage';
import banner from './assets/intro-landscape-3a409.svg';
import jump from 'jump.js'

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    navToShadow: PropTypes.func,
  }
  static defaultProps = {
    className: 'banner',
  }
  render() {
    const { className, isMobile, navToShadow } = this.props;
    return (
      <Element component="section" className={`${className}-wrapper page`} onChange={navToShadow}>
        <div className={className}>
          <div className={`${className}-img-wrapper`}>
            {isMobile ?
              <img width="100%" src={banner} alt="" />
              :
              <BannerImage />}
          </div>
          <QueueAnim
            type={isMobile ? 'bottom' : 'right'}
            className={`${className}-text-wrapper`}
            delay={300}
          >
            <h1 onClick={() => jump('.page4')} key="h1" style={{ 
              "color": "#7c795d"
            }}>WBS</h1>
              <p className="main-info" key="p">
              WHISTLE BLOWING SYSTEM : Laporkan perbuatan dugaan tindakan korupsi yang terjadi di kota Bekasi.
              </p>
            <Button type="primary" onClick={() => jump('.page2')}>
             Klik di sini
            </Button>
          </QueueAnim>
        </div>
      </Element>
    );
  }
}

export default Banner;
