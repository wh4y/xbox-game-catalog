import React, {FC} from "react";
import Image from "next/image";

const HeaderLogos: FC = () => {
    return (
        <>
            <div className={'md:ml-16 sm:ml-0 border-r-2 pt-1 w-[140px] border-gray-800'}>
                <div className={'mr-3 w-max'}>
                    <Image
                        width={108}
                        height={23}
                        src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
                        alt="logo"
                    />
                </div>
            </div>
            <div className={'ml-4 w-max h-max'}>
                <Image
                    width={70}
                    height={23}
                    src={'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e'}
                />
            </div>
        </>
    );
}

export default HeaderLogos;