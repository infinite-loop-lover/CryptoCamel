
export const Navigation = ({ onClickConnectWallet, onClickDisconnectWallet, walletAddress }) => {
  return (
    <nav id='menu' className='navbar navbar-default'>
      <div className='container'>
      <div className='nav-container'>
        {/* <div className='navbar-header' style={{backgroundImage:'url(img/crypto-camels.png)', width:'80px', height:'80px' }}>
        </div> */}
                <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top' style={{width:'80px', height:'80px', padding:'0', marginLeft:'0'}}>
            <img className="rotateimg1" alt="" src="img/Crypto-Camels_h1.png" style={{width:'200%'}}  />
          </a>{' '}
        </div>


        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1' style={{marginRight:'-60px'}}>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#member-ship' className='page-scroll'> ABOUT US </a>
            </li>
            <li>
              <a href='#mint' className='page-scroll'> BUY A CAMEL </a>
            </li>
            <li>
              <a href='#roadmapsection' className='page-scroll'> ROADMAP </a>
            </li>
            <li>
              <a href='#majlis' className='page-scroll'> Majlis </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'> TEAM </a>
            </li>
            <li>
              <a href='/gallerycamels' target="_blank" className='page-scroll'> Gallery </a>
            </li>
            <li>
              {/* <a href='#foundation' className='page-scroll'> THE FOUNDATION </a> */}
            </li>
            <li>
              <a href='#contact' className='page-scroll'> CONTRACT </a>
            </li>
            <li>
              <a href='#member-ship' className='page-scroll'> Member </a>
            </li>
          </ul>
        </div>
        {
          walletAddress ? 
          <div className="connect">
            <button type='submit' className='btn btn-custom btn-lg' onClick={onClickDisconnectWallet}> { walletAddress.slice(0, 11) }... </button>
          </div>
          :
          <div className="connect">
            <button type='submit' className='btn btn-custom btn-lg' onClick={onClickConnectWallet}> CONNECT </button>
          </div>
        }
  
        <div className='social'>
          <a href="https://www.instagram.com/cryptocamelsclub/" target="_blank"> <img alt="" src="img/instagram.png" style={{width:'20px', height:'20px'}}/> </a> 
          <a href="https://mobile.twitter.com/@CryptoCamelsNFT" target="_blank"> <img alt="" src="img/twitter.png" style={{width:'20px', height:'20px'}}/> </a> 
          <a href="https://discord.gg/qrHY2B5jw9" target="_blank"> <img alt="" src="img/discord.png" style={{width:'20px', height:'20px'}}/> </a> 
        </div>

      </div>
      </div>
    </nav>
  )
}
