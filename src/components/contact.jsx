export const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row" style={{height:'200px'}}>
          <div className="col-xs-12 col-md-4" style={{paddingBottom:'30px'}}>
            <p>info@cryptocamelsclub.com</p>
            <form>
              <input type="text" placeholder="Signup for Newsletter" />
              <div id="brief-btn">
                <button type='submit' className='btn btn-custom btn-lg' > SUBMIT </button>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-md-4 text-center contact-part" style={{padding:'10px'}}>
            {/* <img alt="" src="img/Crypto-Camels_v4.png" style={{width: '300px',height: '400px'}} /> */}
          </div>
          <div className="col-xs-12 col-md-4 contact-part">
            <div className='social' >
              <a href="https://www.instagram.com/cryptocamelsclub/" target="_blank" style={{ padding:'30px' }}> <img alt="" src="img/instagram.png" style={{width:'40px', height:'40px'}} /> </a> 
              <a href="https://mobile.twitter.com/@CryptoCamelsNFT" target="_blank" style={{ padding:'30px' }}> <img alt="" src="img/twitter.png" style={{width:'40px', height:'40px' }}/> </a> 
              <a href="https://discord.gg/qrHY2B5jw9" target="_blank" style={{ padding:'30px' }}> <img alt="" src="img/discord.png" style={{width:'40px', height:'40px' }}/> </a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
