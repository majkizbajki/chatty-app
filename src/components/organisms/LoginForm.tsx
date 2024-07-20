import { useMutation } from '@apollo/client';
import { UserRole } from '@appTypes/index';
import { Button } from '@components/atoms/Button';
import { FormInput } from '@components/molecules/FormInput';
import { LOGIN_USER } from '@graphql/mutations/loginUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchemaType, useLoginSchema } from '@schemas/auth/LoginSchema';
import { useAuthStore } from '@store/auth/useAuthStore';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

export const LoginForm = () => {
    const { t } = useTranslation();
    const { login } = useAuthStore();
    const loginSchema = useLoginSchema();
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<LoginSchemaType>({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'all',
        resolver: zodResolver(loginSchema)
    });
    const [mutate, { loading }] = useMutation(LOGIN_USER, {
        onCompleted: ({ loginUser }) => {
            if (loginUser?.token && loginUser?.user) {
                const { token, user } = loginUser;
                login({
                    token,
                    user: {
                        email: user.email ?? '',
                        firstName: user.firstName ?? '',
                        id: user.id ?? '',
                        lastName: user.lastName ?? '',
                        role: (user.role as UserRole) ?? 'user'
                    }
                });
                reset();
            }
        },
        onError: ({ message }) => {
            Toast.show({
                text1: t('errors.error'),
                text2: message,
                type: 'error'
            });
        }
    });

    const onSubmit = (data: LoginSchemaType) => {
        mutate({
            variables: data
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <FormInput
                    autoCapitalize='none'
                    controler={control}
                    label={t('forms.auth.email')}
                    name='email'
                    errorMessage={errors.email?.message}
                    isError={errors.email}
                    keyboardType='email-address'
                />
                <FormInput
                    controler={control}
                    label={t('forms.auth.password')}
                    name='password'
                    errorMessage={errors.password?.message}
                    isError={errors.password}
                    type='password'
                />
            </View>
            <Button onPress={handleSubmit(onSubmit)} isLoading={loading}>
                {t('login.log_in')}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        paddingHorizontal: 8,
        paddingBottom: 24,
        gap: 16
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 8,
        gap: 8
    }
});
