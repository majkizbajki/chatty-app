import { useTranslation } from 'react-i18next';
import validator from 'validator';
import { z } from 'zod';

export const useRegisterSchema = () => {
    const { t } = useTranslation();
    const registerSchema = z
        .object({
            email: z
                .string()
                .min(1, t('errors.forms.auth.email_required'))
                .email({ message: t('errors.forms.auth.wrong_email_format') }),

            firstName: z.string().min(1, t('errors.forms.auth.register.first_name_required')),
            lastName: z.string().min(1, t('errors.forms.auth.register.last_name_required')),
            password: z
                .string()
                .min(1, t('errors.forms.auth.password_required'))
                .refine(
                    password => validator.isStrongPassword(password, { minLength: 8 }),
                    t('errors.forms.auth.register.weak_password')
                ),
            passwordConfirmation: z.string().min(1, t('errors.forms.auth.register.password_confirmation_required'))
        })
        .refine(({ password, passwordConfirmation }) => passwordConfirmation === password, {
            message: t('errors.forms.auth.register.wrong_password_confirmation'),
            path: ['passwordConfirmation']
        });
    return registerSchema;
};

export type RegisterSchemaType = z.infer<ReturnType<typeof useRegisterSchema>>;
