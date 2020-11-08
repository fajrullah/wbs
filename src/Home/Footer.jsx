import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      {/* <div className="footer-wrap">
        <Row>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>G2</h2>
              <div>
                <a target="_blank " href="#">
                  图表示例
                </a>
              </div>
              <div>
                <a target="_blank " href="#">
                  API 文档
                </a>
              </div>
              <div>
                <a href="#">使用教程</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>G6</h2>
              <div>
                <a href="#">图表示例</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">API 文档</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">使用教程</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>F2</h2>
              <div>
                <a href="#">图表示例</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">API 文档</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">使用教程</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>墨者学院</h2>
              <div>
                <a href="#">博客</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">设计原则</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">图表用法</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">资源</a>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                更多产品
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="">Ant Design</a>
                <span> - </span>
                <span>蚂蚁 UI 设计体系</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="">Egg</a>
                <span> - </span>
                <span>企业级 Node Web 开发框架</span>
              </div>
            </div>
          </Col>
        </Row>
      </div> */}
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            {/* <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
            > */}
            Version 1.0
            {/* </a> */}
          </span>
          <span style={{ marginRight: 24 }}>
            {/* <a
              href=""
              rel="noopener noreferrer"
              target="_blank"
            > */}
            All Rights Reserved © 2020
            {/* </a> */}
          </span>
          <span style={{ marginRight: 12 }}>Dikembangkan oleh : </span>
          <span style={{ marginRight: 12 }}>Copyright © Diskominfostandi kota bekasi</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
