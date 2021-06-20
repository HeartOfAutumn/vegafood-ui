import React, { useState, useEffect } from 'react';
import { List, Avatar, Space, Button, InputNumber } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { detailsProduct } from '../actions/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import "./ProductScreen.css";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;



  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  let listData = [];
  if (product !== undefined) {
    listData = product.map(item => item.product);
  }
  console.log(listData);

  return (
    <div className="menu container-fluid">
      {loading ? <LoadingBox />
        :
        error ? <MessageBox variant="danger">{error}</MessageBox>
          : (
            <Row gutter={[16, 48]}>
              <Col xl={{ span: 18 }} xs={{ span: 24 }}>
                <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={listData}
                  renderItem={item => (
                    <List.Item
                      key={item.productId}
                      actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                      ]}
                      extra={
                        <img
                          width={300}
                          height={200}
                          alt="logo"
                          src={item.images}
                        />
                      }
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.images} />}
                        title={<a href={item.href}>{item.productName}</a>}
                        description={`${item.calories} - ${item.protein} - ${item.carb} - ${item.fat}`}
                      />
                      {item.productDescription}
                    </List.Item>
                  )}
                />
              </Col>
              <Col xl={{ span: 6 }} xs={{ span: 24 }} style={{ textAlign: "center" }}>
                <Row gutter={[16, 16]}>
                  <Col span={12} >
                    <InputNumber min={1} max={10} defaultValue={3} onChange={setQty} />
                  </Col>
                  <Col span={12} >
                    <Button onClick={addToCartHandler} type="primary">Thêm vào giỏ hàng</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          )
      }
    </div>
  )
}

export default ProductScreen;
