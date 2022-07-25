import React from "react";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";

export type ITextBlock = {
  parag: string | JSX.Element;
  title: string | JSX.Element;
  id: string;
};

export const textBlock: ITextBlock[] = [
  {
    title: (
      <p className="LandingTitle xl:text-6xl lg:text-5xl md:text-4xl text-2xl ">
        Lorem ipsum
      </p>
    ),
    parag: (
      <div className="LandingParag lg:text-2xl md:text-xl font-thin text-lg ">
        <p className="my-6">
          Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Nullam non
          nisi est sit. Id interdum velit laoreet id donec ultrices tincidunt
          arcu. Aliquet nec ullamcorper sit amet risus nullam. Urna cursus eget
          nunc scelerisque.
        </p>
        <p className="mt-4">
          {" "}
          Purus ut faucibus pulvinar elementum. Tempus egestas sed sed risus
          pretium quam vulputate dignissim. Vitae tempus quam pellentesque nec
          nam aliquam sem et tortor.{" "}
        </p>
      </div>
    ),
    id: "0",
  },
  {
    title: (
      <p className="LandingTitle xl:text-6xl lg:text-5xl md:text-4xl text-2xl">
        Lorem ipsum
      </p>
    ),
    parag: (
      <div className="LandingParag lg:text-2xl md:text-xl font-thin text-lg">
        <p className="my-5">
          Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Nullam non
          nisi est sit. Id interdum velit laoreet id donec ultrices tincidunt
          arcu. Aliquet nec ullamcorper sit amet risus nullam. Urna cursus eget
          nunc scelerisque.
        </p>
        <p className="mt-4">
          {" "}
          Purus ut faucibus pulvinar elementum. Tempus egestas sed sed risus
          pretium quam vulputate dignissim. Vitae tempus quam pellentesque nec
          nam aliquam sem et tortor.{" "}
        </p>
      </div>
    ),
    id: "1",
  },
  {
    title: (
      <p className="LandingTitle xl:text-6xl lg:text-5xl md:text-4xl text-2xl">
        Lorem ipsum
      </p>
    ),
    parag: (
      <div className="LandingParag lg:text-2xl md:text-xl font-thin text-lg">
        <p className="my-5">
          Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Nullam non
          nisi est sit. Id interdum velit laoreet id donec ultrices tincidunt
          arcu. Aliquet nec ullamcorper sit amet risus nullam. Urna cursus eget
          nunc scelerisque.
        </p>
        <p className="mt-4">
          {" "}
          Purus ut faucibus pulvinar elementum. Tempus egestas sed sed risus
          pretium quam vulputate dignissim. Vitae tempus quam pellentesque nec
          nam aliquam sem et tortor.{" "}
        </p>
      </div>
    ),
    id: "2",
  },
  {
    title: (
      <p className="LandingTitle xl:text-6xl lg:text-5xl md:text-4xl text-2xl">
        Lorem ipsum
      </p>
    ),
    parag: (
      <div className="LandingParag lg:text-2xl md:text-xl font-thin text-lg">
        <p className="my-5">
          Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Nullam non
          nisi est sit. Id interdum velit laoreet id donec ultrices tincidunt
          arcu. Aliquet nec ullamcorper sit amet risus nullam. Urna cursus eget
          nunc scelerisque.
        </p>
        <p className="mt-4">
          {" "}
          Purus ut faucibus pulvinar elementum. Tempus egestas sed sed risus
          pretium quam vulputate dignissim. Vitae tempus quam pellentesque nec
          nam aliquam sem et tortor.{" "}
        </p>
      </div>
    ),
    id: "3",
  },
  {
    title: (
      <p className="LandingTitle xl:text-6xl lg:text-5xl md:text-4xl text-2xl">
        Lorem ipsum
      </p>
    ),
    parag: (
      <div className="LandingParag lg:text-2xl md:text-xl font-thin text-lg">
        <p className="my-5">
          Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Nullam non
          nisi est sit. Id interdum velit laoreet id donec ultrices tincidunt
          arcu. Aliquet nec ullamcorper sit amet risus nullam. Urna cursus eget
          nunc scelerisque.
        </p>
        <p className="mt-4">
          {" "}
          Purus ut faucibus pulvinar elementum. Tempus egestas sed sed risus
          pretium quam vulputate dignissim. Vitae tempus quam pellentesque nec
          nam aliquam sem et tortor.{" "}
        </p>
      </div>
    ),
    id: "4",
  },
];

export type IVisuelBlock = {
  image: string | JSX.Element;
};

export const visuelBlock: IVisuelBlock[] = [
  {
    image: <img src={icon1} alt="" />,
  },
  {
    image: <img src={icon2} alt="" />,
  },
  {
    image: <img src={icon3} alt="" />,
  },
  {
    image: <img src={icon4} alt="" />,
  },
  {
    image: <img src={icon5} alt="" />,
  },
];
