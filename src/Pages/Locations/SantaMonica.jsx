import React from "react";
import { Row, Col, Card, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import data from "../../assets/Json/LocationDetails/santaMonica.json";

const { Meta } = Card;

const SantaMonica = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        {/* Back button */}
        <Link to="/ktmg-provider/">
          <Button
            type="primary"
            style={{ marginBottom: "16px", marginLeft: "100px" }}
          >
            Go Back
          </Button>
        </Link>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <h1
              className="container"
              style={{
                fontSize: "32px",
                marginLeft: "100px",
                fontWeight: "700",
              }}
            >
              Santa Monica
            </h1>
            <h3
              className="container"
              style={{ fontSize: "26px", marginLeft: "100px" }}
            >
              Provider Details
            </h3>
          </Col>
          <Col span={12} style={{ display: "flex", alignItems: "center" }}>
            <h3
              style={{
                fontSize: "24px",
                marginLeft: "100px",
                fontWeight: "400",
              }}
            >
              3200 SANTA MONICA BLVD, SUITE 204, SANTA MONICA CA 90404
            </h3>
          </Col>
        </Row>
        {/* Left half: Cards */}
        <div style={{ height: "100vh", overflowY: "auto" }}>
          {data.map((item) => (
            <Row key={item.id} justify="left" style={{ marginLeft: "100px" }}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <Card
                    style={{
                      width: "500%",
                      maxWidth: "800px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      marginTop: "50px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ marginRight: "20px" }}>
                        <img
                          alt="thumbnail"
                          src={item.thumbnail}
                          style={{
                            borderRadius: "50%",
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div>
                        <Meta
                          title={
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <UserOutlined
                                style={{
                                  marginRight: "10px",
                                  fontSize: "24px",
                                  color: "#1890ff",
                                }}
                              />
                              <span>{item.title}</span>
                            </div>
                          }
                          description={item.description}
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: "20px", textAlign: "right" }}>
                      {item.buttons.map((button, index) => (
                        <Link to={button.url} key={index}>
                          <Button
                            type={button.type}
                            style={{ marginRight: "10px" }}
                          >
                            {button.label}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        {/* Right half: Map */}
        <div
          style={{
            height: "100vh",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1653.1172173371065!2d-118.468221!3d34.037857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb4e5185c5a3%3A0x4c0443e9247957a8!2sKids%20%26%20Teens%20Medical%20Group!5e0!3m2!1sen!2sus!4v1712170990498!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Col>
    </Row>
  );
};

export default SantaMonica;
