import { useIntl, MessageDescriptor } from "react-intl";
import { dir } from "@app/helpers/i18n";

type MessageFormatPrimitiveValue = string | number | boolean | null | undefined;

type MessageFormatValues = Record<
  string,
  MessageFormatPrimitiveValue | React.ReactElement
>;

const useAppLocale = () => {
  const intl = useIntl();

  const t = (key: string, args?: MessageFormatValues) =>
    intl.formatMessage({ id: key }, args);

  const isRTL = dir(intl.locale) == "rtl";

  return { t, isRTL, locale: intl.locale };
};

export default useAppLocale;
