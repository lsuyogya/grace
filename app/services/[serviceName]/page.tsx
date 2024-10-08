'use server';

import Banner from '@/app/_components/Banner';
import CheckMark from '@/app/_components/icons/CheckMark';
import style from '@/app/_styles/serviceDetail.module.scss';
import { SubmitButton } from '@/app/_components/SubmitButton';
import ClientTestimonials from '@/app/_components/ClientTestimonials';
import MiniServices from '@/app/_components/MiniServices';
import serviceDetailFormSubmit from '@/app/actions/serviceDetailFormSubmit';
import ServiceDetailForm from './ServiceDetailForm';

const getData = async (serviceName: string) => {
  const res = await fetch(`${process.env.baseUrl}/services/${serviceName}`);
  if (!res.ok) throw new Error(`Fetch failed on services/${serviceName}`);
  return res.json();
};

const Page = async ({ params }: { params: { serviceName: string } }) => {
  const data = await getData(params.serviceName);

  return (
    <>
      <Banner
        overlayTitle={data.banner_title}
        imgUrl={data.banner_image}
      />
      <div className="mainGrid">
        <div className="content">
          <div className={`${style.contentWrapper}`}>
            <div className={`${style.leftContent}`}>
              <h1> {data.description_title} </h1>
              {data.description_content?.map(
                (contentParagraph: string, index: number) => (
                  <p key={index}> {contentParagraph}</p>
                )
              )}
              <h2> {data.expectation_title} </h2>
              <ul>
                {data.expectation_content?.map(
                  (listContent: { description: string }, index: number) => (
                    <li
                      key={index}
                      className="flex gap-1">
                      <CheckMark />
                      <span>{listContent.description}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={style.rightWrapper}>
              <div className={`${style.rightContent}`}>
                <ServiceDetailForm serviceName={params.serviceName} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientTestimonials
        title={data.testimonial_title}
        btnLink={data.testimonial_btn_url}
        btnTxt={data.testimonial_btn_text}
        testimonialList={data.testimonial_lists}
      />
      <MiniServices
        serviceList={data.services_lists}
        serviceTitle={data.services_title}
      />
    </>
  );
};

export default Page;
