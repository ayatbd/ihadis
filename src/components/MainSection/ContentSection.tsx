import Image from "next/image"


const ContentSection = () => {
    return (
        <div className="xs:col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 lg:w-[101%] xl-min:min-w-[101.5%] sm-max:pb-24 lg-min:pb-12 cat-scrl 3xl:w-full lg-min:h-[calc(100vh_-_80px)]">
            <div className="hidden lg-max:w-full lg-max:block lg-max:col-span-full xss:pt-0 ">
                <div className="flex flex-row justify-between p-4 bg-white dark:bg-hadith-dark-card rounded-2lg items-center cursor-pointer dark:bg-dark-bg xl-min:hidden "><p className="flex gap-x-2 style-Kalpurush text-title font-medium leading-[25px] dark:text-dark-text text-mss "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>সহিহ বুখারী</p></div>
            </div>
            <div className="hidden lg-min:block">
                <div id="bread-crumb" className="h-14 px-5 py-4 gap-2 flex w-full items-center 
    bg-[#FAFBFB] dark:bg-hadith-dark-card rounded-t-xl text-[#667085] 
    dark:text-hadith-deepoffwhite text-sm border-b-2 border-b-[#ECEEF0] 
    dark:border-b-dark-cat-border cursor-pointer
    lg-max:hidden">
                    <div className="flex flex-row">
                        <div>
                            <Image width={500} height={500} className="dark:hidden block" src="/assets/others/bread-crumb-book.svg" alt=""></Image><Image width={500} height={500} className="dark:block hidden" src="/assets/others/bread-crumb-book-dark.svg" alt=""></Image>
                        </div>
                        <div className="flex flex-row">
                            <Image width={500} height={500} className="dark:hidden block" src="/assets/others/forword.svg" alt=""></Image><Image width={500} height={500} className="dark:block hidden" src="/assets/others/forword-dark.svg" alt=""></Image><a href="/bukhari">Bukhari</a>
                        </div>
                        <div className="flex flex-row">
                            <Image width={500} height={500} className="dark:hidden block" src="/assets/others/forword.svg" alt=""></Image><Image width={500} height={500} className="dark:block hidden" src="/assets/others/forword-dark.svg" alt=""></Image><a href="/bukhari/1">1</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;