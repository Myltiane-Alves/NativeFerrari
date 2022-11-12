import { StatusBar } from 'expo-status-bar';
import { ReactNode, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
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
    const scrollRef = useRef<ScrollView>(null)
    const toUp = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        })
    }

    return ( 
        <LayoutContext.Provider value={{ toUp }}>
            <LayoutScrollView ref={scrollRef as any}>
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