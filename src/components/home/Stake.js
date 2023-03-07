/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { useStateValue } from ".././context/StateProvider";
import { actionType } from ".././context/reducer";
import { GiTwoCoins } from "react-icons/gi";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

const Staked = () => {
  const [{ cartShow, products, dondeestoy }, dispatch] = useStateValue();
  const [scrollValue] = useState(0);
  const [stake, setStake] = useState([]);
  const [select, setSelect] = useState([]);
  const [select2, setSelect2] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [deleted, setDeleted] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FhNSXmqma4Wj0jG2XxRtSmn_HOLdmiLrg4EHQ27RaBRk%3Fext%3Dpng",
      price: 2.4,
    },
    {
      id: 2,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FZkWgUxwGXcr-_MdNN4GpoYcY1zwQk00-PGTaHGcO0uM%3Fext%3Dpng",
      price: 2.3,
    },
    {
      id: 3,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2Fy6XuWXsSBcdKhy-HKv3hhaonky3zi2ld0N7sMFaTwLk%3Fext%3Dpng",
      price: 2.9,
    },
    {
      id: 4,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FqddEbknfnmA4p-jiGvxOJyk2Vl5lQJW6PcNzqz4vfAg%3Fext%3Dpng",
      price: 8,
    },
    {
      id: 5,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2FDPyPqgqr0-_fQGlt8ekytCHMP6jNQkkpW4jh2Pweahg%3Fext%3Dpng",
      price: 1.5,
    },
    {
      id: 6,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2F-t4G47HblYsk11kPghylw36GCDhGlLoLd2sRVe3u6iw%3Fext%3Dpng",
      price: 3.8,
    },
    {
      id: 7,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2Fnz3VGppIVKu3NudrrJfwYreTpoRfE7yDz_IUoqGxEU8%3Fext%3Dpng",
      price: 2,
    },
    {
      id: 8,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2Fnz3VGppIVKu3NudrrJfwYreTpoRfE7yDz_IUoqGxEU8%3Fext%3Dpng",
      price: 2,
    },
    {
      id: 9,
      nft: "Goddes #123",
      image:
        "https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Farweave.net%2Fnz3VGppIVKu3NudrrJfwYreTpoRfE7yDz_IUoqGxEU8%3Fext%3Dpng",
      price: 2,
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    products && products.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    dispatch({
      type: actionType.SET_DONDE_ESTOY,
      dondeestoy: "Home",
    });
    dispatch({
      type: actionType.SET_HEADER_SHOW,
      headerShow: true,
    });

    console.log(select);
    console.log(deleted);
  }, [scrollValue, cartShow, dispatch]);

  const sendtostake = (a) => {
    if (a === "all") {
      data.map((e) => setStake((prev) => [...prev, e]));

      setData([]);
    } else if (a === "unstakeall") {
      stake.map((e) => setData((prev) => [...prev, e]));
      setStake([]);
    } else if (a === "unstake") {
      select2.map((e) => setData((prev) => [...prev, e]));

      setStake(stake.filter((el) => !select2.includes(el)));
    } else {
      select.map((e) => setStake((prev) => [...prev, e]));
      setData(data.filter((el) => !select.includes(el)));
    }

    setSelect([]);
    setSelect2([]);
  };
  const addToStake = (a) => {
    if (select.filter((b) => b.id === a.id).length > 0) {
      setSelect(select.filter((b) => b.id !== a.id));
    } else {
      setSelect([...select, a]);
    }
  };
  const addToUnStake = (a) => {
    if (select2.filter((b) => b.id === a.id).length > 0) {
      setSelect2(select2.filter((b) => b.id !== a.id));
    } else {
      setSelect2([...select2, a]);
    }
  };

  return (
    <div className="w-full flex h-full md:px-20 mt-[14vh] ">
      <div className="flex flex-col w-full h-full">
        <div className=" px-20 flex items-center relative ">
          <h1 className="text-white menu text-[3rem] font ">Vault</h1>
          {stake.length > 0 && (
            <div className="w-1/2 absolute right-20 bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-purple-600 text-lg font-bold font text-blue-100 text-center p-2 leading-none rounded-full"
                style={{
                  width: `${Math.round(
                    (100 * stake.length) / (data.length + stake.length)
                  )}%`,
                }}
              >
                {stake.length > 0
                  ? Math.round(
                      (100 * stake.length) / (data.length + stake.length)
                    )
                  : 0}{" "}
                %
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center w-full h-full pb-20 bg-tesmo">
          <div className="w-full h-full px-20 mt-10 flex md:flex-row gap-10 ">
            <div className="flex flex-col w-full ">
              <div className="flex justify-between p-6 mb-4 shadow-slate-700 shadow-lg rounded-lg items-center">
                <h1 className=" text-[1.6rem] text-slate-300 font">
                  UnLocked: {data.length}
                </h1>

                <div className="flex-col">
                  <h2 className="text-slate-600 font text-[1.4rem]">Balance</h2>
                  <div className="flex  items-center gap-2">
                    <GiTwoCoins className="text-purple-300 font text-[1.4rem]" />
                    <p className="text-purple-300 font text-[1.4rem]">500</p>
                  </div>
                </div>
              </div>
              <div className="shadow-lg relative shadow-slate-700 p-4  rounded-lg w-full h-[530px]">
                <div className=" grid grid-cols-5 gap-2 h-[400px] overflow-auto">
                  {data.map((a, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.3 + index / 5,
                      }}
                      onClick={() => addToStake(a)}
                      className={`${
                        select.filter((b) => b.id === a.id).length > 0
                          ? "bg-tesmo2 border-2 border-slate-500"
                          : "bg-tesmo"
                      }  mx-auto hover:border-2 mt-4 transition-all 2s ease-in border-2 cursor-pointer hover:border-tesmo2 h-[180px]  hover:bg-tesmo2 border-tesmo p-2 rounded-lg`}
                    >
                      <img
                        className="w-[100px] object-contain mx-auto rounded-lg"
                        src={a.image}
                        alt="nft"
                      />
                      <p className="text-white text-center text-[0.9rem] mt-2">
                        {a.nft}
                      </p>
                      <div className="text-center text-yellow-300 font-bold flex justify-center  items-center gap-2 ">
                        <GiTwoCoins /> 100
                      </div>
                      {/*             <Countdown className="text-white " date={Date.now() + 604800000} />
                       */}{" "}
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between p-6 mt-4 shadow-slate-700 border-2 border-slate-700 rounded-lg items-center absolute bottom-0 left-0 w-full">
                  <div className="flex items-center">
                    <h1 className=" text-[1.2rem] text-slate-300 font">
                      Selected:{" "}
                    </h1>
                    <h1 className=" text-[1.2rem] text-slate-300 font ml-2">
                      {select.length}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => sendtostake()}
                      className="text-white px-8 py-2 rounded-lg border-2 border-purple-700 hover:bg-white hover:text-purple-700 bg-purple-700 cursor-pointer font text-[1.4rem]"
                    >
                      Stake
                    </button>
                    <button
                      onClick={() => sendtostake("all")}
                      className="text-white px-8 py-2 rounded-lg border-2 border-purple-700 hover:bg-white hover:text-purple-700 bg-purple-700 cursor-pointer font text-[1.4rem]"
                    >
                      Stake All
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <div className="flex justify-between p-6 mb-4 shadow-slate-700 shadow-lg rounded-lg items-center">
                <h1 className=" text-[1.6rem] text-slate-300 font">
                  Locked: {stake.length}
                </h1>

                <div className="flex-col flex">
                  <h2 className="text-slate-600 font text-[1.4rem]">Earning</h2>
                  <div className="flex  items-center gap-2">
                    <GiTwoCoins className="text-purple-400 font text-[1.4rem]" />
                    <p className="text-purple-400 font text-[1.4rem]">
                      {100 * stake.length}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => alert("Wait 24 hs")}
                  className="text-white px-8 py-2 rounded-lg border-2 border-slate-700 hover:bg-white hover:text-slate-700 bg-slate-700 cursor-pointer font text-[1.4rem]"
                >
                  Claim
                </button>
              </div>
              <div className="shadow-lg relative shadow-slate-700 p-4  rounded-lg w-full h-[530px]">
                <div className=" grid grid-cols-5 gap-4 h-[400px] overflow-auto">
                  {stake.map((a, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.3 + index / 5,
                      }}
                      onClick={() => addToUnStake(a)}
                      className={`${
                        select2.filter((b) => b.id === a.id).length > 0
                          ? "bg-tesmo2 border-2 border-slate-500"
                          : "bg-tesmo"
                      }  mx-auto hover:border-2 mt-4 transition-all 2s ease-in border-2 cursor-pointer hover:border-tesmo2 hover:bg-tesmo2 border-tesmo p-2 h-[200px] rounded-lg`}
                    >
                      <img
                        className="w-[100px] object-contain mx-auto rounded-lg"
                        src={a.image}
                        alt="nft"
                      />
                      <p className="text-white text-center text-[0.9rem] mt-2">
                        {a.nft}
                      </p>
                      <div className="text-center text-yellow-300 font-bold flex justify-center  items-center gap-2 ">
                        <GiTwoCoins /> 100
                      </div>
                      <Countdown
                        className="text-white justify-center flex "
                        date={Date.now() + 86399000}
                      />
                      {/*             <Countdown className="text-white " date={Date.now() + 604800000} />
                       */}{" "}
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between p-6 mt-4 shadow-slate-700 border-2 border-slate-700 rounded-lg items-center absolute bottom-0 left-0 w-full">
                  <div className="flex items-center">
                    <h1 className=" text-[1.2rem] text-slate-300 font">
                      Selected:{" "}
                    </h1>
                    <h1 className=" text-[1.2rem] text-slate-300 font ml-2">
                      {select2.length}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => sendtostake("unstake")}
                      className="text-white px-8 py-2 rounded-lg border-2 border-blue-700 hover:bg-white hover:text-blue-700 bg-blue-700 cursor-pointer font text-[1.4rem]"
                    >
                      unStake
                    </button>
                    <button
                      onClick={() => sendtostake("unstakeall")}
                      className="text-white px-8 py-2 rounded-lg border-2 border-blue-700 hover:bg-white hover:text-blue-700 bg-blue-700 cursor-pointer font text-[1.4rem]"
                    >
                      UnStake All
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*  <div className="w-full h-[60vh] text-white justify-center flex items-center flex-col text-[1.6rem] md:text-[2rem] menu">
          <p>The raffle will be held in</p>
          <Countdown date={Date.now() + 80000000} />
          <div className="mt-20 text-center">
            <p className="text-white font text-[1rem]">
              Prize: 1 Thesmophoria nft
            </p>
            <p className="text-white font text-[1rem]">
              Only to <span className="font-bold">delisted</span> holders.
            </p>
            <p className="text-white font text-[1rem] underline">
              Snapshot at any time
            </p>
            <p className="text-white font text-[1rem]">
              Buy your tickets{" "}
              <a
                href="https://magiceden.io/marketplace/tesmophoria"
                className="text-pink-500 font-bold"
              >
                Magic Eden
              </a>
              .
            </p>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staked;
