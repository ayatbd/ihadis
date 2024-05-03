import Image from "next/image"

const MainMenu = () => {
    return (
        <div className="md-max:py-3 fixed bottom-0 w-full bg-white dark:bg-hadith-dark-card py-8 lg-min:max-w-[96px] lg-min:h-full lg-min:static md-max:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
            <div className="grid xss:grid-cols-5 xs:grid-cols-5 sm:grid-cols-5 md:grid-rows-1 md:grid-cols-5 lg-min:grid-rows-[1fr,56px,56px,56px,56px,56px,56px,1fr] place-content-center place-items-center my-auto h-full gap-[4.5%]">
                <Image width={500} height={500} className=" p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-2 col-start-1" src="/assets/leftbar/home.svg" alt="">
                </Image>
                <Image width={500} height={500} className="bg-hadith-button-background p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-3 " src="/assets/leftbar/fill/active/book.svg" alt=""></Image>
                <Image width={500} height={500} className="hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-4" src="/assets/leftbar/subject.svg" alt=""></Image>
                <Image width={500} height={500} className="hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover  md-max:p-2 md-max:w-9 p-4 rounded-lg cursor-pointer md-max:block lg-min:row-start-5 " src="/assets/leftbar/bookmark.svg" alt=""></Image>
                <div className="lg-min:row-start-6 cursor-pointer md-max:hidden lg-min:block">
                    <Image width={500} height={500} className="" src="/assets/leftbar/others.svg" alt=""></Image>
                </div>
                <div className="fixed hidden  bottom-[100px] z-10 py-4 rounded-xl bg-white dark:bg-hadith-dark-card h-fit lg-min:block lg-min:left-28 lg-min:w-80 md-min:-translate-x-[200%] transition duration-500">
                    <div className="grid gap-6 pt-2.5 pb-4 lg-min:gap-0">
                        <div className="bg-white dark:bg-hadith-dark-card rounded-xl pb-2 ">
                            <h2 className="px-6 py-4 text-lg lg-min:hidden md-max:block">কুইক মেনু</h2>
                            <div className="flex flex-col py-1">
                                <div className="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                                    <Image width={500} height={500} src="/assets/sidebar/left/blog.svg" alt=""></Image>
                                    <p>প্রাইভেসি</p>
                                </div>
                                <div className="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                                    <Image width={500} height={500} src="/assets/sidebar/left/tick.svg" alt=""></Image>
                                    <p>তাহকিক</p>
                                </div>
                                <div className="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                                    <Image width={500} height={500} src="/assets/sidebar/left/man.svg" alt=""></Image>
                                    <p>লেখক সম্পর্কে</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-hadith-dark-card rounded-xl pb-4 ">
                            <div className="px-6 py-3">
                                <div className="style-Kalpurush border-b dark:text-dark-text border-solid dark:border-none">ডাউনলোড</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="style-Kalpurush-dropdown flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                                    <Image width={500} height={500} src="/assets/sidebar/left/project.svg" alt=""></Image>
                                    <p>আমাদের অন্যান্য প্রজেক্টস</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-hadith-dark-card rounded-xl pb-4 ">
                            <div className="px-6 py-3 style-Kalpurush">
                                <div className="style-Kalpurush border-b border-solid dark:border-none dark:text-dark-text">সাপোর্ট করুন অথবা যোগাযোগ করুন</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="style-Kalpurush-dropdown flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                                    <Image width={500} height={500} src="/assets/sidebar/left/help-hand.svg" alt=""></Image>
                                    <p>সাপোর্ট করুন</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg-min:row-start-7 cursor-pointer">
                    <Image width={500} height={500} className=" md-max:p-2 md-max:w-9  p-4 " src="/assets/leftbar/goto.svg" alt=""></Image>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;