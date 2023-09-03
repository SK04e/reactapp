import dejw from './dejw.jpg';
import Card from './Card'
import Data from './data'

function Main() {
  return (
    <div className='container'> 
        <div className='section' >
            <div id='bestseller'>
              
            </div>
        </div>
        <div className='section' >
            <Card 
              name="PRODUKT ROKU!"
              img="./tesla.png"
              link="wp.pl"
            />

            <Card 
              name="bastek podepnij backend"
              img="./tesla.png"
              link="https://wp.pl"
            />

            <div className='square--big'>
              <div className='fill'>
                 1  
              </div>
            </div>

            <div className='banner'>
              <div className='fill'>
                 1  
              </div>
            </div>
        </div>

        <div className='section' >

            <Card 
              name="nigger"
            />

            <Card 
              name="cofnig"
              img="./tesla.png"
            />

            <div className='banner--right'>
              <div className='fill'>
                 55  
              </div>
            </div>

          <div className='todo'>
            Why u should choose us / FAQ / cos innego 
          </div>

      <footer>
        ZUL
      </footer>
        </div>
    </div>
  );
}

export default Main;
