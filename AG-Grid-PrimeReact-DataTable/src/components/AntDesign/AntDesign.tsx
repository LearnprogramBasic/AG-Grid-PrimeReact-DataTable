import { Table, ConfigProvider, AutoComplete, Input, Menu, Dropdown, Button } from 'antd';
import './AntDesign.scss'; // Importa los estilos
import { DownOutlined } from '@ant-design/icons';

const dropdownMenu = (
  <Menu>
    <Menu.Item key="1">Acción 1</Menu.Item>
    <Menu.Item key="2">Acción 2</Menu.Item>
    <Menu.Item key="3">Acción 3</Menu.Item>
  </Menu>
);

const columns = [
  { title: 'N°', dataIndex: 'key', key: 'key' },
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render: (_: unknown) => (
      <AutoComplete
        style={{ width: 200 }}
        options={[
          { value: 'Producto A' },
          { value: 'Producto B' },
          { value: 'Producto C' },
        ]}
        placeholder="Seleccione un producto"
        filterOption={(inputValue, option) =>
          option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      >
        <Input />
      </AutoComplete>
    ),
  },
  { title: 'Descripción', dataIndex: 'description', key: 'description' },
  { title: 'Cantidad', dataIndex: 'quantity', key: 'quantity' },
  { title: 'Valor Unitario', dataIndex: 'unitPrice', key: 'unitPrice' },
  {
    title: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Desc. (%)
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
          <Button type="text" style={{ marginLeft: 8 }}>
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    ),
    dataIndex: 'discount',
    key: 'discount',
  },
  { title: 'Impuestos y Retenciones', dataIndex: 'taxes', key: 'taxes' },
  { title: 'Bodega', dataIndex: 'warehouse', key: 'warehouse' },
  { title: 'Vendedor', dataIndex: 'seller', key: 'seller' },
  { title: 'Tercero', dataIndex: 'thirdParty', key: 'thirdParty' },
  { title: 'Obsequio', dataIndex: 'gift', key: 'gift' },
  { title: 'Total Neto', dataIndex: 'totalNet', key: 'totalNet' },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render: (_: unknown) => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
          </Menu>
        }
      >
        <Button>
          Actions <DownOutlined />
        </Button>
      </Dropdown>
    ),
  },
];

const data = [
  {
    key: 1,
    item: 'Producto A',
    description: 'Desc A',
    quantity: 1,
    unitPrice: 5000,
    discount: 0,
    taxes: 0,
    warehouse: 'Bodega 1',
    seller: 'Vendedor 1',
    thirdParty: 'Tercero 1',
    gift: 'false',
    totalNet: 5000,
  },
  {
    key: 2,
    item: 'Producto B',
    description: 'Desc B',
    quantity: 1,
    unitPrice: 5000,
    discount: 0,
    taxes: 0,
    warehouse: 'Bodega 2',
    seller: 'Vendedor 2',
    thirdParty: 'Tercero 2',
    gift: 'true',
    totalNet: 5000,
  },
];

const themeTokens = {
  colorPrimary: '#007ecc',
  colorPrimaryHover: '#009dff',
  colorSuccess: '#619b2e',
  colorWarning: '#ffa532',
  colorError: '#d42143',
  colorInfo: '#008de6',
  colorTextBase: '#666666',
  colorTextSecondary: '#a4a4a4',
  scrollbarWidth: '8px', // Este valor puede seguir siendo string ya que es una medida
  scrollbarThumbColor: '#009DFF',
  scrollbarThumbHoverColor: '#007ACC',
  scrollbarTrackColor: '#f1f1f1',
  scrollbarTrackBorderRadius: 4, // Número
  scrollbarThumbBorderRadius: 4, // Número
  borderRadius: 3, // Número
};

const AntDesign = () => {
  return (
    <ConfigProvider theme={{ token: themeTokens }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        scroll={{ x: 'max-content' }} // Añadir scroll horizontal si es necesario
      />
    </ConfigProvider>
  );
};

export default AntDesign;
