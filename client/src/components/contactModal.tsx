import React from "react";
import { Button } from "../../components/ui/button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "lucide-react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      toast.success("Form Submitted", {
        position: "top-right",
        onClose,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      form.reset();
      onClose();
    } catch (error) {
      toast.error("Submission failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed h-screen inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <Button
          type="button"
          variant="ghost"
          className="absolute py-0 px-2 top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
        <h2 className="text-2xl">Interested in seeing more?</h2>
        <h2 className="text-2xl mb-2">We'd love to have you</h2>
        <div className="text-sm text-gray-500 mb-2">
          We will reach out to you as soon as possible. Please fill out the
          details below.
        </div>
        <form
          className="flex flex-col gap-4"
          action="https://formsubmit.co/hello@flairhealth.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="border-b-[0.5px] p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="border-b-[0.5px] p-2 rounded"
          />

          <input
            type="text"
            placeholder="Organization"
            name="organization"
            className="border-b-[0.5px] p-2 rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone number"
            className="border-b-[0.5px] p-2 rounded"
          />

          <textarea
            placeholder="Optional Message"
            name="message"
            className="border-b-[0.5px] p-2 rounded"
            rows={5}
          />

          <div>
            <button
              type="submit"
              className={`${isSubmitting ? "bg-gray-400" : "bg-[#14a8e1]"} text-white w-full px-4 py-2 rounded my-2`}
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader className="m-auto" /> : "Submit"}
            </button>
            <button
              type="button"
              className="bg-gray-500 w-full text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactModal;
