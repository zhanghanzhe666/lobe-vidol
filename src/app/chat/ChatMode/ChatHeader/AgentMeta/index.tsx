import { Avatar } from '@lobehub/ui';
import { Space, Typography } from 'antd';
import React from 'react';

import useSessionContext from '@/hooks/useSessionContext';

import ModelSwitchPanel from '../actions/ModelSwitchPanel';
import { useStyles } from './style';

interface AgentMetaProps {
  className?: string;
  style?: React.CSSProperties;
}

export default (props: AgentMetaProps) => {
  const { styles, cx } = useStyles();
  const { style, className } = props;

  const { sessionAgent } = useSessionContext();

  const meta = sessionAgent?.meta;
  const { avatar, name, description } = meta || {};

  return (
    <div className={cx(styles.container, className)} style={style}>
      <Avatar avatar={avatar} size={36} />
      <div className={styles.content}>
        <div className={styles.title}>
          <Space size={4} align={'center'}>
            {name}
            <ModelSwitchPanel />
          </Space>
        </div>
        <Typography.Text className={styles.desc} ellipsis={{ tooltip: true }}>
          {description}
        </Typography.Text>
      </div>
    </div>
  );
};
