import { nunito, readexPro } from "@/utils/Font";
import React from "react";

const Policy = () => {
  return (
    <div>
      <h2
        className={`text-center py-[64px] backgroundColor text-[50px] font-semibold ${readexPro.className} text-white`}
      >
        Privacy Policy
      </h2>

      <div className="2xl:w-[1920px] xl:w-[1320px] lg:w-[1320px] md:w-full sm:w-full w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-5">
        <div className="lg:w-[920px] mx-auto w-full ">
          <p
            className={`text-[#6F7782] ${nunito.className} font-medium text-[24px] leading-[24px] pt-[80px]`}
          >
            At PureSol, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, declist-decimallose,
            and safeguard your information when you use our AI automation
            services. By accessing or using our services, you consent to the
            practices described in this policy. If you do not agree with the
            terms of this Privacy Policy, please do not use our services.
          </p>
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Information We Collect
            </h3>
            <small
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782]`}
            >
              We collect various types of information to provide and improve our
              services to you:
            </small>
            <ul className="pl-6 flex flex-col justify-center">
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-decimal`}
              >
                Personal Information: When you register for our services, we may
                collect personal information such as your name, email address,
                phone number, and payment information.{" "}
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-decimal`}
              >
                Usage Data: We may collect information on how you access and use
                our services. This includes your IP address, browser type,
                device information, pages visited, and the time and date of your
                visits.{" "}
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-decimal`}
              >
                Cookies and Tracking Technologies: We use cookies and similar
                tracking technologies to track activity on our services and hold
                certain information. You can instruct your browser to refuse all
                cookies or to indicate when a cookie is being sent.{" "}
              </li>
            </ul>
          </div>
          {/* How We Use Your Information */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              How We Use Your Information{" "}
            </h3>
            <small
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782]`}
            >
              We use the collected information for various purposes, including:{" "}
            </small>
            <ul className="pl-6 flex flex-col justify-center">
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                To Provide and Maintain Our Service: Ensuring our services
                function as intended and providing customer support.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                To Improve Our Services: Analyzing usage data to understand how
                our services are used and making improvements. visits.{" "}
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                To Process Payments: Managing your subscriptions and processing
                payments.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                To Communicate with You: Sending updates, newsletters, and other
                information related to our services.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                To Ensure Security: Monitoring and analyzing activity to detect
                and prevent fraudulent or unauthorized activities.
              </li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Sharing Your Information
            </h3>
            <small
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782]`}
            >
              We do not sell or trade your personal information. However, we may
              share your information in the following situations:
            </small>
            <ul className="pl-6 flex flex-col justify-center">
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                With Service Providers: We may share your information with
                third-party service providers to help us operate our business,
                such as payment processors and data hosting services.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                For Legal Reasons: We may disclose your information if required
                to do so by law or in response to valid requests by public
                authorities.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Business Transfers: In the event of a merger, acquisition, or
                sale of assets, your personal information may be transferred as
                part of the transaction.
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Data Security{" "}
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              We implement reasonable measures to protect your personal
              information from unauthorized access, use, or disclosure. However,
              no internet or email transmission is ever fully secure or
              error-free. While we strive to use commercially acceptable means
              to protect your personal information, we cannot guarantee its
              absolute security.
            </p>
          </div>
          {/* Your Privacy Rights */}

          <div className="pt-[52px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Your Privacy Rights
            </h3>
            <small
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782]`}
            >
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </small>
            <ul className="pl-6 flex flex-col justify-center">
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Access and Update: You can access and update your personal
                information by logging into your account or contacting us
                directly.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Delete: You can request the deletion of your personal
                information, subject to certain exceptions.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Restrict Processing: You can request that we restrict the
                processing of your personal information under certain
                conditions.
              </li>
              <li
                className={`${nunito.className} text-[16px] font-bold text-[#6F7782] list-disc`}
              >
                Data Portability: You can request a copy of your personal
                information in a structured, machine-readable format.
              </li>
            </ul>
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

          {/* Changes to This Privacy Policy */}
          <div className="pt-[52px] pb-[80px]">
            <h3
              className={`text-[#4A326F] ${readexPro.className} font-bold text-[30px] `}
            >
              Changes to This Privacy Policy
            </h3>
            <p
              className={`${nunito.className} text-[16px] font-bold text-[#6F7782] leading-[24px]`}
            >
              We may update our Privacy Policy from time to time. If we make
              significant changes, we will notify you through email or our
              website. Your continued use of our services after such changes
              signifies your acceptance of the new Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
