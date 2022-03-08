import images from './minh-phan.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container-box'>
        <div className='container'>
          <div className='container-activity'>
            <p>Activity Detail</p>
          </div>
          <div className='container-close'>
            <i className='fa fa-close'></i>
          </div>
        </div>
        <div className='modal-container'>
          <div className='header'>
            <div className='header-information'>
              
              <div className='header-information--item'>
                <img src={images} className='img-profile' alt='img-1'/>
                <div className='access-granted'>
                  <ion-icon name="checkmark-circle"></ion-icon>
                  <span>ACCESS GRANTED</span>
                </div>
              </div>
              <h3 className='name-card'>NGUYEN MINH DUC</h3>
              <div className='header-information--name'>
                <ul className='id'>
                  <li>Social ID</li>
                  <li>Type</li>
                  <li>Time</li>
                  <li>Gate</li>
                  <li>Way</li>
                  <li>Warning</li>
                </ul>
                <ul className='information'>
                  <li>029482716</li>
                  <li>Employee</li>
                  <li>25/10/2019 13:39</li>
                  <li>G-Floor Reception 1</li>
                  <li>In</li>
                  <li>No</li>
                </ul>
              </div>
            </div>
            <div className='header-list'>
              <span>Frames</span>
              
              <div className='header-list-box'>
                <div className='header-list--item'>
                  <img src={images}  className='header-list-image' alt='img-2'/>
                  <div className='header-list-name'>
                  <span>Nguyen Thanh Duc</span>
                  </div>
                  <div className='header-list--employee'>
                    <ion-icon name="basketball"></ion-icon>
                    <span>Employee</span>
                  </div>
                  <div className='header-list--text'>
                    <ul>
                      <li>Time: 25/10/2019 13:20</li>
                      <li>Processing: 3s</li>
                      <li>Result:</li>
                    </ul>
                  </div>
                </div>
                <div className='header-list--item'>
                  <img src={images}  className='header-list-image' alt='img-2'/>
                  <div className='header-list-name'>
                  <span>Nguyen Thanh Duc</span>
                  </div>
                  <div className='header-list--employee'>
                    <ion-icon name="basketball"></ion-icon>
                    <span>Employee</span>
                  </div>
                  <div className='header-list--text'>
                    <ul>
                      <li>Time: 25/10/2019 13:20</li>
                      <li>Processing: 3s</li>
                      <li>Result:</li>
                    </ul>
                  </div>
                </div>
                <div className='header-list--item'>
                  <img src={images}  className='header-list-image' alt='img-2'/>
                  <div className='header-list-name'>
                  <span>Nguyen Thanh Duc</span>
                  </div>
                  <div className='header-list--employee'>
                    <ion-icon name="basketball"></ion-icon>
                    <span>Employee</span>
                  </div>
                  <div className='header-list--text'>
                    <ul>
                      <li>Time: 25/10/2019 13:20</li>
                      <li>Processing: 3s</li>
                      <li>Result:</li>
                    </ul>
                  </div>
                </div>
                <div className='header-list--item'>
                  <img src={images}  className='header-list-image' alt='img-2'/>
                  <div className='header-list-name'>
                  <span>Nguyen Thanh Duc</span>
                  </div>
                  <div className='header-list--employee'>
                    <ion-icon name="basketball"></ion-icon>
                    <span>Employee</span>
                  </div>
                  <div className='header-list--text'>
                    <ul>
                      <li>Time: 25/10/2019 13:20</li>
                      <li>Processing: 3s</li>
                      <li>Result:</li>
                    </ul>
                  </div>
                </div>
                <div className='header-list--item'>
                  <img src={images}  className='header-list-image' alt='img-2'/>
                  <div className='header-list-name'>
                  <span>Nguyen Thanh Duc</span>
                  </div>
                  <div className='header-list--employee'>
                    <ion-icon name="basketball"></ion-icon>
                    <span>Employee</span>
                  </div>
                  <div className='header-list--text'>
                    <ul>
                      <li>Time: 25/10/2019 13:20</li>
                      <li>Processing: 3s</li>
                      <li>Result:</li>
                    </ul>
                  </div>
                </div>
                <div className='header-list--item'>
                  <img src={images}  className='header-list-image' alt='img-2'/>
                  <div className='header-list-name'>
                  <span>Nguyen Thanh Duc</span>
                  </div>
                  <div className='header-list--employee'>
                    <ion-icon name="basketball"></ion-icon>
                    <span>Employee</span>
                  </div>
                  <div className='header-list--text'>
                    <ul>
                      <li>Time: 25/10/2019 13:20</li>
                      <li>Processing: 3s</li>
                      <li>Result:</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-button'>
            <div className='next-profile'>
                <ion-icon name="arrow-round-forward"></ion-icon>
                <span>GO TO PROFILE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
