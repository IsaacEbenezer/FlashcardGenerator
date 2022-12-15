import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showFalshCard } from "../../redux/action/Action";

const AllFlashCards = () => {
  const [cardHandle, setCardHandle] = useState(3);

  // to extract data from the Redux store
  const state = useSelector((state) => state.Reducer.groupData);
  
  //to the dispatch function from the Redux store
  const dispatch = useDispatch();

  // click handler
  const showAllcard = () => {
    setCardHandle(state.length);
  };

  return (
    <div className="pb-7">
      <div className="grid md:grid-cols-3 gap-5 justify-center">
        {state.map((ele, index) => {
          return index < cardHandle ? (
            <div
              key={index}
              className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
            >
              <div className="">
                <div className="grid">
                  <div className="font-medium">
                    <div className="cardImg mr-4 "></div>
                    <div className="">
                      <h3 className="text-justify text-black font-bold">
                        {ele.group.groupName}
                      </h3>
                      <small>Card {ele.state.length}</small>
                    </div>
                  </div>
                  <p className="md:col-span-12 text-sm text-gray-500">
                    {ele.group.description}
                  </p>
                  <div className="md:col-span-6">
                    <Link
                      to={`/flashCard${index}`}
                      className="py-2 font-medium flex items-center text-red-500"
                      onClick={() => dispatch(showFalshCard(index))}
                    >
                      <span>View Cards</span>
                      <BsArrowRight className="text-lg ml-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div
        className="text-right pb-11 px-5"
        style={cardHandle < 4 ? { display: "block" } : { display: "none" }}
      >
        {state.length === 0 ? (
          <div className="font-semibold ">
            You have'nt created any cards yet
          </div>
        ) : (
          <button className="text-red-500 font-bold" onClick={showAllcard}>
            See all
          </button>
        )}
      </div>
    </div>
  );
};

export default AllFlashCards;
