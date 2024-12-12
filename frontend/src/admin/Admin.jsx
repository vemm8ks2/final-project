import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Dashboard from '@/admin/components/Dashboard';
import CreateProductForm from '@/admin/components/CreateProductForm';
import ProductsTable from '@/admin/components/ProductsTable';
import OrdersTable from '@/admin/components/OrdersTable';
import CustomersTable from '@/admin/components/CustomersTable';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AccountCircle, Dashboard as DashboardIcon } from '@mui/icons-material';

const menu = [
  { name: 'Dashboard', path: '/admin', icon: <DashboardIcon /> },
  { name: 'Products', path: '/admin/products', icon: <DashboardIcon /> },
  { name: 'Customers', path: '/admin/customers', icon: <DashboardIcon /> },
  { name: 'Orders', path: '/admin/orders', icon: <DashboardIcon /> },
  { name: 'AddProduct', path: '/admin/product/create', icon: <DashboardIcon /> },
];

const Admin = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [sideBarVisible, setSideBarVisible] = useState(false);

  const DrawerNav = () => (
    <Box
      sx={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, i) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box className="flex h-screen">
      <CssBaseline />
      <div className="shadow-lg shadow-gray-600 w-[15%] h-full fixed top-0">
        <DrawerNav />
      </div>
      <Box className="w-[85%] h-full ml-[15%]">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product/create" element={<CreateProductForm />}></Route>
          <Route path="/products" element={<ProductsTable />}></Route>
          <Route path="/orders" element={<OrdersTable />}></Route>
          <Route path="/customers" element={<CustomersTable />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};

export default Admin;
