import React from "react";
import { Link as DefaultLink, LinkProps } from "react-router-dom";
import useAppLocale from "@app/hooks/useAppLocale";

function  Link<S = unknown>(props: LinkProps<S> & React.RefAttributes<HTMLAnchorElement>): ReturnType<DefaultLink<S>> {
    const {locale} = useAppLocale()
    return <DefaultLink hrefLang={locale} {...props} ></DefaultLink>
}

export default Link;