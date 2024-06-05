import { nunito, readexPro } from "@/utils/Font";
import React from "react";

const Terms = () => {
  return (
    <div>
      <h2
        className={`text-center py-[64px] backgroundColor text-[50px] font-semibold ${readexPro.className} text-white`}
      >
        Terms & Conditions
      </h2>

      <div className="2xl:w-[1920px] xl:w-[1320px] lg:w-[1320px] md:w-full sm:w-full w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-5">
        <div className="lg:w-[920px] mx-auto w-full ">
          <p
            className={`text-[#6F7782] ${nunito.className} font-medium text-[24px] leading-[24px] pt-[80px]`}
          >
            These Terms and Conditions ("Terms") outline the rules and
            regulations for the use of PureSol's AI automation services. By
            accessing and using our services, you agree to be bound by these
            Terms. If you do not agree to these Terms, please do not use our
            services. We encourage you to read these Terms thoroughly.
          </p>
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              What We Expect from You
            </h3>
            <small
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782]`}
            >
              For clarity, here are some key definitions:
            </small>
            <ul className="pl-6 flex flex-col justify-center">
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Service: The AI automation services offered by PureSol.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                User: Any person or entity utilizing our services.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Subscription: The recurring payment plan selected by the User.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Content: Any data, text, software, images, or other materials
                uploaded, downloaded, or appearing on the Service.
              </li>
            </ul>
          </div>
          {/* responsibilities */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Your Responsibilities
            </h3>
            <small
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782]`}
            >
              As a user of PureSol, you agree to:
            </small>
            <ul className="pl-6 flex flex-col justify-center">
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Provide accurate and up-to-date information during registration.{" "}
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Keep your account information confidential and secure.{" "}
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Use our services in compliance with applicable laws and
                regulations.{" "}
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Avoid any misuse of the Service or activities that violate these
                Terms.
              </li>
            </ul>
          </div>

          {/* commitment */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Your Responsibilities
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              PureSol commits to delivering the AI automation services described
              in your chosen subscription plan. We reserve the right to modify,
              suspend, or discontinue any aspect of our Service at any time.
              While we aim to provide uninterrupted access, we cannot guarantee
              it due to factors beyond our control.
            </p>
          </div>

          {/* Subscription and Payment */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Subscription and Payment{" "}
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              By subscribing to our services, you agree to pay the fees
              specified in your chosen plan. Payments are made in advance on a
              monthly basis and are generally non-refundable, except under our
              90-day money-back guarantee. We accept various payment methods as
              listed on our website. Failure to make timely payments may result
              in suspension or termination of your access to the Service.
            </p>
          </div>
          {/* Termination Policy */}

          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Termination Policy
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              You may cancel your subscription at any time by contacting our
              support team. PureSol reserves the right to suspend or terminate
              your access if you breach these Terms or engage in prohibited
              activities. Upon termination, all rights granted to you under
              these Terms will cease, and you must stop using the Service.{" "}
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Limitation of Liability
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              Our services are provided "as is" without any warranties, either
              express or implied. PureSol will not be liable for any indirect,
              incidental, or consequential damages resulting from the use of our
              services. Our total liability is limited to the amount you have
              paid for the Service.
            </p>
          </div>

          {/* Privacy and Data Protection */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Privacy and Data Protection
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              Our Privacy Policy explains how we handle your personal data. By
              using our services, you consent to the collection and use of your
              information as described in our Privacy Policy. We implement
              reasonable security measures to protect your data but cannot
              guarantee its absolute security.
            </p>
          </div>
          {/* Intellectual Property Rights */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Intellectual Property Rights
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              All content, trademarks, and data on the Service are the property
              of PureSol or our licensors. You retain ownership of any content
              you upload to the Service. By uploading content, you grant PureSol
              a non-exclusive, royalty-free license to use, modify, and display
              the content as needed to provide our Service.
            </p>
          </div>

          {/* Governing Law and Dispute Resolution */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Governing Law and Dispute Resolution
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              These Terms are governed by the laws of [Your Country/State]. Any
              disputes arising out of or related to these Terms will be resolved
              in the courts of [Your Country/State]. We encourage you to resolve
              disputes through good faith negotiations. If negotiations fail,
              disputes will be settled through binding arbitration under the
              rules of [Arbitration Association].
            </p>
          </div>

          {/* Changes to These Terms */}

          <div className="pt-[52px] pb-[80px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Changes to These Terms
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              We may update these Terms from time to time. If we make
              significant changes, we will notify you via email or our website.
              Your continued use of the Service after any changes signifies your
              acceptance of the new Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
