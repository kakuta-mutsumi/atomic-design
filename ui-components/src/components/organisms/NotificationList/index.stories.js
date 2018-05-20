import React from 'react';
import { action } from '@storybook/addon-actions';
import NotificationList from './index.js';

const notifications = [{
    id:0,
    thumbnail: '/mock/images/192/108/img01.jpg',
    title: 'コンポーネント指向で UI を設計しよう！第1話',
    channnelName: 'UI チャンネル',
    startAt: 1507032000000,
    endAt: 150703560000,
},{
    id:1,
    thumbnail: '/mock/images/192/108/img02.jpg',
    title: 'コンポーネント指向で UI を設計しよう！第2話',
    channnelName: 'UI チャンネル',
    startAt: 1507032000000,
    endAt: 150703560000,
},{
    id:2,
    thumbnail: '/mock/images/192/108/img01.jpg',
    title: 'コンポーネント指向で UI を設計しよう！第1話',
    channnelName: 'UI チャンネル',
    startAt: 1507032000000,
    endAt: 150703560000,
},{
    id:3,
    thumbnail: '/mock/images/192/108/img02.jpg',
    title: 'コンポーネント指向で UI を設計しよう！第2話',
    channnelName: 'UI チャンネル',
    startAt: 1507032000000,
    endAt: 150703560000,
}];

export default stories => stories
    .add('デフォルト',() => (
        <NotificationList programs={ notifications } onClickDelete={ action('削除ボタンがクリックされました') }/>
    ));