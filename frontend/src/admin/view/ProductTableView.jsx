// @ts-nocheck
import { deleteProduct, findProducts } from '@/state/product/Action';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
  Card,
  CardHeader,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductsTableView = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store);

  useEffect(() => {
    const data = {
      category: 'mens_kurta',
      colors: [],
      sizes: [],
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: 0,
      pageSize: 10,
      minPrice: 0,
      maxPrice: 100000,
      stock: '',
    };

    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  return (
    <div>
      <Card className="mt-2">
        <CardHeader title="Recent Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.products.content?.slice(0, 10).map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <Avatar src={item.imageUrl} />
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductsTableView;
