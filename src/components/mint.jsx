import { useState } from 'react'
import { BigNumber } from 'ethers'
import { getContract } from '../containers/home';

export const Mint = (props) => {
  const { walletAddress, setStatus, setMintLoading, totalSupply, maxTokens } = props
  const [mintCount, setMintCount] = useState(1);
  function increase() {
    if(mintCount<props.maxTokenPurchase) {
      let newCount = mintCount + 1;
      setMintCount(newCount);
    }
  }
  function decrease() {
    if(mintCount>1) {
      let newCount = mintCount - 1;
      setMintCount(newCount);
    }
  }

  async function onMint() {
    let occupied_list, total_list, available_list;
    if (mintCount == 0) return
    if (!walletAddress) {
        setStatus('Please connect with Metamask')
        return
    }

    if ( mintCount > (maxTokens - totalSupply) ) {
        setStatus(`We are reached already max supply, You can mint less than ${maxTokens - totalSupply}`)
        return 
    }
    const contract = getContract()
    try {
      let ol = await contract.occupiedList()
      console.log("ol",ol);
      occupied_list = ol.map( bn => BigNumber.from(bn).toNumber() );
        // let tx = await contract.mintToken(mintCount, { value: BigNumber.from(1e9).mul(BigNumber.from(1e9)).mul(20).div(100).mul(mintCount), from: walletAddress })
        // let res = await tx.wait()
        // if (res.transactionHash) {
        // setStatus(`You minted ${mintCount} Camel Successfully`)
        // setMintLoading(false)
        // }
    } catch (err) {
        let status = "Transaction failed because you have insufficient funds or sales not started"
        setStatus(status)
        setMintLoading(false)
    }

    // Get available list 
    total_list = Array.from(Array(maxTokens).keys())
    available_list = total_list.filter(id => !occupied_list.includes(id))
    // Mint token using contract function
    setMintLoading(true)
    try {
        let shuffled = available_list.sort(function(){return .5 - Math.random()});
        let mint_list = shuffled.slice(0, mintCount);

        let tx = await contract.mintToken(mint_list, { value: BigNumber.from(1e9).mul(BigNumber.from(1e9)).mul(20).div(100).mul(mintCount), from: walletAddress })
        let res = await tx.wait()
        if (res.transactionHash) {
            setStatus(`You minted ${mintCount} Crypto Camel Successfully`)
            setMintLoading(false)
            setMintCount(0)
        }
    } catch (err) {
        let errorContainer =  (err.data && err.data.message)  ? err.data.message : ''
        console.log("contract err", err.message)
        let errorBody = errorContainer.substr(errorContainer.indexOf(":")+1)
        let status = "Transaction failed because you have insufficient funds or sales not started"
        errorContainer.indexOf("execution reverted") === -1 ? setStatus(status) : setStatus(errorBody)
        setMintLoading(false)
    }
  }

  return (
    <>
      <div id="mint">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="mint-text">
                <h2 style={{ color: 'red' }} >Buy a Camel</h2>
                <p>
                Buying a Crypto Camel costs 0.2 ETH + gas. CCC membership costs the same for everyone.
                Sign in through your Metamask wallet and buy through ETH (If you need to purchase some ETH,
                go to <a href="https:\\rain.bh" target="_blank"><img src="img/rainavatar.svg" style={{ width: '8vw', height: '60px' }} /></a>)
                </p>
                <p>
                Note: A Hundred camels are being withheld from the sale. These will be used for giveaways, rewards and for the creators
                </p>
                <div className='buy-camel-section'>
                <h3 className='buy-camel-maxTokenPurchase'> MAX OF ({props.maxTokenPurchase}) </h3>

                <div className="mint-main">

                  <div className="counter">
                    <span className="down" onClick={decrease}>-</span>
                    <input disabled="" type="text" value={mintCount} id="selectedAmount" readOnly />
                    <span className="up" onClick={increase}>+</span>
                  </div>             
                  <img alt="" className="eth-logo" src="img/ETH-logo.svg" /> 
                  <p className="title-mint"><span id="price">{ parseFloat(0.2 * mintCount).toFixed(2)}</span> + Gas</p>
                </div>
                {
                  props.loading ?
                  <button className="btn btn-lg mint-button">
                    Minting
                  </button>
                  :
                  <button className="btn btn-lg mint-button" onClick={onMint}>
                    MINT
                  </button>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="majlis">
        <div className="container">
          <div className="row ">
            <div className="col-xs-12 col-md-7 ">
              <h2 style={{ color: 'red' }}> THE MAJLIS </h2>
              <p>The CCC MAJLIS will open once we have crossed the presale period.
              <br /> This is only accessible to wallets containing at least one camel.
              <br /> Every camel holder will be able to contribute to the collaborative message board.</p>
            </div>
            <div className="col-xs-12 col-md-5" style={{textAlign:'center'}}>
              <img alt="" src="img/20227_tent_Done_2.jpg" className="membership-logo"  />
              {/* <p style={{height: '60px'}}></p> */}
            </div>
          </div>
          {/* <div className="row">
            <p style={{textAlign:'center', marginBottom:'30px'}}> </p>
            <p style={{textAlign:'center', color:'#FF3030'}}>READ ROADMAP TO KNOW MORE</p>
            <div id="brief-btn">
              <button className='btn btn-custom btn-lg' onClick={()=> window.open("-membership-brief", "_blank")}  >  MEMBERSHIP BRIEF </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};