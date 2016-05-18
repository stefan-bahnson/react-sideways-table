import React from 'react';
import DevTools from './DevTools';
import DataTable from './responsive_table/DataTable';

import './../../sass/main.scss';

const App = () => (
  <div>
    <DevTools />
    <h1>react-responsive-table</h1>
    <DataTable {...mockData}/>
  </div>
);

const mockData = {
  headers: [
    'Header Name',
    'Header Name',
    'Header Name',
    'Header Name',
    'Header Name',
    'Header Name',
    'Header Name'
  ],
  rows: [
    {
      id: 'DA11112345 long name',
      group: 'Item Group',
      name: 'Item Name',
      type: 'Item Type',
      width: 'Item width',
      length: 'Item length',
      quality: 'Item Quality',
      price: 'Item Price'
    },
    {
      id: 'DA22223456',
      group: 'Item Group',
      name: 'Item Name',
      type: 'Item Type',
      width: 'Item width',
      length: 'Item length',
      quality: 'Item Quality',
      price: 'Item Price'
    },
    {
      id: 'DA33334567',
      group: 'Item Group',
      name: 'Item Name',
      type: 'Item Type',
      width: 'Item width',
      length: 'Item length',
      quality: 'Item Quality',
      price: 'Item Price'
    },
    {
      id: 'DA44445678',
      group: 'Item Group',
      name: 'Item Name',
      type: 'Item Type',
      width: 'Item width',
      length: 'Item length',
      quality: 'Item Quality',
      price: 'Item Price'
    },
    {
      id: 'DA55556789',
      group: 'Item Group',
      name: 'Item Name',
      type: 'Item Type',
      width: 'Item width',
      length: 'Item length',
      quality: 'Item Quality',
      price: 'Item Price'
    },
    {
      id: 'DA66667890',
      group: 'Item Group',
      name: 'Item Name',
      type: 'Item Type',
      width: 'Item width',
      length: 'Item length',
      quality: 'Item Quality',
      price: 'Item Price'
    },
    {
      id: 'BE12345678hellohibye',
      group: 'Item Group',
      name: 'Item Name',
      type: 'Item Type',
      width: 'Item width',
      length: 'Item length',
      quality: 'Item Quality',
      price: 'Item Price'
    },
    {
      id: 'GH12345678',
      group: 'Item Group',
      name: 'Item Name',
      type: 'Item Type',
      width: 'Item width',
      length: 'Item length',
      quality: 'Item Quality',
      price: 'Item Price'
    },
  ]
};

export default App