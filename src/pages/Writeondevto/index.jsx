import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text, TextArea } from "components";

const WriteondevtoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start pb-[50px] w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <header className="flex flex-col items-center justify-center md:px-5 w-full">
              <div className="border-b border-blue_gray-100 border-solid flex flex-row md:gap-10 items-center justify-between p-[17px] w-full">
                <div className="flex flex-col items-center justify-start ml-[15px] w-[10%]">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-center text-gray-900_01 text-xl w-auto"
                        size="txtGilroyMedium20Gray90001"
                      >
                        Write on dev.to
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start justify-end mr-[15px] w-[201px]">
                  <Button
                    className="common-pointer cursor-pointer font-medium h-10 min-w-[89px] text-base text-center"
                    onClick={() => navigate(-1)}
                    shape="round"
                    color="blue_gray_400"
                    variant="outline"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="cursor-pointer font-medium h-10 min-w-[88px] text-base text-center"
                    shape="round"
                    color="gray_900_02"
                  >
                    Publish
                  </Button>
                </div>
              </div>
            </header>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1376px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[67%] md:w-full">
                <Text
                  className="border border-blue_gray-100 border-solid h-[90px] max-w-[909px] md:max-w-full pl-8 pr-[35px] sm:px-5 py-5 rounded-lg sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-300_01 w-full"
                  size="txtGilroyMedium40"
                >
                  Title
                </Text>
                <div className="border border-blue_gray-100 border-solid flex flex-col h-[753px] md:h-auto items-start justify-start max-w-[909px] p-8 sm:px-5 rounded-lg w-full">
                  <Text
                    className="text-blue_gray-300_01 text-xl w-auto"
                    size="txtGilroyMedium20Bluegray30001"
                  >
                    Tell your story...
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[33%] md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    Add tags
                  </Text>
                  <TextArea
                    className="bg-transparent border border-blue_gray-100 border-solid font-medium gap-5 h-[251px] p-6 sm:px-5 rounded-lg placeholder:text-blue_gray-300_01 text-blue_gray-300_01 text-left text-xl w-[443px]"
                    name="frame9883"
                    placeholder="Add tags "
                    name="frame9883"
                    placeholder="Add tags "
                  ></TextArea>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    Canonical link
                  </Text>
                  <Input
                    name="frame9884"
                    placeholder="Add canonical link here"
                    className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300_01 sm:h-auto text-left text-xl w-full"
                    wrapClassName="w-full"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteondevtoPage;
