import React from 'react'
import TopSection from './TopSection'

export default function Home() {
  return (
    <>
        <section id="featured-services" className="featured-services pb-0">
            <div className="container">
                <div className="row gy-4">

                    <TopSection title={'Lorem Ipsum'} description={'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'} text={'Learn More'} icon={'fa-cart-flatbed'} />
                    <TopSection title={'Dolor Sitema'} description={'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata'} text={'Learn More'} icon={'fa-truck'} />
                    <TopSection title={'Sed ut perspiciatis'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'} text={'Learn More'} icon={'fa-truck-ramp-box'} />


                </div>

            </div>
        </section>
    </>
  )
}
