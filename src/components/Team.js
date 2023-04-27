import React from 'react'
import TeamDetails from './TeamDetails'

export default function Team() {
  return (
    <>
        <section id="team" className="team pt-0">
            <div className="container aos-init aos-animate" data-aos="fade-up">

                <div className="section-header">
                    <span>Our Team</span>
                    <h2>Our Team</h2>

                </div>

                <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <TeamDetails src={'assets/img/team/team-1.jpg'} name={'Walter White'} designation={'Web Development'} description={'Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut'}/>
                    <TeamDetails src={'assets/img/team/team-2.jpg'} name={'Sarah Jhinson'} designation={'Marketing'} description={'Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus'}/>
                    <TeamDetails src={'assets/img/team/team-3.jpg'} name={'William Anderson'} designation={' Content'} description={'Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara'}/>

                </div>

            </div>
        </section>
    </>
  )
}
