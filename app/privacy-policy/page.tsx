'use server';

import Banner from '../_components/Banner';
import style from '../_styles/privacyPolicy.module.scss';

async function getData() {
  const res = await fetch(`${process.env.baseUrl}/policy`);
  // const res = await fetch(`${process.env.baseUrl}/mockHomepage`);

  if (!res.ok) {
    throw new Error('Fetching Failed');
  }
  const data = res.json();
  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <Banner
        imgUrl={data.banner_image}
        overlayTitle={data.banner_title}
      />
      <div className={`mainGrid ${style.contentWrapper}`}>
        <div className="content">
          <h1 className={style.title}>{data.page_title}</h1>
          <p>{data.page_description}</p>
        </div>
      </div>
    </>
  );
};

export default page;
