import assets from '@/assets';


const History = () => {
    return (
        <div className="about_history section_padding">
        <div className="container py-14">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <h2 className="text-sm text-primary mb-2">OUR HISTORY</h2>
                <h3 className="text-2xl lg:text-3xl uppercase mb-3">
                Connecting Businesses,  One <br className="d-none d-xl-block" />{" "}
                Meeting at a Time
                </h3>
                <p className="mb-4">
                From humble beginnings to becoming a trusted partner in professional spaces, our journey started with a simple idea: to make booking meeting rooms easier and more accessible. Over the years, we've expanded our offerings to include a diverse range of spaces, from small brainstorming hubs to large conference venues, all equipped with modern amenities. Our commitment to innovation and customer satisfaction has driven us to continuously improve, ensuring that every meeting, no matter the size, is a success. Today, we're proud to be a leading platform, helping businesses connect and collaborate in the perfect setting.
                </p>
                <div className="flex justify-between pt-2">
                  <div>
                    <h4 className="text-3xl text-primary mb-1">12</h4>
                    <p>Years Exprience</p>
                  </div>
                  <div>
                    <h4 className="text-3xl text-primary mb-1">20K</h4>
                    <p>Happy Customer</p>
                  </div>
                  <div>
                    <h4 className="text-3xl text-primary mb-1">100%</h4>
                    <p>Clients Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="about_imgs">
                <img loading="lazy" src={assets.aboutUs1} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default History;