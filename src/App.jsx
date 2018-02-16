// // import { useState, useEffect } from "react";
// // import { ethers, BigNumber } from 'ethers'
// // import { ToastContainer, toast } from 'react-toastify';
// // import { contractAddress } from './constants/address';
// // import { connectWallet, getCurrentWalletConnected } from './util/interact';
// // import { Navigation } from "./components/navigation";
// // import { Header } from "./components/header";
// // import { Title } from "./components/title";
// // import { About } from "./components/about";
// // import { Membership } from "./components/membership";
// // import { Mint } from "./components/mint";
// // import { Soldout } from "./components/soldout";
// // import { Roadmap } from "./components/roadmap";
// // import { Rabble } from "./components/rabble";
// // import { Team } from "./components/Team";
// // import { Foundation } from "./components/foundation";
// // import { FAQ } from "./components/FAQ";
// // import { Contact } from "./components/contact";
// // import SmoothScroll from "smooth-scroll";
// // import "./App.css";
// // import 'react-toastify/dist/ReactToastify.css';

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// export const getContract = () => {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();

//   const contractABI = require("./constants/contract.json")
//   const contract = new ethers.Contract(contractAddress, contractABI, signer)
//   return contract
// }

// const App = () => {
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [status, setStatus] = useState(null);
//   const [loading, setMintLoading] = useState(false);
//   const [totalSupply, setTotalSupply] = useState(0);
//   const [maxTokens, setMaxTokens] = useState(0);
//   const [maxTokenPurchase, setMaxTokenPurchase] = useState(0);
//   const notify = () => toast.info(status, {
//     position: "top-right",
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//   });

//   useEffect(async () => {
//     const { address, status } = await getCurrentWalletConnected()
//     setWalletAddress(address)
//     setStatus(status)
//   }, [])
 
//   useEffect( async () => {
//     if ( !loading && walletAddress ) {
//       let contract = getContract()
//       let res = await contract.totalSupply()
//       let mtb = await contract.MAX_TOKENS()
//       let mtp = await contract.maxTokenPurchase()
//       setTotalSupply( parseInt(BigNumber.from(res).toString()) )
//       setMaxTokens( parseInt(BigNumber.from(mtb).toString()) )
//       setMaxTokenPurchase( parseInt(BigNumber.from(mtp).toString()) )
//     }
//   }, [loading, walletAddress])

//   useEffect(() => {
//     if (status) {
//       notify()
//       setStatus(null)
//     }
//   }, [status])



//   const onClickConnectWallet = async () => {
//     const walletResponse = await connectWallet();
//     setStatus(walletResponse.status);
//     setWalletAddress(walletResponse.address);
//   }

//   const onClickDisconnectWallet = async () => {
//     setWalletAddress(null)
//   }

//   return (
//     <div>
//       <Navigation  onClickDisconnectWallet={onClickDisconnectWallet} onClickConnectWallet={onClickConnectWallet} walletAddress={walletAddress}  />
//       <Header />
//       <Title />
//       <About />
//       <Membership />
//       {
//         (totalSupply < maxTokens) || (totalSupply==0 && maxTokens==0) ?
//         <Mint totalSupply={totalSupply} maxTokenPurchase={maxTokenPurchase} maxTokens={maxTokens} 
//           loading={loading} walletAddress={walletAddress} setStatus={setStatus} setMintLoading={setMintLoading} />
//         :
//         <Soldout />
//       }
//       <Roadmap />
//       <Team />
//       <Rabble />
//       <Foundation />
//       <FAQ />
//       <Contact />
//       <ToastContainer />
//     </div>
//   );
// };

// export default App;


import React from 'react';
import './App.css';
import "@fontsource/exo-2"; 

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/home';
import Story from './containers/story';
import Brief from './containers/brief';
import rabblesFoundation from './containers/rabbles';
import { Rabble } from './containers/rabble';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/read-full-story' component={Story} />
        <Route exact path="/membership-brief" component={Brief} />
        <Route exact path="/the-rabbles-foundation" component={rabblesFoundation} />
        <Route exact path="/gallerycamels" component={Rabble} />
      </Router>
    </div>
  );
}

export default App;