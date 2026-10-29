import React from "react";

const Card = ({ pic, heading, content, word, para, mimi, indi, lol }) => {
  return (
    <>
      <div className="flex flex-col gap-5 shadow-lg p-10 w-fit">
        {/* top div */}
        <div className="w-full">
          <img src={pic} alt="" className="w-full" />
        </div>

        {/* BOTTOM DIV */}
        <div className="flex flex-col">
          <h1 className=" font-medium text-red-500">{heading}</h1>
          <p className=" text-2xl">{content}</p>
          <p>{word}</p>
          <div className="flex align-start gap-4">
            <p>{para}</p>
            <p>{mimi}</p>
            <p>{indi}</p>
            <p>{lol}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
