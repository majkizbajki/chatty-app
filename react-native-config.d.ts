declare module 'react-native-config' {
    export interface NativeConfig {
        API_URL?: string;
        ENCRYPTION_KEY?: string;
        WS_URL?: string;
    }

    export const Config: NativeConfig;
    export default Config;
}
