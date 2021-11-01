import React from 'react';
import LottieAnimation from './Lottie';
import home from './loadingPage.json';

const LottiePage = () => {
    return ( 
        <div className='lottie'> 
          <LottieAnimation lotti={home} height={300} width={300} />
       </div>
   )
}

export default LottiePage;