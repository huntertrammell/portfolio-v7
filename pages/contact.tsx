import ContactForm from "../components/form/contact";
import Header from "../components/navigation/header"
import Layout from "../layouts/default";

const ContactPage = () => {
    return (
      <Layout>
        <Header title="SAY HELLO" />
        <section className="p-10" id="contact">
          <ContactForm />
        </section>
      </Layout>
    );
}

export default ContactPage;