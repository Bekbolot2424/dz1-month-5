import React from "react";
import { Card, Avatar, Typography } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined
} from "@ant-design/icons";

const { Text } = Typography;
const { Meta } = Card;

const UserCard = ({ name, age, city, active, img }) => {
  if (!active) return null;

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt={name}
          src={img}
          draggable={false}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Meta
        avatar={<Avatar src={img} />}
        title={name}
        description={
          <>
            <Text>Возраст: {age}</Text><br />
            <Text>Город: {city}</Text>
          </>
        }
      />
    </Card>
  );
};

export default UserCard;
