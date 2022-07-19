import { StatusBar } from 'expo-status-bar';
import { useCallback, useRef, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
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

export const Layout = ({
  children,
  header,
  onRefresh,
}: LayoutProviderProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  const toUp = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const onRefreshInner = useCallback(() => {
    setRefreshing(true);

    if (typeof onRefresh === 'function') {
      onRefresh(() => {
        setRefreshing(false);
      });
    }
  }, []);

  return (
    <LayoutContext.Provider value={{ toUp }}>
      <LayoutScrollView
        ref={scrollRef as any}
        refreshControl={
          typeof onRefresh === 'function' ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefreshInner}
              progressViewOffset={vars.space * 2}
            />
          ) : undefined
        }
      >
        <SafeAreaView style={{ backgroundColor: vars.white }}>
          <LayoutContent>{children}</LayoutContent>
        </SafeAreaView>
      </LayoutScrollView>
      <StatusBar style="auto" />
      {header !== undefined && header}
    </LayoutContext.Provider>
  );
};
