import React from 'react'

export default function Faq() {
  return (
    <>
         <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <span>Frequently Asked Questions</span>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-10">

                        <div className="accordion accordion-flush" id="faqlist">

                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                    <i className="bi bi-question-circle question-icon"></i>
                                    Non consectetur a erat nam at lectus urna duis?
                                </button>
                            </h3>
                            <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div className="accordion-body">
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                    <i className="bi bi-question-circle question-icon"></i>
                                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                                </button>
                            </h3>
                            <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div className="accordion-body">
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                    <i className="bi bi-question-circle question-icon"></i>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                                </button>
                            </h3>
                            <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div className="accordion-body">
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                    <i className="bi bi-question-circle question-icon"></i>
                                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                                </button>
                            </h3>
                            <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div className="accordion-body">
                                    <i className="bi bi-question-circle question-icon"></i>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                    <i className="bi bi-question-circle question-icon"></i>
                                    Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                                </button>
                            </h3>
                            <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div className="accordion-body">
                                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
