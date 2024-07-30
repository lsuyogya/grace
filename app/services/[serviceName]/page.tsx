'use server';

import Banner from '@/app/_components/Banner';
import CheckMark from '@/app/_components/icons/CheckMark';
const data = {
  overlayTitle: 'Personal Care',
  imgUrl: '/service.png',
  serviceTitle: 'Personal Care Support',
  serviceContent: [
    'At GSS, our personal care supports focus on assisting with daily personal activities. This includes help or supervision with everyday tasks essential for daily living.',
    'We are dedicated to ensuring that each individual receives the necessary support to maintain their independence and quality of life. Our services are tailored to meet the unique needs of each person, providing compassionate and reliable assistance.',
  ],
  listTitle: 'You can Expect',
  listContent: [
    'Personal hygiene, including showering, bathing, oral hygiene, dressing and grooming.',
    'Assist with toileting, bladder and bowel management including menstrual care.',
    'Assist with medication as per the direction.',
  ],
};
// import { useRouter } from 'next/router';
const Page = ({ params }: { params: { serviceName: string } }) => {
  // const router = useRouter();
  // return <>Service Name: {router.query.serviceName} </>;
  return (
    <>
      <Banner
        overlayTitle={data.overlayTitle}
        imgUrl={data.imgUrl}
      />
      <div className="leftContent">
        <h1> {data.serviceTitle} </h1>
        {data.serviceContent.map((contentParagraph, index) => (
          <p key={index}> {contentParagraph}</p>
        ))}
      </div>
      <h2> {data.listTitle} </h2>
      <ul>
        {data.listContent.map((listContent, index) => (
          <li
            key={index}
            className="flex gap-1">
            <CheckMark />
            <span>{listContent}</span>
          </li>
        ))}
      </ul>
      <div className="rightContent">
        <form action="">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="contactNo">Contact Number</label>
            <input
              id="contactNo"
              name="contactNo"
              placeholder="Contact No"
            />
          </div>
          <div className="formGroup">
            <button
              type="submit"
              className="btnPrimary">
              Enquire Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
