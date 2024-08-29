import assets from "@/assets";
import Heading from "@/components/shared/Heading";
import ContactForm from "@/components/ui/ContactUs/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[350px]"
        style={{ backgroundImage: `url(${assets.contactBanner})` }}
      >
        <div className="mx-auto py-36">
          <h1 className="text-center text-3xl uppercase text-white mb-1">
            Contact us
          </h1>
          <div className="flex justify-center items-center">
            <Heading title="Contact Us" to="/" color="text-white" padding="0" />
          </div>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
};

export default ContactUs;
