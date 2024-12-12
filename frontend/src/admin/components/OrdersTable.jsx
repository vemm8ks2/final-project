import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardHeader,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
  AvatarGroup,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from '@/state/admin/order/Action';

const OrdersTable = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  // @ts-ignore
  const { adminOrder } = useSelector((store) => store);

  const open = Boolean(anchorEl);

  useEffect(() => {
    // @ts-ignore
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShippedOrder = (anchorEl) => {
    if (!anchorEl) return;
    // @ts-ignore
    dispatch(shipOrder(getCurrentStatusId(anchorEl)));
    handleClose();
  };

  const handleConfirmedOrder = (anchorEl) => {
    if (!anchorEl) return;
    // @ts-ignore
    dispatch(confirmOrder(getCurrentStatusId(anchorEl)));
    handleClose();
  };

  const handleDeliveredOrder = (anchorEl) => {
    if (!anchorEl) return;
    // @ts-ignore
    dispatch(deliveredOrder(getCurrentStatusId(anchorEl)));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    // @ts-ignore
    dispatch(deleteOrder(orderId));
  };

  const getCurrentStatusId = (anchorEl) => {
    return anchorEl.id.split('-')[2];
  };

  console.log(anchorEl?.id);

  return (
    <div>
      <Card className="mt-2">
        <CardHeader title="All products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item) => {
                console.log(item);

                return (
                  <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>
                      <AvatarGroup max={3} sx={{ justifyContent: 'start' }}>
                        {item.orderItems.map((orderItem) => (
                          <Avatar src={orderItem.product.imageUrl} />
                        ))}
                      </AvatarGroup>
                    </TableCell>
                    <TableCell align="left">{item.id}</TableCell>
                    <TableCell align="left">
                      {item.orderItems.map((orderItem) => (
                        <p>{orderItem.product.title}</p>
                      ))}
                    </TableCell>
                    <TableCell align="left">{item.totalPrice}</TableCell>
                    <TableCell align="left">
                      <span
                        className={`text-white px-5 py-2 rounded-full ${item.orderStatus === 'CONFIRMED' ? 'bg-[#369236]' : item.orderStatus === 'SHIPPED' ? 'bg-[#4141ff]' : item.orderStatus === 'PLACED' ? 'bg-[#02B290]' : item.orderStatus === 'PENDING' ? 'bg-[gray]' : 'bg-[#025720]'}`}
                      >
                        {item.orderStatus}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        id={`basic-button-${item.id}`}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        Status
                      </Button>
                      <Menu
                        id={`basic-menu-${item.id}`}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                      >
                        <MenuItem onClick={() => handleConfirmedOrder(anchorEl)}>
                          Confirmed
                        </MenuItem>
                        <MenuItem onClick={() => handleShippedOrder(anchorEl)}>Shipped</MenuItem>
                        <MenuItem onClick={() => handleDeliveredOrder(anchorEl)}>
                          Delivered
                        </MenuItem>
                      </Menu>
                    </TableCell>
                    <TableCell align="center">
                      <Button onClick={() => handleDeleteOrder(item.id)} variant="outlined">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
