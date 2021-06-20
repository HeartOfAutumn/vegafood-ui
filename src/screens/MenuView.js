import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import "./MenuView.css";

function MenuView(props) {
  console.log(props.match.params.id)
  // const menu = data.pieces.find(x => x.menuId === Number(props.match.params.id));

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://localhost:44300/api/MenuDetails/' + props.match.params.id);
      const prods = data.map(prods => prods.product);
      setProducts(prods);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(products);
  console.log(products[0]);

  const listData = [];

  products.map(product => {
    listData.push({
      href: "",
      name: `${product.productName}`,
      images: `${product.images}`,
      description:
        `${product.calories} - ${product.carb} - ${product.protein} - ${product.fat}`,
      content:
        `${product.productDescription}`,
    });
    return null;
  })

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div className="menu container-fluid">
      <List
        itemLayout="vertical"
        size="large"
        // pagination={{
        //   onChange: page => {
        //     console.log(page);
        //   },
        //   pageSize: 2,
        // }}
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
                alt="logo"
                src={item.images}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.images} />}
              title={<a href={item.href}>{item.name}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  )
}

export default MenuView;
