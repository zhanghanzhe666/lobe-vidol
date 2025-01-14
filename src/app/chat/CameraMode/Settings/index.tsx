'use client';

import { ActionIcon, DraggablePanel, TabsNav } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { rgba } from 'polished';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import SkeletonList from '@/components/SkeletonList';
import { CHAT_HEADER_HEIGHT, CHAT_INFO_MAX_WIDTH, CHAT_INFO_WIDTH } from '@/constants/token';
import { useGlobalStore } from '@/store/global';

import { Tab } from './type';

const Loading = () => (
  <div style={{ padding: '16px 0' }}>
    <SkeletonList avatar count={8} />
  </div>
);

const BackGround = dynamic(() => import('./BackGroundList'), {
  ssr: false,
  loading: Loading,
});

const DanceList = dynamic(() => import('./DanceList'), {
  ssr: false,
  loading: Loading,
});

const MotionList = dynamic(() => import('./MotionList'), {
  ssr: false,
  loading: Loading,
});

const PostureList = dynamic(() => import('./PostureList'), {
  ssr: false,
  loading: Loading,
});
const StageList = dynamic(() => import('./StageList'), {
  ssr: false,
  loading: Loading,
});

const useStyles = createStyles(({ css, token }) => ({
  content: css`
    position: relative;

    display: flex;
    flex-direction: column;

    background-color: ${rgba(token.colorBgLayout, 0.8)};
    backdrop-filter: saturate(180%) blur(8px);
  `,
  header: css`
    height: ${CHAT_HEADER_HEIGHT}px;
    border-bottom: 1px solid ${token.colorBorder};
  `,
  player: css`
    min-width: 480px;
  `,
  closeIcon: css`
    cursor: pointer;
    margin-right: 12px;
    color: ${token.colorTextSecondary};

    &:hover {
      color: ${token.colorText};
    }
  `,
}));

export default () => {
  const [showChatSidebar, setChatSidebar] = useGlobalStore((s) => [
    s.showChatSidebar,
    s.setChatSidebar,
  ]);

  const [tab, setTab] = useState<Tab>(Tab.DanceList);
  const { t } = useTranslation('chat');

  const { styles } = useStyles();

  return (
    <DraggablePanel
      classNames={{ content: styles.content }}
      minWidth={CHAT_INFO_WIDTH}
      maxWidth={CHAT_INFO_MAX_WIDTH}
      mode={'float'}
      onExpandChange={(expand) => {
        setChatSidebar(expand);
      }}
      expand={showChatSidebar}
      placement={'right'}
    >
      <Flexbox justify={'space-between'} horizontal align={'center'} className={styles.header}>
        <TabsNav
          variant={'compact'}
          activeKey={tab}
          tabBarExtraContent={{
            left: (
              <ActionIcon
                icon={X}
                onClick={() => {
                  setChatSidebar(false);
                }}
                style={{ marginLeft: 12 }}
              />
            ),
          }}
          items={[
            {
              label: t('info.dance'),
              key: Tab.DanceList,
            },
            {
              label: t('info.motions'),
              key: Tab.Motions,
            },
            {
              label: t('info.posture'),
              key: Tab.Posture,
            },
            {
              label: t('info.background'),
              key: Tab.Background,
            },
            {
              label: t('info.stage'),
              key: Tab.Stage,
            },
          ]}
          onChange={(key) => {
            setTab(key as Tab);
          }}
        />
      </Flexbox>
      <Flexbox height={`calc(100vh - ${CHAT_HEADER_HEIGHT}px)`}>
        {tab === Tab.DanceList && <DanceList />}
        {tab === Tab.Motions && <MotionList />}
        {tab === Tab.Posture && <PostureList />}
        {tab === Tab.Background && <BackGround />}
        {tab === Tab.Stage && <StageList />}
      </Flexbox>
    </DraggablePanel>
  );
};
