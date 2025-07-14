import React from 'react';
import { Path, Control, Controller, FieldValues } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// 1. Define props interface
interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder: string;
    type?: 'text' | 'email' | 'password' | 'file';
}

// 2. Generic functional component
const FormField =
    <T extends FieldValues>({control, name, label, placeholder, type = 'text',}:
                            FormFieldProps<T>) => (


        <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <FormItem>
                <FormLabel className="label">{label}</FormLabel>
                <FormControl>
                    <Input className="input"
                           placeholder={placeholder}
                           type={type}
                           {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormField;
