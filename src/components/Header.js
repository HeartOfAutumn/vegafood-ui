import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Link: AntLink } = Anchor;

function Header(props) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const isLogged = false;

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-carrot"></i>
          <Link to="/">Vegafood</Link>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link to="/">
              <AntLink href="#hero" title="Trang chủ" />
            </Link>
            <Link to="/">
              <AntLink href="#about" title="Chúng tôi là ai ?" />
            </Link>
            <Link to="/">
              <AntLink href="#feature" title="Ăn gì ?" />
            </Link>
            <Link to="/">
              <AntLink href="#works" title="Nấu nướng" />
            </Link>
            <Link to="/">
              <AntLink href="#faq" title="Câu hỏi thường gặp" />
            </Link>
            <Link to='/cart'>
              <AntLink href="#hero" title="Giỏ hàng" />
            </Link>
            {isLogged
              ? (
                <Link to="/">
                  <AntLink href="#hero" title="Thông tin cá nhân" />
                </Link>
              )
              : (
                <Link to="/signin">
                  <AntLink href="#hero" title="Đăng nhập" />
                </Link>
              )
            }
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link to="/">
                <AntLink href="#hero" title="Trang chủ" />
              </Link>
              <Link to="/">
                <AntLink href="#about" title="Chúng tôi là ai ?" />
              </Link>
              <Link to="/">
                <AntLink href="#feature" title="Ăn gì ?" />
              </Link>
              <Link to="/">
                <AntLink href="#works" title="Nấu nướng" />
              </Link>
              <Link to="/">
                <AntLink href="#faq" title="Câu hỏi thường gặp" />
              </Link>
              <Link to='/cart'>
                <AntLink href="#hero" title="Giỏ hàng" />
              </Link>
              {isLogged
                ? (
                  <Link to="/">
                    <AntLink href="#hero" title="Thông tin cá nhân" />
                  </Link>
                )
                : (
                  <Link to="/signin">
                    <AntLink href="#hero" title="Đăng nhập" />
                  </Link>
                )
              }
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Header;