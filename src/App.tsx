import React from 'react';
import { Layout, Row, Divider } from 'antd';
import "antd/dist/antd.css";
import Upload from './Components/Upload';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content      >
        <Row justify="center" style={{ textAlign: 'center', paddingTop: '2rem' }}>

          <h1>Upload new image</h1>
          <Upload />
          <Divider />
          <h1>Your Library</h1>
        </Row>

      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
