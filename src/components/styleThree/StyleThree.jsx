import React from 'react';
import HeadingTitle from '../headingTitle/HeadingTitle';
import './styleThree.scss';

const StyleThree = () => {
  return (
    <div className='styleThree'>
      <div className='styleThreeWrapper'>
        <div className='widget3'>
          <HeadingTitle title='Voting Poll (CheckBox)' />
          <div className='pollWidget'>
            <div className='title'>
              <h3>
                Wich was the best Football World Cup ever in your opinion?
              </h3>
            </div>

            <div className='options'>
              <form>
                <div className='checkBox'>
                  <label>
                    <input type="checkbox" />
                    <span>Qatar 2022</span>
                  </label>
                    <p>
                      <span style={{ width:"65%" }}></span>
                    </p>
                    <div className='perc'>65%</div>
                </div>
                <div className='checkBox'>
                  <label>
                    <input type="checkbox" />
                    <span>Russia 2018</span>
                  </label>
                    <p>
                      <span style={{ width:"28%" }}></span>
                    </p>
                    <div className='perc'>28%</div>
                </div>
                <div className='checkBox'>
                <label>
                  <input type="checkbox" />
                  <span>Brazil 2014</span>
                </label>
                  <p>
                    <span style={{ width:"07%" }}></span>
                  </p>
                  <div className='perc'>07%</div>
                </div>
                <button type='submit'>Vote Now</button>
              </form>
            </div>
          </div>
        </div>

        <div className='widget3'>
          <HeadingTitle title="Voting Poll (Radio)" />
          <div className='pollWidget'>
            <div className='title'>
              <h3>
                Do you think the cost of sending money to mobile phone should be reduced?
              </h3>
            </div>
            <div className='options'>
              <form>
                <div className='radio'>
                  <label>
                    <input type='radio' name='option-1' />
                    <span>Yes</span>
                  </label>
                  <p>
                    <span style={{ width: "55%" }}></span>
                  </p>
                  <div className='perc'>55%</div>
                </div>

                <div className='radio'>
                  <label>
                    <input type="radio" name='option-1'/>
                    <span>No</span>
                  </label>
                  <p>
                    <span style={{ width: "82%" }}></span>
                  </p>
                  <div className='perc'>82%</div>
                </div>

                <div className='radio'>
                  <label>
                    <input type='radio' name='option-1' />
                    <span>Average</span>
                  </label>
                  <p>
                    <span style={{ width: "37%" }}></span>
                  </p>
                  <div className='perc'>37%</div>
                </div>
                <button type='submit'>Vote Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StyleThree
