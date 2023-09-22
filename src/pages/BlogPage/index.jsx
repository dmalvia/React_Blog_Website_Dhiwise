import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, List, Text } from "components";

const BlogPagePage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-50 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
          <header className="flex flex-col font-gilroy items-center justify-center md:px-5 w-full">
            <div className="border-b border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between p-[17px] w-full">
              <div className="header-row ">
                <Img
                  className="h-[41px] w-[215px]"
                  src="images/img_frame9873.svg"
                  alt="frame9873"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center justify-start">
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
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
              <div className="flex flex-row gap-6 sm:hidden items-start justify-start mr-[68px] w-[331px]">
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
          </header>
          <Img
            className="h-[500px] sm:h-auto max-w-[1268px] mt-14 mx-auto object-cover rounded-[20px] w-full"
            src="images/img_frame9881.png"
            alt="frame9881"
          />
          <Text
            className="mt-[58px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtPublicSansLight24"
          >
            <span className="text-blue_gray-300 font-gilroy text-left font-normal">
              Category
            </span>
            <span className="text-black-900 font-publicsans text-left font-light">
              {" "}
            </span>
            <span className="text-blue_gray-900 tracking-[0.12px] font-gilroy text-left font-bold">
              Writing
            </span>
          </Text>
          <Text
            className="mt-[43px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtGilroySemiBold52"
          >
            How to create a UX Writing portfolio as a beginner
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[981px] mt-[62px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-row font-gilroy gap-4 items-center justify-between w-[27%] sm:w-full">
              <div className="flex flex-col h-[70px] items-center justify-start w-[70px]">
                <Img
                  className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                  src="images/img_profileimglarge_70x70.png"
                  alt="profileimglarge"
                />
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                  size="txtGilroySemiBold24"
                >
                  By Jane Phillips
                </Text>
                <Text
                  className="text-blue_gray-700 text-center text-sm"
                  size="txtGilroyRegular14Bluegray700"
                >
                  12 September, 2020
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[191px] rounded-[5px]"
              leftIcon={
                <Img
                  className="h-[30px] mr-2.5"
                  src="images/img_share_outline.svg"
                  alt="share/Outline"
                />
              }
              color="gray_900_02"
              size="md"
              variant="outline"
            >
              <div className="font-medium font-publicsans leading-[normal] text-center text-lg">
                Share Now
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[980px] mt-14 mx-auto md:px-5 w-full">
            <Text
              className="leading-[35.00px] text-blue_gray-700 text-lg w-full"
              size="txtGilroyMedium18"
            >
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt on Lieutenant Worf. Could someone
              survive inside a transporter buffer for 75 years? Fate. It
              protects fools, little children, and ships named “Enterprise.”
            </Text>
            <Text
              className="leading-[35.00px] mt-7 text-blue_gray-700 text-lg w-full"
              size="txtPublicSansLight18"
            >
              <span className="text-blue_gray-700 font-gilroy text-left font-medium">
                The game’s not big enough unless it scares you a little. Wait a
                minute – you’ve been declared dead. You can’t give{" "}
              </span>
              <span className="text-blue_gray-700 font-gilroy text-left font-medium">
                orders around
              </span>
              <span className="text-blue_gray-700 font-gilroy text-left font-medium">
                {" "}
                here. I’ll alert the crew. What? We’re not at all alike! Flair
                is what marks the difference between artistry and mere
                competence.
              </span>
            </Text>
            <Text
              className="leading-[35.00px] mt-7 text-blue_gray-700 text-lg w-full"
              size="txtGilroyMedium18"
            >
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard.
            </Text>
            <Text
              className="leading-[35.00px] mt-7 text-blue_gray-700 text-lg w-full"
              size="txtGilroyMedium18"
            >
              Could someone survive inside a transporter buffer for 75 years?
              Fate. It protects fools, little children, and ships named
              “Enterprise.”
            </Text>
            <div className="h-[140px] md:h-[168px] mt-7 relative w-full">
              <Text
                className="leading-[35.00px] m-auto text-blue_gray-700 text-lg w-full"
                size="txtGilroyMedium18"
              >
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt on Lieutenant Worf. Could
                someone survive inside a transporter buffer for 75 years? Fate.
                It protects fools, little children, and ships named
                “Enterprise.”
              </Text>
              <Text
                className="absolute left-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[20%]"
                size="txtMerriweatherBold24"
              >
                Lorem Ipsum Dolor Sit Amet
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between mt-[50px] w-full">
              <Img
                className="h-[334px] md:h-auto object-cover rounded-[15px]"
                src="images/img_rectangle23.png"
                alt="rectangleTwentyThree"
              />
              <Img
                className="h-[334px] md:h-auto object-cover rounded-[15px]"
                src="images/img_rectangle24.png"
                alt="rectangleTwentyFour"
              />
            </div>
            <Text
              className="leading-[35.00px] mt-[50px] text-blue_gray-700 text-lg w-full"
              size="txtGilroyMedium18"
            >
              What’s a knock-out like you doing in a computer-generated gin
              joint like this? But the probability of making a six is no greater
              than that of rolling a seven. I guess it’s better to be lucky than
              good.
            </Text>
            <Text
              className="leading-[35.00px] mt-7 text-blue_gray-700 text-lg w-full"
              size="txtGilroyMedium18"
            >
              Damage report! I’ve had twelve years to think about it. And if I
              had it to do over again, I would have grabbed the phaser and
              pointed it at you instead of them. Some days you get the bear, and
              some days the bear gets you. Ensign Babyface! I’m afraid I still
              don’t understand, sir. Mr. Crusher, ready a collision course with
              the Borg ship. Yesterday I did not know how to eat gagh. You’re
              going to be an interesting companion.
            </Text>
            <div className="flex flex-col font-gilroy items-start justify-start md:ml-[0] ml-[31px] mt-7 w-[44%] md:w-full">
              <div className="flex flex-row gap-[15px] items-start justify-start w-3/5 md:w-full">
                <div className="bg-blue_gray-700 h-2.5 mb-[7px] mt-1 rounded-[50%] w-2.5"></div>
                <Text
                  className="text-blue_gray-700 text-lg"
                  size="txtGilroyMedium18"
                >
                  Lorem ipsum dolor sit amet.
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-3 w-[82%] md:w-full">
                <div className="bg-blue_gray-700 h-2.5 my-[5px] rounded-[50%] w-2.5"></div>
                <Text
                  className="text-blue_gray-700 text-lg"
                  size="txtGilroyMedium18"
                >
                  At vero eos et accusamus et iusto odio.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mt-[15px] w-full">
                <div className="bg-blue_gray-700 h-2.5 mb-[7px] sm:mt-0 mt-1 rounded-[50%] w-2.5"></div>
                <Text
                  className="text-blue_gray-700 text-lg"
                  size="txtGilroyMedium18"
                >
                  Excepteur sint occaecat cupidatat non proident.
                </Text>
              </div>
            </div>
            <Text
              className="leading-[35.00px] mt-[33px] text-blue_gray-700 text-lg w-full"
              size="txtGilroyMedium18"
            >
              Could someone survive inside a transporter buffer for 75 years?
              Fate. It protects fools, little children, and ships named
              “Enterprise.”
            </Text>
          </div>
          <div className="flex flex-col font-gilroy gap-3 items-start justify-start mt-[41px] md:px-5 w-[35%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtGilroyMedium24"
            >
              Tags
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[94px] rounded-[19px] text-center text-lg"
                shape="round"
                color="blue_gray_100"
              >
                Writing
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[95px] rounded-[19px] text-center text-lg"
                shape="round"
                color="blue_gray_100"
              >
                Tutorial
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[93px] rounded-[19px] text-center text-lg"
                shape="round"
                color="blue_gray_100"
              >
                How to
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[76px] rounded-[19px] text-center text-lg"
                shape="round"
                color="blue_gray_100"
              >
                Book
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[76px] rounded-[19px] text-center text-lg"
                shape="round"
                color="blue_gray_100"
              >
                2020
              </Button>
            </div>
          </div>
          <div className="flex flex-row font-gilroy gap-4 items-center justify-center mt-[66px] md:px-5 w-[18%] md:w-full">
            <div className="flex flex-col h-[70px] items-center justify-start w-[70px]">
              <Img
                className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                src="images/img_profileimglarge_70x70.png"
                alt="profileimglarge_One"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
                size="txtGilroySemiBold24"
              >
                By Jane Phillips
              </Text>
              <Text
                className="mt-1 text-blue_gray-700 text-sm"
                size="txtGilroyRegular14Bluegray700"
              >
                UX Researcher
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-gilroy gap-[35px] items-start justify-start max-w-[1077px] mt-[118px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
              size="txtGilroySemiBold28"
            >
              More Like these
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-[343px]">
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
              <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-[343px]">
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
              <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-col gap-4 h-[533px] md:h-auto items-end justify-start p-2.5 rounded-[23px] w-[343px]">
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
            </List>
          </div>
          <div className="bg-gray-900_04 flex flex-col font-gilroy gap-6 items-start justify-end mt-[120px] p-7 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1125px] mx-auto md:px-5 w-full">
              <Img
                className="h-[41px] w-[198px]"
                src="images/img_frame9873_white_a700.svg"
                alt="frame9873_One"
              />
              <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[126px]">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Quick Links
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Dashboard
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Dev.to Profile
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Medium Profile
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Write on Medium
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Write on Dev.to
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[126px]">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Company
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  About
                </Text>
                <a href="javascript:" className="text-sm text-white-A700">
                  <Text size="txtGilroyMedium14WhiteA700">Careers</Text>
                </a>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Writers
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Blog
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[126px]">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Help
                </Text>
                <a href="javascript:" className="text-sm text-white-A700">
                  <Text size="txtGilroyMedium14WhiteA700">FAQs</Text>
                </a>
                <a href="javascript:" className="text-sm text-white-A700">
                  <Text size="txtGilroyMedium14WhiteA700">
                    Terms & Conditions
                  </Text>
                </a>
                <a href="javascript:" className="text-sm text-white-A700">
                  <Text size="txtGilroyMedium14WhiteA700">Privacy Policy</Text>
                </a>
              </div>
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[126px] md:mt-0 mt-[37px] w-[11%] md:w-full">
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
              className="md:ml-[0] ml-[120px] text-center text-sm text-white-A700"
              size="txtGilroyRegular14"
            >
              2022 Writista all rights reserved
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPagePage;
