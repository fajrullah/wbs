import React from 'react';
import DocumentTitle from 'react-document-title';
import { BackTop } from 'antd'
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Footer from './Footer';
import './static/style';
import { ArrowUpOutlined } from '@ant-design/icons';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

const style = {
  height: 30,
  width: 30,
  lineHeight: '30px',
  borderRadius: 4,
  backgroundColor: '#7c795d',
  color: '#fff',
  textAlign: 'center',
  fontSize: 18,
};


class Home extends React.PureComponent {
  state = {
    isMobile,
    showShadow: false,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  navToShadow = (e) => {
    this.setState({ showShadow: e.mode === 'leave' });
  }
  render() {
    return (
      [ 
        <Header key="header" className={this.state.showShadow ? 'show-shadow' : ''} />,
        <Banner key="banner" isMobile={this.state.isMobile} navToShadow={this.navToShadow} />,
        <Page1 key="page1" />,
        <Page4 key="page4" isMobile={this.state.isMobile} />,
        <Page2 key="page2" />,
        <Page3 key="page3" />,
        <Page5 key="page5" />,
        <BackTop>
          <div style={style}><ArrowUpOutlined /></div>
        </BackTop>,
        <Footer key="footer" />,
        <DocumentTitle title="WBS Kota Bekasi" />
      ]
    );
  }
}
export default Home;
