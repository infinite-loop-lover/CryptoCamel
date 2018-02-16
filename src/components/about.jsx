export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row" style={{height:'670px'}}>
          <div className="col-xs-12 col-md-6" style={{ padding: '60px' }}> 
            <img alt=""  src="img/member/Gif-new.gif" className="img-responsive"  />
          </div>
          <div className="col-xs-12 col-md-6" style={{height:'100%', display:'flex', alignItems:'center'}}>
            <div className="about-text" style={{marginTop:'-30px'}}>
              <h2 style={{ color: 'red' }} >What you are getting yourself into</h2>
              <p>
              Each Crypto Camel is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more.
              All camels are super cool , but some are rarer than others.
              The camels are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.  Purchasing a camel costs 0.2 ETH.
              To access members-only areas such as THE MAJLIS, Crypto Camel holders will need to be signed into their Metamask Wallet.
              </p>
              {/* <div style={{textAlign:"center"}}>
                <button className='btn btn-custom btn-lg' onClick={()=> window.open("read-full-story", "_blank")}> READ FULL STORY </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
