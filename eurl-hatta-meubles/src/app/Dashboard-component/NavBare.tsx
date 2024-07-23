"use client";
import Logo from "/public/assets/Hatta Meubles.svg";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import StatisticsIcon from "/public/assets/Statistics.svg";
import ProductIcon from "/public/assets/products.png";
import ProjectIcon from "/public/assets/Peoject.svg";
import OrdersIcon from "/public/assets/Orders.png";
// import SettingsIcon from "/public/assets/"

type NavBareItems = {
  id: number;
  route: string;
  img: StaticImageData;
};

const NavItems: NavBareItems[] = [
  {
    id: 1,
    route: "Statistics",
    img: StatisticsIcon,
  },
  {
    id: 2,
    route: "Products",
    img: ProductIcon,
  },
  {
    id: 3,
    route: "Projects",
    img: ProjectIcon,
  },
  {
    id: 4,
    route: "Orders",
    img: OrdersIcon,
  },
];

function NavBare() {
  const router = useRouter();

  function handleRoutes(path: string) {
    router.push(`/${path}`);
  }

  return (
      
    <div className="h-screen fixed flex items-start px-10 text-start shadow-xl  shadow-gray-300 flex-col">
      {/* Title */}
      <div className="flex items-center text-center px-5 py-10">
        <Image
          src={Logo}
          alt="dashboard-icon"
          width={130}
          className="scale-95"
        />
      </div>
    
      {/* Navigation Items */}
      <div className="flex flex-col gap-8 mt-10 w-full">
        {NavItems.map((Element: NavBareItems) => (
          <div
            key={Element.id}
            className="flex items-center gap-2 cursor-pointer p-2 hover:text-white  hover:bg-black  hover:animate-pulse hover:rounded-full     transition-transform  duration-500"
            onClick={() => handleRoutes(Element.route)}
          >
            <Image src={Element.img} alt={`${Element.route} icon`} width={30} />
            <p className="text-lg font-semibold">{Element.route}</p>
          </div>
        ))}
      </div>

      {/* Settings - Logout Options */}
      <div className="absolute bottom-6 w-full px-5">
        <div className="flex flex-col gap-3 text-xl font-semibold">
          <div className="flex items-center gap-1">
            {/* <Image src={SettingIcon} width={22} alt="setting-icon" /> */}
            <p>Settings</p>
          </div>
          <div className="flex items-center gap-1">
            {/* <Image src={LogoutIcon} alt="logout-icon" width={22} /> */}
            <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBare;
