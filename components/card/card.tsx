import Image from "next/image";
import graphic from "../../public/assets/images/sticker-bomb.jpg";

const Card = () => {
  return (
    <div className="my-4 rounded bg-secondary text-light p-4 lg:p-6">
      <div className="relative">
        <Image src={graphic} className="rounded"/>
        <div className="absolute bottom-0 w-full bg-dark bg-opacity-80 p-4 lg:p-6">
          <h2 className="font-secondary text-xl lg:text-2xl inline">
            Hello World
          </h2>
          <p className="pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            obcaecati fuga, architecto ipsum soluta dolorem, similique accusamus
            cum doloremque consequuntur reiciendis! Fugit unde eius praesentium
            deleniti eum provident ipsam minus.
          </p>
          <div className="flex justify-end">
            <a
              href="#"
              className="bg-secondary px-6 py-2 mx-4 text-center hover:scale-105 cursor-pointer font-secondary text-light transition-all"
            >
              View Project
            </a>
            <a
              href="#"
              className="bg-primary px-6 py-2 text-center hover:scale-105 cursor-pointer font-secondary text-dark transition-all"
            >
              More Posts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
