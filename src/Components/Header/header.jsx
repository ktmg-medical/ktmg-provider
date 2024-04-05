import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import logo from "../../assets/Images/ktmg.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);

  return (
    <header className="flex justify-between items-center p-4">
      {/* Logo with IP address */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 mr-2" />{" "}
        {/* Increased logo size to h-16 */}
        <span className="text-sm text-gray-500" style={{marginLeft: "100px"}}><hr/>Your IP: {ipAddress}</span>
      </div>

      {/* Menu */}
      <nav className="space-x-4">
        <Tooltip title="This application is designed to help KTMG call center agents find provider details.">
          <QuestionCircleOutlined className="text-black-500 hover:text-blue-700" />
        </Tooltip>
        <Button type="primary" className="hover:bg-blue-700">
          <Link to="https://www.ktdoctor.com/" target="_blank">Go to ktdoctor.com</Link>
        </Button>
      </nav>
    </header>
  );
}
