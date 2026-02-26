import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { ComponentType } from "react";
import { Controller } from "react-hook-form";
import type {
    Control,
    RegisterOptions,
    FieldValues,
    Path,
    PathValue,
} from "react-hook-form";

interface InputComponentProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    rules?:
        | Omit<
        RegisterOptions<T, Path<T>>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
        | undefined;
    label?: string;
    type?: string;
    inputClassName?: string;
    icon?: ComponentType<{ className?: string }>;
    isReadOnly?: boolean;
    iconClassName?: string;
    id?: string;
    value?: string;
    placeholder?: string;
    maxLength?: number;
    numberOnly?: boolean;
    phoneNumber?: boolean;
    radius?: "sm" | "md" | "lg" | "xl" | "full" | "none";
}

const Input = <T extends FieldValues>({
                                          name,
                                          control,
                                          rules,
                                          label,
                                          type = "text",
                                          inputClassName = "",
                                          icon: Icon,
                                          isReadOnly = false,
                                          iconClassName = "absolute right-3 top-4 text-inputPlaceholder text-xl",
                                          id,
                                          maxLength,
                                          value,
                                          placeholder,
                                          phoneNumber = false,
                                          radius = "md",
                                          numberOnly = false,
                                      }: InputComponentProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const isPasswordField = type === "password";

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    const getRadius = (radius: "none" | "sm" | "md" | "lg" | "xl" | "full") => {
        const radiusMap = {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full",
        };
        return radiusMap[radius] || radiusMap.md;
    };

    return (
        <div className="relative flex flex-col gap-1">
            <Controller
                control={control}
                defaultValue={(value || "") as PathValue<T, Path<T>>}
                name={name}
                render={({
                             field: { onChange, onBlur, value: fieldValue, ref },
                             fieldState: { error },
                         }) => (
                    <>
                        <div className="relative">
                            <input
                                ref={ref}
                                style={{ outline: "none", boxShadow: "none" }}
                                className={`border px-4 pt-6 w-full peer placeholder-transparent outline-none focus:outline-none transition-all duration-200 caret-inputCaretColor ${getRadius(
                                    radius
                                )} ${inputClassName} ${
                                    isReadOnly ? "bg-inputDisabledColor" : "bg-inputBackground"
                                } ${
                                    error
                                        ? "border-inputErrorBorderColor focus:border-inputErrorFocusColor focus:ring-inputErrorFocusColor text-inputErrorTextColor"
                                        : "border-inputBorderColor focus:border-inputFocusBorderColor text-inputText"
                                } ${
                                    isFocused ? "border-2" : ""
                                } hover:bg-inputHoverBackgroundColor`}
                                id={id || name}
                                placeholder={placeholder || label || ""}
                                readOnly={isReadOnly}
                                maxLength={maxLength}
                                type={isPasswordField && showPassword ? "text" : type}
                                value={fieldValue}
                                onBlur={() => {
                                    setIsFocused(false);
                                    onBlur();
                                }}
                                onFocus={() => setIsFocused(true)}
                                onChange={(e) => {
                                    let input = e.target.value;

                                    if (numberOnly) {
                                        input = input.replace(/[^0-9*]/g, "");
                                    }

                                    if (phoneNumber) {
                                        const filteredValue = input.replace(/[^0-9*]/g, "");

                                        if (filteredValue[0] === "9") {
                                            input = filteredValue;
                                        } else {
                                            input = "";
                                        }
                                        if(filteredValue?.length >10){
                                            input =input.slice(0,10)
                                        }
                                    }
                                    onChange(input);
                                }}
                            />

                            {label && (
                                <label
                                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                                        fieldValue || isFocused ? "top-1 text-xl" : "top-4 text-sm"
                                    } ${
                                        error
                                            ? "text-inputErrorTextColor"
                                            : fieldValue || isFocused
                                                ? "text-inputText"
                                                : "text-inputPlaceholder"
                                    }`}
                                    htmlFor={id || name}>
                                    {label}
                                </label>
                            )}
                        </div>
                        {error && (
                            <p className="mt-1 text-sm text-red-500 font-medium">
                                {error.message}
                            </p>
                        )}
                    </>
                )}
                rules={rules}
            />

            {isPasswordField && (
                <button
                    className="absolute right-3 top-4 text-inputPlaceholder text-xl z-10"
                    type="button"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <Eye /> : <EyeOff />}
                </button>
            )}

            {Icon && !isPasswordField && <Icon className={iconClassName} />}
        </div>
    );
};

export default Input;
