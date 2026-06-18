import React from 'react';

function RightImage({imageUrl,productName,productDescription}) {
  return (
      <>
        <div className="container">
          <div className="row">
              <div className="col-5">
                <div className="title mt-5 pt-5 pb-3">
                  <h4>{productName}</h4>
                </div>
                <p>{productDescription}</p>
              </div>
              <div className="col-7">
                <div className="img">
                  <img src={imageUrl} alt='image'></img>
                </div>
              </div>
          </div>
        </div>
      </>
    );
}

export default RightImage;    