const ProductCard = ({ product }) => {
  return (
    <div className="w-[15rem] m-3 transition-all cursor-pointer hover:shadow-lg">
      <div className="h-[20rem]">
        <img
          //src="https://picsum.photos/612/612"
          src={product.imageUrl}
          alt=""
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <div className="bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₩{product.discountPrice}</p>
          <p className="line-through opacity-50">₩{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
