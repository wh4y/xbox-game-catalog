import {FC} from "react";
import clsx from "clsx";
import Link from "next/link";
// @ts-ignore
import {useRouter} from "../../utils/router";

interface IProps {
    href: string,
    shallow: boolean
}

const AppLink: FC<IProps> = (
    {children, ...props}
) => {

    const {pathname} = useRouter()
    const active = pathname === props.href

    return (
        <Link {...props} shallow><a className={clsx('block p-2', active && 'text-green')}>{children}</a></Link>
    )
}

export default AppLink