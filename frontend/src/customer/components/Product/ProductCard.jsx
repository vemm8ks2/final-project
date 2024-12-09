const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          src="https://picsum.photos/612/612"
          alt=""
          className="w-full h-full object-contain object-left-top"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">Universaloutfit</p>
          <p>Casual Puff Sleeves Solid Women White</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₩10,000</p>
          <p className="line-through opacity-50">₩100,000</p>
          <p className="text-green-600 font-semibold">90% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
