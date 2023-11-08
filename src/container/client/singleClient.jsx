import { images } from "../../constants";

const SingleClient = () => {
  return (
    <div className="w-[900px] mx-auto text-center border border-[#475569] px-6 py-5 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            className="w-20 h-20 border border-[#475569] rounded-full"
            src={images.React}
            alt="image"
          />
          <div className="text-left">
            <h4 className="text-lg font-medium">Client Name</h4>
            <span className="">Designation</span>
          </div>
        </div>
        <div className="space-x-1">
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
          <i className="fa-sharp fa-solid fa-star"></i>
        </div>
      </div>
      <p className="px-6 py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        consequuntur? Tempora, hic. Maxime explicabo error esse, quasi
        perferendis dignissimos sint.
      </p>
    </div>
  );
};

export default SingleClient;
