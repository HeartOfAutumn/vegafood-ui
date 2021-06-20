import React, { useEffect } from 'react';

import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/productAction';

const { Text } = Typography;

const styles = {
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "20px",
  },
  mid: {
    textAlign: "center"
  },
  borderCard: {
    border: "1px solid #1890ff"
  },
}

function Pieces(props) {
  const { products } = props;
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Ăn gì ?</h2>
          <p>Chọn thực đơn cho cả tuần tươi khỏe</p>
        </div>
        <Row gutter={[16, 16]}>
          {products.map((piece) =>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} key={piece.menuId}>
              <Link to={`/product/${piece.menuId}`}>
                <Card
                  hoverable
                  cover={<img alt={piece.menuName} src={piece.images} height="300px" />}

                >
                  <Row gutter={[16, 16]} style={styles.mid}>
                    <Col span={24} style={styles.heading}>{piece.menuName}</Col>
                    <Row gutter={[16, 16]} style={styles.mid}>
                      <Col span={12} >
                        <Text type="danger">{piece.unitPrice}</Text>
                      </Col>
                      <Col span={12} >
                        <Text type="success">{piece.unitsOnOrder}</Text>
                      </Col>
                    </Row>
                    <Col span={24} >
                      <Text>{piece.menuDescription}</Text>
                    </Col>
                  </Row>
                </Card>
              </Link>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
}

export default Pieces;