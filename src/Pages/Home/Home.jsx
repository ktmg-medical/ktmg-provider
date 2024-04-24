import React, { useState } from "react";
import { Card, Row, Col, Input } from "antd";
import bg from "../../assets/Images/bg.jpg";
import locationsData from "../../assets/Json/Locations/locations.json";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Search } = Input;

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const filteredLocations = locationsData.filter((location) =>
    location.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ marginTop: "-300px", height: "200vh" }}
    >
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Location Details</h1>
        <Search
          placeholder="Search locations..."
          value={searchValue}
          onChange={handleSearch}
          style={{ marginBottom: "16px" }}
        />
        <Row gutter={[16, 16]} justify="center">
          {filteredLocations.map((location, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Link to={location.url} target="_blank" rel="noopener noreferrer">
                <Card
                  hoverable
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    marginBottom: "16px",
                  }}
                >
                  <Meta
                    title={
                      <h5 style={{ fontSize: "18px", fontWeight: 500 }}>
                        {location.name}
                      </h5>
                    }
                    description={location.url}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <div>
          <h1 className="text-3xl font-bold mb-8">Find Nearby Locations</h1>
        </div>
        <iframe
          src="https://storage.googleapis.com/maps-solutions-lc432t171g/locator-plus/5x3z/locator-plus.html"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
}
