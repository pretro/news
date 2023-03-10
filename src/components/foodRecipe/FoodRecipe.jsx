import React from 'react'
import BoxOption from '../boxOption/BoxOption'
import HeadingTitle from '../headingTitle/HeadingTitle'
import './foodRecipe.scss'
import { Food } from './../../category'

const FoodRecipe = () => {
  return (
    <div className='foodRecipe'>
        <div className='foodRecipeWrapper'>
            <div className='itemLeft'>
                <HeadingTitle title="Foods &amp; Recipes"/>
                <BoxOption {...Food}/>
            </div>
            <div className='itemRight'>
              <div className='itemRightWrapper'>
                <div className='advert1'>
                  <a>
                    <img src='assets/ad-150x150-1.jpg' alt='' />
                  </a>
                </div>
                <div className='advert1'>
                  <a>
                    <img src='assets/ad-150x150-2.jpg' alt='' />
                  </a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FoodRecipe;
