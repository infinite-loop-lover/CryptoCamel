export const Membership = () => {
  return (
    <div id="member-ship">
      <div className="container">
        <div className="row logo-title" style={{ paddingTop: '50px' }}>
          <div className="col-xs-12 col-md-6 logo-detail">
            <h2 style={{ color: 'red' }} > Say Marhaba to the Camels </h2>
            <p>An online expression of our cultural identity in the MENA Region - respecting our past and looking to shape a better future NFT collections haven’t really had much of a spin or local flavour to them. Crypto Camels are a reflection of our online MENA identity in the new web3 world. 
            We hope to build a club of like minded individuals, network and events to bring us forward and closer together.  </p>
            <p>Crypto Camels = using NFTs for the greater good</p>
            <p>We’ll be focusing a lot of our future efforts into collectively providing to those that are less fortunate and need society’s support through our crypto charity and development initiatives, combining fun and good will!</p>
            <p>A lot of our efforts will be going towards moving forward the UN SDGs in our region as much as we can - watch out for the future when we hit our final goal to what comes next for the Crypto Camels Club.</p>
          </div>
          <div className="col-xs-12 col-md-3" style={{textAlign:'center'}}>
            <img alt="" src="img/member/1-3.png" className="membership-logo"  />
            <p style={{height: '60px'}}></p>
            <img alt="" src="img/member/2-3.png" className="membership-logo"  />
          </div>
          <div className="col-xs-12 col-md-3" style={{textAlign:'center'}}>
            <img alt="" src="img/member/8745.png" className="membership-logo"  />
            <p style={{height: '60px'}}></p>
            <img alt="" src="img/member/3-4.png" className="membership-logo"  />
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
  );
};
