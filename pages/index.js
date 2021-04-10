import Head from "next/head";
import {
  Button,
  Layout,
  Image,
  Row,
  Col,
  Typography,
  Space,
  InputNumber,
} from "antd";
import data from "../data/products.json";
export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>{data[0].title}</title>
        <meta name="description" content={data[0].description} />
        <meta name="keywords" content={data[0].title} />
        <meta name="robots" content="index,follow" />
      </Head>
      <Layout>
        <Layout.Content style={{ padding: 12 }}>
          <Row>
            <Col span={6}>
              <Image width={320} src={data[0].images[0]} />
              {data[0].images.map((image) => (
                <Image
                  style={{ padding: "5px" }}
                  width={100}
                  src={image}
                  preview={{ src: image }}
                />
              ))}
            </Col>
            <Col span={24 - 6}>
              <Row>
                <Col style={{ padding: 15 }}>
                  <Typography.Title>{data[0].title}</Typography.Title>
                  <Space direction="vertical">
                    <Typography.Text>Price: {data[0].price}</Typography.Text>
                    <Typography.Text>
                      Discount: {data[0].discount}
                    </Typography.Text>
                  </Space>
                  <Typography.Paragraph>
                    {data[0].description}
                  </Typography.Paragraph>
                </Col>
              </Row>
              <Row>
                <Space
                  direction="horizontal"
                  style={{ display: "flex", flex: 1, justifyContent: "center" }}
                >
                  <Button
                    type="dashed"
                    size="large"
                    shape="round"
                    hidden
                    style={{ margin: "5px" }}
                  >
                    Add to cart
                  </Button>
                  <InputNumber min={1} max={100} defaultValue={1} />
                  <Button
                    type="primary"
                    size="large"
                    shape="round"
                    style={{ margin: "5px" }}
                  >
                    Buy Now
                  </Button>
                </Space>
              </Row>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </div>
  );
}
