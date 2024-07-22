import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const useLoginSchema = () => {
    const { t } = useTranslation();
    const loginSchema = z.object({
        email: z
            .string()
            .min(1, t('errors.forms.auth.email_required'))
            .email({ message: t('errors.forms.auth.wrong_email_format') }),
        password: z.string().min(1, t('errors.forms.auth.password_required'))
    });
    return loginSchema;
};

export type LoginSchemaType = z.infer<ReturnType<typeof useLoginSchema>>;
