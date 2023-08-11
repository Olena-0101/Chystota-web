import Image from "next/image";
import Link from "next/link";
import React from "react";
import starts from "../../public/assets/icons/stars.svg";
import login from "../../public/assets/icons/login.svg";
import uaFlag from "../../public/assets/icons/uaFlag.svg";
import call from "../../public/assets/icons/call.svg";
import profilecircle from "../../public/assets/icons/profilecircle.svg";
import burgerMenu from "../../public/assets/icons/burgerMenu.svg";
import MenuNavigation from "./MenuNavigation";
const Header = () => {
  const category = [
    { title: "Прибирання" },
    { title: "Хімчистка" },
    { title: "Магазин" },
  ];
  return (
    <header className="shadow-lg py-3 shadow-gray-100">
      <div className="flex flex-col w-11/12 mx-auto gap-y-[15px] sm:gap-y-3">
        <div className="flex justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="text-[25px] tracking-[-1px] sm:text-[33px] sm:tracking-[-1.32px] ">
              Чистота
            </h1>
            <Image
              src={starts}
              alt="stars"
              width={25}
              height={37}
              className="w-5 h-[29px] sm:w-[25px] sm:h-[37px]"
            />
          </Link>
          <div className="hidden sm:flex flex-col items-end justify-center">
            <h4 className="text-5 font-museoSansBold tracking-[0.2px] text-green leading-6">
              0 800 209 751
            </h4>
            <p className="text-xs leading-[5px]">Безкоштовно по Україніі</p>
          </div>
          <div className="flex gap-x-4 items-center justify-end sm:hidden">
            <button>
              <Image src={call} width={24} height={24} alt="call" />
            </button>
            <button>
              <Image
                src={profilecircle}
                width={24}
                height={24}
                alt="profilecircle"
              />
            </button>
            <button>
              <Image src={burgerMenu} width={24} height={24} alt="burgerMenu" />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <MenuNavigation data={category} />
          <div className="hidden sm:flex gap-x-8 ">
            <div className="appearance-none text-base font-museoSansBold flex gap-x-2 items-center">
              UA
              <Image src={uaFlag} alt="uaFlag" width={24} height={24} />
            </div>
            <button className="flex items-center ">
              <span className="text-base font-museoSansBold">Вхід</span>
              <Image src={login} alt="login" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
