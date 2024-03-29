import { countryRateType } from '@/lib/interfaces';
import { getLocale } from './locale';

interface IMoneyVO {
    format(value: string | number, currency?: countryRateType): string;
}

interface IMoneyVOOptions {
    locale: string;
    currency: countryRateType;
    fallback?: string;
}

class MoneyVO implements IMoneyVO {
    readonly locale: string;
    readonly currency: countryRateType;
    readonly fallback: string;

    constructor({ locale, currency, fallback }: IMoneyVOOptions) {
        this.locale = locale;
        this.currency = currency;
        this.fallback = fallback ?? '---';
    }

    public format(value: number | string, currency = this.currency): string {
        if (!this.isValid(value)) return this.fallback;

        return new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            currencyDisplay: 'symbol',
        }).format(Number(value));
    }

    private isValid(value: number | string): boolean {
        if (!value || Number.isNaN(value) || Number.isNaN(Number(value))) {
            return false;
        }

        return true;
    }
}

const locale = navigator.language;
const defaultCurrency = getLocale().defaultCurrency as countryRateType;

export const moneyVO = new MoneyVO({
    locale,
    currency: defaultCurrency,
});

export default MoneyVO;
