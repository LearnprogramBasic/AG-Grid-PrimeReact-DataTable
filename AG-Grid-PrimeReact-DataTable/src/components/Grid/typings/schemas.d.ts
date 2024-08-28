import { z } from 'zod';
export declare const CheckboxSchema: z.ZodObject<{
    label: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    checked: z.ZodBoolean;
    indeterminate: z.ZodOptional<z.ZodBoolean>;
    disabled: z.ZodOptional<z.ZodBoolean>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    checked: boolean;
    value?: string | undefined;
    label?: string | undefined;
    name?: string | undefined;
    indeterminate?: boolean | undefined;
    disabled?: boolean | undefined;
}, {
    checked: boolean;
    value?: string | undefined;
    label?: string | undefined;
    name?: string | undefined;
    indeterminate?: boolean | undefined;
    disabled?: boolean | undefined;
}>;
export declare const CheckboxAtomPropsSchema: z.ZodObject<{
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        checked: z.ZodBoolean;
        indeterminate: z.ZodOptional<z.ZodBoolean>;
        disabled: z.ZodOptional<z.ZodBoolean>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        checked: boolean;
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        indeterminate?: boolean | undefined;
        disabled?: boolean | undefined;
    }, {
        checked: boolean;
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        indeterminate?: boolean | undefined;
        disabled?: boolean | undefined;
    }>, "many">;
    onChange: z.ZodFunction<z.ZodTuple<[z.ZodArray<z.ZodObject<{
        label: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        checked: z.ZodBoolean;
        indeterminate: z.ZodOptional<z.ZodBoolean>;
        disabled: z.ZodOptional<z.ZodBoolean>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        checked: boolean;
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        indeterminate?: boolean | undefined;
        disabled?: boolean | undefined;
    }, {
        checked: boolean;
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        indeterminate?: boolean | undefined;
        disabled?: boolean | undefined;
    }>, "many">], z.ZodUnknown>, z.ZodVoid>;
}, "strip", z.ZodTypeAny, {
    options: {
        checked: boolean;
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        indeterminate?: boolean | undefined;
        disabled?: boolean | undefined;
    }[];
    onChange: (args_0: {
        checked: boolean;
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        indeterminate?: boolean | undefined;
        disabled?: boolean | undefined;
    }[], ...args_1: unknown[]) => void;
}, {
    options: {
        checked: boolean;
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        indeterminate?: boolean | undefined;
        disabled?: boolean | undefined;
    }[];
    onChange: (args_0: {
        checked: boolean;
        value?: string | undefined;
        label?: string | undefined;
        name?: string | undefined;
        indeterminate?: boolean | undefined;
        disabled?: boolean | undefined;
    }[], ...args_1: unknown[]) => void;
}>;
export declare const TrashIconCellRendererPropsSchema: z.ZodObject<{
    node: z.ZodAny;
    api: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    api?: any;
    node?: any;
}, {
    api?: any;
    node?: any;
}>;
export declare const ButtonIconAtomPropsSchema: z.ZodObject<{
    icon: z.ZodString;
    size: z.ZodOptional<z.ZodEnum<["xs", "s", "m", "l", "xl"]>>;
    color: z.ZodOptional<z.ZodEnum<["primary-blue", "primary-green", "secondary", "tertiary"]>>;
    onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
}, "strip", z.ZodTypeAny, {
    icon: string;
    color?: "primary-blue" | "primary-green" | "secondary" | "tertiary" | undefined;
    onClick?: ((...args: unknown[]) => void) | undefined;
    size?: "l" | "s" | "m" | "xl" | "xs" | undefined;
}, {
    icon: string;
    color?: "primary-blue" | "primary-green" | "secondary" | "tertiary" | undefined;
    onClick?: ((...args: unknown[]) => void) | undefined;
    size?: "l" | "s" | "m" | "xl" | "xs" | undefined;
}>;
export declare const ManagementButtonIconMoleculePropsSchema: z.ZodObject<{
    typeIcon: z.ZodEnum<["ellipsis", "externalLink"]>;
    modeBadge: z.ZodOptional<z.ZodBoolean>;
    statusModeBadge: z.ZodOptional<z.ZodEnum<["error", "success", "warning"]>>;
    messageTooltipEllipsis: z.ZodOptional<z.ZodString>;
    ariaLabel: z.ZodOptional<z.ZodString>;
    showTooltip: z.ZodBoolean;
    onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
}, "strip", z.ZodTypeAny, {
    typeIcon: "ellipsis" | "externalLink";
    showTooltip: boolean;
    onClick?: ((...args: unknown[]) => void) | undefined;
    modeBadge?: boolean | undefined;
    statusModeBadge?: "error" | "success" | "warning" | undefined;
    messageTooltipEllipsis?: string | undefined;
    ariaLabel?: string | undefined;
}, {
    typeIcon: "ellipsis" | "externalLink";
    showTooltip: boolean;
    onClick?: ((...args: unknown[]) => void) | undefined;
    modeBadge?: boolean | undefined;
    statusModeBadge?: "error" | "success" | "warning" | undefined;
    messageTooltipEllipsis?: string | undefined;
    ariaLabel?: string | undefined;
}>;
export declare const DropdownItemPropsSchema: z.ZodObject<{
    label: z.ZodString;
    price: z.ZodString;
    onClick: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
    style: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    onClick: (...args: unknown[]) => void;
    price: string;
    style?: Record<string, unknown> | undefined;
}, {
    label: string;
    onClick: (...args: unknown[]) => void;
    price: string;
    style?: Record<string, unknown> | undefined;
}>;
export declare const DropdownListPropsSchema: z.ZodObject<{
    onSelectPrice: z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>;
    listTitle: z.ZodOptional<z.ZodString>;
    priceTitle: z.ZodOptional<z.ZodString>;
    style: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    onSelectPrice: (args_0: string, ...args_1: unknown[]) => void;
    style?: Record<string, unknown> | undefined;
    listTitle?: string | undefined;
    priceTitle?: string | undefined;
}, {
    onSelectPrice: (args_0: string, ...args_1: unknown[]) => void;
    style?: Record<string, unknown> | undefined;
    listTitle?: string | undefined;
    priceTitle?: string | undefined;
}>;
export declare const PriceDropdownPropsSchema: z.ZodObject<{
    icon: z.ZodOptional<z.ZodString>;
    isDropdownVisible: z.ZodOptional<z.ZodBoolean>;
    style: z.ZodOptional<z.ZodAny>;
    value: z.ZodString;
    onChange: z.ZodFunction<z.ZodTuple<[z.ZodString], z.ZodUnknown>, z.ZodVoid>;
}, "strip", z.ZodTypeAny, {
    value: string;
    onChange: (args_0: string, ...args_1: unknown[]) => void;
    style?: any;
    icon?: string | undefined;
    isDropdownVisible?: boolean | undefined;
}, {
    value: string;
    onChange: (args_0: string, ...args_1: unknown[]) => void;
    style?: any;
    icon?: string | undefined;
    isDropdownVisible?: boolean | undefined;
}>;
