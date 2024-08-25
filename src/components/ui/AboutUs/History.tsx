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
                  Creative and New fashion <br className="d-none d-xl-block" />{" "}
                  trends collection
                </h3>
                <p className="mb-4">
                  Fashion is a potent visual marker of our times,” says Caroline
                  Stevenson, head of cultural and ... “Trend analysis of any
                  given era will reveal society's values and aspirations.” ...
                  The urge to creative expression runs deep
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