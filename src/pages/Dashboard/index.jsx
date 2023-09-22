import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Text } from "components";

const DashboardPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[120px] items-center justify-start mx-auto w-full">
        <div className="h-[1286px] md:h-[1724px] sm:h-[3379px] md:px-5 relative w-full">
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start p-8 sm:px-5 right-[0] w-4/5">
            <div className="flex flex-col items-center justify-start mb-[35px] mt-2.5 w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-full">
                  <Img
                    className="h-[265px] sm:h-auto object-cover rounded-[12px] w-full"
                    src="images/img_placeholder.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[29.00px] max-w-[323px] md:max-w-full text-gray-900 text-lg"
                      size="txtGilroyBold18"
                    >
                      How to create a UX Writing portfolio as a beginner
                    </Text>
                    <Text
                      className="leading-[26.00px] max-w-[323px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyRegular16"
                    >
                      The film rolls back the clock through Nike’s past as the
                      company expands sport for a new generation over the next
                      half century.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between w-[323px]">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="flex flex-col h-14 items-center justify-start w-14">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_profileimglarge.png"
                          alt="profileimglarge"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtGilroyMedium14"
                      >
                        Jane Phillips
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-700 text-right text-sm w-auto"
                      size="txtGilroyMedium14"
                    >
                      22nd June, 2022
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-full">
                  <Img
                    className="h-[265px] sm:h-auto object-cover rounded-[12px] w-full"
                    src="images/img_placeholder_265x323.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[33.00px] max-w-[323px] md:max-w-full text-gray-900 text-xl"
                      size="txtGilroyBold20"
                    >
                      <>How Snapchat and Netflix Break UX Design Principles</>
                    </Text>
                    <Text
                      className="leading-[26.00px] max-w-[323px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyRegular16"
                    >
                      The film rolls back the clock through Nike’s past as the
                      company expands sport for a new generation over the next
                      half century.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between w-[323px]">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="flex flex-col h-14 items-center justify-start w-14">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_profileimglarge_56x56.png"
                          alt="profileimglarge"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtGilroyMedium14"
                      >
                        Wade John
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-700 text-right text-sm w-auto"
                      size="txtGilroyMedium14"
                    >
                      22nd June, 2022
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-full">
                  <Img
                    className="h-[265px] sm:h-auto object-cover rounded-[12px] w-full"
                    src="images/img_placeholder_1.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[33.00px] max-w-[323px] md:max-w-full text-gray-900 text-xl"
                      size="txtGilroyBold20"
                    >
                      How Do You Overcome Imposter Syndrome?
                    </Text>
                    <Text
                      className="leading-[26.00px] max-w-[323px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyRegular16"
                    >
                      The film rolls back the clock through Nike’s past as the
                      company expands sport for a new generation over the next
                      half century.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between w-[323px]">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="flex flex-col h-14 items-center justify-start w-14">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_profileimglarge_1.png"
                          alt="profileimglarge"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtGilroyMedium14"
                      >
                        Jack Amber
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-700 text-right text-sm w-auto"
                      size="txtGilroyMedium14"
                    >
                      22nd June, 2022
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-full">
                  <Img
                    className="h-[265px] sm:h-auto object-cover rounded-[12px] w-full"
                    src="images/img_placeholder.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[33.00px] max-w-[323px] md:max-w-full text-gray-900 text-xl"
                      size="txtGilroyBold20"
                    >
                      How to create a UX Writing portfolio as a beginner
                    </Text>
                    <Text
                      className="leading-[26.00px] max-w-[323px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyRegular16"
                    >
                      The film rolls back the clock through Nike’s past as the
                      company expands sport for a new generation over the next
                      half century.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between w-[323px]">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="flex flex-col h-14 items-center justify-start w-14">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_profileimglarge.png"
                          alt="profileimglarge"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtGilroyMedium14"
                      >
                        Jane Phillips
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-700 text-right text-sm w-auto"
                      size="txtGilroyMedium14"
                    >
                      22nd June, 2022
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-full">
                  <Img
                    className="h-[265px] sm:h-auto object-cover rounded-[12px] w-full"
                    src="images/img_placeholder_265x323.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[33.00px] max-w-[323px] md:max-w-full text-gray-900 text-xl"
                      size="txtGilroyBold20"
                    >
                      <>How Snapchat and Netflix Break UX Design Principles</>
                    </Text>
                    <Text
                      className="leading-[26.00px] max-w-[323px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyRegular16"
                    >
                      The film rolls back the clock through Nike’s past as the
                      company expands sport for a new generation over the next
                      half century.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between w-[323px]">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="flex flex-col h-14 items-center justify-start w-14">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_profileimglarge_56x56.png"
                          alt="profileimglarge"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtGilroyMedium14"
                      >
                        Wade John
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-700 text-right text-sm w-auto"
                      size="txtGilroyMedium14"
                    >
                      22nd June, 2022
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-full">
                  <Img
                    className="h-[265px] sm:h-auto object-cover rounded-[12px] w-full"
                    src="images/img_placeholder_1.png"
                    alt="placeholder"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[33.00px] max-w-[323px] md:max-w-full text-gray-900 text-xl"
                      size="txtGilroyBold20"
                    >
                      How Do You Overcome Imposter Syndrome?
                    </Text>
                    <Text
                      className="leading-[26.00px] max-w-[323px] md:max-w-full text-base text-gray-900"
                      size="txtGilroyRegular16"
                    >
                      The film rolls back the clock through Nike’s past as the
                      company expands sport for a new generation over the next
                      half century.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between w-[323px]">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <div className="flex flex-col h-14 items-center justify-start w-14">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_profileimglarge_1.png"
                          alt="profileimglarge"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtGilroyMedium14"
                      >
                        Jack Amber
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-700 text-right text-sm w-auto"
                      size="txtGilroyMedium14"
                    >
                      22nd June, 2022
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 border-b border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between p-[17px] right-[0] top-[0] w-4/5">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[15px] w-[31%] md:w-full">
              <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="common-pointer text-base text-center text-gray-900_01 w-auto"
                    size="txtGilroySemiBold16"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="common-pointer text-base text-center text-gray-900_99 w-auto"
                    size="txtGilroyMedium16"
                    onClick={() => navigate("/devtoprofile")}
                  >
                    Dev.to Profile
                  </Text>
                </div>
                <Text
                  className="common-pointer text-base text-center text-gray-900_99 w-auto"
                  size="txtGilroyMedium16"
                  onClick={() => navigate("/mediumprofile")}
                >
                  Medium Profile
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-row gap-6 items-start justify-start mr-3.5 w-auto">
              <Button
                className="common-pointer cursor-pointer font-medium h-10 min-w-[161px] text-base text-center"
                onClick={() => googleSignIn()}
                shape="round"
                color="gray_900_02"
              >
                Write on medium
              </Button>
              <Button
                className="common-pointer cursor-pointer font-medium h-10 min-w-[146px] text-base text-center"
                onClick={() => navigate("/writeondevto")}
                shape="round"
                color="gray_900_02"
              >
                Write on dev.to
              </Button>
            </div>
          </div>
          <div className="absolute bg-white-A700 border-b border-blue_gray-100 border-r border-solid flex flex-col font-opensans gap-[54px] h-[1024px] md:h-auto items-center justify-end left-[0] p-6 sm:px-5 top-[0] w-[300px]">
            <Img
              className="h-[41px] w-[215px]"
              src="images/img_frame9873.svg"
              alt="frame9873"
            />
            <div className="flex flex-col h-[895px] md:h-auto items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Recommended Topics
                    </Text>
                    <div className="flex flex-row font-gilroy gap-2 items-center justify-start w-3/4 md:w-full">
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[87px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Ux design
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[103px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Ux Research
                      </Button>
                    </div>
                    <div className="flex flex-row font-gilroy gap-2 items-center justify-start w-[85%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[125px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Design Thinking
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[90px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Front-end
                      </Button>
                    </div>
                    <div className="flex flex-row font-gilroy gap-2 items-center justify-start w-[84%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[177px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Back-end development
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[37px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        UI
                      </Button>
                    </div>
                    <div className="flex flex-row font-gilroy items-center justify-between w-full">
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[67px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Money
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[79px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Business
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[101px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Productivity
                      </Button>
                    </div>
                    <div className="flex flex-row font-gilroy gap-2 items-center justify-start w-[76%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[97px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Psychology
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[96px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Mindfullnes
                      </Button>
                    </div>
                    <div className="flex flex-row font-gilroy gap-2 items-center justify-start w-[56%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[75px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Science
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-7 min-w-[63px] rounded-[14px] text-center text-sm"
                        size="xs"
                      >
                        Books
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-900_04 flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-center ml-[148px] mr-[166px] my-[29px] w-[79%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Img
                className="h-[41px] w-[198px]"
                src="images/img_frame9873_white_a700.svg"
                alt="frame9873_One"
              />
              <div className="flex flex-col gap-[15px] items-start justify-start">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">Dashboard</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">
                        Dev.to Profile
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">
                        Medium Profile
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">
                        Write on Medium
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">
                        Write on Dev.to
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Company
                </Text>
                <ul className="flex flex-col gap-3.5 items-start justify-start md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">About</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">Careers</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">Writers</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">Blog</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Help
                </Text>
                <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">FAQs</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">
                        Terms & Conditions
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-sm text-white-A700">
                      <Text size="txtGilroyMedium14WhiteA700">
                        Privacy Policy
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[19px] items-start justify-start md:mt-0 mt-[37px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtGilroyBold18WhiteA700"
                >
                  Connect on
                </Text>
                <div className="flex flex-row gap-5 items-center justify-between w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_instagram31.svg"
                    alt="instagramThirtyOne"
                  />
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_whatsapp21.svg"
                    alt="whatsappTwentyOne"
                  />
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_linkedin21.svg"
                    alt="linkedinTwentyOne"
                  />
                </div>
              </div>
            </div>
            <Text
              className="text-center text-sm text-white-A700"
              size="txtGilroyRegular14"
            >
              2022 Writista all rights reserved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DashboardPage;
