import { type NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Mudra Connect</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>
          <h1>CONTACT US</h1>
          <br />
          <h3>
            For any queries regarding this website contact us on following:
          </h3>
          <h3>Our Email ID:abc123@gmail.com</h3>
          <h3>Twitter handle:@abc123</h3>
          <h3>Contact number:2583123703</h3>
        </div>
      </main>
    </>
  );
};

export default Contact;
