import React from 'react';
import { action } from '@storybook/addon-actions';
import { TrashCanIcon, ChervronRightIcon, SearchIcon, SettingsIcon } from './index.js'

export default stories => stories
    .add('TrashCanIcon', () => <TrashCanIcon />)
    .add('ChervronRightIcon', () => <ChervronRightIcon />)
    .add('SearchIcon', () => <SearchIcon />)
    .add('SettingsIcon', () => <SettingsIcon />)
    .add('クリッカブル', () => <TrashCanIcon onClick={ action('アイコンがクリックされました') }/>);