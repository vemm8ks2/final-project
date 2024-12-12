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

const ProductsTable = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store);

  console.log(products);

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

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All products" />
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
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.products.content?.map((item) => (
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
                  <TableCell align="center">
                    <Button onClick={() => handleDelete(item.id)} variant="outlined">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductsTable;
