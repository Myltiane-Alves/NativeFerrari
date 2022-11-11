import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Header } from '../../components/Header';
import { LayoutContext } from '../../contexts/Layout';
import { vars } from '../../values';
import { LayoutProviderProps } from './LayoutProviderProps';

const LayoutScrollView = styled.ScrollView`
    flex: 1;
    position: relative;
`;

const LayoutContent = styled.View`
  margin-top: 69px;
`;

export const Layout = ({ children, header }: LayoutProviderProps) => {
    return ( 
        <LayoutContext.Provider value={{}}>
            <LayoutScrollView>
                <SafeAreaView style={{ backgroundColor: vars.white}}>
                   <LayoutContent>
                     {children}
                    </LayoutContent> 
                </SafeAreaView>
            </LayoutScrollView>
            <StatusBar style="auto" />
            {header !== undefined && header}
        </LayoutContext.Provider>
    )
}