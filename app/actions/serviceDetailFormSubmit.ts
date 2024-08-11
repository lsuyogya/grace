"use server";
export default async function serviceDetailFormSubmit(
  serviceName: string,
  prevState: any,
  formData: FormData
) {
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
    // Handle the result if necessary
    return { message: "Thank you for your enquiry.", status: "success" };
  } catch (error) {
    // Handle the error if necessary
    return {
      message: "Form submission failed. Try again with valid values",
      status: "error",
    };
  }
}
