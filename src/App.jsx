import React from 'react';
import CustomThemeProvider from './component/CustomThemeProvider'
import Layout from './component/Layout';

const App = () => {
  return (
    <CustomThemeProvider>
      <Layout>
      
      </Layout>
    </CustomThemeProvider>
  )
}

export default App;
