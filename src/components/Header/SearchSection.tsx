import Image from "next/image";


const SearchSection = () => {
    return (
        <div className="flex items-center justify-end md-max:gap-4 lg-min:gap-20 2xl-min:gap-5">
            <form className="sm-max:w-fit">
                <div className="relative bg-[#ECEEF0] dark:bg-[#383838] md-max:w-10 md-max:h-10 flex items-center justify-center rounded-lg search-input">
                    <div className="md-max:block">
                        <svg className="fill-[#5C5C5C] dark:fill-white lg-min:absolute left-4 top-[1.1rem]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8174 13.9331L11.0867 10.2025C12.1034 8.95911 12.6032 7.37254 12.4829 5.77096C12.3625 4.16938 11.6312 2.67532 10.4402 1.59781C9.2492 0.520305 7.68959 -0.0582065 6.084 -0.0180617C4.47841 0.0220832 2.94966 0.677813 1.81398 1.81349C0.678301 2.94918 0.0225715 4.47792 -0.0175734 6.08351C-0.0577183 7.68911 0.520793 9.24871 1.5983 10.4397C2.67581 11.6307 4.16987 12.3621 5.77145 12.4824C7.37303 12.6027 8.9596 12.1029 10.203 11.0862L13.9336 14.8169C14.0515 14.9307 14.2094 14.9937 14.3732 14.9923C14.5371 14.9909 14.6939 14.9251 14.8097 14.8092C14.9256 14.6934 14.9913 14.5366 14.9928 14.3727C14.9942 14.2089 14.9312 14.051 14.8174 13.9331ZM6.25047 11.25C5.26157 11.25 4.29487 10.9567 3.47262 10.4073C2.65038 9.85793 2.00951 9.07703 1.63108 8.1634C1.25264 7.24977 1.15362 6.24444 1.34655 5.27453C1.53947 4.30463 2.01568 3.41371 2.71494 2.71445C3.4142 2.01519 4.30512 1.53899 5.27502 1.34606C6.24493 1.15313 7.25026 1.25215 8.16389 1.63059C9.07752 2.00903 9.85842 2.64989 10.4078 3.47213C10.9572 4.29438 11.2505 5.26108 11.2505 6.24999C11.249 7.57561 10.7217 8.84652 9.78436 9.78388C8.847 10.7212 7.5761 11.2485 6.25047 11.25Z"></path></svg>
                    </div>
                    <input type="text" id="search_box" placeholder="Search Hadith" className="md-max:hidden border-[#DEE1E5] dark:bg-hadith-dark-card text-hadith-offblack border-2 dark:border-dark-cat-border p-3 rounded-lg focus:outline-0 focus:text-black dark:text-hadith-deepoffwhite pl-10 pr-10" value="" />
                </div>
                <main className="fixed md-max:flex md-max:items-center md-max:justify-center overflow-hidden z-[51] bg-black bg-opacity-50 inset-0 transform lg-min:hidden 
      transition-all delay-500 opacity-0 
          -translate-y-full">
                    <section className="w-full md:w-8/12 top-0 p-4 absolute h-fit  delay-400 duration-500 transform -translate-y-full">
                        <article className="bg-white px-5 pt-6 pb-2 dark:bg-hadith-dark-card rounded-xl relative w-full flex flex-col h-full search-input-mbl">
                            <input className="rounded-xl pl-6 pr-36 py-5 text-black bg-gray-100 dark:bg-darkchapter-list-hover dark:text-hadith-deepoffwhite md-max:py-3 w-full focus:outline-none focus:appearance-none xss:placeholder:text-sm 
    xs:placeholder:text-sm xs:pr-20 placeholder: placeholder:leading-4 dark:placeholder:text-dark-text 
    dark:placeholder:opacity-70" type="text" placeholder="Search Hadith" id="search_box" value="" />
                            <div className="h-10"></div>
                            <div className="advance-scrl bg-white w-full dark:bg-hadith-dark-card relative rounded-xl h-full -top-4 block ">
                                <div className="flex gap-4 lg-max:flex-col">

                                    <div className="flex flex-col w-full">
                                        <h4 className="style-Kalpurush text-base text-offgrey-text-color dark:text-hadith-deepoffwhite mb-4">হাদিসের বই সিলেক্ট করুন</h4>
                                        <div className="w-full md-max:w-full">
                                            <div className="relative">
                                                <div className="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg">

                                                    <div className="px-4 py-3 flex items-center justify-between cursor-pointer">
                                                        <div className=" text-sm text-black dark:text-hadith-deepoffwhite"><div><Image width={500} height={500} className="hidden" src="/assets/leftbar/fill/hover/book.svg" alt=""></Image><p className="style-Kalpurush">সকল বই</p></div>
                                                        </div>
                                                        <Image width={500} height={500} className="dark:hidden" src="/assets/sidebar/downarrow.svg" alt=""></Image>
                                                        <Image width={500} height={500} className="dark:block hidden" src="/assets/sidebar/downarrow-dark.svg" alt=""></Image>
                                                    </div>
                                                </div>
                                                <div className="hidden absolute  bg-white dark:bg-darkchapter-list-hover rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10"><div className="cursor-pointer text-[15px] flex flex-col px-2 pb-14 drop-scrl h-[calc(30vh)]"></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <h4 className="style-Kalpurush text-base text-offgrey-text-color dark:text-hadith-deepoffwhite mb-4">হাদিসের অধ্যায় সিলেক্ট করুন</h4><div className="w-full lg-min:block "><div className="relative"><div className="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg"><div className="px-4 py-3 flex items-center justify-between cursor-pointer"><div className=" text-sm text-black dark:text-hadith-deepoffwhite"><div><Image width={500} height={500} className="hidden" src="/assets/leftbar/fill/hover/book.svg" alt=""></Image><p className="style-Kalpurush">সকল অধ্যায়</p></div></div><Image width={500} height={500} className="dark:hidden" src="/assets/sidebar/downarrow.svg" alt=""></Image><Image width={500} height={500} className="dark:block hidden" src="/assets/sidebar/downarrow-dark.svg" alt=""></Image></div></div><div className="hidden absolute  bg-white dark:bg-darkchapter-list-hover rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10"><div className="cursor-pointer text-[15px] flex flex-col px-2 pb-14 drop-scrl min-h-fit max-h-[calc(30vh)]"><div className="style-Kalpurush-webKit hover:bg-[#F8F8F9] dark:hover:bg-hadith-dark-card text-offgrey-text-color dark:text-hadith-deepoffwhite px-4 py-2 rounded-md">প্রথমে বই সিলেক্ট করুন</div></div></div></div></div></div>
                                </div>
                                <div className="flex flex-row gap-5 mt-4 md-max:flex-row md-max:my-8 md-max:gap-5 md-max:w-full">
                                    <div className="text-sm text-offgrey-text-color dark:text-hadith-deepoffwhite"><div className=" flex text-sm py-1 justify-between text-title dark:text-hadith-deepoffwhite cursor-pointer"><div className="flex items-center gap-x-4 w-full"><span className="w-4 h-4 basis-4  flex items-center justify-center rounded-md border-[2px] dark:border-[#585858] transition duration-150 delay-75"></span><p className="style-Kalpurush">আংশিক মিল</p></div></div></div><div className="text-sm text-offgrey-text-color dark:text-hadith-deepoffwhite"><div className=" flex text-sm py-1 justify-between text-title dark:text-hadith-deepoffwhite cursor-pointer"><div className="flex items-center gap-x-4 w-full"><span className="w-4 h-4 basis-4  flex items-center justify-center rounded-md border-[2px] dark:border-[#585858] transition duration-150 delay-75"></span><p className="style-Kalpurush">হুবুহু মিল</p></div></div></div>
                                </div>
                                <div className="mt-4 flex justify-end gap-x-4 md-max:justify-start md-max:w-full">
                                    <button type="button" className="py-1.5 px-5 rounded-md bg-[#e2e2e2] dark:bg-[#383838] md-max:py-3 md-max:w-full font-medium text-sm leading-5 text-offgrey-text-color dark:text-white">বাতিল</button><button type="submit" className="py-1.5 px-5 rounded-md bg-hadith-button-background md-max:py-3 md-max:w-full font-medium text-sm leading-5 text-white">সার্চ করুন</button>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section></section>
                </main>
            </form>
            <div className="w-fit fixed bottom-1/2 2xl-min:ml-12 xss:hidden xs:hidden sm:hidden md:hidden lg:bottom-5 xl-max:left-4 xl-max:bottom-5 2xl-min:flex 2xl-min:relative 2xl-min:top-0 ">
                <div className="bg-hadith-button-background cursor-pointer px-5 py-3 text-white rounded-lg xs:p-4 sm:p-4 md-min:gap-2 lg-min:flex lg-min:items-center lg-min:justify-center lg-min:relative "><p className="webkit text-[1.05rem] leading-[1] lg:hidden xl:hidden">সাপোর্ট করুন</p><Image width={500} height={500} src="/assets/others/helping-hand.svg" alt=""></Image></div>
            </div>
            <div className="2xl-min:hidden block cursor-pointer">
                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                    <svg className="fill-white" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2693 12.3894C21.818 10.5369 19.1817 10.5369 18.7304 12.3894C18.6631 12.6678 18.5309 12.9263 18.3448 13.144C18.1586 13.3616 17.9237 13.5322 17.6591 13.642C17.3946 13.7517 17.1078 13.7974 16.8223 13.7753C16.5367 13.7533 16.2604 13.6642 16.0158 13.5152C14.3865 12.5224 12.5221 14.3868 13.5149 16.0161C14.1561 17.0682 13.5873 18.441 12.3903 18.7319C10.5366 19.182 10.5366 21.8195 12.3903 22.2684C12.6687 22.3358 12.9273 22.4681 13.145 22.6544C13.3626 22.8407 13.5332 23.0758 13.6428 23.3405C13.7524 23.6052 13.798 23.892 13.7757 24.1777C13.7535 24.4633 13.6641 24.7397 13.5149 24.9842C12.5221 26.6135 14.3865 28.4779 16.0158 27.4851C16.2603 27.3359 16.5367 27.2465 16.8223 27.2243C17.108 27.202 17.3948 27.2476 17.6595 27.3572C17.9242 27.4668 18.1593 27.6374 18.3456 27.855C18.5319 28.0727 18.6642 28.3313 18.7316 28.6097C19.1817 30.4634 21.8192 30.4634 22.2681 28.6097C22.3358 28.3314 22.4681 28.073 22.6545 27.8555C22.8408 27.638 23.0759 27.4675 23.3405 27.358C23.6051 27.2484 23.8919 27.2028 24.1774 27.2249C24.463 27.247 24.7393 27.3361 24.9839 27.4851C26.6132 28.4779 28.4776 26.6135 27.4848 24.9842C27.3359 24.7396 27.2467 24.4633 27.2246 24.1777C27.2025 23.8922 27.2481 23.6054 27.3577 23.3408C27.4672 23.0762 27.6377 22.8411 27.8552 22.6548C28.0727 22.4684 28.3311 22.336 28.6094 22.2684C30.4631 21.8183 30.4631 19.1808 28.6094 18.7319C28.331 18.6645 28.0724 18.5322 27.8547 18.3459C27.6371 18.1596 27.4665 17.9245 27.3569 17.6598C27.2473 17.3951 27.2017 17.1083 27.224 16.8226C27.2462 16.537 27.3356 16.2606 27.4848 16.0161C28.4776 14.3868 26.6132 12.5224 24.9839 13.5152C24.7394 13.6644 24.463 13.7538 24.1774 13.776C23.8917 13.7983 23.6049 13.7527 23.3402 13.6431C23.0755 13.5335 22.8404 13.3629 22.6541 13.1453C22.4678 12.9276 22.3355 12.669 22.2681 12.3906L22.2693 12.3894ZM20.4999 24.0627C21.4447 24.0627 22.3508 23.6874 23.019 23.0193C23.6871 22.3511 24.0624 21.445 24.0624 20.5001C24.0624 19.5553 23.6871 18.6492 23.019 17.981C22.3508 17.3129 21.4447 16.9376 20.4999 16.9376C19.555 16.9376 18.6489 17.3129 17.9807 17.981C17.3126 18.6492 16.9373 19.5553 16.9373 20.5001C16.9373 21.445 17.3126 22.3511 17.9807 23.0193C18.6489 23.6874 19.555 24.0627 20.4999 24.0627V24.0627Z"></path></svg>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;