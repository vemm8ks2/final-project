// @ts-nocheck
import { useEffect } from 'react';
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
  AvatarGroup,
} from '@mui/material';
import { getOrders } from '@/state/admin/order/Action';

const OrdersTableView = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder]);

  return (
    <div>
      <Card className="mt-2">
        <CardHeader title="Recent Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
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

export default OrdersTableView;
