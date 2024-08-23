import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <div className="Features">
      <h3 className="Features_heading">Features</h3>
      <p className="Features_content">
        Some of the features and advantages that we provide for those of you <br/> who store data in this Data Warehouse.
      </p>
      <div className="Features_grid">
        <div className="features_row1">
        <div className="feature">
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="427" height="353" viewBox="0 0 427 353" fill="none">
              <path
                opacity="0.1"
                d="M43.733 41.784C47.7703 17.6952 68.6204 0.048645 93.0453 0.048645H376.922C404.536 0.048645 426.922 22.4344 426.922 50.0486V302.608C426.922 330.222 404.536 352.608 376.922 352.608H50.7169C19.8016 352.608 -3.7054 324.833 1.40467 294.343L43.733 41.784Z"
                fill="#68C9BA"
              />
            </svg>
            <img src='https://warehouse-blue.vercel.app/static/media/feature1.3bd68cd8e4cd29a40d80.png' alt="Feature"/>
          </div>
        </div>
          <div className="features_row2">
            <p className="features_p1">Search Data</p>
            <p className="features_p2">
              Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.
            </p>
            <div className="features_child">
              <p className="features_p3">Learn more</p>
              <p className='features_p4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                  <path
                    d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0955 8.30774H1.39941"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="features_row3">
            <img
              src="https://s3-alpha-sig.figma.com/img/de39/7ca5/7ba1dda1fab4af707def69fa8e4d2a0b?Expires=1693785600&Signature=AuORFULl~Asi7I-gSutE7XdanOJ1GBtacKzRpKwHu~XPDRi5hqvC~3AIoX3Tg2UqRs71MCZK~H8VORkfdiiRkQzG0UvsaMaKRvGoGGGFLZC0wQGrDJ1ouF3PAWO3m-ZaTOasxS-qqcoBjRZeLx92QLorYBRn-pEOuRJOxzz5P9FDR7N8JiV4gfYYL~tCBVGWK67Tg~b~HmynbHBNPZNLGrlcPE35dL1krTG~j3o6l4AJ9mrN5QX3znFOzqYKKvQFeWbHhqUFmnLhUwtQCP-reyARHXqZfGuflp4ok7AOg~zHJ5mbZ~A3m-hO6iNe5961~jArjOq9LQCQRqTdAkxrpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>

        {/* Repeat similar structure for other grid items */}
        <div className="features_row1">
        <div className="feature">
          <div className="svg-container">
            <svg width="427" height="353" viewBox="0 0 427 353" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M43.8112 41.784C47.8484 17.6951 68.6985 0.048584 93.1234 0.048584H377C404.615 0.048584 427 22.4343 427 50.0486V302.608C427 330.222 404.615 352.608 377 352.608H50.7951C19.8797 352.608 -3.62727 324.833 1.48279 294.343L43.8112 41.784Z" fill="#9C69E2"/>
            </svg>

            <img src='https://warehouse-blue.vercel.app/static/media/feature2.aa8cfbcff7c4975f6f37.png' alt="Feature"/>
          </div>
        </div>
          <div className="features_row2">
            <p className="features_p1">Search Data</p>
            <p className="features_p2">
              Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.
            </p>
            <div className="features_child">
              <p className="features_p3">Learn more</p>
              <p className='features_p4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                  <path
                    d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0955 8.30774H1.39941"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="features_row3">
            <img
              src="https://s3-alpha-sig.figma.com/img/de39/7ca5/7ba1dda1fab4af707def69fa8e4d2a0b?Expires=1693785600&Signature=AuORFULl~Asi7I-gSutE7XdanOJ1GBtacKzRpKwHu~XPDRi5hqvC~3AIoX3Tg2UqRs71MCZK~H8VORkfdiiRkQzG0UvsaMaKRvGoGGGFLZC0wQGrDJ1ouF3PAWO3m-ZaTOasxS-qqcoBjRZeLx92QLorYBRn-pEOuRJOxzz5P9FDR7N8JiV4gfYYL~tCBVGWK67Tg~b~HmynbHBNPZNLGrlcPE35dL1krTG~j3o6l4AJ9mrN5QX3znFOzqYKKvQFeWbHhqUFmnLhUwtQCP-reyARHXqZfGuflp4ok7AOg~zHJ5mbZ~A3m-hO6iNe5961~jArjOq9LQCQRqTdAkxrpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>

        {/* Repeat similar structure for other grid items */}<div className="features_row1">
        <div className="feature">
          <div className="svg-container">
            <svg width="427" height="354" viewBox="0 0 427 354" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M43.733 42.5833C47.7703 18.4944 68.6204 0.8479 93.0453 0.8479H376.922C404.536 0.8479 426.922 23.2337 426.922 50.8479V303.407C426.922 331.021 404.536 353.407 376.922 353.407H50.7169C19.8016 353.407 -3.7054 325.633 1.40467 295.142L43.733 42.5833Z" fill="#F063B8"/>
            </svg>

            <img src='https://warehouse-blue.vercel.app/static/media/feature3.d41c5afe07c670d96f41.png' alt="Feature"/>
          </div>
        </div>
          <div className="features_row2">
            <p className="features_p1">Search Data</p>
            <p className="features_p2">
              Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.
            </p>
            <div className="features_child">
              <p className="features_p3">Learn more</p>
              <p className='features_p4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                  <path
                    d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0955 8.30774H1.39941"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="features_row3">
            <img
              src="https://s3-alpha-sig.figma.com/img/de39/7ca5/7ba1dda1fab4af707def69fa8e4d2a0b?Expires=1693785600&Signature=AuORFULl~Asi7I-gSutE7XdanOJ1GBtacKzRpKwHu~XPDRi5hqvC~3AIoX3Tg2UqRs71MCZK~H8VORkfdiiRkQzG0UvsaMaKRvGoGGGFLZC0wQGrDJ1ouF3PAWO3m-ZaTOasxS-qqcoBjRZeLx92QLorYBRn-pEOuRJOxzz5P9FDR7N8JiV4gfYYL~tCBVGWK67Tg~b~HmynbHBNPZNLGrlcPE35dL1krTG~j3o6l4AJ9mrN5QX3znFOzqYKKvQFeWbHhqUFmnLhUwtQCP-reyARHXqZfGuflp4ok7AOg~zHJ5mbZ~A3m-hO6iNe5961~jArjOq9LQCQRqTdAkxrpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>

        {/* Repeat similar structure for other grid items */}<div className="features_row1">
        <div className="feature">
          <div className="svg-container">
          <svg width="427" height="354" viewBox="0 0 427 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M43.8102 42.5833C47.8474 18.4944 68.6976 0.8479 93.1224 0.8479H376.999C404.614 0.8479 426.999 23.2337 426.999 50.8479V303.407C426.999 331.021 404.614 353.407 376.999 353.407H50.7941C19.8788 353.407 -3.62825 325.633 1.48182 295.142L43.8102 42.5833Z" fill="#2D9CDB"/>
          </svg>

            <img src='https://warehouse-blue.vercel.app/static/media/feature4.821e83ecc96bd79a8e9a.png' alt="Feature"/>
          </div>
        </div>
          <div className="features_row2">
            <p className="features_p1">Search Data</p>
            <p className="features_p2">
              Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.
            </p>
            <div className="features_child">
              <p className="features_p3">Learn more</p>
              <p className='features_p4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                  <path
                    d="M15.1864 15.2014L21.0952 8.30774L15.1864 1.41412"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.0955 8.30774H1.39941"
                    stroke="#9C69E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="features_row3">
            <img
              src="https://s3-alpha-sig.figma.com/img/de39/7ca5/7ba1dda1fab4af707def69fa8e4d2a0b?Expires=1693785600&Signature=AuORFULl~Asi7I-gSutE7XdanOJ1GBtacKzRpKwHu~XPDRi5hqvC~3AIoX3Tg2UqRs71MCZK~H8VORkfdiiRkQzG0UvsaMaKRvGoGGGFLZC0wQGrDJ1ouF3PAWO3m-ZaTOasxS-qqcoBjRZeLx92QLorYBRn-pEOuRJOxzz5P9FDR7N8JiV4gfYYL~tCBVGWK67Tg~b~HmynbHBNPZNLGrlcPE35dL1krTG~j3o6l4AJ9mrN5QX3znFOzqYKKvQFeWbHhqUFmnLhUwtQCP-reyARHXqZfGuflp4ok7AOg~zHJ5mbZ~A3m-hO6iNe5961~jArjOq9LQCQRqTdAkxrpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>

        {/* Repeat similar structure for other grid items */}
      </div>
    </div>
  );
};

export default Features;
