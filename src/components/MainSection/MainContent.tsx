import ContentTabSection from "./ContentTabSection";


const MainContent = () => {
    return (
        <div className="xss:max-w-full xss:left-0 xs:left-0 sm:left-0 md:rounded-none md:left-0 fixed right-0 left-24 h-full items-center bg-hadith-body-grey-bg dark:bg-hadith-dark-bg justify-center lg-min:rounded-tl-3xl dark:lg-min:rounded-tl-3xl ">
            <div className="px-5 md-max:px-3 md:pb-20 lg:pb-24 md-max:overflow-y-auto md-max:h-screen">
                <div className="grid gap-4 xl-min:gap-6 py-5 xss:pt-24 xss:pb-9 xs:pb-6 sm:col-start-1 sm-max:pt-[5rem] sm:pb-7 md:col-start-1 md:pb-6 md:pt-20 lg:grid-cols-1 xl:grid-cols-[350px,1fr] 2xl-min:grid-cols-[350px,1fr,335px] ">
                    <ContentTabSection />
                </div>
            </div>
        </div>
    );
};

export default MainContent;