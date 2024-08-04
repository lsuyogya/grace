"use server";

import Banner from "@/app/_components/Banner";
import CheckMark from "@/app/_components/icons/CheckMark";
import style from "@/app/_styles/serviceDetail.module.scss";
import { SubmitButton } from "@/app/_components/SubmitButton";

const getData = async (serviceName: string) => {
  const res = await fetch(`${process.env.baseUrl}/services/${serviceName}`);
  if (!res.ok) throw new Error(`Fetch failed on services/${serviceName}`);
  return res.json();
};

const Page = async ({ params }: { params: { serviceName: string } }) => {
  const data = await getData(params.serviceName);
  async function formAction(serviceName: string, formData: FormData) {
    "use server";
    console.log(serviceName);
    const rawFormData = {
      full_name: formData.get("name"),
      email_address: formData.get("email"),
      contact_no: formData.get("contactNo"),
      message: formData.get("message"),
      service_name: serviceName,
    };

    try {
      const response = await fetch(`${process.env.baseUrl}/service-enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const formActionWithService = formAction.bind(null, params.serviceName);
  return (
    <>
      <Banner overlayTitle={data.banner_title} imgUrl={data.banner_image} />
      <div className="mainGrid">
        <div className="content">
          <div className={`${style.contentWrapper}`}>
            <div className={`${style.leftContent}`}>
              <h1> {data.description_title} </h1>
              {data.description_content.map(
                (contentParagraph: string, index: number) => (
                  <p key={index}> {contentParagraph}</p>
                )
              )}
              <h2> {data.expectation_title} </h2>
              <ul>
                {data.expectation_content.map(
                  (listContent: { description: string }, index: number) => (
                    <li key={index} className="flex gap-1">
                      <CheckMark />
                      <span>{listContent.description}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={style.rightWrapper}>
              <div className={`${style.rightContent}`}>
                <form action={formActionWithService}>
                  <div className="formGroup">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" placeholder="Name" />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" placeholder="Email" />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="contactNo">Contact Number</label>
                    <input
                      id="contactNo"
                      name="contactNo"
                      placeholder="Contact No"
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows={5}
                    />
                  </div>
                  <div className="formGroup">
                    <SubmitButton btnLabel="Enquire Now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
