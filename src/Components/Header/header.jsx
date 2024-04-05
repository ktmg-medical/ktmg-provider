import React from 'react';
import { Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import logo from '../../assets/Images/ktmg.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 mr-2" />{' '}
        {/* Increased logo size to h-16 */}
      </div>

      {/* Menu */}
      <nav className="space-x-4">
        <Tooltip title="Hover text for question icon">
          <QuestionCircleOutlined className="text-black-500 hover:text-blue-700" />
        </Tooltip>
        <Button type="primary" className="hover:bg-blue-700">
          Go to ktdoctor.com
        </Button>
      </nav>
    </header>
  );
}
