import { useMutation } from '@apollo/client';
import { Agreement } from '@components/atoms/Agreement';
import { Button } from '@components/atoms/Button';
import { FormInput } from '@components/molecules/FormInput';
import { REGISTER_USER } from '@graphql/mutations/registerUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchemaType, useRegisterSchema } from '@schemas/auth/RegisterSchema';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';

export const RegisterForm = () => {
    const { t } = useTranslation();
    const registerSchema = useRegisterSchema();
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<RegisterSchemaType>({
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordConfirmation: ''
        },
        mode: 'all',
        resolver: zodResolver(registerSchema)
    });
    const [register, { loading }] = useMutation(REGISTER_USER, {
        onCompleted: () => {
            reset();
            Toast.show({
                text1: t('globals.success'),
                text2: t('register.sign_up_success'),
                type: 'info'
            });
        },
        onError: ({ message }) => {
            Toast.show({
                text1: t('errors.error'),
                text2: message,
                type: 'error'
            });
        }
    });

    const onSubmit = (data: RegisterSchemaType) => {
        register({
            variables: data
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <FormInput
                    autoCapitalize='none'
                    controler={control}
                    label={t('register.form.email')}
                    name='email'
                    errorMessage={errors.email?.message}
                    isError={errors.email}
                    keyboardType='email-address'
                />
                <FormInput
                    controler={control}
                    label={t('register.form.first_name')}
                    name='firstName'
                    errorMessage={errors.firstName?.message}
                    isError={errors.firstName}
                />
                <FormInput
                    controler={control}
                    label={t('register.form.last_name')}
                    name='lastName'
                    errorMessage={errors.lastName?.message}
                    isError={errors.lastName}
                />
                <FormInput
                    controler={control}
                    label={t('register.form.password')}
                    name='password'
                    errorMessage={errors.password?.message}
                    isError={errors.password}
                    type='password'
                />
                <FormInput
                    controler={control}
                    label={t('register.form.password_confirmation')}
                    name='passwordConfirmation'
                    errorMessage={errors.passwordConfirmation?.message}
                    isError={errors.passwordConfirmation}
                    type='password'
                />
            </View>
            <Button onPress={handleSubmit(onSubmit)} isLoading={loading}>
                {t('register.sign_up')}
            </Button>
            <Agreement />
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
