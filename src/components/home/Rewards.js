import React from 'react'
import Cardreward from './Cardreward'

const Rewards = () => {
  return (
    <div className='mt-[10vh] w-full h-[90vh] px-20 bg-tesmo'>
        <div className="flex w-full ">
            <div className="w-full ">
             
              <h1 className="font text-[2rem] mt-10 text-white">Rewards</h1>
              <div className="grid grid-cols-5 gap-4 w-full">
                {/*  <Cardtweet /> */}
                <Cardreward
                  tickets={200}
                  price={1000}
                  buyed={100}
                  time={2000000000}
                  metadata={"LILY #2123"}
                  image="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Fbafybeiabyijjqpe7gzmeqrscyxe7cghxbzgsv3glj7k57264nvgshtftem.ipfs.nftstorage.link%2F8654.png%3Fext%3Dpng"
                />
                <Cardreward
                  tickets={999}
                  price={1000}
                  buyed={333}
                  time={4000000000}
                  metadata={"Okay Bears #4323"}
                  image="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Fbafybeia26bhw25vnfx7fxhbtzhj3oj6oui4jqnfrweww5zwkbtqvaabqfe.ipfs.nftstorage.link%2F1035.png%3Fext%3Dpng"
                />
                <Cardreward
                  tickets={20}
                  price={20000}
                  buyed={10}
                  metadata={"SolCasino WL"}
                  image="https://pbs.twimg.com/profile_images/1630676277265854464/yn2zpUVs_400x400.jpg"
                />
              </div>
            </div>
          
          </div>
    </div>
  )
}

export default Rewards