import Image from "next/image";

const Feature = (props) => {
  return (
    <div className="flex flex-col justify-center text-center px-12">
      <div className="mt-8">
        <Image src={props.img} width={50} height={50} />
      </div>
      <div className="font-bold p-2">{props.title}</div>
      <div className="max-w-xs mx-auto">{props.desc}</div>
    </div>
  );
};

export default Feature;
