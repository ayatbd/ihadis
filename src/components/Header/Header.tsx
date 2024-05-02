import Image from "next/image";
import SearchSection from "./SearchSection";


const Header = () => {
    return (
        <div className="md-max:fixed md-max:z-10 md-max:top-0 md-max:left-0 md-max:right-0 flex items-center justify-between w-full md-max:h-16 h-20 px-4 bg-white dark:bg-hadith-dark-card md-max:border-b md-max:dark:border-[#2F2F2F]">
            <div className="flex items-center cursor-pointer">
                <div className="w-11 lg-min:w-fit">
                    <Image className="w-11 md-max:w-9 h-11 md-max:h-9" width={500} height={500} src="https://ihadis.com/assets/home-logo.png" alt=""></Image>
                </div>
                <div className="ml-6 block md-max:hidden">
                    <h3 className="text-xl font-bold text-black dark:text-hadith-deepoffwhite ">হাদিস সমূহ</h3>
                    <h6 className="text-sm text-[#404040] dark:text-hadith-deepoffwhite">হাদিস পড়ুন শিখুন এবং জানুন</h6>
                </div>
                <div className="flex items-center justify-end md-max:gap-4 lg-min:gap-20 2xl-min:gap-5"></div>
            </div>
            <SearchSection />
        </div>
    );
};

export default Header;