import axios from "axios";

export const sendContactEmail = async (email: string) => {
  try {
    const config = {
      headers: {
        "Content-type": "Application/json",
      },
    };

    await axios.post(`/api/emails`, email, config);

    return {
      success: true,
      loading: false,
      message: "Message envoyé ! Nous revenons vers vous rapidement.",
    };
  } catch (error) {
    return {
      success: false,
      loading: false,
      message: "Error sending email " + error,
    };
  }
};
