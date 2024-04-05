import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function FooterComponent() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      KTMG ©{new Date().getFullYear()} Developed and Managed by Web Team
    </Footer>
  );
}
