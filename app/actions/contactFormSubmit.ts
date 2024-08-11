"use server";
export default async function contactFormSubmit(
  prevState: any,
  formData: FormData
) {
  const rawFormData = {
    full_name: formData.get("name"),
    email_address: formData.get("email"),
    contact_no: formData.get("contactNo"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch(`${process.env.baseUrl}/contact-form`, {
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
    // console.log('Success:', result);
    return { message: "Thank you for your enquiry.", state: "success" };
  } catch (error) {
    // console.error('Error:', error);
    return {
      message: "Form submission failed. Please try again with valid details.",
      state: "error",
    };
  }
}
