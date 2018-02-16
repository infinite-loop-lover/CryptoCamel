export const Rabble = (props) => {
  return (
    <div id='rabble' className='text-center'>
      <div className='container'>
      <div className='row section-title'>
            <div className="col-sm-12 col-md-12">
              <h2 style={{color:'#FF3030'}}>Gallery</h2>
            </div>
          </div>
          <div className="row all-member">
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img alt="" src={'img/member/1-'+i+'.png'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member">
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img alt="" src={'img/member/2-'+i+'.png'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member" style={{marginBottom:'8px'}}>
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img alt="" src={'img/member/3-'+i+'.png'} style={{marginBottom:'20px'}} /></div>
            )}
          </div>
          <div className="row all-member" style={{marginBottom:'8px'}}>
            {[...Array(8)].map((x, i) =>
              <div className="col-sm-12 col-md-1" key={i}> <img alt="" src={'img/member/4-'+i+'.png'} style={{marginBottom:'20px'}}/></div>
            )}
          </div>
      </div>
    </div>
  )
}
